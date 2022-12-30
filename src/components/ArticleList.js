/*import React, { useState, useEffect } from "react";*/
import NewsItem from "./NewsItem";

import ArticlesData from "../data/articles_array";

function ArticleList() {
  /*
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Eseguiamo la chiamata all'API qui
    fetch("../data/articles.json")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []); // specificiamo un array vuoto come secondo argomento per indicare che la funzione useEffect deve essere eseguita solo una volta
*/

  /*importo le info da un array di un file esterno
    TODO settare il comportamento con un' interfaccia API*/
  const articles = ArticlesData;

  return (
    <div className="App">
      <p>Ecco la lista delle notizie:</p>
      {/* altro contenuto della pagina */}
      {articles.map((article) => (
        <NewsItem key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
