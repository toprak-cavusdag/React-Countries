import './App.css';
import { Routes as Router, Route } from 'react-router';

function App() {
  return (
    <main className='App'>
      <Router>
        <Route path='/' element={<Header />}></Route>
      </Router>
    </main>
  );
}

export default App;
