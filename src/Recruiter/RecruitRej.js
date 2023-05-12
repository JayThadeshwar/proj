import { styled } from '@mui/material/styles';
import RHeader from './RHeader';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: "80%",
    color: theme.palette.text.primary,
}));

function RecruitRej() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    const [img, setImg] = useState();

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/barplot/1/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(typeof result))
            .catch(error => console.log('error', error));
    };

    return (
        <div className="Home">
            <RHeader></RHeader>
            <StyledPaper
                sx={{
                    my: 2,
                    mx: 'auto',
                    p: 2,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                    <img src={`assets/img/bars/bar_plot__${id}.png`} alt="Bar Plot"></img>
                    </Grid>
                    <Grid item xs>
                        <img src={`assets/img/media/Rank${id}.png`} alt="Summary Plot"></img>
                    </Grid>
                </Grid>
            </StyledPaper>
        </div>
    );
}

export default RecruitRej;