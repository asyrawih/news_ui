import React from "react";

import { Navbar, Spacer, Text } from "@nextui-org/react";

type Layout = {
  children: React.ReactNode
}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <Navbar variant="sticky" maxWidth={"lg"}>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <Spacer y={10} />
          <Text b color="inherit" hideIn="xs">
            CyberCrime Tv
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
        </Navbar.Content>
      </Navbar>
      {children}
    </>
  );
}
