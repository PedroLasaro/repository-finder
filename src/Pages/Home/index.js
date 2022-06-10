import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

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
        navigation('./Repositories', { replace: true });
      }).catch(err => { setError(true) });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className='userInput' placeholder='user' value={user} onChange={e => { setUser(e.target.value) }} />
        <S.Button type='button' onClick={handleSearch}>search</S.Button>
      </S.Content>
      {error ? <S.ErrorMsg>User Not Found, Try again</S.ErrorMsg> : ""}
    </S.HomeContainer>
  );
}