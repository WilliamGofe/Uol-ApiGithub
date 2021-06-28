import { Box, IconButton } from '@material-ui/core';
import React, {useState} from 'react'
import Icon from '../../img/Icon.png'
import { useHistory } from 'react-router';
import { BackgroundLogin, ButtonEnter, ImageLogin,TextButton } from '../../theme/Tema';
import '../../master.css'


function LoginPage() {
    const [valueInput, setValueInput] = useState()
 

const history = useHistory()


const goToHomePage = (username) => {
      if(!valueInput){
          alert("Digite o nome do usuário")
      }else{
          history.push(`/home/users/${username}`)
      }
        

}


const handleInput = (e) => {
    setValueInput(e.target.value)
    if(e.key === "Enter"){
        goToHomePage(valueInput)
    }
    }
    return (
        <BackgroundLogin>
            <Box display = 'flex' justifyContent = 'center' flexDirection = 'column'
             alignItems = 'center' paddingTop = '250px'>
                <Box width = '50px' margin = 'auto' marginRight = '980px' marginBottom = '42px'>
                    <ImageLogin src ={Icon}>

                    </ImageLogin>
                    </Box>

                        <Box>
                        <input className = 'inputLogin'
                        placeholder = 'Usuário'
                        required
                        value = {valueInput}
                        onChange = {handleInput}
                        onKeyUp = {handleInput}
                        ></input>
                            </Box>

                            <Box>
                        <ButtonEnter onClick = {() =>goToHomePage(valueInput)}>
                    <TextButton>Entrar</TextButton>
                    <IconButton src = 'https://cdn4.iconfinder.com/data/icons/feather/24/arrow-right-512.png'></IconButton>
                        </ButtonEnter>
                        </Box>
                    <div>
                </div>
            </Box>

        </BackgroundLogin>
    );
}

export default LoginPage;