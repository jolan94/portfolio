import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Opening from "./components/Opening";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@mui/material";
import Subtitle from "./components/Subtitle";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Opening />
      <Subtitle />
    </ThemeProvider>
  );
}

export default App;
