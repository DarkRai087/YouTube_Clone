import React, { useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { relativeTime } from '../utils/util';


export const VideoSectionCard = ({ thumbnailUrl, userId, title, createdAt, views }) => {
    const relativePeriod = relativeTime(createdAt);
    return (
        <div
            className="flex flex-col h-fit gap-2">
            <div className="h-60">
            <img
  className="rounded-xl w-full h-full"
  src={thumbnailUrl || "https://i.ytimg.com/vi/MbJ72KO5khs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG8APOQQmxh9nasfsJMAjF1uJuMA"}
  alt="Thumbnail"
/>
            </div>
            <div className="flex gap-3">
                <div className="lg:h-10 lg:w-10 md:h-9 md:w-9 h-8 w-8">
                    {userId && userId.profileUrl ? (
                        <img className="h-full w-full rounded-full" src={userId.profileUrl} />
                    ) : (
                        <div className="h-full w-full rounded-full bg-gray-300" />
                    )}
                </div>
                <div className="flex flex-col flex-1">
                    <div className="font-semibold h-10 overflow-hidden"><p>{title}</p></div>
                    <div className="flex text-sm gap-2 text-gray-800">
                        <div>{views} views</div>
                        <div>{relativePeriod}</div>
                    </div>
                </div>
                <div>
                    <HiOutlineDotsVertical className="text-xl" />
                </div>
            </div>
        </div>
    )
}
