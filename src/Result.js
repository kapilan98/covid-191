import React from 'react'
 function Result({result}){

 		return(
 			<div className="result">
 			<img src={result.Poster} />
 			<h1>{result.Title}</h1>
 			</div>
 			)


 }
 export default Result