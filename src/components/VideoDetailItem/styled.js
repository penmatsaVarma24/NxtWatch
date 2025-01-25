import styled from 'styled-components'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

export const HomeContainer = styled.div`
    min-height: 100vh;
`

export const ContentContainer = styled.div`
    min-height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top:80px;
`

export const VideoDetailContainer = styled.div`
    min-height: 90vh;
    width:80%;
    margin-left:300px;
    background-color: #f1f1f1;
    margin-top:4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const NavContainer = styled.div`
    min-height: 92%;
    width:20%;
    position: fixed;
    left:0;
`

export const HomeHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  color: white;
  padding-top: 15px;
  text-align: center;
  z-index: 1000;
`

export const PlayerContainer = styled.div`
    width: 90%;
`

export const TitleItem = styled.p`
    width:90%;
    font-weight: bold;
    font-size:24px;
`

export const ViewsLikesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
`

export const ViewsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:20%;
`

export const LikesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:30%;
`

export const LikeItem = styled.p`
    display: flex;
    align-items: center;
`

export const DisLikeItem = styled.p`
    display: flex;
    align-items: center;
`

export const SavedItem = styled.p`
    display: flex;
    align-items: center;
`

export const ViewItem = styled.p``

export const PublishItem = styled.p``

export const LikeIcon = styled(AiOutlineLike)`
    color: #475569;
    margin-right: 10px;
`

export const DisLikeIcon = styled(AiOutlineDislike)`
    color: #475569;
    margin-right: 10px;
`

export const SavedIcon = styled(BiListPlus)`
    color: #475569;
    margin-right: 10px;
`

export const LineThrough = styled.hr`
    border-bottom: 1px solid #94a3b8;
    width:90%;
`

export const ChannelContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 90%;
    padding: 20px 5px 20px 5px;
    margin-bottom: 20px;
`

export const ProfileImage = styled.img`
    width: 5%;
`

export const ChannelContentContainer = styled.div`
    width:90%;
`

export const ChannelName = styled.h1`
    font-weight: bold;
    font-size: 24px;
`

export const ChannelSubs = styled.p`
    color: #64748b;
`

export const ChannelDescription = styled.p`
    color: #212121;
`

export const LoaderContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 80vh;
    width: 100%;
`
