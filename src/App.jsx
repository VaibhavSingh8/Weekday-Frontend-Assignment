import Header from "./components/Header";
import SearchJob from "./pages/SearchJob";

import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "Lexend",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SearchJob />
    </ThemeProvider>
  );
}

export default App;
