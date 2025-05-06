import {data} from './assets/data.js'
import Header from './components/Header.jsx';
import Marquee from './components/Marquee.jsx';
import EmptyBoxes from './components/EmptyBoxes.jsx';
import FullArticle from './components/FullArticle.jsx';

function App() {
  return (
    <main className="portfolio">
      <div className="portfolio__grid grid">
        <EmptyBoxes />
        <Header />
        <Marquee text="UI Engineer / Frontend Developer / Visual Designer / UI Engineer / Frontend Developer" />
        {
          data.map((article) => (
            <FullArticle
              key={article.id}
              id={article.id}
              title={article.title}
              content={article.content}
              videoSrc={article.videoSrc}
            />
          ))
        }
      </div>
    </main>
  )
}

export default App
