import { useState } from 'react';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, Tabs, Tab } from '@mui/material';

function a11yProps(index) {
  return {
    id: `form-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabsBoxX(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Paper sx={{ p: 1.75, pl: 2.5, pr: 2.5, m: 0, mb: 1 }}>
          {props.tabs.length > 1 ? (
            <Container style={{ padding: 0 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <>
                  <Grid item>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="tabs"
                    >
                      {props.tabs.map((tab, index) => {
                        return (
                          <Tab
                            key={index}
                            label={tab.label}
                            icon={
                              tab.icon && (
                                <Box
                                  component="span" // Use a span element to apply styling
                                  sx={{
                                    margin: '0',
                                    width: '18px', // Set the desired width for the icon
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  {tab.icon}
                                </Box>
                              )
                            }
                            sx={{ flexDirection: 'row', gap: '8px' }}
                            {...a11yProps(index)}
                          />
                        );
                      })}
                    </Tabs>
                  </Grid>
                </>
              </Grid>
            </Container>
          ) : null}
          <Container
            style={{ padding: 0, paddingTop: '1em', paddingBottom: '1em' }}
          >
            {props.contents.map((content, index) => {
              return (
                <TabsX key={index} value={value} index={index}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {content}
                  </Grid>
                </TabsX>
              );
            })}
            <Box>
              <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ p: 1 }}
              >
                <Grid item>
                  {props.actionButton != undefined ? props.actionButton : ''}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Paper>
      </Box>
    </>
  );
}

function TabsX(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`form-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </Box>
  );
}

TabsX.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export { TabsBoxX, TabsX };
