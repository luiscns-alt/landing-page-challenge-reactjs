import { ThemeProvider } from "theme-ui";
import theme from "../theme";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <div>Page Index</div>
    </ThemeProvider>
  );
}
