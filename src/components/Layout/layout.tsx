import dynamic from "next/dynamic";
import React from "react";
import { StickyBar } from "../StickyBar/stickybar";
import { Row } from "@nextui-org/react";


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
      <Row 
        css={{
          marginTop: "$20"
        }}
      >
        <StickyBar />
      </Row>
    </>
  );
}
