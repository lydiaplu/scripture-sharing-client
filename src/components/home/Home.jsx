import React from 'react'
import { Outlet } from 'react-router-dom';
import { FrameContainer, UserPart, PostPart } from './Home.styles'

import UserInfo from '../userInfo/UserInfo'
import PostCreator from '../postCreator/PostCreator'

export default function Home() {

    return (
        <FrameContainer>
            <UserPart>
                <UserInfo />
            </UserPart>

            <PostPart>
                <PostCreator />
                <div>
                    <Outlet />
                </div>
            </PostPart>

        </FrameContainer>
    )
}
