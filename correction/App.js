import React from "react";
import { lazy, useState, Suspense } from "react";
import { getSeason } from "./utils";

import "./App.css";
import SeasonCard from "./components/SeasonCard";
import Button from "./components/Button";
import Modal from "./components/Modal";

const NewSeasonCard = lazy(() => import("./components/NewSeasonCard"));

const [season, nextSeason] = getSeason();

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="app_bg" style={{ backgroundImage: `url(${season.image})` }}>
      <SeasonCard season={season}>
        <Button onClick={toggleModal} label="And After ?" />
      </SeasonCard>
      {modal && (
        <Modal>
          <Suspense fallback={<div>Loading...</div>}>
            <NewSeasonCard season={nextSeason}>
              <Button onClick={toggleModal} label="Got it !" />
            </NewSeasonCard>
          </Suspense>
        </Modal>
      )}
    </div>
  );
}

export default App;
