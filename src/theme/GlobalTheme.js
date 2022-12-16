import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

const getDesignTokens = (mode) => ({
  palette: {
    mode: mode,
  },
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#256D85",
            },
            success: {
              main: "#14B1AB",
            },
            error: {
              main: "#D92027",
            },
          }
        : {
            primary: {
              main: "#47B5FF",
            },
            error: {
              main: "#F0FF42",
            },
          }),
    },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: mode === "dark" ? "#fff" : /* "#6d2772" */ "#007a53",
        },
      },
    },
  },
});

const GlobalTheme = ({ children }) => {
  const { light } = useSelector((state) => state.themes);

  const theme = useMemo(() =>
    createTheme(getDesignTokens(light ? "light" : "dark"))
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalTheme;
