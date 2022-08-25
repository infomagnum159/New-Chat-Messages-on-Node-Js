import React, {useRef, useState} from 'react';
import {Grid, TextField, Button} from "@mui/material";
import {makeStyles} from "tss-react/mui";


const useStyles = makeStyles({
    input: {
        display: 'none'
    }
});

const FileInput = ({onChange, name, label}) => {
    const {classes} = useStyles();

    const inputRef = useRef();
    const [filename, setFilename] = useState('');

    const onFileChange = e => {
        if (e.target.files[0].name) {
            setFilename(e.target.files[0].name);
        } else {
            setFilename('');
        }
        onChange(e);
    };

    const activateInput = () => {
        inputRef.current.click();
    };

    return (
        <>
            <input
                type="file"
                name={name}
                onChange={onFileChange}
                ref={inputRef}
            />
            <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        disabled
                        fullWidth
                        label={label}
                        value={filename}
                        onClick={activateInput}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" on onClick={activateInput}>Browse</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default FileInput;