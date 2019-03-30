import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import cyan from '@material-ui/core/colors/cyan';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from "react-router";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700],
    },
    secondary: {
      light: cyan[300],
      main: cyan[500],
      dark: cyan[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function withRoot(Component) {
  const WithRouterComponent = withRouter(Component)
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <WithRouterComponent {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
