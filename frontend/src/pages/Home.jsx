import React, { useContext } from 'react'
import { Sidebar } from '../components/Sidebar'
import { MiniSideBar } from '../components/MiniSideBar'
import { VideoSection } from '../components/VideoSection'
import { SetContext } from '../App'

export const Home = () => {
    const { toggle } = useContext(SetContext);
    return (
        <div className="bg-white flex">
            {toggle ? <Sidebar /> : <MiniSideBar />}
            <VideoSection />
        </div>
    )
}
