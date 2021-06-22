import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add Todo',
    path: '/Add',
    icon: <AiIcons.AiOutlinePlus/>,
    cName: 'nav-text'
  }
];
