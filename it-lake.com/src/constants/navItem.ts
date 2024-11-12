export const navItem = {
    explore: "Explore",
    products: "Products",
    about: "About",
  } as const

export const navItemValues: ReadonlyArray<typeof navItem[keyof typeof navItem]> = Object.values(navItem);