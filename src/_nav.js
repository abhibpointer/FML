import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilList,
  cilHome,
  cilBook,
  cilFile,
  cilListFilter,
  cilDataTransferDown,
  cilDataTransferUp,
  cilListNumbered,
  cilTrash,
  cilUserPlus,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle, CAvatar } from '@coreui/react'
import deletefile from '../src/assets/icon/file.png'


const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard1',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Banner',
  // },
  {
    component: CNavItem,
    name: 'Banners',
    to: '/bannerlist',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Manager list',
    to: '/managerlist',
    icon: <CIcon icon={cilListFilter} customClassName="nav-icon" />
  },
  // {
  //  component:CNavItem,
  //  name: 'Add Manager',
  //  to:'addmanager',
  //  icon:<CIcon icon={cilUserPlus} customClassName="nav-icon"/>
  // },
  {
    component: CNavItem,
    name: 'Customers list',
    to: '/userlist',
    icon: <CIcon icon={cilListNumbered} customClassName='nav-icon' />,

  },
  {
    component: CNavItem,
    name: 'Table Booking',
    to: '/userbooking',
    icon: <CIcon icon={cilBook} customClassName='nav-icon' />,

  },
  {
    component: CNavGroup,
    name: 'Food',
    icon: <CIcon icon={cilList} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: 'Add food excel',
        to: '/addfood',
        icon:<CIcon icon={cilFile} customClassName='nav-icon' />
      },
      {
        component: CNavItem,
        name: 'Download food',
        to: '/downloadfood',
        icon: <CIcon icon={cilDataTransferDown} customClassName='nav-icon' />
      }

    ]
  },

  {
    component: CNavGroup,
    name: 'Drink',
    icon: <CIcon icon={cilList} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: 'Add drink excel',
        to: '/adddrink',
        icon: <CIcon icon={cilFile} customClassName='nav-icon' />,
      },
      {
        component: CNavItem,
        name: 'Download drink',
        to: '/downloaddrink',
        icon: <CIcon icon={cilDataTransferDown} customClassName='nav-icon' />,
      },
      {
        component: CNavItem,
        name: 'Delete Drink Product',
        to: '/deletedrinkproduct',
        icon: <CIcon icon={cilTrash} customClassName='nav-icon' />
      }
    ]
  },

  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   // icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },

]

export default _nav
