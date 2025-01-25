import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {MdHome} from 'react-icons/md'

import {FaFire, FaGamepad} from 'react-icons/fa'

import {BiListPlus} from 'react-icons/bi'

export const LeftNavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    min-height:90vh;
    width: 100%;
`

export const RouteListContainer = styled.ul`
    padding-left: 0px;
    height: 60vh;
    width: 100%;
`

export const StyledMdHome = styled(MdHome)`
    font-size: 20px;
    margin-right: 10px;
    width: 15%;
`

export const StyledFaFire = styled(FaFire)`
    font-size: 20px;
    margin-right: 10px;
    width: 15%;
`

export const StyledFaGamepad = styled(FaGamepad)`
    font-size: 20px;
    margin-right: 10px;
    width: 15%;
`

export const StyledFaFolderPlus = styled(BiListPlus)`
    font-size: 30px;
    margin-right: 10px;
    width: 15%;
`

export const ListItem = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    margin: 0px;
    cursor: pointer;
`

export const RoutePara = styled.p`
    font-weight: bold;
    font-size: 16px;
`

export const LinkItem = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    width:100%;
    text-decoration: none;
    color: #231f20;
`
export const NavbarFooterContainer = styled.div`
    justify-self: flex-end;
`
