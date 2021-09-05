import React, { ReactElement } from 'react';
import {
  Menu
} from 'antd';
import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';
import { MenuInfo } from '../../config/navConfig';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

interface Props extends RouteComponentProps {
  onItemChange: MenuClickEventHandler,
  menuInfos: MenuInfo[]
}

const {
  SubMenu
} = Menu;

function SideMenu(props: Props): ReactElement {
  
  const {
    menuInfos,
    location,
    onItemChange
  } = props;

  const initPathKey = location.pathname;

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
        onClick={onItemChange}
      >
        <Link to={linkTo}>{text}</Link>
      </Menu.Item>;
  };

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[initPathKey]}
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
  );
}

export default withRouter(SideMenu);