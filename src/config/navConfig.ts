import { JSXElementConstructor, ReactElement } from "react";
import Nav1Home from '../pages/Nav1/home';
import Nav1Page1 from '../pages/Nav1/page1';
import Nav1Page2 from '../pages/Nav1/page2';
import Nav1Page3 from '../pages/Nav1/page3';

export interface MenuInfo {
  title: string,
  linkTo: string,
  text: string,
  children?: MenuInfo[],
  component?: JSXElementConstructor<ReactElement>

}

export const menuList: Array<MenuInfo[]> = [
  [
    {
      title: 'Home',
      linkTo: '/',
      text: 'Home',
    }
  ],
  [
    {
      title: 'Nav1/Home',
      linkTo: '/nav1',
      text: 'Home',
      component: Nav1Home
    },
    {
      title: 'Nav1/Option1',
      linkTo: '/nav1/page1',
      text: 'Option1',
      component: Nav1Page1
    },
    {
      title: 'Nav1/Option2',
      linkTo: '/nav1/page2',
      text: 'Option2',
      component: Nav1Page2
    },
    {
      title: 'Nav1/Option3',
      linkTo: '/nav1/page3',
      text: 'Option3',
      component: Nav1Page3
    }
  ],
  [
    {
      title: 'Nav2/Home',
      linkTo: '/nav2',
      text: 'Home'
    },
    {
      title: 'Nav2/Option1',
      linkTo: '/nav2/page1',
      text: 'Option1'
    },
    {
      title: 'Nav2/Option2',
      linkTo: '/nav2/page2',
      text: 'Option2',
      children: [
        {
          title: 'Nav2/Option2/sub1',
          linkTo: '/nav2/page2/sub1',
          text: 'Sub Option1'
        },
        {
          title: 'Nav2/Option2/sub2',
          linkTo: '/nav2/page2/sub2',
          text: 'Sub Option2'
        },
      ]
    },
    {
      title: 'Nav2/Option3',
      linkTo: '/nav2/page3',
      text: 'Option3'
    }
  ],
  [
    {
      title: 'Nav3/Home',
      linkTo: '/nav3',
      text: 'Home'
    },
    {
      title: 'Nav3/Option1',
      linkTo: '/nav3/page1',
      text: 'Option1'
    },
    {
      title: 'Nav3/Option2',
      linkTo: '/nav3/page2',
      text: 'Option2'
    },
    {
      title: 'Nav3/Option3',
      linkTo: '/nav3/page3',
      text: 'Option3'
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