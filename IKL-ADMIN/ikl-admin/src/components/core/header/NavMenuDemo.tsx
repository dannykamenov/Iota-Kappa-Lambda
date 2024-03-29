"use client"

import * as React from "react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/dashboard" className={navigationMenuTriggerStyle()}>
              Dashboard
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/manage-events" className={navigationMenuTriggerStyle()}>
              Manage Events
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/photo-gallery" className={navigationMenuTriggerStyle()}>
              Photo Gallery
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/user-list" className={navigationMenuTriggerStyle()}>
              User List
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
