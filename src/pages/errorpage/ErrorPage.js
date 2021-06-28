import { Box} from '@material-ui/core';
import '../../master.css'
import styled from 'styled-components';

const ImgNotFound = styled.img `
height: 120px;
width: 120px;
`
const DivNotFound = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
padding-top: 300px;
`


function ErrorPage(params) {
    return(
        <div>
             <DivNotFound >
           <Box>
            <ImgNotFound src ='https://cdn3.iconfinder.com/data/icons/cat-force/128/cat_hungry.png'></ImgNotFound>
           </Box>
           
            <Box>
              <p className = 'iconP'>Page Not Found</p>  
            </Box>
           
        </DivNotFound> 
        </div>
      
    )
}
export default ErrorPage