import { useState } from 'react';
import {data} from './assets/data.js'

import Header from './components/Header.jsx';
import Marquee from './components/Marquee.jsx';
import EmptyBoxes from './components/EmptyBoxes.jsx';
import Article from './components/Article.jsx';
import HoverVideo from './components/HoverVideo.jsx';

function App() {
  const [hoverStates, setHoverStates] = useState({});

  const handleHover = (id, value) => {
    setHoverStates({ ...hoverStates, [id]: value });
  };

  return (
    <main className="portfolio">
      <div className="portfolio__grid grid">
        <EmptyBoxes />
        <Header />
        <Marquee text="UI Engineer / Frontend Developer / Web Developer / UI Engineer / Frontend" />
        <Article
          id={ data.aboutMe.id }
          title={ data.aboutMe.title }
          content={ data.aboutMe.content }
          setHover= {handleHover } />
        <HoverVideo
          videoSrc={ data.aboutMe.videoSrc }
          article={ data.aboutMe.id }
          isHovered={hoverStates[ data.aboutMe.id ]} />
        <Article
          id={ data.experience.id }
          title={ data.experience.title }
          content={ data.experience.content }
          setHover= {handleHover } />
        <HoverVideo
          videoSrc={ data.experience.videoSrc }
          article={ data.experience.id }
          isHovered={hoverStates[ data.experience.id ]} />
        <Article
          id={ data.knowledge.id }
          title={ data.knowledge.title }
          content={ data.knowledge.content }
          setHover= {handleHover } />
        <HoverVideo
          videoSrc={ data.knowledge.videoSrc }
          article={ data.knowledge.id }
          isHovered={hoverStates[ data.knowledge.id ]} />
      </div>
    </main>
  )
}

export default App
