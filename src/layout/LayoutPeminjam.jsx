import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import SidebarPeminjam from '../components/sidebar/SidebarPeminjam';
import Header from '../components/header/Header';

function
  LayoutPeminjam({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cookies = useCookies();
  useEffect(() => {
    console.log(cookies)
    if (cookies[0].userId) {
      if (cookies[0].role === 'admin') {
      } else if (cookies[0].role === 'petugas') {
      }
    }

  }, [
    cookies
  ])

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SidebarPeminjam sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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

export default LayoutPeminjam;