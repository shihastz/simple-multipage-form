import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
               <>
                 <AppBar title="Success !" />
                <br/>
                <h1>Thank you for your submission !</h1>
                <h3>We wiil reach you soon...</h3>
               </>
            </MuiThemeProvider>
        )
    }
}


export default Success
