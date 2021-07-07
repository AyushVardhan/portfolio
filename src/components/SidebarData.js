import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'About Me',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Blogs',
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Hobbies',
        path: '/products',
        icon: <IoIcons.IoIosWalk/>,
        cName: 'nav-text'
    },
    {
        title: 'Tags',
        path: '/team',
        icon: <FaIcons.FaHashtag/>,
        cName: 'nav-text'
    }
]