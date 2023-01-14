import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { Box, CircularProgress, Grid } from '@mui/material'
import ArticleCard from '../ArticleСard/ArticleСard'
import { ArticleModel } from '../../models/Article'

interface ArticleListProps {
  articlesToRender: ArticleModel[]
}
const ArticleList: React.FC<ArticleListProps> = ({ articlesToRender }) => {
  const { error, loading } = useAppSelector((state) => state.articles)
  const { fetchArticle } = useActions()

  console.log(articlesToRender)

  useEffect(() => {
    fetchArticle()
  }, [])

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 3, lg: 4, xl: 5 }}
      columns={{ xs: 2, sm: 8, md: 12, lg: 14, xl: 18 }}
      justifyContent='center'
    >
      {articlesToRender.map((article) => (
        <Grid item xs={2} sm={4} md={4} lg={4} xl={4} key={article.id}>
          <ArticleCard key={article.id} article={article} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ArticleList
