
import './App.css';
import BottonsList from './component/BottonsList';
import CarsList from './component/CarsList';

function App() {
  let desc =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
  return (
    <div className="App">
      <BottonsList
      description ={desc}
      
      />

      <CarsList/>
    </div>
  );
}

export default App;
