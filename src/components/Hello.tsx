
import * as React from "react";

require('./hello.scss');

interface HelloProps {
  name: string;
}

class Hello extends React.Component<HelloProps, {}> {

  public render() {
    return <div className='header'>Hello, {this.props.name}</div>;
  }

}

export default Hello;
