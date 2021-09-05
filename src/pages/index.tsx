import React, { ReactElement, useState } from 'react';
import {
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

const {
  Header,
  Content,
  Footer,
  Sider
} = Layout;

interface Props extends RouteComponentProps{}

const Demo = (props: Props): ReactElement => {
  
  const initPathKey = `/${props.location.pathname.split('/')[1]}`;
  
  const [menu, setMenu] = useState<Array<MenuInfo>>(menuList[menuMap.get(initPathKey) as number]);
  
  const onClickNav = (p: any) => {
    const { key } = p;
    setMenu(menuList[menuMap.get(key) as number]);
  };
  
  const [nav1MenuState, setNav1MenuState] = useState('');
  const [nav2MenuState, setNav2MenuState] = useState('');
  const [nav3MenuState, setNav3MenuState] = useState('');
  
  const onNavSideMenuChange = (p: any) => {
    const dirs = p.key.split('/');
    const firstDir = dirs[1];
    const suffixDir = dirs.slice(2).join('/');

    switch (firstDir) {
    case 'nav1': setNav1MenuState(suffixDir ? `/${suffixDir}` : ''); break;
    case 'nav2': setNav2MenuState(suffixDir ? `/${suffixDir}` : ''); break;
    case 'nav3': setNav3MenuState(suffixDir ? `/${suffixDir}` : ''); break;
    default: break;
    }

  };

  return (
    <Layout style={{ height: '100vh' }} >
      <Header className="header" style={{ display: 'flex', padding: '0px' }}>
        <div className="logo"
          style={{
            color: 'white',
            width: '200px',
            textAlign: 'center'
          }}>logo</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[initPathKey]}
        >
          <Menu.Item key="/" onClick={onClickNav}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="/nav1" onClick={onClickNav}><Link to={`/nav1${nav1MenuState}`}>Nav1</Link></Menu.Item>
          <Menu.Item key="/nav2" onClick={onClickNav}><Link to={`/nav2${nav2MenuState}`}>Nav2</Link></Menu.Item>
          <Menu.Item key="/nav3" onClick={onClickNav}><Link to={`/nav3${nav3MenuState}`}>Nav3</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ overflow: 'scroll' }}>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/nav1">
            <Nav1 menuInfos={menuList[menuMap.get('/nav1') as number]} onItemChange={onNavSideMenuChange} /> 
          </Route>
          <Route path="/nav2">
            <Nav2 menuInfos={menuList[menuMap.get('/nav2') as number]} onItemChange={onNavSideMenuChange} />
          </Route>
          <Route path="/nav3">
            <Nav3 menuInfos={menuList[menuMap.get('/nav3') as number]} onItemChange={onNavSideMenuChange} />
          </Route>
        </Switch>
      </Content>
      <Footer style={{
        backgroundColor: '#041527',
        color: 'white',
        height: '64px',
        textAlign: 'right'
      }}>
        Footer ©2021 Create by Zsr
      </Footer>
    </Layout>
  );
};

export default withRouter(Demo);