/**************  Event handling and data passing from parent component in it  ************/

export function Button({person, score, setScore}){

    function increment() {
        setScore(s => s + 1);
      }

    // destructuring...
    const { name, designation } = person;

    // arrow function
    const showMessage = () => {
        alert("Open Inspect and see in the console, Name and designation of user");
        console.log('Person object in child component >>>', "Name is: ", name, "***** Designation is: ", designation);
        increment();
        console.log("here it is score >>> ", score);
    }

    return (
        <button
            className="px-3 py-2 bg-blue-300 rounded-lg border border-solid border-blue-300 hover:bg-blue-400 hover:border-blue-600"
            onClick={showMessage}>
                Get Person
        </button>
    )
}