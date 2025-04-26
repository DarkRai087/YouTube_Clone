import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export const ProfileModal = ({ setIsToken, setProfileModal, isToken }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-stone-100 p-3 z-1000 absolute top-13 right-8  flex flex-col gap-3 rounded-md cursor-pointer">

            <Link to={`/channel/${isToken}`}>
                <div
                    onClick={() => {
                        setProfileModal(false);
                    }}
                    className="flex gap-2 items-center">
                    <CgProfile className="text-xl" />
                    <span>Profile</span>
                </div></Link>
            <div onClick={() => {
                navigate("/");
                setTimeout(() => {
                    setProfileModal(false);
                    setIsToken(null);
                    localStorage.clear();
                }, 1000)
                axios.post("http://localhost:3000/api/user/signout", {}, { withCredentials: true })
                    .then((res) =>
                        toast.success(res.data.msg))
                    .catch((err) => console.log(err));
            }}
                className="flex gap-2 items-center">
                <FiLogOut className="text-xl" />
                <span>Logout</span>
            </div>
            <div className="flex gap-2 items-center">
                <IoSettingsOutline className="text-xl" />
                <span>Setting</span>
            </div>
            <div className="flex gap-2 items-center">
                <IoIosHelpCircleOutline className="text-xl" />
                <span>Help</span>
            </div>
            <ToastContainer theme="dark" />
        </div>
    )
}
