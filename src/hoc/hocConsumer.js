import React from 'react';
import {Incrementer} from './hoc';

class HOCConsumer extends React.Component{
    constructor(props){
        super();
    }
    render(){
    return <div style={{color:this.props.nameprop}}>
    <span>This is hoc consumer</span>
    <p>{this.props.nameprop}</p>
    <p>{this.props.xyz.name}</p>
    </div>
    }
}
const WithHOC = Incrementer(HOCConsumer);
export default WithHOC;