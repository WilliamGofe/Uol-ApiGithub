import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';
import { BackgroundDiv,BoxInfoRepo, NamePage, BoxGrid } from '../../theme/Tema'
import ArrowBack from '../../components/Components'
import {BackgroundRepo} from '../repositorio/Repos_url'

function Starred() {
  const params = useParams().username
  const [starred, setStarred] = useState([])
  const history = useHistory()

  useEffect(() => {
    handle_starred()

  })

  const handle_starred = () => {
    axios.get(`https://api.github.com/users/${params}/starred`)
      .then((res) => {
        if (res.data.length === 0) {
          alert("não há starred's")
          history.push(`/home/users/${params}`)
        }
        setStarred(res.data)

      }).catch((err) => {
        alert(err.messege)

      })
  }

  const map_starred = starred.map((starred) => {
    return (
      <BoxInfoRepo key={starred.id}>
        <p id='iconP'>{starred.name}</p>

      </BoxInfoRepo>

    )
  })

  return (
    <BackgroundRepo>
      <Box bgcolor='white' height='100px'>
        <NamePage className='iconP'>Starred</NamePage>
      </Box>
      <BoxGrid display='flex'>
        {map_starred}
      </BoxGrid>
      <ArrowBack/>

    </BackgroundRepo>
  );
}

export default Starred;