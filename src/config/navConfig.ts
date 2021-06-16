import { JSXElementConstructor, ReactElement } from "react";

import Nav1Home from '../pages/Nav1/home';
import Nav1Page1 from '../pages/Nav1/page1';
import Nav1Page2 from '../pages/Nav1/page2';
import Nav1Page3 from '../pages/Nav1/page3';

import Nav2Home from '../pages/Nav2/home';
import Nav2Page1 from '../pages/Nav2/page1';
import Nav2Page2Sub1 from '../pages/Nav2/page2Sub1';
import Nav2Page2Sub2 from '../pages/Nav2/page2Sub2';
import Nav2Page3 from '../pages/Nav2/page3';

import Nav3Home from '../pages/Nav3/home';
import Nav3Page1 from '../pages/Nav3/page1';
import Nav3Page2 from '../pages/Nav3/page2';
import Nav3Page3 from '../pages/Nav3/page3';

export interface MenuInfo {
  key?: string,
  title: string,
  linkTo: string,
  text: string,
  children?: MenuInfo[],
  component?: JSXElementConstructor<ReactElement>

}

export const menuList: Array<MenuInfo[]> = [
  [
    {
      key: '1',
      title: 'Home',
      linkTo: '/',
      text: 'Home',
    }
  ],
  [
    {
      key: '1',
      title: 'Nav1/Home',
      linkTo: '/nav1',
      text: 'Home',
      component: Nav1Home
    },
    {
      key: '2',
      title: 'Nav1/Option1',
      linkTo: '/nav1/page1',
      text: 'Option1',
      component: Nav1Page1
    },
    {
      key: '3',
      title: 'Nav1/Option2',
      linkTo: '/nav1/page2',
      text: 'Option2',
      component: Nav1Page2
    },
    {
      key: '4',
      title: 'Nav1/Option3',
      linkTo: '/nav1/page3',
      text: 'Option3',
      component: Nav1Page3
    }
  ],
  [
    {
      key: '1',
      title: 'Nav2/Home',
      linkTo: '/nav2',
      text: 'Home',
      component: Nav2Home
    },
    {
      key: '2',
      title: 'Nav2/Option1',
      linkTo: '/nav2/page1',
      text: 'Option1',
      component: Nav2Page1
    },
    {
      key: '3',
      title: 'Nav2/Option2',
      linkTo: '/nav2/page2',
      text: 'Option2',
      children: [
        {
          key: '3-1',
          title: 'Nav2/Option2/sub1',
          linkTo: '/nav2/page2/sub1',
          text: 'Sub Option1',
          component: Nav2Page2Sub1
        },
        {
          key: '3-2',
          title: 'Nav2/Option2/sub2',
          linkTo: '/nav2/page2/sub2',
          text: 'Sub Option2',
          component: Nav2Page2Sub2
        },
      ]
    },
    {
      key: '4',
      title: 'Nav2/Option3',
      linkTo: '/nav2/page3',
      text: 'Option3',
      component: Nav2Page3
    }
  ],
  [
    {
      key: '1',
      title: 'Nav3/Home',
      linkTo: '/nav3',
      text: 'Home',
      component: Nav3Home
    },
    {
      key: '2',
      title: 'Nav3/Option1',
      linkTo: '/nav3/page1',
      text: 'Option1',
      component: Nav3Page1
    },
    {
      key: '3',
      title: 'Nav3/Option2',
      linkTo: '/nav3/page2',
      text: 'Option2',
      component: Nav3Page2
    },
    {
      key: '4',
      title: 'Nav3/Option3',
      linkTo: '/nav3/page3',
      text: 'Option3',
      component: Nav3Page3
    }
  ],
]

const menuMap = new Map([
  ['/', 0],
  ['/nav1', 1],
  ['/nav2', 2],
  ['/nav3', 3]
]);

export { menuMap }