export default {
  colors: {
    text: "#FFFFFF",
    text_secondary: "#262626",
    background: "#000",
    background_secondary: "#F9FBFD",
    border_color: "#E5ECF4",

    modes: {
      dark: {
        text: "#FFFFFF",
        text_secondary: "#262626",
        background: "#000",
        primary: "#262626",
        secondary: "#09c",
      },
    },
  },
  breakpoints: [
    "480px",
    "640px",
    "768px",
    "1024px",
    "1220px",
    "1366px",
    "1620px",
  ],
  fonts: {
    body: "'Poppins', sans-serif",
    paragraph: "'Poppins', sans-serif",
  },
  fontWeights: {
    body: "normal",
    paragraph: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    paragraph: 1.5,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    paragraph: "-0.5px",
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  layout: {
    container: {
      maxWidth: [
        "100%",
        null,
        null,
        "780px",
        "1020px",
        "1200px",
        null,
        "1310px",
      ],
      px: [4, 6],
    },
    main: {},
  },
  text: {
    paragraph: {
      fontFamily: "paragraph",
      lineHeight: "paragraph",
      fontWeight: "paragraph",
      fontSize: [4],
      letterSpacing: "-.55px",
      color: "paragraph",
    },
    hero: {
      color: "paragraph",
      fontSize: [
        "32px",
        "36px",
        "42px",
        "40px",
        "42px",
        "52px",
        "58px",
        "76px",
      ],
      // fontSize: "6.8rem",
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      // mb: [4, null, null, null, null, 5],
      letterSpacing: "0.15em",
    },
    paragraphPrimary: {
      color: "text",
      fontSize: [
        "32px",
        "36px",
        "42px",
        "40px",
        "42px",
        "52px",
        // "58px",
        "68px",
        "76px",
      ],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 300,
      // mb: [4, null, null, null, null, 5],
      textTransform: "uppercase",
      letterSpacing: "0.15em",
    },
    paragraphSecondary: {
      fontSize: [2, null, "17px", null, null, "19px", 4],
      color: "text",
      lineHeight: [1.9, null, null, 2],
      fontWeight: "normal",
      // mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      letterSpacing: "0.2em",
    },
    title: {
      // extends the text.paragraph styles
      variant: "text.paragraph",
      fontWeight: "bold",
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1,
    },
  },
  links: {},
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSmoothing: "antialiased",
      fontSize: "62.5%" /* 10px */,
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7",
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: "none",
    },
    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important",
    },
  },
};