import './filter.css';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { reset, setRegion } from '../../../redux/countriesSlice/CountriesSlice';

const Filter = () => {
  const region = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Show All'];
  const [filter, setFilter] = useState('');
  const [displayDropDown, setDisplayDropDown] = useState(false);

  const dispatch = useDispatch();

  const handleDropDown = () => {
    setDisplayDropDown(!displayDropDown);
  };

  useEffect(() => {
    if (filter !== '') {
      dispatch(setRegion(filter.toLowerCase()));
    }

    if (filter == 'show all') {
      dispatch(setRegion(''));
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);
  return (
    <section className='filter-container'>
      <div className='filter' onClick={handleDropDown}>
        <input
          type='text'
          readOnly
          placeholder='Filter by Region'
          value={filter}
          className='filter-input'
        />

        <i className='fa-solid fa-angle-down'></i>
      </div>
      {displayDropDown ? (
        <div className='dropdown'>
          {region.map((region, i) => {
            return (
              <div
                key={i}
                className='dropdown-item'
                onClick={() => {
                  setFilter(region);
                  handleDropDown();
                }}
              >
                {region}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
