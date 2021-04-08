import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    
    {
        title: 'Overview',
        path: '/buildersGuide',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Suggested Builds',
        path: '/suggestedBuilds',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Part Selection',
        path: '/buildersGuide',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'CPU',
                path: '/cpu',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'CPU Cooler',
                path: '/cpuCooler',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Motherboard',
                path: '/motherboard',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Memory',
                path: '/memory',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Storage',
                path: '/storage',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Video Card',
                path: '/videoCard',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Case',
                path: '/case',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Power Supply',
                path: '/powerSupply',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Operating System',
                path: '/operatingSystem',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Optical Drive',
                path: '/opticalDrive',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
        
    }
]
