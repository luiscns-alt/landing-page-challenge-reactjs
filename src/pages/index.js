import { ThemeProvider } from "theme-ui";
import Layout from "../components/layout";
import theme from "../theme";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>App</div>
      </Layout>
    </ThemeProvider>
  );
}
