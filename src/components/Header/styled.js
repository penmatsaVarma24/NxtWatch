import styled from 'styled-components'

import {NavLink} from 'react-router-dom'

import {FaMoon, FaSun, FaFire, FaGamepad} from 'react-icons/fa'

import {IoIosLogOut, IoMdMenu} from 'react-icons/io'

import {IoCloseSharp} from 'react-icons/io5'

import {MdHome} from 'react-icons/md'

import {BiListPlus} from 'react-icons/bi'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px 10px 0px;
  background-color: ${props =>
    props.change === 'light' ? '#ffffff' : '#212121'};
  margin-top: 0px;
`

export const LogoImage = styled.img`
  width: 45%;
  margin-left: -20px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export const StyledLogout = styled(IoIosLogOut)`
  font-size: 26px;
  color: ${props => (props.change === 'light' ? '#000000' : '#ffffff')};
`

export const StyledFaMoon = styled(FaMoon)`
  font-size: 26px;
  color: black;
`

export const StyledLightMode = styled(FaSun)`
  font-size: 26px;
  color: white;
`

export const ProfileImage = styled.img`
  @media (min-width: 768px) {
    width: 18%;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 5px 16px 5px 16px;
    border: 1px solid #3b82f6;
    color: #3b82f6;
    border-radius: 4px;
  }

  @media (max-width: 767px) {
    border: 0px;
  }
`

export const PopupContainer = styled.div``

export const PopupSubContainer = styled.div`
  background-color: ${props =>
    props.change === 'light' ? '#ffffff' : '#212121'};
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 4px 4px 4px 4px #616e7c;
`

export const PopupPara = styled.p`
  font-weight: bold;
  color: ${props => (props.change === 'light' ? '#000000' : '#ffffff')};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const CancelButton = styled.button`
  width: 30%;
  background-color: transparent;
  border: 1px solid #909090;
  color: #909090;
  padding: 8px 12px 8px 12px;
  border-radius: 5px;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  width: 30%;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 8px 12px 8px 12px;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
`

export const PopupMenuContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    width: ;
  }
`

export const MenuButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0px;
  align-self: flex-end;
  justify-self: flex-start;
`

export const PopupMenuSubContainer = styled.div`
  @media (max-width: 767px) {
    background-color: ${props =>
      props.change === 'light' ? '#ffffff' : '#212121'};
    width: 100vw;
    height: 95vh;
    margin-top: 7vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const StyledMenu = styled(IoMdMenu)`
  font-size: 26px;
  color: ${props => (props.change === 'light' ? '#000000' : '#ffffff')};
`

export const StyledMenuClose = styled(IoCloseSharp)`
  font-size: 26px;
  color: ${props => (props.change === 'light' ? '#000000' : '#ffffff')};
`

export const RouteListMenuContainer = styled.ul`
  padding-left: 0px;
  height: 60vh;
  width: 90vw;
`

export const StyledMenuMdHome = styled(MdHome)`
  font-size: 20px;
  margin-right: 10px;
  width: 15%;
  color: ${props => (props.change === 'light' ? 'black' : '#f4f4f4')};
`

export const StyledMenuFaFire = styled(FaFire)`
  font-size: 20px;
  margin-right: 10px;
  width: 15%;
  color: ${props => (props.change === 'light' ? 'black' : '#f4f4f4')};
`

export const StyledMenuFaGamepad = styled(FaGamepad)`
  font-size: 20px;
  margin-right: 10px;
  width: 15%;
  color: ${props => (props.change === 'light' ? 'black' : '#f4f4f4')};
`

export const StyledMenuFaFolderPlus = styled(BiListPlus)`
  font-size: 30px;
  margin-right: 10px;
  width: 15%;
  color: ${props => (props.change === 'light' ? 'black' : '#f4f4f4')};
`

export const ListMenuItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  margin: 0px;
  cursor: pointer;
  width: 100%;
`

export const RouteMenuPara = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: ${props => (props.change === 'light' ? 'black' : '#f4f4f4')};
`

export const LinkMenuItem = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  color: #231f20;
  border-radius: 10px;

  &.active {
    background-color: ${props =>
      props.change === 'light' ? '#d0def5' : '#403e37'}; /* dark bg */
  }
`
