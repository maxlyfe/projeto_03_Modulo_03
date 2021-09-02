const API_KEY = "0a13d93d412b03b8c3aa22214fb8a759";
const API_BASE = "https://api.themoviedb.org/3";


const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () =>{
        return [
            
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFetch(`/discover/tv?&with_network=213&api_key=${API_KEY}&language=pt-BR`) 
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: "toprated",
                title: "Em alta",
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type){
                case "movie":
                    info = await basicFetch(`/movie/${movieId}?&api_key=${API_KEY}&language=pt-BR`);
                break;
                case "tv":
                    info = await basicFetch(`/tv/${movieId}?&api_key=${API_KEY}&language=pt-BR`);
                break;
                default:
                    info= null;
                break;
            }
        }

        return info;
    }
}