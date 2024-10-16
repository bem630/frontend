import React, { useEffect, useState } from 'react'
import api from '../utils/api';

export default function Blog() {
    //state
    const [articles, setArticles] = useState([]);
    //comportements
    useEffect(() => {
        api.get('/articles')
        .then((res) => setArticles(res.data.data))
      .catch((err) => console.error(err));
    }, [] )

    //affichage
  return (
    <div>
      <h1>Blog</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.attributes.title}</h2>
          <p>{article.attributes.content}</p>
        </div>
      ))}
    </div>
  )
}
