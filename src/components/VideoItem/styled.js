import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 31%;
    margin: 10px;
    height:53vh;
`

export const ThumbnailImage = styled.img`
    width:100%;
`

export const VideoContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const VideoDetailsContainer = styled.div`
    width: 85%;
`

export const ProfileImage = styled.img`
    width: 10%;
    align-self: flex-start;
    margin-top:30px;
`

export const TitlePara = styled.p`
    color: #1e293b;
    font-size: 19px;
    font-weight: bold;
`

export const ChannelName = styled.p`
    color: #64748b;
    margin-bottom: 5px;
`

export const ViewsCountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 0px 0px;
    margin-top:0px;
`

export const ViewsPara = styled.p`
    color: #64748b
`

export const PublishPara = styled.p`
    color: #64748b
`

export const LinkItem = styled(Link)`
    text-decoration: none;
`
