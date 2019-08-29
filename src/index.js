import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';

import './index.css';
import Blogpost from './components/Blogpost.js';
import Author from './components/Author.js'; 
//import 404 from './component/404.js';

const App = () => {
    
    
    const [results, setResult] = useState([]);
        useEffect(() => {
        
            
    axios.get("http://192.168.99.102:8080/api/collections/get/labb")
                   
    
     .then(res => {
                        
    console.log(res.data.entries);
                        
                       
     setResult(res.data.entries)
                    })
                    
    
    .catch(function (error) {
                        
    alert('Error fetching the api')
                    });
            
      
      }, [])
        
    
    console.log("logging results: ");
       
     console.log(results);
       
    
     return (
            
    <div>
               
     <table>
                    <tr>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Date</th>                        
                    </tr>
                    {results.map((result) =>
                        <tr key={result._id}>
                            <td>{result.title}</td>
                            <td>{result.name}</td>
                            <td>{result.date}</td>
                            
                        </tr>
                    )}
                </table>
            </div>
        )
    }

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Blogpost" component={Blogpost} />
      <Route path="/Author" component={Author} />
      <Route component={404} />
    </Switch>
  </Router>


  , document.getElementById('root')); 