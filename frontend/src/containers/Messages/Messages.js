import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMessages} from "../../store/actions/MessageAction";
import MessageItem from "../../components/MessageItem/MessageItem";
import {Grid, Typography, Button} from "@mui/material";

const Messages = () => {

    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);
    console.log(messages)
    return (
        <Grid container direction="column" spacing={2}>

            <Grid item container direction="row" spacing={1}>
                {messages.map(message =>  (

                    <MessageItem
                        key={message.id}
                        id={message.id}
                        author={message.author}
                        text={message.text}
                        image={message.image}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default Messages;