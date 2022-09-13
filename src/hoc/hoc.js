import React from 'react';

export const Incrementer = (Cmp) =>{

class NewComp extends React.Component{
    constructor(props){
        super();
    }
    name = 'green';
    render(){
        return <>
        <p>This component is changed</p>
        <Cmp  nameprop = {this.name} xyz={this.props}></Cmp></>
    }
}
    return NewComp;
}