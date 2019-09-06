import React from "react";
import styles from "../index.module.css";

const Article = props => {
  const results = props.results;
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("id");

  const data = results.filter(iteam => iteam._id === myParam)[0];

  if (!data) {
    return null;
  }

  return (
    <body className="post">
      <div>
        <h2 className={styles.title}>{data.title}</h2>
        <h4 className={styles.name}>{data.name}</h4>
        <p className={styles.date}>{data.date}</p>
        <p className={styles.post}>{data.post}</p>
      </div>
    </body>
  );
};

export default Article;
