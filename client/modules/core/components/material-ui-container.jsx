import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './layout.jsx';

const muiTheme = getMuiTheme({});

const MainLayout = ({ content = () => null }) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Layout content={content} />
    </MuiThemeProvider>
);

MainLayout.propTypes = {
    content: React.PropTypes.func,
};

export default MainLayout;
