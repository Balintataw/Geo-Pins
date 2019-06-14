import React, { useState, useContext } from "react";
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhotoTwoTone";
import LandscapeIcon from "@material-ui/icons/LandscapeOutlined";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/SaveTwoTone";

import { DELETE_DRAFT, CREATE_PIN } from '../../store/actionTypes';
import Context from '../../store/context';
import { CREATE_PIN_MUTATION } from '../../graphql/mutations';
import { useClient } from '../../helpers/client';

const CreatePin = ({ classes }) => {
    const client = useClient();
    const { state, dispatch } = useContext(Context);
    const [ title, setTitle ] = useState("");
    const [ image, setImage ] = useState("");
    const [ content, setContent ] = useState("");
    const [ submitting, setSubmitting ] = useState(false)

    const handleClearForm = () => {
        setTitle('');
        setImage('');
        setContent('');
        dispatch({ type: DELETE_DRAFT });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setSubmitting(true);
        try {
            const url = await handleImageUpload();
            const { latitude, longitude } = state.draft;
            const variables = {
                title,
                image: url,
                content,
                latitude,
                longitude
            };
            const { createPin } = await client.request(CREATE_PIN_MUTATION, variables)
            dispatch({ type: CREATE_PIN, payload: createPin })
            handleClearForm();
        } catch (err) {
            setSubmitting(false)
            throw new Error(`Error creating pin: ${err}`);
        }
    };

    const handleImageUpload = async () => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'geopins_default');
        data.append('cloud_name','jossendal-development');
        data.append('folder', 'geopins'); // folder name
        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/jossendal-development/image/upload', data);
            return response.data.url;
        } catch (err) {
            throw new Error(`Error uploading image: ${err}`)
        }
    };

    return (
        <form className={classes.form}>
            <Typography
                className={classes.alignCenter}
                component="h2"
                variant="h4"
                color="secondary"
            >
                <LandscapeIcon className={classes.iconLarge} /> Pin a location
            </Typography>
            <div>
                <TextField 
                    name="title" 
                    label="Title" 
                    placeholder="Insert Pin title" 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    accept="image/*" 
                    id="image" 
                    type="file" 
                    className={classes.input} 
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <label htmlFor="image">
                    <Button
                        component="span"
                        style={{ color: image && "green" }}
                        size="small"
                        className={classes.button}
                    >
                        <AddAPhotoIcon />
                    </Button>
                </label>
            </div>
            <div className={classes.contentField}>
                <TextField 
                    name="content" 
                    label="Content" 
                    multiline 
                    rows="6" 
                    margin="normal" 
                    fullWidth 
                    variant="outlined" 
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div>
                <Button 
                    onClick={handleClearForm}
                    className={classes.button} 
                    variant="contained" 
                    color="primary">
                    <ClearIcon className={classes.leftIcon}/> 
                    Discard
                </Button>
                <Button 
                    onClick={handleSubmit}
                    disabled={!title.trim() || !image || !content.trim() || submitting}
                    className={classes.button} 
                    variant="contained" 
                    color="secondary">
                    Submit
                    <SaveIcon className={classes.rightIcon}/> 
                </Button>
            </div>
        </form>
    )
};

const styles = theme => ({
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: theme.spacing.unit
  },
  contentField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "95%"
  },
  input: {
    display: "none"
  },
  alignCenter: {
    display: "flex",
    alignItems: "center"
  },
  iconLarge: {
    fontSize: 40,
    marginRight: theme.spacing.unit
  },
  leftIcon: {
    fontSize: 20,
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    fontSize: 20,
    marginLeft: theme.spacing.unit
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
    marginLeft: 0
  }
});

export default withStyles(styles)(CreatePin);
