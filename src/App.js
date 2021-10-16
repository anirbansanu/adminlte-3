import './App.css';
import Header from './modules/main/Header';
import Menu from './modules/main/Menu';
import Dashboard from './modules/main/Dashboard';
import Footer from './modules/main/Footer';

function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Menu/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
