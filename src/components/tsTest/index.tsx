import React, { ReactElement, FC } from 'react';
import { Button } from 'antd';
// import '../../App.css';


interface Props {

}

export default function TsTest({}: Props): ReactElement {
  return <div className="App">
    <Button type="primary">Button</Button>
  </div>
}