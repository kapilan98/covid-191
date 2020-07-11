import React,{useEffect,useState} from 'react';
import axios from 'axios'
import World from './World'
import styles from './country.module.css'
import Country from './Country'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './Pagination'
import CardColumns from 'react-bootstrap/CardColumns';
import Map from './Map'
//import ComponentSearch from './ComponentSearch'
import Card from 'react-bootstrap/Card'
//import 'https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js';

const App= function (){
  
 const [latest, setLatest]=useState([]);

  const [results,setResults]=useState([]);

  const [loading,setLoading]=useState(false);

  const [world, setWorld]=useState([]);
  const [display, setDisplay]=useState(false);
  const [currentPage, setCurrentPage]=useState(1)

  const [postsPerPage,setPostsPerPage]=useState("12"); 

  const [searchCountry,setSearchCountry]=useState("") 
  useEffect(()=>{
   
          setLoading(true);
    axios
        .all([
    axios.get("https://corona.lmao.ninja/v2/all"),
    axios.get("https://corona.lmao.ninja/v2/countries"),
    axios.get("https://www.trackcorona.live/api/countries")
    ])
    .then(res=>{

//const mapbox_token="pk.eyJ1Ijoia2FwaWxhbiIsImEiOiJja2NoY3pnZDExMGtsMnJtMnFoaHd0cWlwIn0.z4g91BZ7QgqRQV-2Oy_6qQ";
//mapboxgl.accessToken = mapbox_token;
//var map = new mapboxgl.Map({
//container: 'map',
//style: 'mapbox://styles/mapbox/streets-v11'
//});

  


      setLatest(res[0].data);
      //console.log(res[0].data);      
      console.log(res[2].data.data);
      setResults(res[1].data);
      setWorld(res[2].data.data);
      setLoading(false);
    })
    .catch(err=>{
      console.log(err)
    })
  },[display])

    //const {location} = world
    //console.log(location)
  
const indexOfLastPost= currentPage * postsPerPage;

const indexOfFirstPoat= indexOfLastPost - postsPerPage; 

const currentPosts=results.slice(indexOfFirstPoat,indexOfLastPost)

const paginate = pageNumber => setCurrentPage(pageNumber);


const filterCountry= results.filter(item =>{
  return  searchCountry!=="" ? item.country.includes(searchCountry):item;
})

 /* const countries=filterCountry.map((data,i)=>{
      return(
          <Country key={i} ={currentPosts} country={data.country}
                            loading={loading}
                           cases={data.cases}
                           tdeaths={data.deaths}
                           acases={data.active}
                           today={data.todayCases}
                           death={data.todayDeaths}
                           todayRecovered={data.todayRecovered}
                            image={data.countryInfo.flag}    
                            recovered={data.recovered}
                                   />
        )

    })
*/
const clickHandler=(e)=>{
  setSearchCountry(e.target.value)
  setDisplay(true);
}

  return(
    <div>
    <h1 className="fheading"> Covid-19 Live Statistics </h1>
    <div>
    {
      world.map((item,i) =>(
      <Map key={i} location={item.location}
            latitude={item.latitude}
            longitude={item.longitude}
            confirmed={item.confirmed}
            dead={item.dead}/> ))
    }
    </div>
    <div className={styles.space}/>
    <h1 className="wheading">World wide Statistics</h1>
        <World active={latest.active}
         cases={latest.cases}
         deaths={latest.deaths}
         recovered={latest.recovered}
         tcases={latest.todayCases}
         tdeaths={latest.todayDeaths}
         trecovered={latest.todayRecovered}
         />
        <form>
        <section className="searchbox-wrap">
          <input type="text" list="data" placeholder="Search for a country...." 
            className="searchbox"
          onChange={clickHandler} />


             <datalist id="data">
                {results.map((item, key) =>
              <option key={key} value={item.country} />
    )}
  </datalist>
      </section>
          </form>

            <Country posts={currentPosts} filterCountry={filterCountry} display={display} loading={loading}/>
         <Pagination display={display}
        postsPerPage={postsPerPage}
        totalPosts={results.length}
        paginate={paginate}/>

    </div>

    )
}
export default App;
