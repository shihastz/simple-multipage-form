import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List , ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
               <>
                 <AppBar title="Confirm User Data" />
                 <List>
                     <ListItem
                        primaryText="First name"
                        secondaryText={firstName}
                     />
                     <ListItem
                        primaryText="last Name"
                        secondaryText={lastName}
                     />
                     <ListItem
                        primaryText="Email"
                        secondaryText={email}
                     />
                     <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                     />
                     <ListItem
                        primaryText="Bio"
                        secondaryText={bio}
                     />
                     
                 </List>
                 
                 <br/>
                 <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                 />
                 <RaisedButton
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                 />
               </>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm
