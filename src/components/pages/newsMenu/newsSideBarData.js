import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [

    {
        title: 'All News',
        path: '/news',
    },
    {
        title: 'Part Selection',
        path: null,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'CPU',
                path: '/cpu_news',
            },
            {
                title: 'CPU Cooler',
                path: '/cpuCooler_news',
            },
            {
                title: 'Motherboard',
                path: '/motherboard_news',
            },
            {
                title: 'Memory',
                path: '/memory_news',
            },
            {
                title: 'Storage',
                path: '/storage_news',
            },
            {
                title: 'Video Card',
                path: '/videoCard_news',
            },
            {
                title: 'Case',
                path: '/case_news',
            },
            {
                title: 'Power Supply',
                path: '/powerSupply_news',
            },
            {
                title: 'Operating System',
                path: '/operatingSystem_news',
            },
            {
                title: 'Optical Drive',
                path: '/opticalDrive_news',
            },
        ]
    }
]
