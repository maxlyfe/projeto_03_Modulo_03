import React, {useState, useEffect} from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from  "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
const Conn = require('./models/conn/conn');



export default () =>{

    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);


    useEffect(() =>{
        const loadAll = async () =>{
            let list = await Tmdb.getHomeList();
            setMovieList(list);
            


            let originals = list.filter(i=>i.slug === "originals");
            let randomChosen = Math.floor(Math.random()* (originals[0].items.results.length -1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
            setFeatureData(chosenInfo);
            
        }
        loadAll();
    }, []);

    return (
        <div className="page">
            <div>
                {featureData &&
                    <FeaturedMovie  item={featureData}/>
                }

                <section className="lists">
                    {movieList.map((item, key)=>(
                            <MovieRow  key={key} title={item.title} items={item.items}/> 

                    ))}
                
                </section>
            </div>
            

        </div>
    );
}