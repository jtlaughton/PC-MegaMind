import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [

    {
        title: 'All News',
        path: '/news',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Part Selection',
        path: '/news',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'CPU',
                path: '/cpu_news',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'CPU Cooler',
                path: '/cpuCooler_news',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Motherboard',
                path: '/motherboard_news',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Memory',
                path: '/memory_news',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Storage',
                path: '/storage_news',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Video Card',
                path: '/videoCard_news',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Case',
                path: '/case_news',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Power Supply',
                path: '/powerSupply_news',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Operating System',
                path: '/operatingSystem_news',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Optical Drive',
                path: '/opticalDrive_news',
                icon: <IoIcons.IoIosPaper />,
            },
        ]

    }
]
