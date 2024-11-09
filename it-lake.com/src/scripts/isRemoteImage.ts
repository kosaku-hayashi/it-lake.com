export function isRemoteImage(src: string): boolean {
    if(!src){
        return false;
    }
    const remotePattern = /^(https?:)?\/\//i;
    return remotePattern.test(src);
}