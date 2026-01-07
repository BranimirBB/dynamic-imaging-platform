import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { IconBell } from "@tabler/icons-react"
import { useLocation } from "react-router-dom"

// Map routes to page titles
const routeTitles: Record<string, string> = {
    "/overview": "Overview",
    "/mailbox": "Mailbox",
    "/patients": "Patients",
    "/annotation": "Interpretation Tool",
    "/connections": "Established Connections",
    "/global-community": "Global Community",
    "/learning-community": "Learning Community",
}

export function SiteHeader() {
    const location = useLocation()

    // Get the page title based on current route
    const pageTitle = routeTitles[location.pathname] || "Overview"

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
                    <IconBell className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer" aria-label="Notifications" />
                </div>
            </div>
        </header>
    )
}
