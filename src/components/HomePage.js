import Hero from "./Hero";
import ArticleList from "./ArticleList";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="App">
      {/* inserire header */}
      <h1>Ultime novità dal mondo tech e del coding</h1>

      <Hero />

      {/* altro contenuto della pagina */}

      <ArticleList />
      <Footer />
    </div>
  );
}

export default HomePage;
