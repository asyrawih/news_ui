import dynamic from "next/dynamic";
import React from "react";


const CustomNavbar = dynamic(() => import('../Navbar/navbar').then(mod => mod.CustomNavbar), {
  ssr: false
});

type Layout = {
  children: React.ReactNode
}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <CustomNavbar />
      {children}
    </>
  );
}
