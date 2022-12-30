function NewsItem(props) {
  const { article } = props;

  return (
    <div className="news-item">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        Leggi l'articolo completo
      </a>
    </div>
  );
}

export default NewsItem;
