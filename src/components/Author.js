import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import styles from '../index.module.css';
// import Layout from './Layout.js';


const Author = () => {
    const [results, setResult] = useState([]);
        useEffect(() => {
               
        axios.get("http://192.168.99.102:8080/api/collections/get/Author")  
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
            <div className='post'>
                {results.map((result) =>
                    <section key={result._id}>
                        <p  className={styles.img}><img src={"http://192.168.99.102:8080/" + result.img.path} alt={"avatar"}></img></p>
                        <h2 className={styles.name}>{result.name}</h2>
                        <p className={styles.description}>{result.description}</p>
                        <hr></hr>
                    </section>
                    )}
            </div>
        )
    }
    export default Author;