import React, { ReactElement, FC, useState } from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';
import {
  Layout,
  Menu
} from 'antd';

import Home from './Home';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import Nav3 from './Nav3';

import { MenuInfo, menuList, menuMap } from '../config/navConfig';
import DMenu from '../components/DMenu';

const {
  Header,
  Content,
  Footer,
  Sider
} = Layout;

const {
  SubMenu
} = Menu;


interface Props extends RouteComponentProps{}

const Demo = (props: Props): ReactElement => {
  
  const initPathKey = `/${props.location.pathname.split('/')[1]}`;
  console.log(initPathKey);

  const [pathKey, setPathKey] = useState(initPathKey);
  const [menu, setMenu] = useState<Array<MenuInfo>>(menuList[0])
  // const [menu, setMenu] = useState<Array<MenuInfo>>(menuList[0])
  
  const onClickNav = (p: any) => {
    const { key } = p;
    setMenu(menuList[menuMap.get(pathKey) as number])
    setPathKey(initPathKey)
  }

  return (
    <Layout style={{ height: '100vh' }} >
      <Header className="header">
        <div className="logo"
          style={{
            color: 'white'
          }}/>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathKey]}
          // defaultSelectedKeys={['/']}
        >
          <Menu.Item key="/" onClick={onClickNav}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="/nav1" onClick={onClickNav}><Link to="/nav1">Nav1</Link></Menu.Item>
          <Menu.Item key="/nav2" onClick={onClickNav}><Link to="/nav2">Nav2</Link></Menu.Item>
          <Menu.Item key="/nav3" onClick={onClickNav}><Link to="/nav3">Nav3</Link></Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider style={{ overflow: 'scroll' }}>
          <DMenu menuInfos={menu} />
        </Sider>
        <Layout>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/nav1" component={Nav1} />
              <Route exact path="/nav2" component={Nav2} />
              <Route exact path="/nav3" component={Nav3} />
            </Switch>
          </Content>
          <Footer>
            Footer ©2021 Create by Zsr
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(Demo);