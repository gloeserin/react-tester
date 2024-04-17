import React, { useState } from 'react';
import Profile from '../../components/header/Profile';


function Header({ sidebarOpen, setSidebarOpen, name }) {
    return (
        <header className="sticky top-0 bg-white  border-b border-slate-200 shadow-md z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 dark:bg-slate-500 " />
            <Profile name={name}  />
          </div>
        </div>
      </div>
    </header>
    )
}

export default Header;
