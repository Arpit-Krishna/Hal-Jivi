import React, { useEffect, useState } from 'react';

function DailyNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&q=agriculture&apiKey=6b8a186ae09e41598cc1f89493b46f4a`
        );
        const data = await response.json();
        if (data.status === 'ok' && data.articles.length > 0) {
          setNews(data.articles.slice(0, 5));
        } else {
          const fallbackResponse = await fetch(
            `https://newsapi.org/v2/top-headlines?country=in&apiKey=6b8a186ae09e41598cc1f89493b46f4a`
          );
          const fallbackData = await fallbackResponse.json();
          if (fallbackData.status === 'ok') {
            setNews(fallbackData.articles.slice(0, 5));
          } else {
            throw new Error('Unable to fetch fallback news');
          }
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading news...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ backgroundColor: '#262626', padding: '20px', borderRadius: '8px', marginTop: '20px', width: '80%' }}>
      <h2 style={{ color: '#00adb5', fontSize: '24px', textAlign: 'center', marginBottom: '10px' }}>
        Daily Indian Agricultural News
      </h2>
      {news.length === 0 ? (
        <div>No news available at the moment.</div>
      ) : (
        news.map((article, index) => (
          <div key={index} style={{ color: '#ffffff', marginBottom: '15px' }}>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
              />
            )}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00adb5' }}>
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default DailyNews;
