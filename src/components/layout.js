/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <main id="content" sx={{ variant: "layout.main" }}>
        {children}
      </main>
    </React.Fragment>
  );
}
