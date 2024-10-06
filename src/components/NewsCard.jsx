import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Searchbar from "./Serachbar";

const NewsCard = ({ categories, isDarkMode }) => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const apiKey = "qwPtSjDs7GfR4qPNf2yl5UZZyrdVYSU5zOhpmR5d";
        const response = await axios.get(
          `https://api.thenewsapi.com/v1/news/top?api_token=${apiKey}&locale=us&limit=${limit}&page=${page}&categories=${categories}`
        );

        if (page === 1) {
          setArticles(response.data.data);
        } else {
          setArticles((prevArticles) => [
            ...prevArticles,
            ...response.data.data,
          ]);
        }

        setError(null);
      } catch (error) {
        console.error("Error fetching the news articles:", error);
        setError("Error fetching the news articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [categories, page]);

  useEffect(() => {
    setPage(1);
  }, [categories]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMoreArticles = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div
      className={`p-8 shadow-lg ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-around">
        <h2
          className={`text-1xl md:3xl font-extrabold mb-6 text-center capitalize ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {categories} News
        </h2>
        <Searchbar searchTerm={searchTerm} onSearch={handleSearch} />
      </div>

      {loading && (
        <p className="text-center text-2xl text-blue-500 font-semibold ">
          Loading...
        </p>
      )}

      {error && (
        <p className="flex justify-center items-center text-red-400 mt-4">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, id) => (
            <Link key={id} to={article.url} target="_blank">
              <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow">
                {article.image_url ? (
                  <img
                    src={article.image_url}
                    alt="Article"
                    className="w-full h-52 object-cover rounded-t-lg"
                  />
                ) : (
                  <img
                    src="news2.jpeg"
                    alt="Fallback"
                    className="h-56 w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-md font-semibold text-blue-600 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{article.description}</p>
                  <p className="text-sm text-gray-400 mb-4">
                    {new Date(article.published_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="flex justify-center items-center text-red-400 mt-4">
            No articles found.
          </p>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={loadMoreArticles}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
