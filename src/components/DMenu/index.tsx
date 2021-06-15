import React, { ReactElement, useState, useEffect } from 'react';
import {
  Menu
} from 'antd';
import { 
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';
import {
  MenuInfo
} from '../../config/navConfig';


interface Props extends RouteComponentProps {
  menuInfos: MenuInfo[]
}

const {
  SubMenu
} = Menu;

function DMenu(props: Props): ReactElement {

  const {
    menuInfos,
    location
  } = props;

  const pathKey = location.pathname;

  console.log(menuInfos);

  // const [defaultSelectKey, setDefaultSelectKey] = useState('0');
  // useEffect(() => {
  //   return setDefaultSelectKey('0')
  // }, [defaultSelectKey])

  const menuParse = (menu: MenuInfo, index: string): ReactElement => {
    const title = menu?.title;
    const linkTo = menu?.linkTo;
    const text = menu?.text;
    const children = menu?.children;
    return children ? <SubMenu key={linkTo} title={title}>
      {
        children.map((child, i) => {
          return menuParse(child, `sub${i}`);
        })
      }
    </SubMenu>
    : <Menu.Item
        key={linkTo}
        title={title}
        // onClick={(p) => setDefaultSelectKey(p.key)}
      >
      <Link to={linkTo}>{text}</Link>
    </Menu.Item>
  }

  return (
    <Menu
      theme="light"
      mode="inline"
      // defaultSelectedKeys={[a]}
      selectedKeys={['/']}
      style={{
        height: '100%'
      }}
    >
      {
        menuInfos ? menuInfos.map((menuInfo: MenuInfo, index: number): ReactElement => {
          return menuParse(menuInfo, `${index}`);
        }) : null
      }
    </Menu>
  )
}

export default withRouter(DMenu);