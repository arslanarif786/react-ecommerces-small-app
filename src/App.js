import './App.css';
import logo from './logo.svg';
import Card from './components/Card'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { Product } from './components/Product'
import Counter from "./components/Hooks/useStateHook"
import ObjectWithUseState from "./components/Hooks/useStateHookForObject"
import ObjectWithUseImmer from "./components/Hooks/useImmerHookForObject"
import ArrayWithUseState from "./components/Hooks/useStateHookWithArray"
import ArrayWithUseImmer from "./components/Hooks/useImmerHookWithArray"
import UseContextAPI from "./components/Hooks/useContext/useContextHook"
import UseReducer from "./components/Hooks/useReducerHook"
import UseEffect from "./components/Hooks/useEffect"
import mac1 from "./assets/mac1.jpeg"
import mac2 from "./assets/mac2.jpeg"
import mac3 from "./assets/mac3.jpeg"
import mac4 from "./assets/mac4.jpeg"
import mac5 from "./assets/mac5.jpeg"

function App() {
  const isLoggedIn = true;      // its true or false value handle the application routes
  const data = [
    { id: 1, title: 'Card 1', description: 'This is the description for card 1.', image: mac1},
    { id: 2, title: 'Card 2', description: 'This is the description for card 2.', image: mac2, favourite: 'Latest' },
    { id: 3, title: 'Card 3', description: 'This is the description for card 3.', image: mac3 },
    { id: 4, title: 'Card 4', description: 'This is the description for card 4.', image: mac4, favourite: 'Latest' },
    { id: 5, title: 'Card 5', description: 'This is the description for card 5.', image: mac5 },
    { id: 6, title: 'Card 6', description: 'This is the description for card 6.', image: mac5 },
    { id: 7, title: 'Card 7', description: 'This is the description for card 7.', image: mac4, favourite: 'Latest' },
    { id: 8, title: 'Card 8', description: 'This is the description for card 8.', image: mac3 },
    { id: 9, title: 'Card 9', description: 'This is the description for card 9.', image: mac1 },
    { id: 10, title: 'Card 10', description: 'This is the description for card 10.', image: mac2, favourite: 'Latest' },
    { id: 11, title: 'Card 11', description: 'This is the description for card 11.', image: mac2, favourite: 'Latest' },
    { id: 12, title: 'Card 12', description: 'This is the description for card 12.', image: mac1 },
    { id: 13, title: 'Card 13', description: 'This is the description for card 13.', image: mac3 },
    { id: 14, title: 'Card 14', description: 'This is the description for card 12.', image: mac2, favourite: 'Latest' },
    { id: 15, title: 'Card 15', description: 'This is the description for card 15.', image: mac5 }
  ];

  // Filtered data >>>>>>> just only latest data of laptops
  const latestData = data.filter(ele =>
    ele.image === mac2 || ele.image === mac4
  );

  // Conditional Rendering IF CASE
  // This case is generely useful for login,signup,forgot password pages etc.
  if(!isLoggedIn) return (
    <div className="flex justify-center">
      <p className="font-bold text-lg mt-20">Go to App.js file and set "isLoggedIn = true" to Login the system</p>
    </div>
  );

  // Conditional Rendering ELSE CASE
  // This case is generely useful for home page,dashboard page and other inside application pages
  else return (
    <>
      <Navbar />
      <div className="mt-6 ml-8 text-3xl">Products</div>

      <div className="flex flex-wrap justify-center">
        {/******* Applying Loop to the component *******/}
        {data.map((item) => (                     ////// replace 'data' with 'latestData' for latest laptops
          //********// passing props to child component...
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            favourite={item.favourite}
          />
        ))}
      </div>

      <Product />

      {/**********  useState hook covered in this component  *********/}
      <div className="text-xl mx-5 mt-10">
        <b> Concept of useState Hook: </b>
        <Counter />
      </div>


      {/*********  Object handling With useState Hook covered in this component  *********/}
      <div className="text-xl mx-5 mt-10">
        <b> Concept of ObjectWithUseState Hook: </b>
        <ObjectWithUseState />
      </div>

      {/*********  useImmer hook covered in this component  *********/}
      <div className="text-xl mx-5 mt-10">
        <b> Concept of ObjectWithUseImmer Hook ........ Very Easy Syntax with useImmer hook: </b>
        <ObjectWithUseImmer />
      </div>
      

      {/*********  Array handling With useState Hook covered in this component  *********/}
      <div className="text-xl mx-5 mt-10">
        <b> Concept of ArrayWithUseState Hook: </b>
        <ArrayWithUseState />
      </div>


      {/*********  Array handling With useImmer Hook covered in this component  *********/}
      <div className="text-xl mx-5 mt-10">
        <b> Concept of ArrayWithUseImmer Hook ........ Very Easy Syntax with useImmer hook: </b>
        <ArrayWithUseImmer />
      </div>

      {/*********  useContext Hook covered in this component  *********/}
      <div className='mx-5 mt-10'>
        <b> Concept of useContext Hook </b>
        <UseContextAPI />
      </div>


      {/*********  useReducer Hook covered in this component  *********/}
      <div className='mx-5 mt-10'>
        <b> Concept of useReducer Hook </b>
        <UseReducer />
      </div>

      {/*********  useEffect Hook covered in this component  *********/}
      <div className='mx-5 mt-10'>
        <UseEffect />
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App;
