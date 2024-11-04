export const navItem = {
    explore: "Explore",
    products: "Products",
    about: "About",
    links: "Links",
  } as const

export const navItemValues: ReadonlyArray<typeof navItem[keyof typeof navItem]> = Object.values(navItem);