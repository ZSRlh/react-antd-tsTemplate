import React, { ReactElement, Component, FC} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

interface Props {}
const Home = ({}: Props): ReactElement => {
  return <>Home
    {/* <Switch>
      <Route exact path="/page2/sub1">subpage 2-1</Route>
      <Route exact path="/page2/sub2">subpage 2-2</Route>
      <Route exact path="/page2/sub3">subpage 2-3</Route>
  </Switch> */}
  </>
}

export default Home;