import React from "react";
import { AboutContainer, Card, CardsContainer, Content } from "./About.styles";

export default function About() {
  return (
    <AboutContainer>
      <h1>DEVELOPERS</h1>
      
      <CardsContainer>
        <Card>
          <Content className="content">
            <img src='https://avatars.githubusercontent.com/u/82417025?v=4' alt="profilePicture" />
            <h3>Daniel Mojica</h3>
          </Content>
          <ul>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/danielrmojica"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/drmc47">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <Content className="content">
            <img src='https://avatars.githubusercontent.com/u/87092074?v=4' alt="profilePicture" />
            <h3>Ignacio Suárez</h3>
          </Content>
          <ul>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/ignacio-suarez-barraza-796592169/"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/IgnacioSuarezB">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
      </CardsContainer>
    </AboutContainer>
  );
}