import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../index.module.css';

const Main = (props) => {
    const results = props.results;

    return (
        <body>

            <div className="link">
                <Link to="/Articles">Articles</Link>
                <Link to="/Authors">Authors</Link>
            </div>

            {results.map((result) =>
                <div className='short' key={result._id}>
                    <Link to={`/Blogg?id=${result._id}`}>
                        <h2 className={styles.title} >{result.title}</h2>
                    </Link>
                    <h4 className={styles.name} >{result.name}</h4>
                    <p className={styles.date} >{result.date}</p>
                    <hr></hr>
                </div>
            )}
            </body>
    )
}

export default Main