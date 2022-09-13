import React, { Fragment } from 'react';
import '../App.css'


export class User extends React.Component {
//age=12;
    constructor(props){
        super(props);
       // this.props = {age:14};
        this.state = {userName:'test',age:12}        
    }
    btnClicked =(num1,n2) =>{
        console.log('clicked',num1);
    }
    

    txtChanged=(e)=>{
        this.props.passDataToParent(e.target.value);
        this.age = this.age+1;
        //console.log(this.age);
        if(this.age>12){
        this.setState({userName:e.target.value},()=>{
            console.log('afet',this.props.uname);
        });
        console.log('before',this.state.userName);
        }
    }


    render() {
        return <>
           <p id="id2">Welcome User -  {this.props.uname} - {this.props.age.name}</p>
           <input onChange={this.txtChanged} id= "id1"></input>
           <button onClick={()=>{this.btnClicked(this.props.uname)}}>Click here</button>
        </>
    }
}
/*
1 =pass function as props from parent to child
2 = execute the function from child and pass data as function arguments
3 = collect data from function params and use in it parent*/



