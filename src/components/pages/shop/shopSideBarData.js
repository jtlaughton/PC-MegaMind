import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [

    {
        title: 'All Parts',
        path: '/shop',
    },
    {
        title: 'Part Selection',
        path: null,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'CPU',
                path: '/cpu_shop',
            },
            {
                title: 'CPU Cooler',
                path: '/cpuCooler_shop',
            },
            {
                title: 'Motherboard',
                path: '/motherboard_shop',
            },
            {
                title: 'Memory',
                path: '/memory_shop',
            },
            {
                title: 'Storage',
                path: '/storage_shop',
            },
            {
                title: 'Video Card',
                path: '/videoCard_shop',
            },
            {
                title: 'Case',
                path: '/case_shop',
            },
            {
                title: 'Power Supply',
                path: '/powerSupply_shop',
            },
            {
                title: 'Operating System',
                path: '/operatingSystem_shop',
            },
            {
                title: 'Optical Drive',
                path: '/opticalDrive_shop',
            },
        ]
    }
]
