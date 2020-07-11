import React from 'react'
import styles from './country.module.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Columns from 'react-columns'
import {
   CardImg, CardTitle, CardText,  CardSubtitle, CardBody,Row,Col
} from 'reactstrap';



  const Country=({posts,loading,filterCountry,display})=>{


  	var queries=[{
  		columns:4,
  		query:'min-width:500px'},
  		{
  			columns:5,
  			query:'min-width:1000px'
  	}];
 
  	if(loading){
  			return <h1>Loading..............</h1>

  	}
  	if(display)
  	{
  		return(
  			<CardColumns queries={queries}> {
  			filterCountry.map((data,i)=>(
        	 	 <Card
        	 	 key={i}
        	  	bg="skyblue"
        	  	text="dark"
        	  	margin="20px"

        	  	className="text-center"
        	  	style={{ boxShadow:"0.2rem 2px 2px #fff", margin:"20px",backgroundColor:"skyblue"}}>
          		     
          		<CardBody>
          			     
          		<CardText style={{fontSize:"1.7rem"}}><img src={data.countryInfo.flag} height="35px" width="70px"/>		{data.country}</CardText>
                               <CardText>Total Cases :{data.cases}</CardText>
                           <CardText>Today Deaths :{data.deaths}</CardText>
                          
                            <CardText>Total Recovered :{data.recovered}</CardText>
	                           <CardText>Active cases :{data.active}</CardText>
                           <CardText>Today Cases :{data.todayCases}</CardText>
                           <CardText>Death(s) :{data.todayDeaths}</CardText>
                           <CardText>Today Recovered :{data.todayRecovered}</CardText>
                            </CardBody>
               </Card>
        		))
    		}</CardColumns>
    		)
  	}


     return(
          <CardColumns queries={queries}> 
          {
          	posts.map((data,i)=>( 
          		
          		<Card key={i}

        	  	bg="skyblue"
        	  	text="bold"
        	  	className="text-center"
        	  	style={{ margin:"20px",boxShadow:"0.5rem 0.5rem 0.5rem #fff",backgroundColor:"skyblue" ,width:"25rem"}}>
          		<CardBody>
          			
          		     
          		<CardTitle style={{text:"bold",fontSize:"1.7rem"}}><img src={data.countryInfo.flag} height="35px" width="70px"/>		{data.country}</CardTitle>
                               <CardText>Total Cases :{data.cases}</CardText>
                           <CardText>Total Death(s) :{data.deaths}</CardText>
                            <CardText>Total Recovered :{data.recovered}</CardText>
                           <CardText>Active cases :{data.active}</CardText>
                           <CardText>Today Cases :{data.todayCases}</CardText>
                           <CardText>Today Death(s) :{data.todayDeaths}</CardText>
                           <CardText>Today Recovered :{data.todayRecovered}</CardText>
                            </CardBody>
                </Card>
                	
        ))

    }
   </CardColumns>)
         
}

export default Country;