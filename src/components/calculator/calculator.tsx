import React, { useState } from "react";
import { Alert, Stack, Button, TextField, Typography } from "@mui/material";

import { allowedKeys } from "constants/allowedKeys";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (allowedKeys.includes(value[value.length - 1]) || value.length === 0)
      setExpression(value);
    setIsError(false);
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line
      setResult(eval(expression));
    } catch (e) {
      setIsError(true);
    }
  };

  const handleReset = () => {
    setExpression("");
    setResult(null);
    setIsError(false);
  };

  const handleClose = () => setIsError(false);

  return (
    <>
      {isError && (
        <Alert
          severity="error"
          onClose={handleClose}
        >
          Error — Please provide correct expression!
        </Alert>
      )}
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{ mt: 10 }}
      >
        <TextField
          value={expression}
          onChange={handleChange}
          placeholder="Enter expression here..."
          sx={{ width: "30%" }}
        />
        <Stack
          direction="row"
          spacing={2}
        >
          <Button
            variant="contained"
            onClick={handleCalculate}
          >
            Calculate
          </Button>
          <Button
            variant="outlined"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Stack>
        {result && (
          <Typography variant="h6">
            Result is: <strong>{result}</strong>
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default Calculator;
