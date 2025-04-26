import React, { useContext, useEffect, useState } from 'react'
import { VideoSectionCard } from './VideoSectionCard'
import { SetContext } from '../App'
import { Link } from 'react-router-dom'
import spinner from '../assets/spinner.gif'
import axios from 'axios'



export const VideoSection = () => {
    const { toggle, inputSearch } = useContext(SetContext);
    const [videoData, setVideoData] = useState(null);
    const [tempData, setTempData] = useState(null);


    useEffect(() => {
        axios.get("/api/video").then((response) => {
            setTempData(response.data.allVideos);
            setVideoData(response.data.allVideos);
        }).catch((err) => {
            console.error(err);
        })
    }, [])


    useEffect(() => {
        if (tempData) {
            console.log(inputSearch)
            setVideoData(
                tempData.filter(({ title }) =>
                    title.toLowerCase().includes(inputSearch.toLowerCase())
                )
            );
        }
    }, [inputSearch, tempData])

    const filters = ["APIs", "Computer Science", "Podcasts", "Music", "Gaming", "Mixes", "Live", "Recruitment", "News", "Stocks", "Ideas", "Property", "Cricket", "Comedy", "Recently Uploaded", "Watched", "Near to you"]
    return (
        <div className="h-[calc(100vh-56px)] overflow-y-scroll overflow-x-hidden flex-1">
            <div className="bg-white sticky top-0 px-5 flex">

                <div className="flex gap-3 py-3 w-[100vw-16px]  overflow-x-scroll scrollbar-none">
                    <div onClick={() => setVideoData(tempData)} className="flex justify-center items-center cursor-pointer"><p className="whitespace-nowrap px-3 py-1 w-fit h-fit rounded-md text-sm font-semibold bg-black text-white">All</p></div>
                    {filters.map((item, index) => {
                        return <p key={index}
                            onClick={() => {
                                setVideoData(tempData);
                                setVideoData(tempData.filter((video) => {
                                    return video.tags.includes(item);
                                }));
                            }}
                            className="whitespace-nowrap px-3 py-1 w-fit h-fit rounded-md text-sm font-semibold bg-stone-100 cursor-pointer">{item}</p>
                    })}
                </div>
            </div>
            {videoData ? <div className={toggle ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 md:scrollbar lg:scrollbar scrollbar-none" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5 md:scrollbar lg:scrollbar scrollbar-none"}>
                {
                    videoData.map(({ thumbnailUrl, title, userId, createdAt, views, videoUrl, _id }) => {
                        return <Link key={_id} to={`/watch/${_id}`}><VideoSectionCard thumbnailUrl={thumbnailUrl} title={title} userId={userId} createdAt={createdAt} views={views} videoUrl={videoUrl} /></Link>
                    })
                }
            </div> : <div className="bg-white text-5xl flex justify-center items-center w-full h-[calc(100vh-120px)]"><img src={spinner}></img></div>}

        </div>
    )
}
