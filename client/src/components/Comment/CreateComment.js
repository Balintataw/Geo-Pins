import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import SendIcon from "@material-ui/icons/Send";
import Divider from "@material-ui/core/Divider";

import Context from '../../store/context';
import { CREATE_COMMENT_MUTATION } from '../../graphql/mutations';
import { useClient } from '../../helpers/client';

const CreateComment = ({ classes }) => {
    const client = useClient();
    const [ comment, setComment ] = useState('');
    const { state } = useContext(Context);

    const handleSubmitComment = async () => {
        const variables = { pinId: state.currentPin._id, text: comment };
        await client.request(CREATE_COMMENT_MUTATION, variables);
        setComment('');
    }

    return (
        <>
            <form className={classes.form}>
                <IconButton className={classes.clearButton} onClick={() => setComment('')} disabled={!comment.trim()}>
                    <ClearIcon />
                </IconButton>
                <InputBase 
                    className={classes.input} 
                    placeholder="Add Comment" 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    multiline />
                <IconButton className={classes.sendButton} onClick={handleSubmitComment} disabled={!comment.trim()}>
                    <SendIcon size="10px"/>
                </IconButton>
            </form>
            <Divider />
        </>
    )
};

const styles = theme => ({
  form: {
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  clearButton: {
    padding: 0,
    color: "red"
  },
  sendButton: {
    padding: 5,
    color: theme.palette.secondary.dark
  }
});

export default withStyles(styles)(CreateComment);
