import React from 'react'
import styles from './country.module.css'
import CountUp from 'react-countup'
//import styles from './country.module.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import {
   CardImg, CardTitle, CardText,  CardSubtitle, CardBody,Row,Col,
} from 'reactstrap';



const World=({loading,active,cases, deaths,recovered,tcases,tdeaths,trecovered})=>{


var case1={cases}
var case2=case1.cases

/*
if(loading){
	return <h1>Loading..............</h1>
}*/
return(

	<div className={styles.country}>
<CardDeck>
  <Card 
  	bg="secondary" text="white">
    <Card.Body>
      <Card.Title><h1 style={{fontSize:"3.5rem"}}>Cases</h1></Card.Title>
      <Card.Text>
		{cases}   	
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card
  bg="danger" text="white"
  >
    <Card.Body>
      <Card.Title><h1 style={{fontSize:"3.5rem"}}>Deaths</h1></Card.Title>
      <Card.Text>{deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card
  bg="success" text="white">
    <Card.Body>
	  <Card.Title ><h1 style={{fontSize:"3.5rem"}}>Recovered</h1></Card.Title>
      <Card.Text>{recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
		<div className={styles.space}/>

	</div>
		)
}
export default World;