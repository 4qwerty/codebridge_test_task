import React, {useCallback, useState} from 'react';
import ArticleList from "../ArticleList/ArticleList";
import SearchInput from "../SearchInput/SearchInput";
import {Grid} from "@mui/material";
import {useAppSelector} from "../../hooks/useTypedSelector";
import {ArticleModel} from "../../models/Article";

const HomePage = () => {
    const [inputValue, setInputValue] = useState('');
    const articles = useAppSelector(state => state.articles.articles);

    const onChangeInput = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value.trimStart());
        },
        []
    );

    const filteredText = (text: string, values: string) => {
        return text.toLowerCase().includes(values.toLowerCase());
    };

    let tmpArray: string[] = [];
    const filterUniqueValues = (item: ArticleModel) => {
        if (tmpArray.indexOf(item.summary) === -1) {
            tmpArray.push(item.summary);
            return true
        }
        return false;
    }

    const filteredArticles = (articles: ArticleModel[], value: string) => {
        const filteredByTitle = articles.filter(({ title }) =>
            filteredText(title, value)
        );

        const filteredBySummary = articles.filter(({ summary }) =>
            filteredText(summary, value)
        );

        const filteredArticles = [...filteredBySummary, ...filteredByTitle]
        return filteredArticles.filter((item) => filterUniqueValues(item))
    };

    let articlesToRender;

    (inputValue)
        ? (articlesToRender = filteredArticles(articles, inputValue))
        : (articlesToRender = articles);

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <SearchInput
                onChange={onChangeInput}
                value={inputValue}
            />
            <ArticleList articlesToRender={articlesToRender}/>
        </Grid>
    );
};

export default HomePage;
