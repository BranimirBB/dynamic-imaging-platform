import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { IconBell, IconCheck, IconUserPlus, IconUsers, IconPhotoScan, IconMessageCircle } from "@tabler/icons-react"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Map routes to page titles
const routeTitles: Record<string, string> = {
    "/overview": "Overview",
    "/mailbox": "Mailbox",
    "/patients": "Patients",
    "/annotation": "Interpretation Tool",
    "/connections": "Established Connections",
    "/global-community": "Global Community",
    "/learning-community": "Learning",
    "/learning-community/ultrasound-knowledge": "Learning",
    "/learning-community/probefix-dynamic": "Learning",
    "/learning-community/learning-community": "Learning",
}

export function SiteHeader() {
    const location = useLocation()
    const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true)

    // Get the page title based on current route
    const pageTitle = routeTitles[location.pathname] || "Overview"

    // Notification messages
    const notifications = [
        {
            icon: IconCheck,
            message: "Your image analysis is done!",
            time: "2 minutes ago"
        },
        {
            icon: IconMessageCircle,
            message: "Invite for second opinion",
            time: "1 hour ago"
        },
        {
            icon: IconUserPlus,
            message: "Request for connection",
            time: "3 hours ago"
        },
        {
            icon: IconPhotoScan,
            message: "New case assigned to you",
            time: "5 hours ago"
        },
        {
            icon: IconUsers,
            message: "Dr. Smith accepted your connection",
            time: "1 day ago"
        }
    ]

    return (
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-12"
                />
                <h1 className="text-base font-medium">{pageTitle}</h1>
                <div className="ml-auto flex items-center">
                    <DropdownMenu onOpenChange={(open) => { if (open) setHasUnreadNotifications(false) }}>
                        <DropdownMenuTrigger asChild>
                            <button className="focus:outline-none relative" aria-label="User menu">
                                <IconBell className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                                {notifications.length > 0 && hasUnreadNotifications && (
                                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-background" />
                                )}
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-80 rounded-lg"
                            align="end"
                            sideOffset={8}
                        >
                            <DropdownMenuLabel className="font-semibold">
                                Notifications
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {notifications.map((notification, index) => {
                                const Icon = notification.icon
                                return (
                                    <div key={index}>
                                        <DropdownMenuItem className="flex items-start gap-3 py-3 cursor-pointer">
                                            <Icon className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                                            <div className="flex-1 space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {notification.message}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {notification.time}
                                                </p>
                                            </div>
                                        </DropdownMenuItem>
                                        {index < notifications.length - 1 && <DropdownMenuSeparator />}
                                    </div>
                                )
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
