import React, {useEffect, useState } from 'react'
import { Box } from '@material-ui/core';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import reposIcon from '../../img/reposIcon.png'
import followers from '../../img/followers.png'
import following from '../../img/following.png'
import { ButtonEnter, TextButton, IconBackInfo} from '../../theme/Tema';
import { BoxIcons,ImgAvatar,BoxIconRepo,IconDescription,IconFollowing,DivInfos,Div_image_name } from '../../theme/all_infoUser/all_infoUser';



function AllInfoUser() {

  const [userInfo, setUserInfo] = useState()

  const params = useParams().username
  const history = useHistory()

  useEffect(() => {
    autenticacao()
  }, [])

  const autenticacao = () => {
    axios.get(`https://api.github.com/users/${params}`)
      .then((res) => {
        setUserInfo(res.data)
        
      }).catch((err) => {
        alert('Usuário não encontrado')
        history.goBack()
      })
  }
/*

*/
const goRepository = () => {
  if(userInfo.public_repos != 0 ){
    history.push(`/users/${params}/repos`)
  }else{ 
    alert("Não há repositórios a serem mostrados")
  }
}

const goStarred = () => {
  history.push(`/users/${params}/starred`)
}

const BackLoginPage = () => {
  history.goBack()
}

  return (
    <Box>

      <Div_image_name>
        <Box>
          <ImgAvatar src={userInfo && userInfo.avatar_url}></ImgAvatar>

        </Box>
        <Box>
          <p className='p'>#{userInfo && userInfo.login}</p>
        </Box>
      </Div_image_name>
      <Box display = 'flex' onClick = {BackLoginPage}>
        <IconBackInfo src = 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-left-512.png'>
        </IconBackInfo>
    
        
      </Box>
      <DivInfos >
        <BoxIcons>
            <IconDescription
              src={followers}>
            </IconDescription>
          <p className = 'iconP'>
         
            {userInfo && userInfo.followers} Followers
          </p>
        </BoxIcons>
        <BoxIcons>
          <Box>
             <IconFollowing
              src={following}>
            </IconFollowing>
          </Box>
          
          <p className = 'iconP'>
           
            {userInfo && userInfo.following} Following(s)
          </p>
        </BoxIcons>
       
       
        <BoxIconRepo onClick = {goRepository}>
        <Box>
          <IconDescription
            src={reposIcon}>
          </IconDescription>
        </Box>
         
          
          <p className = 'iconP' >
            {userInfo && userInfo.public_repos} Public repositories
          </p>
        </BoxIconRepo>
   </DivInfos>

   <Box display = 'flex' justifyContent = 'center' paddingTop = '32px'>
        <ButtonEnter onClick = {goStarred}>
      <TextButton >Starred</TextButton>
      </ButtonEnter>
      </Box>
    </Box>

  );
}

export default AllInfoUser;