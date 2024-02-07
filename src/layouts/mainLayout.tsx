import React from 'react';
import NavBar from "@/components/nav-bar";
import DashboardNav from "@/components/dashboard-nav";

const MainLayout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            <NavBar/>
            {children}
            <DashboardNav/>
        </div>
    );
};

export default MainLayout;