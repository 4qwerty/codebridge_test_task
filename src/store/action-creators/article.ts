import { Dispatch } from "redux";
import axios from "axios";
import { ArticleAction, ArticleActionTypes } from "../../types/article";

export const fetchArticle = () => {
    return async (dispatch: Dispatch<ArticleAction>) => {
        try {
            dispatch({ type: ArticleActionTypes.FETCH_ARTICLE });
            const response = await axios.get(
                "https://api.spaceflightnewsapi.net/v3/articles"
            );
            dispatch({
                type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: ArticleActionTypes.FETCH_ARTICLE_ERROR,
                payload: "An error occurred while loading the list of article",
            });
        }
    };
};
