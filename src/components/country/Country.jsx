import './country.css';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  searchByRegion,
  showAllCountries,
} from '../../redux/countriesSlice/CountriesAction';
import { Link } from 'react-router-dom';
const Country = () => {
  const { countriesData, loading, success, error, region } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  // const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(showAllCountries());

    // if (success) {
    //   setCountryData(countriesData);
    // }

    if (region) {
      dispatch(searchByRegion(region));
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, region]);

  return (
    <section className='country-container'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        countriesData.length > 0 &&
        countriesData.map((count, i) => {
          return (
            <Link
              // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
              className='country-card'
              key={i}
              to={`${count.cioc}`}
            >
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
