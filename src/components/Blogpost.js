import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';


const Blogpost = () => {
    
    
    const [results, setResult] = useState([]);
        useEffect(() => {
        
            
    axios.get("http://192.168.99.102:8080/api/collections/get/BLOGPOST")
                   
    
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
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Post</th>/th>
                    </tr>

                    {results.map((result) =>
                        <tr key={result._id}>
                            <td>{result.title}</td>
                            <td>{result.name}</td>
                            <td>{result.Date}</td>
                            <td>{result.post}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
    export default Blogpost;