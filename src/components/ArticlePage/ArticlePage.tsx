import React from 'react';
import { useLocation, Location } from 'react-router-dom'
import {ArticleModel} from "../../models/Article";
import { Link } from 'react-router-dom';
import "./ArticlePage.css"

interface StateValue {
    article: ArticleModel
}
interface LocationProps extends Location {
    state: StateValue
}
const ArticlePage = () => {

    const { state } = useLocation() as LocationProps
    const article = state.article

    return (
        <div className="card_detail">
            <div className="card_bg">
                <img src={article.imageUrl} alt="" />
            </div>
            <div className="card_wrapper">
                <div className="container">
                    <div className="card_body">
                        <p>{article.title}</p>
                        <span>{article.summary}</span>
                    </div>
                    <Link to="/home" className="back_btn_link">
                        Back to homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
