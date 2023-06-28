import {  useEffect, useState } from "react";
import "./NewsItem.css";
import '../../App.css'
import Loading from "../Loading/Loading";
import PropTypes from 'prop-types';
const NewsItems = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading , setIsLoading] = useState(true)
  useEffect(() => {
    fetchData();

    setIsLoading(true)
    setInterval(() => {
      setIsLoading(false);
    }, 3000);
  },[page]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        // ` https://api.themoviedb.org/3/movie/popular?api_key=5eae00d436dcadbfea72517ca09fe60a&language=en-US&page=1`
        `https://newsapi.org/v2/everything?q=${props.search}&apiKey=1a64bc961a644d079c5c374da45255d2&page=${page}&pageSize=8`
      );
      const result = await response.json();
      setData(result.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    
    <>
    {isLoading ? (<Loading />) : (
      <div className="container">
        <div className="news-items">
          {data.map((item) => (
            <div className="card news-item" key={item.id} style={{ width: "18rem" }}>
              <img
                src={
                  item.urlToImage === null
                    ? "https://media.zenfs.com/en/coindesk_75/039b1b7c44c930ffcdeaee3993c0c156"
                    : item.urlToImage
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.title === null ? item.title : item.title.slice(0, 50)}
                  ...
                </h5>
                <p className="card-text">
                  {item.description === null
                    ? item.description
                    : item.description.slice(0, 80)}
                  ...
                </p>
                <a href={item.url} target="blank" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between mt-5">
          <button type="button" className="btn btn-dark btn-sm" onClick={handlePrevious}>
            Previous
          </button>
          <button  type="button" className="btn btn-dark btn-sm" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>)}
    </>
  );
};
NewsItems.propTypes = {
  search: PropTypes.string.isRequired, // Add the prop type validation for 'anime' prop
};
export default NewsItems;
