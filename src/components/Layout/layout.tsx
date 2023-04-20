import dynamic from "next/dynamic";
import React from "react";
import { StickyBar } from "../StickyBar/stickybar";
import { Container, Spacer } from "@nextui-org/react";
import { Query, useMediaQuery } from "@/hooks/media-query";


const CustomNavbar = dynamic(() => import('../Navbar/navbar').then(mod => mod.CustomNavbar), {
  ssr: false
});

type Layout = {
  children: React.ReactNode
}

export const Layout: React.FC<Layout> = ({ children }) => {
  const isMobile = useMediaQuery({ query: Query.sm })
  return (
    <>
      {!isMobile &&
        <Container lg >
          <CustomNavbar />
          {children}
        </Container>
      }
      {isMobile &&
        <>
          <CustomNavbar />
          {children}
        </>
      }
      <Spacer y={5} />
      <StickyBar />
    </>
  );
}
