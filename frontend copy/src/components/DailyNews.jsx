import React, { useState, useEffect } from 'react';

function DailyNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.currentsapi.services/v1/latest-news?country=in&language=en&apiKey=-ruj7Zm3Ihg20D7eyprm3uVKHtZc-mWLw-9nUk-YqIH2bJJW`
        );
        const data = await response.json();
        
        if (data.news) {
          setNews(data.news.slice(0, 5));
        } else {
          setNews([]);
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
      }
      setLoading(false);
    }

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.newsContainer}>
      <h2 style={styles.newsTitle}>Latest Agriculture News</h2>
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} style={styles.article}>
            {article.image && (
              <img src={article.image} alt="News" style={styles.image} />
            )}
            <div style={styles.articleContent}>
              <h3 style={styles.headline}>{article.title}</h3>
              <p style={styles.description}>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Read more
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No news available at the moment.</p>
      )}
    </div>
  );
}

const styles = {
  newsContainer: {
    backgroundColor: '#121212',
    color: '#e0e0e0',
    padding: '15px',
    borderRadius: '8px',
    width: '80%',
    margin: '20px auto',
  },
  newsTitle: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#00adb5',
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
  },
  article: {
    display: 'flex',
    marginBottom: '20px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#333',
    background: 'linear-gradient(135deg, #111, #444)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
  },
  image: {
    width: '150px',
    height: '100px',
    marginRight: '15px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  articleContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  headline: {
    fontSize: '18px',
    color: '#00adb5',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  link: {
    color: '#00adb5',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default DailyNews;
