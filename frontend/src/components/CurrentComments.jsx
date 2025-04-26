import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { relativeTime } from '../utils/util';
import axios from 'axios';

export const CurrentComments = ({ _id, comment, userId, createdAt, setSubmit, setDeleteComment, deleteComment }) => {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(23);
    const [modal, setModal] = useState(false);
    const id = localStorage.getItem("userId")
    const modifyComment = () => {
        id === userId._id && setModal(!modal)
    }
    const handleDelete = async () => {
        axios.delete(`http://localhost:3000/api/comment/${_id}`, { withCredentials: true })
            .then(() => {
                setDeleteComment(!deleteComment);
                setModal(!modal);
            })
            .catch((err) => console.log(err))
    }

    const relativePeriod = relativeTime(createdAt);
    return (
        <div className="flex flex-col gap-2 p-4">
            <div className="flex justify-between items-start relative">
                <div className="flex gap-3">
                    <img
                        src={userId.profileUrl}
                        alt="profile"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm font-semibold">@{userId.name} <span className="text-xs text-gray-500 ml-1">{relativePeriod}</span></p>
                        <p className="text-sm mt-1">
                            {comment}
                        </p>
                    </div>
                </div>
                <BsThreeDotsVertical onClick={modifyComment} className="text-gray-500 text-2xl cursor-pointer hover:bg-stone-200 p-1 rounded-full" />
                {modal && <div className="bg-stone-100 rounded-md p-3 absolute z-1000 flex flex-col right-5 top-5 cursor-pointer gap-2">
                    <span className="hover:bg-stone-200 text-center px-2">Edit</span>
                    <span
                        onClick={handleDelete}
                        className="hover:bg-stone-200 text-center px-2"
                    >Delete</span>
                </div>}
            </div>

            <div className="flex items-center gap-6 pl-12 mt-1">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => {
                    setLiked(!liked)
                    setCount(count + 1)
                }}>
                    <AiOutlineLike className="text-black" />
                    <span className="text-sm">{count}</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => {
                    setLiked(!liked)
                    setCount(count - 1)
                }}>
                    <AiOutlineDislike className="text-black" />
                </div>
                <button className="text-sm font-semibold hover:underline">Reply</button>
            </div>
        </div>
    )
}
