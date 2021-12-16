import React from "react";
import { Box, Container, Text } from "theme-ui";

export default function header() {
  return (
    <section>
      <Container>
        <Box sx={styles.boxOne}>
          <Text as="h1" variant="paragraphPrimary">
            sistema de <span>ensino</span>
          </Text>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  contentBox: {
    width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
    mx: "auto",
    textAlign: "center",
    title: {
      pt: 10,
    },
  },
  boxOne: {
    textAlign: "center",
    pt: [],
    span: {
      fontWeight: "bold",
    },
  },
};
