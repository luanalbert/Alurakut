import React from "react";
import MainGrid from "../src/components/MainGrid/index";
import Box from "../src/components/Box/index";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  AlurakutStyles,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations/index";

function ProfileSideBar(propriedades) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        alt="foto do perfil"
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <p>
        <a
          className="boxLink"
          href={`https://github.com/${propriedades.githubUser}`}
        >
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = "luanAlbert";
  const [comunities, setComunities] = React.useState([
    {
      id: "66666666666",
      title: "Alura",
      image:
        "https://media.glassdoor.com/sqll/2500530/alura-squarelogo-1602197362646.png",
    },
    {
      id: "11111111111111111",
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    },
    {
      id: "222222222222",
      title: "Deus me disse: desce e arrasa",
      image:
        "https://img10.orkut.br.com/community/9c191076aed7ecbf709924dc74ecefac.jpeg",
    },
    {
      id: "3333333",
      title: "Tocava a campainha e corria",
      image:
        "https://img10.orkut.br.com/community/f81e9743f2ad5838d4c1f03b61d7bb8b.jpg",
    },
    {
      id: "444444444444",
      title: "Sou legal, não estou te dando mole",
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/605/063/products/0-nao-sou-legal-to-te-dando-mole1-7888f34a341af4ea4f15499286112061-640-0.jpg",
    },
    {
      id: "55555555",
      title: "Só observo",
      image:
        "https://img10.orkut.br.com/community/9c020f231aa774eb1f097162a0197e81.jpg",
    },
  ]);

  const personsFavorites = [
    "filipedeschamps",
    "rafaballerini",
    "juunegreiros",
    "peas",
    "omariosouto",
    "maykbrito",
    "Gabrielgqa",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem Vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCreateComunity(e) {
                e.preventDefault();
                const formData = new FormData(e.target);

                const formComunities = {
                  id: new Date().toISOString,
                  title: formData.get("title"),
                  image: formData.get("image"),
                };

                const comunitiesUpdates = [...comunities, [formComunities]];
                setComunities(comunitiesUpdates);
                console.log(comunities);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URl para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URl para usarmos de capa"
                />
              </div>
              <div>
                <button>Criar comunidade</button>
              </div>
            </form>
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({personsFavorites.length})
            </h2>
            <ul>
              {personsFavorites.slice(0, 6).map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidade ({comunities.length})</h2>
            <ul>
              {comunities.slice(0, 6).map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
