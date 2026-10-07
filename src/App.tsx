import styled from "styled-components";
import "./App.css";
import Asteranks from "./components/asterank.tsx";
import type { Asteroid } from "./interfaces/asteroid.ts";
import { useEffect, useState } from "react";


const AsteroidDiv=styled.div`
  display: flex;
  //flex-direction: column;
  //justify-content: center;
  width: 80vw;
`;

export default function App() {
  const [count, setCount] = useState<Asteroid[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch(
          "https://www.asterank.com/api/asterank?query={%22e%22:{%22$lt%22:0.1},%22i%22:{%22$lt%22:4},%22a%22:{%22$lt%22:1.5}}&limit=20"
      );
      const results: Asteroid[] = await rawData.json();
      setCount(results);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, []);


  return (
    <AsteroidDiv>
      <Asteranks data={count}/>
    </AsteroidDiv>
  )
}