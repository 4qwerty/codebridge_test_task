import React from 'react';
import ArticleList from "../ArticleList/ArticleList";
import SearchInput from "../SearchInput/SearchInput";
import {Grid} from "@mui/material";

const HomePage = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <SearchInput/>
            <ArticleList/>
        </Grid>
    );
};

export default HomePage;
