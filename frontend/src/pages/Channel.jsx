import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { ChannelInfo } from '../components/ChannelInfo'
import { MiniSideBar } from '../components/MiniSideBar'
import { SetContext } from '../App'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
export const Channel = () => {
    const { id } = useParams();
    const { toggle } = useContext(SetContext)
    return (
        <div className="bg-white flex">
            {toggle ? <Sidebar /> : <MiniSideBar />}
            <ChannelInfo id={id} />
        </div>

    )
}
