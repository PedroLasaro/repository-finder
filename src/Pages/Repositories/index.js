import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const [lang, setLang] = useState([]);
  const [url, setURL] = useState("");
  const navigation = useNavigate();
  let x = 0;

  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    let repositoriesLang = localStorage.getItem("language");
    let repositoriesURL = localStorage.getItem("url");
    if (repositoriesName === null) {
      navigation("/", {replace: true});
    } else {
      setLang(JSON.parse(repositoriesLang));
      setRepositories(JSON.parse(repositoriesName));
      setURL(JSON.parse(repositoriesURL));
      console.log(url)
      localStorage.removeItem("url")
      localStorage.removeItem("repositoriesName");
      localStorage.removeItem("Language");
    }
  }, [navigation]);

  function language(){
    if (lang[x-1] === null){
      return "null"
    }else{return lang[x-1]}
  }

  return (
    <S.Container>
      <S.Title>GitHub Repositories</S.Title>
      <S.Container>
        {repositories.map(repository => (++x && <S.H3 hreg={url[x-1]}><S.A href={url[x-1]}>Repository {x}: {repository} <S.P>language: {language()}</S.P> </S.A></S.H3>))}
      </S.Container>
      <S.LinkHome to="/">Return</S.LinkHome>
    </S.Container>
  );
}
