import React, { useState, useEffect } from "react";

import axios from "../../axios/axios";
import styles from "./Card.module.css";

const Card = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const {
        data: { content, author },
      } = await axios.get();
      setQuote({ content, author });
    } catch (err) {
      alert('service not available');
    }
  };
  const handleOnClick = (event) => {
    event.preventDefault();
    fetchQuote();
  };

  return (
    <div className={styles.container}>
      {quote ? (
        <>
          <p className={styles.quote}>{quote.content}</p>
          <p className={styles.author}>- {quote.author}</p>
        </>
      ) : (
        "Loading..."
      )}

      <button className={styles.button} onClick={handleOnClick}>
        New Quote
      </button>
    </div>
  );
};

export default Card;
