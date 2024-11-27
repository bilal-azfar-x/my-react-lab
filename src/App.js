import './Components/App.css'
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/footer';

function App () {
  return (
    <div className="App">
    <Header/><hr></hr>
    <Content/><hr></hr>
    <Footer/>
    </div>
  );
}

export default App;