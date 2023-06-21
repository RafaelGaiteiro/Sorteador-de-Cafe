import { useState, useEffect, useRef } from "react";
import listOfPeople from "../../repositores/listOfPeople";
import {
  Box,
  BoxTitle,
  ButtonRandom,
  CompanyRandom,
  Container,
  ImgRandom,
  LoadingAnimation,
  NameRandom,
  PersonRandom,
  Table,
  TitleTable,
} from "./styles";
import { getUserAvatar } from "../../services/github";
import gifs from "../../utils/gifs";
import drums from "./../../sounds/drums.mp3";
import secondAudio from "./../../sounds/applause.mp3";
import { Card } from "../../components/Card";

interface IPerson {
  id: number;
  name: string;
  company: string;
  git: string;
  avatar_url?: string;
}

const Coffee = () => {
  const [selectedPerson, setSelectedPerson] = useState<IPerson | null>(null);
  const [showGif, setShowGif] = useState(false);
  const [showSecondAudio, setShowSecondAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);

  const handleDraw = async () => {
    const randomIndex = Math.floor(Math.random() * listOfPeople.length);
    const selected = listOfPeople[randomIndex];
    const avatar_url = await getUserAvatar(selected.git);
    setSelectedPerson({ ...selected, avatar_url });

    setShowGif(true);
    if (audioRef.current) {
      audioRef.current.play();
    }

    setTimeout(() => {
      setShowGif(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setShowSecondAudio(true);
      if (audioRef2.current) {
        audioRef2.current.play();
      }
    }, 5000);

    setTimeout(() => {
      setShowSecondAudio(false);
      if (audioRef2.current) {
        audioRef2.current.pause();
        audioRef2.current.currentTime = 0;
      }
    }, 10000);
  };

  useEffect(() => {
    audioRef.current = new Audio(drums);
    audioRef2.current = new Audio(secondAudio);
  }, []);

  return (
    <>
      <Container>
        <Box>
          <Table>
            <BoxTitle>
              <TitleTable>Deatecs</TitleTable>
            </BoxTitle>
            {listOfPeople.map((person) => (
              <Card key={person.id} name={person.name} company={person.company} />
            ))}
          </Table>
          <ButtonRandom onClick={handleDraw}>Sortear</ButtonRandom>
        </Box>
        <Box>
          {selectedPerson && (
            <PersonRandom>
              {showGif ? (
                <>
                  <LoadingAnimation src={gifs[Math.floor(Math.random() * gifs.length)].gif} alt="Coffee GIF" />
                  <audio ref={audioRef} src={drums} autoPlay />
                </>
              ) : (
                <>
                  <ImgRandom src={selectedPerson.avatar_url} />
                  <NameRandom>{selectedPerson.name}</NameRandom>
                  <CompanyRandom>{selectedPerson.company}</CompanyRandom>
                </>
              )}
              {showSecondAudio && (
                <audio ref={audioRef2} src={secondAudio} autoPlay />
              )}
            </PersonRandom>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Coffee;
