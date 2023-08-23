import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <div className="mt-10">
        <div className="flex flex-col">
        <label>
          Name:
          <input className="bg-gray-200 px-1 mr-1 mt-1" value={person.name} onChange={handleNameChange} />
        </label>
        <label>
          Title:
          <input className="bg-gray-200 px-1 mr-1 mt-1" value={person.artwork.title} onChange={handleTitleChange} />
        </label>
        <label>
          City:
          <input className="bg-gray-200 px-1 mr-1 mt-1" value={person.artwork.city} onChange={handleCityChange} />
        </label>
        <label>
          Image:
          <input className="bg-gray-200 px-1 mr-1 mt-1" value={person.artwork.image} onChange={handleImageChange} />
        </label>
        </div>
        <p>
          <i>{person.artwork.title}</i>
          {" by "}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
    </>
  );
}
