import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100vh",
          overflow: "hidden",
        },
        body: {
          minHeight: "100vh",
        },
      },
    },
  },
});
