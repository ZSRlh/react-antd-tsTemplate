import React, { ReactElement, useState } from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  useRouteMatch,
  withRouter
} from 'react-router-dom';
import {
  Layout,
  Breadcrumb
} from 'antd';
import { MenuInfo, menuMap, menuList } from '../../config/navConfig';
import SideMenu from '../../components/SideMenu';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

const {
  Content,
  Footer,
  Sider
} = Layout;

interface Props extends RouteComponentProps {
  menuInfos: MenuInfo[],
  onItemChange: MenuClickEventHandler
}

const Nav3 = ({ menuInfos, onItemChange, location }: Props): ReactElement => {

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

  const initContentTitle: string[] = location.pathname.split('/').filter((e: string): boolean => !!e)
  const [contentTitle, setContentTitle] = useState<string[]>(initContentTitle);
  
  const menuListParse = (menuInfos: MenuInfo[]): MenuInfo[] => {
    let menuList: MenuInfo[] = [];
    for (let i = 0; i < menuInfos.length; i++) {
      const menuInfo: MenuInfo = menuInfos[i];
      menuList = menuList.concat(menuInfo?.children ? menuListParse(menuInfo.children) : menuInfo)
    }
    return menuList;
  }

  const handleItemChange = (p: any) => {
    const title = p.key.split('/').filter((e: string) => !!e);
    setContentTitle(title);
    onItemChange(p);
  }

  const menuIndex: number = menuMap.get('/nav3') as number;

  return (
    <Layout style={{ height: '100%' }} >
      <Sider style={{ overflow: 'scroll' }}>
        <SideMenu onItemChange={handleItemChange}  menuInfos={menuInfos}></SideMenu>
      </Sider>
      <Layout >
        <Breadcrumb style={{ margin: '10px 20px 5px' }} >
          {
            contentTitle.map((e: string): ReactElement => <Breadcrumb.Item>{e}</Breadcrumb.Item>)
          }
        </Breadcrumb>
        <Content style={{
          margin: '5px 20px 20px',
          backgroundColor: 'white',
          overflow: 'scroll'
        }} >
          <Switch>
            {
              menuList?.[menuIndex] ? menuListParse(menuList[menuIndex]).map((menu: MenuInfo, index: number): ReactElement => 
                <Route key={index} exact path={menu.linkTo} component={menu?.component} />
              ) : null
            }
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(Nav3);