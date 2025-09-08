import { Home, BarChart3, Newspaper, Inbox } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Poll", url: "/poll", icon: BarChart3 },
  { title: "News", url: "/news", icon: Newspaper },
  { title: "Inbox", url: "/inbox", icon: Inbox },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavClasses = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-village-light text-village-green font-medium border-r-2 border-village-green" 
      : "hover:bg-village-light/50 text-village-earth hover:text-village-green transition-colors";

  return (
    <Sidebar className={`${collapsed ? "w-14" : "w-64"} border-r border-border bg-gradient-to-b from-village-light to-background`}>
      <SidebarContent className="pt-6">
        <div className="px-4 mb-6">
          <h1 className={`font-bold text-village-green ${collapsed ? "text-sm text-center" : "text-xl"}`}>
            {collapsed ? "VoV" : "Voice of Village"}
          </h1>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-village-earth font-medium">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavClasses}
                    >
                      <item.icon className={`h-5 w-5 ${collapsed ? "" : "mr-3"}`} />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}