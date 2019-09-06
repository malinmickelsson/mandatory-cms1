import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../index.module.css";

const Article = (props) => {
	const [article, setArticle] = useState(null);

	console.log("kolla denna ." + props.match.params.id);

    useEffect(() => {
        axios.get(`http://192.168.99.102:8080/api/collections/get/Article?filter[_id]=${props.match.params.id}`)
            .then((res) => setArticle(res.data.entries[0]));

	}, []);


  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <body>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/Author">Author</Link>
      </div>
      <div className="post">
        <h2 className={styles.title}>{article.title}</h2>
        <h4 className={styles.name}>{article.name.display}</h4>
        <p className={styles.date}>{article.date}</p>
        <p className={styles.post}>{<ReactMarkdown source={article.post} />}</p>
      </div>
    </body>
  );
};

export default Article;
