import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';


const Author = () => {
    
    
    const [results, setResult] = useState([]);
        useEffect(() => {
        
            
    axios.get("http://192.168.99.102:8080/api/collections/get/AUTHOR")
                   
    
     .then(res => {
                        
    console.log(res.data.entries);
                        
                       
     setResult(res.data.entries)
                    })
                    
    
    .catch(function (error) {
                        
        console.log('Error fetching the api')
                    });
            
      
      }, [])
        
    
    console.log("logging results: ");
       
     console.log(results);
       
    
     return (
            
    <div>
               
     <table>
     <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Abouth the author</th>
                        <th>Image</th>
                       
                    </tr>
                    {results.map((result) =>
                        <tr key={result._id}>
                            <td>{result.name}</td>
                            <td>{result.about}</td>
                            <td><img src={"http://192.168.99.102:8080/" + result.img.path} alt={"avatar"}></img></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
    export default Author;