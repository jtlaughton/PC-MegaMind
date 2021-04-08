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
        path: 'builders',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'CPU',
                path: '/cpu_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'CPU Cooler',
                path: '/cpuCooler_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Motherboard',
                path: '/motherboard_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Memory',
                path: '/memory_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Storage',
                path: '/storage_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Video Card',
                path: '/videoCard_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Case',
                path: '/case_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Power Supply',
                path: '/powerSupply_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Operating System',
                path: '/operatingSystem_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Optical Drive',
                path: '/opticalDrive_buildersGuide',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
        
    }
]
