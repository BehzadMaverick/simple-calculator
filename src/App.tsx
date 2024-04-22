import { AppBar, Typography } from "@mui/material";

import Calculator from "components/calculator/calculator";

const App = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ p: 1 }}
      >
        <Typography
          textAlign="center"
          variant="h6"
          component="div"
        >
          Simple Calculator
        </Typography>
      </AppBar>
      <Calculator />
    </>
  );
};

export default App;
