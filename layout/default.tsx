import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
