import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../index.module.css";
import axios from "axios";

const Main = () => {
  const [results, setResult] = useState([]);

  const [page, setPage] = useState(1);
  const [max, setMax] = useState(1);

  const limit = 2;

  useEffect(() => {
    axios
      .get(
        `http://192.168.99.102:8080/api/collections/get/Article?limit=${limit}&skip=${limit*page-limit}`
      )
      .then(res => {
        console.log(res.data.entries);

        setResult(res.data.entries);
        setMax(Math.floor(res.data.total / limit) + 1);
      })
      .catch(function(error) {
        console.log("Error fetching the api");
      });
  }, [page]);

  return (
    <body>
      <div className="link">
        <Link to="/Article">Articles</Link>
        <Link to="/Author">Authors</Link>
      </div>

      {results.map(result => (
        <div className="short" key={result._id}>
          <Link to={`/Article/${result._id}`}>
            <h2 className={styles.title}>{result.title}</h2>
          </Link>

          <h4 className={styles.name}>{result.name.display}</h4>
          <p className={styles.date}>{result.date}</p>
          <hr></hr>
        </div>
      ))}
      <div>
        <button onClick={() => setPage(page - 1)}>&lt;</button>
        <input type="number" min={1} max={max} value={page} />
        <button onClick={() => setPage(page + 1)}>&gt;</button>
      </div>
    </body>
  );
};

export default Main;
