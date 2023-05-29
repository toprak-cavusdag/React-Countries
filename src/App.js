import './App.css';
import { Routes as Router, Route } from 'react-router';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import CountryDetail from './pages/country-detail/CountryDetail';
function App() {
  return (
    <main className='App'>
      <Router>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/:code' element={<CountryDetail />} />
        </Route>
      </Router>
    </main>
  );
}

export default App;
