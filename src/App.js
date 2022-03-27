import './App.css';
import Header from './Components/Header/Header';
import Meals from './Components/Meals/Meals';

function App() {
  return (
    <div>
      <Header></Header>
      <Meals></Meals>
      <div className='questions-ans'>
        <h1>How React Works</h1>
        <p>React organizes a tree when we writing code and this tree is accomplish to do effiecient diff computations on the nodes. React creates two domes one is Virtual DOM and another is Real DOM.  React checks its virtual DOM, makes a list of those changes that need to be made to the Real DOM and does it all in one single process. React automatically changes the associated DOM element when we change data on a React element.
          It re-use elements, attributes, and even styles if possible!  </p>
        <h1>Difference between props and state</h1>
        <p>State is the local state of the component which cannot be accessed and modified outside of the component.on the other hand, Props, make components reusable by giving components the ability to receive data from their parent component in the form of props. Props are immutable but state is mutable. Props are used to pass data to child components but state should not be accessed from child components.Props have better performance but state has worse performance.</p>
      </div>
    </div>
  );
}

export default App;
