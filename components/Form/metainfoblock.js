'use client';

import React, { useState, useEffect } from 'react';

import Container from '@mui/material/Container'; // Container
import { Grid } from '@mui/material'; // Grid

import { HiddenInputX, SubmitButtonX } from './UdxFormComponents';

// Submit Form
export default function MetaInfoFormBlocX(props) {
  return (
    <Container sx={{ mt: 2, ml: 0 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={6}>
          {props.hiddeninputs && props.hiddeninputs.map((input, i) => {
            return (
              <HiddenInputX
                key={i}
                name={input.name}
                value={input.value ? input.value : ''}
              />
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
