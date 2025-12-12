"use client"

import { Link } from "react-router-dom"
import * as React from "react"
import { type Icon } from "@tabler/icons-react"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSecondary({
    items,
    ...props
}: {
    items: {
        title: string
        url: string
        icon: Icon
    }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild className="h-8 group-data-[collapsible=icon]:!size-11 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:justify-center">
                                <Link to={item.url}>
                                    <item.icon className="size-10 group-data-[collapsible=icon]:size-6" />
                                    <span className="text-base group-data-[collapsible=icon]:hidden">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
