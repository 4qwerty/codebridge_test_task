import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import {ArticleModel} from "../../models/Article";
import {useAppDispatch} from "../../hooks/useTypedSelector";

interface ArticleProps {
    article: ArticleModel
}

const ArticleCard: React.FC<ArticleProps> = ({article}) => {
    const dispatch = useAppDispatch()

    return (
        <Card sx={{ maxWidth: 400, minHeight: 530 }}>
            <CardMedia
                sx={{ width: 400, height: 217 }}
                image={article.imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.summary}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Read more</Button>
            </CardActions>
        </Card>
    );
};

export default ArticleCard;
