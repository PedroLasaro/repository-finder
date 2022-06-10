import React ,{useEffect,useState}from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const navigation = useNavigate();
  let x = 0;

  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    if(repositoriesName !== null){
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.removeItem("repositoriesName");
    } else {
      navigation("/", { replace: true });
    }
  },[navigation]);

  return (
    <S.Container>
    <S.Title>GitHub Repositories</S.Title>
      <S.List>
        {repositories.map(repository => (<S.ListItem>Repositório {x}: {repository}</S.ListItem>))}
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  );
}
