import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";
import Modal from "../../components/Modal/Modal";
import CardWrapper from "../../components/CardWrapper/CardWrapper";

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  gender: string;
  location: object;
  origin: object;
  species: string;
  status: string;
}

const HomePage: React.FC = function () {
  const [info, setInfo] = useState<Array<ICharacter>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number>(1);

  async function showModal(cardId: number) {
    await setShow(true);
    await setCardId(cardId);
  }

  async function hideModal() {
    await setShow(false);
    if (!show) {
      document.body.style.overflow = "scroll";
    }
  }

  async function getData() {
    setIsLoaded(false);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      if (response.status !== 404) {
        const data = await response.json();
        const results = data.results;
        setInfo(results);
        setTimeout(() => {
          setInfo(results);
          setIsLoaded(true);
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData().catch((err) => console.log(err));
  }, [query]);

  function handleSearchQuery(data: string) {
    setQuery(data);
    getData().catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="searchBar-wrapper">
        <SearchBar handleSearch={handleSearchQuery} />
      </div>
      <div className="cards-wrapper" data-testid="cards">
        <CardWrapper data={info} isLoaded={isLoaded} cardOnClick={showModal} />
        {show && (
          <Modal
            name={info[cardId].name}
            gender={info[cardId].gender}
            image={info[cardId].image}
            location={Object.values(info[cardId].location)[0]}
            origin={Object.values(info[cardId].origin)[0]}
            species={info[cardId].species}
            status={info[cardId].status}
            key={cardId}
            show={show}
            handleClose={hideModal}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
