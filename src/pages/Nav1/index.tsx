import React, { ReactElement, Component, FC} from 'react';
import {
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import {
  Layout,
  Menu,
} from 'antd';
import { MenuInfo, menuList } from '../../config/navConfig';
import SideMenu from '../../components/SideMenu';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';


const {
  Content,
  Footer,
  Sider
} = Layout;

interface Props {
  menuInfos: MenuInfo[],
  onItemChange: MenuClickEventHandler
}

const Nav1 = ({ menuInfos, onItemChange }: Props): ReactElement => {

  interface MatchProps {
    path: string,
    url: string,
    params: object
  }
  const {
    url,
    path,
    params
  }: MatchProps = useRouteMatch();

  const menuListParse = (menuInfos: MenuInfo[]): MenuInfo[] => {
    let menuList: MenuInfo[] = [];
    for (let i = 0; i < menuInfos.length; i++) {
      const menuInfo: MenuInfo = menuInfos[i];
      menuList = menuList.concat(menuInfo?.children ? menuListParse(menuInfo.children) : menuInfo)
    }
    return menuList;
  }
  
  return (
    <Layout>
      <Sider style={{ overflow: 'scroll' }}>
        <SideMenu onItemChange={onItemChange}  menuInfos={menuInfos}></SideMenu>
      </Sider>
      <Layout>
        <Content>
          <Switch>
            {
              menuList?.[1] ? menuListParse(menuList[1]).map((menu: MenuInfo, index: number): ReactElement => {
                return (<Route key={index} exact path={menu.linkTo} component={menu?.component} />)
              }) : null
            }
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Nav1;