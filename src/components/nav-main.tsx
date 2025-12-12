"use client"

import { ChevronRight } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: React.ElementType | string
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {
    const location = useLocation()

    return (
        <SidebarGroup>
            {/* Label for this group of navigation items */}
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    // Check if the current URL matches the item's URL to set active state
                    const isActive = location.pathname.startsWith(item.url)

                    if (!item.items || item.items.length === 0) {
                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    className="h-10 group-data-[collapsible=icon]:!size-11 group-data-[collapsible=icon]:!p-1 group-data-[collapsible=icon]:justify-center"
                                    isActive={isActive}
                                    asChild
                                >
                                    <NavLink to={item.url}>
                                        {item.icon && (
                                            typeof item.icon === "string" ? (
                                                <img src={item.icon} alt={item.title} className="size-5 group-data-[collapsible=icon]:size-6 object-contain" />
                                            ) : (
                                                <item.icon className="size-5 group-data-[collapsible=icon]:size-6" />
                                            )
                                        )}
                                        <span className="text-base group-data-[collapsible=icon]:hidden">{item.title}</span>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                    }

                    return (
                        // Collapsible: Wraps the item to allow efficient expanding/collapsing of sub-menus
                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={isActive || item.isActive}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                {/* CollapsibleTrigger: The button that toggles the sub-menu or acts as the link */}
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton
                                        tooltip={item.title}
                                        className="h-10 group-data-[collapsible=icon]:!size-11 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:justify-center"
                                        isActive={isActive}
                                        asChild
                                    >
                                        {/* NavLink: React Router component for client-side navigation */}
                                        <NavLink to={item.url}>
                                            {/* Icon Logic: Renders either an <img> for PNG/SVG paths or a pure Component icon */}
                                            {/* THIS is where the icon is rendered. To change strict sizing for ALL states, edit utility classes here. */}
                                            {item.icon && (
                                                typeof item.icon === "string" ? (
                                                    <img src={item.icon} alt={item.title} className="size-5 group-data-[collapsible=icon]:size-6 object-contain" />
                                                ) : (
                                                    <item.icon className="size-5 group-data-[collapsible=icon]:size-6" />
                                                )
                                            )}
                                            <span className="text-base group-data-[collapsible=icon]:hidden">{item.title}</span>

                                            {/* Chevron Arrow: Only shows if the item has sub-items (items array exists) */}
                                            {item.items && (
                                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            )}
                                        </NavLink>
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                {/* CollapsibleContent: The hidden/visible sub-menu that appears when expanded */}
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton asChild>
                                                    <NavLink to={subItem.url}>
                                                        <span>{subItem.title}</span>
                                                    </NavLink>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}
