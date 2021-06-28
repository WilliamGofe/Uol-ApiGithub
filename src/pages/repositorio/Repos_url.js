import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { Box } from '@material-ui/core';
import '../../master.css'
import { TextButton, ButtonEnter } from '../../theme/Tema';
import { BackgroundDiv, BoxInfoRepo, NamePage, BoxGrid, IconBack } from '../../theme/Tema';
import  ArrowBack from '../../components/Components';
import styled from 'styled-components';

 const DivStarred_repo = styled.div`
display:flex ;
justify-content:center;
`
export const BackgroundRepo = styled.div`
background-color: #292929;
`

function Repos_url() {
  const params = useParams().username
  const [infoRepo, setInfoRepo] = useState([])
  const history = useHistory()
  const [starred, setStarred] = useState([])
  useEffect(() => {
    user_repo()
    validStarred()
  }, [])

  const user_repo = () => {
    axios.get(`https://api.github.com/users/${params}/repos`)
      .then((res) => {
        setInfoRepo(res.data)

      }).catch((err) => {
        alert(err)

      })
  }

  const map_repositorios = infoRepo.map((repo) => {
    return (
      <BoxInfoRepo key={repo.id}>
        <p id='nameRepo'>{repo.name}</p>

      </BoxInfoRepo>

    )
  })
 
  const validStarred = () => {
    axios.get(`https://api.github.com/users/${params}/starred`)
      .then((res) => {
        setStarred(res.data)

      }).catch((err) => {
        alert(err.messege)

      })
  }

  const goStarred = () => {
    if (starred.length === 0) {
      alert("Não há Starred's")
    } else {
      history.push(`/users/${params}/starred`)
    }

  }

  return (
    <BackgroundRepo>
      <Box bgcolor='white' height='100px'>
        <NamePage className='iconP'>Repositórios</NamePage>
      </Box>
      <BoxGrid>
        {map_repositorios}
      </BoxGrid>
    <ArrowBack/>
      <DivStarred_repo display='flex' justifyContent='center'>
        <ButtonEnter onClick={goStarred}>
          <TextButton >Starred</TextButton>
        </ButtonEnter>
      </DivStarred_repo>

    </BackgroundRepo>

  );
}

export default Repos_url;