import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepPurple500, deepPurple700, grey500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700,
    pickerHeaderColor: deepPurple500,
  },
  svgIcon: {
    color: grey500,
  },
});

const MainLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    {children}
  </MuiThemeProvider>
);

MainLayout.propTypes = {
  children: React.PropTypes.element,
};

export default MainLayout;
