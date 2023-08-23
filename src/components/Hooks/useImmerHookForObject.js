import { useImmer } from 'use-immer';
// If copying ***** objects ***** in code gets tedious,
// you can use a library like Immer to reduce repetitive code
// go to react.dev >> new documentation >> section >> adding interactivity >> see example there

// If copying ***** arrays ***** in code gets tedious, you can use a library like Immer to reduce repetitive code

export default function Form() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  console.log('here it is >>>', person);

  return (
    <div className="flex flex-col mt-5 ml-20">
      <label>
        Name:
        <input
          className="bg-gray-200 ml-3 px-3"
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          className="bg-gray-200 ml-3 px-3 mt-1"
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          className="bg-gray-200 ml-3 px-3 mt-1"
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          className="bg-gray-200 ml-3 px-3 mt-1"
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
        style={{ width : '200px', height: '200px' }}
        className="my-4"
      />
    </div>
  );
}
