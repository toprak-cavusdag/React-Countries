import './country.css';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  searchByRegion,
  showAllCountries,
} from '../../redux/countriesSlice/CountriesAction';
import { Link } from 'react-router-dom';
const Country = () => {
  const { countriesData, loading, success, error, region, searchTerm } =
    useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllCountries());

    if (region) {
      dispatch(searchByRegion(region));
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, region]);

  const data = countriesData.filter((item) =>
    item.name.common.toLowerCase().includes(searchTerm)
  );

  console.log(data);
  return (
    <section className='country-container'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.length > 0 &&
        data.map((count, i) => {
          return (
            <Link className='country-card' key={i} to={`${count.cioc}`}>
              <img
                src={count.flags.png}
                alt={count.flags.alt}
                className='country-image'
              />
              <div className='country-content'>
                <h3>{count.name.common} </h3>
                <p>
                  Population: <span>{count.population}</span>
                </p>
                <p>
                  Region: <span>{count.region}</span>
                </p>
                <p>
                  Capital: <span>{count.capital}</span>
                </p>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Country;
