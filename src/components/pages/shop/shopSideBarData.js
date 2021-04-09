import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [


    {
        title: 'Part Selection',
        path: '/shop',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'CPU',
                path: '/shop',
            },
            {
                title: 'CPU Cooler',
                path: '/shop',
            },
            {
                title: 'Motherboard',
                path: '/shop',
            },
            {
                title: 'Memory',
                path: '/shop',
            },
            {
                title: 'Storage',
                path: '/shop',
            },
            {
                title: 'Video Card',
                path: '/shop',
            },
            {
                title: 'Case',
                path: '/shop',
            },
            {
                title: 'Power Supply',
                path: '/shop',
            },
            {
                title: 'Operating System',
                path: '/shop',
            },
            {
                title: 'Optical Drive',
                path: '/shop',
            },
        ]
    }
]
