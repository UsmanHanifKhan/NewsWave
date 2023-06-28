import { useEffect, useState } from 'react';

const NetflixSearch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '25bfb726camsh1af0ef007d7bb94p1ec940jsn907c028437dd',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Netflix Search Results</h1>
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default NetflixSearch;
