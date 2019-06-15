import React, { useContext } from "react";
import { GoogleLogout } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'; 

import Context from '../../store/context';
import { SIGNOUT_USER } from '../../store/actionTypes';

const Signout = ({ classes }) => {
    const { dispatch } = useContext(Context);
    const mobileSize = useMediaQuery('(max-width: 650px)');

    const onSignout = () => {
        dispatch({ type: SIGNOUT_USER });
        console.log("Signed out")
    };

    return (
        <GoogleLogout 
            onLogoutSuccess={onSignout}
            render={({ onClick }) => (
                <span className={classes.root} onClick={onClick}>
                    <Typography 
                        style={{ display: mobileSize ? 'none' : 'block' }}
                        variant="body1" 
                        className={classes.buttonText}>
                        Sign Out
                    </Typography>
                    <ExitToAppIcon className={classes.buttonIcon} />
                </span>
            )}
        />
    );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "#FFF"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "#FFF"
  }
};

export default withStyles(styles)(Signout);
