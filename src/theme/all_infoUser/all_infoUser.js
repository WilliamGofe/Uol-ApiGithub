import styled from "styled-components"

export const ImgAvatar = styled.img`
height: 250px;
width: 270px;
border-radius: 160px;
justify-content: space-evenly;
-webkit-transition: all 1s ease; 
:hover{
  -webkit-transform:scale(1.25); 
}
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
height: 200px;
width: 210px;
padding-top: 12px;
}
`
export const IconDescription = styled.img`
height: 65px;
width: 65px;
padding-right: 24px;
`
export const IconFollowing = styled.img`
height: 120px;
width: 125px;

`
export const BoxIcons = styled.div`
display: flex;
align-items: center;
`
export const BoxIconRepo = styled.div `
display: flex;
align-items: center;
cursor: pointer;
-webkit-transition: all 1s ease; 

:hover{
  -webkit-transform:scale(1.25); 
}
`
export const DivInfos = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
padding-top:150px;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
display: flex;
flex-direction: column;
padding-top: 40px;
}
`
export const Div_image_name = styled.div`
background-color:#1F1F1F ;
height:400px;
color:white;
display:flex;
justify-content:space-evenly;
align-items:center;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
flex-direction: column;

}
`