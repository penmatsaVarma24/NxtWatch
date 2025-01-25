import styled from 'styled-components'

import {FaMoon} from 'react-icons/fa'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 40px 15px 0px;
    
`

export const LogoImage = styled.img`
    width:45%;
    margin-left:-20px;
`

export const ThemeButton = styled.button`
    background-color: transparent;
    border:0px;
    cursor: pointer;
`

export const LogoutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:15%;
`

export const StyledFaMoon = styled(FaMoon)`
    font-size: 26px;
    color: black;
`

export const ProfileImage = styled.img`
    width:18%;
    cursor: pointer;
`

export const LogoutButton = styled.button`
    padding: 5px 16px 5px 16px;
    border: 1px solid #3b82f6;
    color: #3b82f6;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
`

export const PopupContainer = styled.div``

export const PopupSubContainer = styled.div`
    background: #ffffff;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    box-shadow: 4px 4px 4px 4px #616e7c;
`

export const PopupPara = styled.p`
    font-weight: bold;
    
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const CancelButton = styled.button`
    width:30%;
    background-color: transparent;
    border: 1px solid  #909090;
    color: #909090;
    padding: 8px 12px 8px 12px;
    border-radius: 5px;
    cursor: pointer;
`

export const ConfirmButton = styled.button`
    width:30%;
    background-color: #3b82f6;
    color:  #ffffff;
    padding: 8px 12px 8px 12px;
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
`
