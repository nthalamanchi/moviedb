import './App.css';
import Footer from './components/Footer/Footer';
import MovieDetails from './components/Moviedetails/Moviedetails';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
      <MovieDetails/>
      <Footer/>
     </div>
  );
}

export default App;
