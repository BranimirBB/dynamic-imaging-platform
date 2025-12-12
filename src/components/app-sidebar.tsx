"use client"

import * as React from "react"
import {
    IconCamera,
    IconFileAi,
    IconFileDescription,
    IconHelp,
    IconSettings,
} from "@tabler/icons-react"

import platformLogo from "@/assets/icons/LogoForThePlatform.svg"
import overviewLogo from "@/assets/icons/OverviewPageLogo.svg"
import mailLogo from "@/assets/icons/MailPageLogo.svg"
import patientsLogo from "@/assets/icons/PatientsPageLogo.svg"
import annotationLogo from "@/assets/icons/AnnotationToolPageLogo.svg"
import connectionLogo from "@/assets/icons/EstablishedConnectionLogo.svg"
import globalCommunityLogo from "@/assets/icons/GlobalCommunityPageLogo.svg"
import learningLogo from "@/assets/icons/LearningPageLogo.svg"
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar"


const data = {
    // User profile data displayed in the footer
    user: {
        name: "Jose Madrid",
        email: "jose@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    // Main navigation items (top section of the sidebar)
    navMain: [
        {
            title: "Overview",
            url: "/overview",
            icon: overviewLogo,
        },
        {
            title: "Mailbox",
            url: "/mailbox",
            icon: mailLogo,
        },
        {
            title: "Patients",
            url: "/patients",
            icon: patientsLogo,
        },
        {
            title: "Annotation tool",
            url: "/annotation",
            icon: annotationLogo,
        },
        {
            title: "Established connections",
            url: "/connections",
            icon: connectionLogo,
        },
        {
            title: "Global community",
            url: "/global-community",
            icon: globalCommunityLogo,
        },
        {
            title: "Learning community",
            url: "/learning-community",
            icon: learningLogo,
        },
    ],
    // Example of grouped navigation (currently used in 'navClouds' but not rendered in the component below, 
    // can be added if needed)
    navClouds: [
        {
            title: "Capture",
            icon: IconCamera,
            isActive: true, // Sets this item as open by default
            url: "#",
            items: [ // Sub-items for collapsible menus
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: IconFileDescription,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: IconFileAi,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    // Secondary navigation items (usually settings, help, etc.)
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: IconSettings,
        },
        {
            title: "Get Help",
            url: "#",
            icon: IconHelp,
        },
    ],
    // User's latest assessments
    myLatestAssessments: [
        {
            name: "Ronaldo",
            url: "#",
        },
        {
            name: "Marcelo",
            url: "#",
        },
    ],
}

// The main Sidebar component. 
// It receives props (like className) compatible with the generic Sidebar component.
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        // 'collapsible="icon"' allows the sidebar to collapse to icons but stay visible
        <Sidebar collapsible="icon" {...props}>
            {/* SidebarHeader: fixed at the top, contains the logo/team switcher */}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex items-center gap-2 p-1.5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0">
                            <img src={platformLogo} alt="USONO" className="size-[55px] group-data-[collapsible=icon]:size-[55px] object-contain" />
                            <span className="text-base font-semibold group-data-[collapsible=icon]:hidden">USONO platform</span>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            {/* SidebarContent: The scrollable middle area containing navigation groups */}
            <SidebarContent>
                {/* Each Nav component renders a specific section of the sidebar */}
                <NavMain items={data.navMain} />
                <NavDocuments items={data.myLatestAssessments} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>

            {/* SidebarFooter: fixed at the bottom, contains the user profile */}
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
