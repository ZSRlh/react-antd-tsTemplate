import React, { ReactElement, FC } from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  Layout,
  Menu
} from 'antd';
import Page2 from '../Page2';

const {
  Header,
  Content,
  Footer,
  Sider
} = Layout;

const {
  SubMenu
} = Menu;


interface Props {}

const Home = ({}: Props): ReactElement => {

  return (
    <BrowserRouter basename="/zsrapp">
      <Layout style={{ minHeight: '100vh' }} >
        <Sider>
          {/* logo 高为64-4px */}
          <div id="logo"
            style={{
              height: "60px",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{ color: 'white', textAlign: "center" }}>logo</div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1" title="Home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" title="Option1">
              <Link to="/page1">Option1</Link>
            </Menu.Item>
            <SubMenu key="3" title="Option2">
              <Menu.Item key="sub1" title="SubTitle1">
                <Link to="/page2/sub1">Sub Options1</Link>
              </Menu.Item>
              <Menu.Item key="sub2" title="SubTitle2">
                <Link to="/page2/sub2">Sub Options2</Link>
              </Menu.Item>
              <Menu.Item key="sub3" title="SubTitle3">
                <Link to="/page2/sub3">Sub Options3</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4" title="Option3">
              <Link to="/page3">Options3</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              color: "white",
              padding: 0,
            }}
          >Header</Header>
          <Content>
            <Switch>
              <Route exact path="/">Home</Route>
              <Route path="/page1">page1</Route>
              {/* <Page2></Page2> */}
              <Route path="/page2/sub1">subpage 2-1</Route>
              <Route path="/page2/sub2">subpage 2-2</Route>
              <Route path="/page2/sub3">subpage 2-3</Route>
              <Route path="/page3">page3</Route>
            </Switch>
          </Content>
          <Footer>
            Footer ©2021 Create by Zsr
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default Home;