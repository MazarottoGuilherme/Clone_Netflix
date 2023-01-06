import React, { useEffect, useState } from 'react';
import TMDB from './TMDB';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header.js'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      //trazendo a lista de filmes

      let list = await TMDB.getHomeList();
      setMovieList(list);

      // Trazendo o filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      let chosen = originals[0].itens.results[randomChosen];
      let chosenInfo = await TMDB.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return(
    <div className='page'>

      <Header black={blackHeader}/>

      {featuredData &&
      <FeaturedMovie item={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((item, key)=>(
          <div>
            <MovieRow key={key} title={item.title} items={item.itens}/>
          </div>
        ))}
      </section>

      <footer>
        Feito com <span role='img' aria-label='Coração'>❤️</span><br />
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org
      </footer>
      
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif' alt='carregando'/>
        </div>
      }
    </div>
  );
}