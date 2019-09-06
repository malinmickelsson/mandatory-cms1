import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../index.module.css";

const Author = () => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.99.102:8080/api/collections/get/Author")
      .then(res => {
        console.log(res.data.entries);

        setResult(res.data.entries);
      })
      .catch(function(error) {
        console.log("Error fetching the api");
      });
  }, []);

  console.log("logging results: ");
  console.log(results);

  return (
    <body>
      <div className="link">
	    <Link to="/">Home</Link>
        <Link to="/Article">Articles</Link>
      </div>
      <div>
        {results.map(result => (
          <section key={result._id}>
            <div className="author">
              <p className={styles.img}>
                <img
                  src={"http://192.168.99.102:8080/" + result.img.path}
                  alt={"avatar"}
                ></img>
              </p>
              <h2 className={styles.name}>{result.name}</h2>
              <p className={styles.description}>{result.description}</p>
              <hr></hr>
            </div>
          </section>
        ))}
      </div>
    </body>
  );
};
export default Author;
