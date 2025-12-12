import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { IconSearch } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import xxIcon from "@/assets/icons/xx.svg"

// Map routes to page titles
const routeTitles: Record<string, string> = {
    "/overview": "Overview",
    "/mailbox": "Mailbox",
    "/patients": "Patients",
    "/annotation": "Annotation Tool",
    "/connections": "Established Connections",
    "/global-community": "Global Community",
    "/learning-community": "Learning Community",
}

export function SiteHeader() {
    const location = useLocation()
    const [searchValue, setSearchValue] = useState("")

    // Get the page title based on current route
    const pageTitle = routeTitles[location.pathname] || "Overview"

    const handleClearSearch = () => {
        setSearchValue("")
    }

    return (
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-12"
                />
                <h1 className="text-base font-medium">{pageTitle}</h1>
                <div className="ml-auto relative">
                    <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-full rounded-lg bg-background pl-8 pr-8 md:w-[200px] lg:w-[280px] focus-visible:ring-0 focus-visible:shadow-md focus-visible:shadow-sidebar-background"
                    />
                    {searchValue && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute right-2.5 top-3.5 h-2.5 w-2.5 cursor-pointer opacity-40 hover:opacity-80 transition-opacity"
                            aria-label="Clear search"
                        >
                            <img src={xxIcon} alt="Clear" className="h-full w-full" />
                        </button>
                    )}
                </div>
            </div>
        </header>
    )
}
