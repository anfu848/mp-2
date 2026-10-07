import styled from "styled-components";
import type {Asteroid} from "../interfaces/asteroid.ts";

const AsteroidDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-between;
    background-color: gray;
`;

const SingleAstDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 20%;
    padding: 2%;
    margin: 1%;
    background-color: darkblue;
    color: whitesmoke;
    border: 3px rebeccapurple solid;
    font: small-caps calc(2px + 1vw) Georgia, serif;
    text-align: center;
`;

export default function Asteranks(props: { data: Asteroid[] }) {

    return (
        <AsteroidDiv>
            {props.data.map((ast: Asteroid) => (
                <SingleAstDiv key={ast.full_name}>
                    <h2>{ast.full_name}</h2>
                    <p>Estimated Diameter: {ast.est_diameter}</p>
                    <p>FIRST Observation: {ast.first_obs}</p>
                    <p>LAST Observation: {ast.last_obs}</p>
                </SingleAstDiv>
            ))}
        </AsteroidDiv>
    );
}
