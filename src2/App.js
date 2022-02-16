import data from "./seasons.json";
import { isWithinInterval } from "date-fns";
import { lazy, useEffect, useState, Suspense } from "react";
import { convertToDate } from "./utils";

import "./App.css";
import SeasonCard from "./components/SeasonCard";
import Button from "./components/Button";
import { Modal } from "./components/Modal";

const NewSeasonCard = lazy(() => import("./components/NewSeasonCard"));

function App() {
  const today = new Date();

  const [season, setSeason] = useState(null);
  const [nextSeason, setNextSeason] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    for (let i = 0; i < data.seasons.length; i++) {
      const start = convertToDate(data.seasons[i].start);
      const end = convertToDate(data.seasons[i].end);
      if (isWithinInterval(today, { start, end })) {
        setSeason(data.seasons[i]);
        setNextSeason(data.seasons[(i + 1) % 4]);
      }
    }
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    season && (
      <div
        className="app_bg"
        style={{ backgroundImage: `url(${season.image})` }}
      >
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
    )
  );
}

export default App;
