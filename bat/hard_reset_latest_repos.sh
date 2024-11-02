#!/bin/bash

export LANG=C.UTF-8

if [ -n "$1" ]; then
    REPO_PATH=$1
    echo "Using specified directory as the repository path: $REPO_PATH"
else
    REPO_PATH=$(pwd)
    echo "Using current directory as the repository path: $REPO_PATH"
fi

cd "$REPO_PATH" || { echo "Failed to change directory to $REPO_PATH. Exiting."; exit 1; }

echo "Fetching all branches..."
git fetch --all

if git show-ref --verify --quiet refs/remotes/origin/main; then
    branch_to_use="main"
elif git show-ref --verify --quiet refs/remotes/origin/master; then
    branch_to_use="master"
else
    echo "Neither main nor master branches are available. Exiting."
    exit 1
fi

git checkout $branch_to_use
git reset --hard origin/$branch_to_use
if [ $? -ne 0 ]; then
    echo "An error occurred while resetting the main repository to the latest commit on $branch_to_use."
    read -p "Press enter to continue"
    exit 1
fi

echo "Initializing and updating submodules..."
git submodule update --init --recursive
if [ $? -ne 0 ]; then
    echo "An error occurred during the submodule initialization."
    read -p "Press enter to continue"
    exit 1
fi

echo "Fetching and resetting all submodules to their specific branches..."
git submodule foreach --recursive 'branch=$(git config -f $toplevel/.gitmodules submodule.$name.branch); if [ -z "$branch" ]; then echo "No branch configured for $name, skipping..."; else git fetch --all && git checkout $branch && git reset --hard origin/$branch; if [ $? -ne 0 ]; then echo "Failed to update $name"; exit 1; fi; fi'
if [ $? -ne 0 ]; then
    echo "An error occurred during the submodule update."
    read -p "Press enter to continue"
    exit 1
fi

echo "All repositories have been updated."
read -p "Press enter to continue"