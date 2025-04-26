import React, { useEffect } from 'react'
import { CurrentComments } from './CurrentComments'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const Comments = ({ videoId }) => {

    const [comments, setComments] = useState(null);
    const [submit, setSubmit] = useState(false);
    const [comment, setComment] = useState("");
    const [deleteComment, setDeleteComment] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/comment/${videoId}`)
            .then((response) => {
                setComments(response.data.comments);
            }).catch((err) => {
                console.log(err);
            })
    }, [videoId, submit, deleteComment])

    const handleComment = async () => {
        const body = {
            comment,
            videoId
        }
        axios.post("http://localhost:3000/api/comment", body, { withCredentials: true })
            .then((response) => {
            }).catch((error) => {
                toast.error("Please Login First");
            })
    }

    return (
        <div className="space-y-6  w-full h-auto mt-2">
            {comments && <div className="text-xl font-bold">{comments.length} Comments</div>}
            <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-500 text-white text-2xl flex justify-center items-center"><img src={localStorage.getItem("profileUrl")} /></div>
                <div className="w-full space-y-2">
                    <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" placeholder="Add a comment..." className="border-b h-fit w-full outline-none"></input>
                    <div className="flex justify-end gap-5">
                        <div onClick={() => setComment("")} className="px-3 py-2 bg-stone-100 font-semibold hover:bg-stone-200 rounded-full">Cancel</div>
                        <div onClick={() => {
                            comment && handleComment();
                            setComment("");
                            setSubmit(!submit);
                        }} className="px-3 py-2 bg-stone-100 font-semibold hover:bg-stone-200 rounded-full">Submit</div>
                    </div>
                </div>
            </div>

            {comments && comments.map(({ _id, createdAt, comment, userId }) => {
                return < CurrentComments key={_id} _id={_id} comment={comment} userId={userId} createdAt={createdAt} setDeleteComment={setDeleteComment} deleteComment={deleteComment} />
            })}

            <ToastContainer theme='dark' />
        </div>
    )
}
