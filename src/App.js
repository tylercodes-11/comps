import Dropdown from "./components/Dropdown";

function App() {
   const options = [
      { label: 'Red', value: 'red'},
      { label: 'Green', value: 'green'},
      { label: 'Blue', value: 'blue'}

   ];
   return <Dropdown />
}

export default App;