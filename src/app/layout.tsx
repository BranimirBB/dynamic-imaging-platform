import { Outlet } from "react-router-dom"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"

export default function DashboardLayout() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "16rem",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}