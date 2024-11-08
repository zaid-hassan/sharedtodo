import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SideBar } from "@/components/custom/SideBar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <SideBar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
