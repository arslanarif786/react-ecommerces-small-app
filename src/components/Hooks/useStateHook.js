import { useState } from 'react';
import { Button } from '../Button/Button';
import ToggleButton from '../Button/ToggleButton'
// useState hook is used to handle the reactivity

export default function Counter() {
    const [score, setScore] = useState(0);
    let person = {
      name: 'Arslan',
      designation: 'software engineer'
    }

    // If copying objects in code gets tedious,
    // you can use a library like Immer to reduce repetitive code
    // go to react documentation >> section >> adding interactivity >> see example there
  
    // function increment() {
    //   setScore(score + 1);
    // }

    //******* above function is wrong approach to update the state 'score'
      // console.log(score);  // 0
      // setScore(score + 1); // setScore(0 + 1);
      // console.log(score);  // 0
      // setScore(score + 1); // setScore(0 + 1);
      // console.log(score);  // 0
      // setScore(score + 1); // setScore(0 + 1);
      // console.log(score);  // 0
    //******* the below function to set state is good approach
    
    function increment() {
      setScore(s => s + 1);
    }
  
    return (
      <div>
        <div className="flex justify-center mt-10">
          {/* import Button Component and passing props "Person object" in it */}
          <Button
            person={person}
            score={score}
            setScore={setScore}
            />


        <button
          className="mx-5 px-3 py-2 bg-gray-300 rounded-lg border border-solid border-gray-500 hover:bg-gray-400 hover:border-gray-600"
          onClick={increment}>+1
        </button>

        <button 
        className="px-3 py-2 bg-gray-300 rounded-lg border border-solid border-gray-500 hover:bg-gray-400 hover:border-gray-600"
        onClick={() => {
          increment();
          increment();
          increment();
          increment();
        }}>+4</button>
        <button

        className="mx-5 px-3 py-2 bg-gray-300 rounded-lg border border-solid border-gray-500 hover:bg-gray-400 hover:border-gray-600"
        onClick={() => {
          increment();
          increment();
        }}>+2</button>
        </div>
        <br></br>
        <div className="flex justify-center">
          <h1 className="ml-5 mb-5">Score: {score}</h1>
        </div>

        {/* import Toggle Button Component and use here */}
        <ToggleButton />
      </div>
    )
  }
  