import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

// Needed for onTouchTap material-ui
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class Template extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="PassManager"
                    />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}