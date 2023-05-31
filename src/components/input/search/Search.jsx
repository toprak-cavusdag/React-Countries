import './search.css';
import { setSearchTerm } from '../../../redux/countriesSlice/CountriesSlice';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.country);

  const handleInputValueChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <section className='search-container'>
      <div className='search-icon'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </div>

      <input
        type='text'
        placeholder='Search for a country'
        className='search-input'
        value={searchTerm}
        onChange={handleInputValueChange}
      />
    </section>
  );
};

export default Search;
