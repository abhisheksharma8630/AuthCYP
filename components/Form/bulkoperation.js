import React, { useState } from 'react';
import formHiddenInputs from '@/utils/form/formHiddenInputs';
import { Box, Container, Grid, Paper } from '@mui/material';

import {
  HiddenInputX,
  ButtonX,
  SubmitButtonX,
  SelectOptionField,
} from '@/components/Form/UdxFormComponents';

const BulkOperationX = (props) => {
  const [formData, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    onClose();
  };

  return (
    <Box>
      <Paper sx={{ p: 2, m: 0, mt: 1 }}>
        <form onSubmit={handleSubmit}>
          <Container>
            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={10}>
                <SelectOptionField
                  label="Operation"
                  id="operation"
                  name="operation"
                  selected={formData.operation}
                  datakey={props.datakey}
                  onChange={updateData}
                />
              </Grid>
              <Grid item xs={2}>
                <HiddenInputX name="selected-ids" />
                <HiddenInputX name="path" />
                <ButtonX label="Proceed" className="blue_button" onClick={handleSubmit} />
              </Grid>
            </Grid>
          </Container>
        </form>
      </Paper>
    </Box>
  );
};

export default BulkOperationX;
