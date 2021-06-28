import styled from 'styled-components'

export const BackgroundLogin = styled.div`
background-color: #292929;
height:100vh;
`
export const ImageLogin = styled.img`
background-color: transparent;
width:128px;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
padding-left:134px;
}
`

export const ButtonEnter= styled.button`
height: 56px;
width: 339px;
background-color: #FFCE00;
border-radius: 16px;
border: none;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
margin-bottom: 15px;
}
`
export const TextButton = styled.p`
font-size: 18pt;
color:#030202;
font-family:Verdana, Geneva, Tahoma, sans-serif;
`
export const IconButton = styled.img`
width: 30px;
height: 26px;
padding-left: 8px;
`
export const IconBackInfo = styled.img`
height: 65px;
margin-top: -32px;
cursor: pointer;
animation: go-back 1s infinite alternate;
@keyframes go-back {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50px);
  }
}
`

export const BackgroundDiv = styled.div`
background-color: #292929;
height:96.4vh;

`
export const BoxGrid = styled.div `
 display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 0px; 
grid-gap: 10px;
padding: 8px;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
  grid-template-columns: 1fr 1fr ;  
}
`

export const NamePage = styled.h1`
font-size: 50px;
`
export const BoxInfoRepo = styled.div`
background-color: darkgrey;
padding: 15px;
height: 150px;
display: flex;
justify-content: center;
align-items: center;

`
export const IconBack = styled(IconBackInfo)`
margin-top: -280px;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
visibility: hidden;
}
`