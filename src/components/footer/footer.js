/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Box, Container, Text } from "theme-ui";

export default function footer() {
  return (
    <footer style={styles.footer.footerBackground}>
      <Container>
        <Box sx={styles.footer.copyright}>
          <Text>
            <strong> Luis Carlos </strong> ©{new Date().getFullYear()} - Todos
            os direitos reservados.
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBackground: {
      // backgroundColor: "#fff",
    },

    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
      color: "white",
      textAlign: ["center"],
      lineHeight: [1.5, null, 1.8],
    },
  },
};
