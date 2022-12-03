import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

let Header = props => (React.createElement(AppBar, { position: "static" },
    React.createElement(Toolbar, { variant: "dense" },
        React.createElement(Typography, { variant: "h6", color: "inherit" }, props.children))));

const paletteType = 'light';
const overrides = {
    MuiButton: {
        root: {
            // Button text should not be all upper case
            textTransform: 'none',
        },
    },
};
function defaultTheme() {
    const palette = {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: pink.A400,
        },
        error: {
            main: red.A400,
        },
        type: paletteType,
    };
    return createMuiTheme({ palette, overrides });
}
const DEFAULT_THEME = defaultTheme();

export { DEFAULT_THEME, Header, defaultTheme };
