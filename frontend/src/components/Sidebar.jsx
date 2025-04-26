import React, { useEffect, useState } from 'react';
import { SidebarItem } from './SidebarItem';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineVideoSettings } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const [subscriptions, setSubscriptions] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3000/api/video')
            .then((response) => {
                const data = [];
                for (let i = 0; i < 7; i++) {
                    data[i] = response.data.allVideos[i];
                }
                setSubscriptions(data);
            })
    }, [])
    return (
        <div className="bg-white flex flex-col w-[15.5%] p-3 pr-0 h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden scrollbar-thin hidden md:hidden lg:block">
            <div className="w-54 pr-3 pb-3 border-b">
                <Link to="/"><SidebarItem icon={<IoMdHome className="text-2xl" />} title={"Home"} /></Link>
                <SidebarItem icon={<SiYoutubeshorts className="text-2xl" />} title={"Shorts"} />
                <SidebarItem icon={<MdOutlineSubscriptions className="text-2xl" />} title={"Subscription"} />
            </div>
            <div className="w-54 pr-3 pb-3 border-b">
                <div className="flex items-center px-3 py-2 mt-3 rounded-xl hover:bg-stone-100">
                    <span className="inline-flex font-semibold">You</span>
                    <IoIosArrowForward className="mt-1 ml-2" />
                </div>
                <SidebarItem icon={<RiHistoryLine className="text-2xl" />} title={"History"} />
                <SidebarItem icon={<CgPlayList className="text-2xl" />} title={"playlist"} />
                <SidebarItem icon={<MdOutlineVideoSettings className="text-2xl" />} title={"Your videos"} />
                <SidebarItem icon={<RiGraduationCapLine className="text-2xl" />} title={"Your courses"} />
                <SidebarItem icon={<MdOutlineWatchLater className="text-2xl" />} title={"Watch later"} />
                <SidebarItem icon={<AiOutlineLike className="text-2xl" />} title={"Liked videos"} />
            </div>
            <div className="w-54 pr-3 pb-3">
                <div className="flex items-center px-3 py-2 mt-3 rounded-xl hover:bg-stone-100">
                    <span className="inline-flex font-semibold">Subscriptions</span>
                </div>
                {subscriptions && subscriptions.map((subscription) => {
    if (!subscription || !subscription._id || !subscription.userId) {
        return null; // Skip invalid items
    }
    const { _id, userId, title } = subscription;
    return (
        <SidebarItem
            key={_id}
            icon={
                <div className="lg:h-10 lg:w-10 md:h-9 md:w-9 h-8 w-8">
                    {userId && userId.profileUrl ? (
                        <img className="h-full w-full rounded-full" src={userId.profileUrl} />
                    ) : (
                        <div className="h-full w-full rounded-full bg-gray-300" />
                    )}
                </div>
            }
            title={title}
        />
    );
})}
            </div>
        </div>
    )
}
