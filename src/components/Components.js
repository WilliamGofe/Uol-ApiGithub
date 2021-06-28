import { TextButton,ButtonEnter } from '../theme/Tema';
import React from 'react'
import {Box} from '@material-ui/core';
import {IconBack } from '../theme/Tema';
import { useHistory} from 'react-router-dom'


function ArrowBack() {
 
  const history = useHistory()
 
  const goBack = () => {
    history.goBack()
  }

    return (
      <Box display='flex' onClick = {goBack}>
      <IconBack src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-left-512.png'>

      </IconBack>
    </Box>
    )
}
export default ArrowBack;