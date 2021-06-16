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
  
  const [menu, setMenu] = useState<Array<MenuInfo>>(menuList[menuMap.get(initPathKey) as number]);
  
  const onClickNav = (p: any) => {
    const { key } = p;
    setMenu(menuList[menuMap.get(key) as number]);
  }
  
  const [nav1MenuState, setNav1MenuState] = useState('');
  const [nav2MenuState, setNav2MenuState] = useState('');
  const [nav3MenuState, setNav3MenuState] = useState('');
  
  const onNavSideMenuChange = (p: any) => {
    const dirs = p.key.split("/");
    const firstDir = dirs[1];
    const suffixDir = dirs.slice(2).join('/');

    switch (firstDir) {
      case 'nav1': setNav1MenuState(suffixDir ? `/${suffixDir}` : ''); break;
      case 'nav2': setNav2MenuState(suffixDir ? `/${suffixDir}` : ''); break;
      case 'nav3': setNav3MenuState(suffixDir ? `/${suffixDir}` : ''); break;
      default: break;
    }

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
          defaultSelectedKeys={[initPathKey]}
        >
          <Menu.Item key="/" onClick={onClickNav}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="/nav1" onClick={onClickNav}><Link to={`/nav1${nav1MenuState}`}>Nav1</Link></Menu.Item>
          <Menu.Item key="/nav2" onClick={onClickNav}><Link to={`/nav2${nav2MenuState}`}>Nav2</Link></Menu.Item>
          <Menu.Item key="/nav3" onClick={onClickNav}><Link to={`/nav3${nav3MenuState}`}>Nav3</Link></Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/nav1">
            <Nav1 menuInfos={menuList[1]} onItemChange={onNavSideMenuChange} /> 
          </Route>
          <Route path="/nav2">
            <Nav2 menuInfos={menuList[2]} onItemChange={onNavSideMenuChange} />
          </Route>
          <Route path="/nav3">
            <Nav3></Nav3>
          </Route>
        </Switch>
      </Content>
      {/* <Layout>
        <Sider style={{ overflow: 'scroll' }}>
          <DMenu menuInfos={menu} onNav1MenuChange={onNav1SideMenuChange} />
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
      </Layout> */}
    </Layout>
  )
}

export default withRouter(Demo);