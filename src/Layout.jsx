import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SideBar } from "@/components/custom/SideBar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <SidebarProvider>
      <SideBar />
      <main className="w-[100%]">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
