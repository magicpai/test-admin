import * as React from "react";
import { Card } from "@mui/material";
import { Title } from "react-admin";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "./Button.module.css";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ColorButton = styled(Button)({
  color: purple[500],
});

const theme = createTheme({
  components: {
    //Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
            color: "lime"
        }
      },
    },
  },
});

const MUIButton = () => (
  <Card>
    <Title title="My Button" />
    <Box sx={{ margin: 2 }}>
      <Paper elevation={3}>
        {" "}
        <Button variant="contained">MUI standard</Button>
      </Paper>
    </Box>
    <Box sx={{ margin: 2 }}>
      <Paper elevation={3}>
        {" "}
        <Button variant="contained" sx={{ border: 4, color: "red" }}>
          MUI sx styles
        </Button>
      </Paper>
    </Box>
    <Box sx={{ margin: 2 }}>
      <Paper elevation={3}>
        {" "}
        <Button variant="contained" className={styles.button}>
          MUI React CSS module
        </Button>
      </Paper>
    </Box>
    <Box sx={{ margin: 2 }}>
      <Paper elevation={3}>
        {" "}
        <ColorButton variant="contained">MUI styled Button</ColorButton>
      </Paper>
    </Box>
    <Box sx={{ margin: 2 }}>
      <Paper elevation={3}>
        {" "}
        <ThemeProvider theme={theme}>
          <Button variant="contained">
          {/* <Button variant="contained" className={styles.button}> */}
            MUI Theme
          </Button>
        </ThemeProvider>
      </Paper>
    </Box>
  </Card>
);

export default MUIButton;
