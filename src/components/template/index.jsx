import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap material-ui
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Template extends React.Component {
    render() {
        return (

                <div>{this.props.children}</div>

        )
    }
}