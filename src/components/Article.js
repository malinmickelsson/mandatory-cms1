import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../index.module.css';


const Article = () => {
    const [results, setResult] = useState([]);
        useEffect(() => {
               
        axios.get("http://192.168.99.102:8080/api/collections/get/Article")  
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
            <body className='post'>
                {results.map((result) =>
                    <div key={result._id}>
                        <h2 className={styles.title} >{result.title}</h2>
                        <h4 className={styles.name} >{result.name}</h4>
                        <p className={styles.date} >{result.date}</p>
                        <p  className={styles.post}>{result.post}</p>
                    </div>
                )}
            </body>
    )
}

export default Article;


    