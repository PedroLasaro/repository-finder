import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import Git  from "./GIT.png";

export default function App() {
  const navigation = useNavigate();
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map(repository => repositoriesName.push(repository.name));
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        localStorage.setItem('user', user);
        navigation('./Repositories', { replace: true });
      }).catch(err => { setError(true) });
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Image src={Git} alt='GitHub Logo' ></S.Image>
      </S.Content>
      <S.Content>
        <S.Input className='userInput' placeholder='username' value={user} onKeyDown={handleKeyDown} onChange={e => { setUser(e.target.value) }} />
        <S.Button type='button' onClick={handleSearch}>search</S.Button>
      </S.Content>
      {error ? <S.ErrorMsg>User Not Found, Try again</S.ErrorMsg> : ""}
    </S.HomeContainer>
  );
}