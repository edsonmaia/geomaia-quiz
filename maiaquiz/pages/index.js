/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  // console.log('Retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>MaiaQuiz!</title>
      </Head>
      <QuizContainer>

        <QuizLogo />

        <Widget>

          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(evento) => {
              evento.preventDefault();
              router.push(`/quiz?name=${name}`);
              // console.log('Fazendo uma submisao pelo react');
              // router manda para a proxima pagina
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(evento) => setName(evento.target.value)}
                placeholder="Diz ai o seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`JOGAR ${name}`}
              </Button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget>

          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da imersão fez.</p>
            <ul>
              <li>clebinhodj/showdomilhaoalura</li>
              <li>mariafullstack/imersao-alura</li>
            </ul>
          </Widget.Content>
        </Widget>

        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/edsonmaia/geomaia-quiz" />
    </QuizBackground>
  );
}
