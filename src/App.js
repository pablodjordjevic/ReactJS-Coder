import './components/Header/Header'
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Header/> 
      <ItemListContainer greeting="Bienvenidos" />
      <ItemCount stock= {9} initial= {1}/>
    </div>
  );
}

export default App;
