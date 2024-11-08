import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SideBar } from "@/components/custom/SideBar"
import { Outlet } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeProvider"

export default function Layout() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <SideBar />
                <main className="w-[100%]">
                    <SidebarTrigger />
                    <Outlet />
                </main>
            </SidebarProvider>
        </ThemeProvider>
    )
}
