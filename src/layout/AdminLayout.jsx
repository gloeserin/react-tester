import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import AdminSidebar from '../components/sidebar/AdminSidebar';
import Header from '../components/header/Header';


function AdminLayout({ children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cookies = useCookies();
  useEffect( () => {
    console.log(cookies);
    if (cookies[0].userId) {
      if (cookies[0].role === 'user') {
        window.location.href = '/peminjam/dashboard';
      } else if (cookies[0].role === 'petugas') {
        window.location.href = '/petugas/dashboard';
      }
    }
  }, [
    cookies
  ])
  
    return (
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
    );
}

export default AdminLayout;