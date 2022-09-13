import React from 'react';
import { useParams } from 'react-router-dom';

// const HOCforParams=(Cmp)=>{
//     const params = useParams();

//     class NewComp extends React.Component{
//         constructor(props){
//             super();
//         }
//         name = 'green';
//         render(){
//             return <>
//             <Cmp  ></Cmp></>
//         }
//     }
//     return NewComp;
// }

// function HOCFunction(Comp){
//     return ()=> <Comp params = {useParams()}></Comp>
// }


export class AddTodo extends React.Component {
constructor(props){
    super(props);
    this.state ={i : 0}
}
txt = ''
    txtChanged = (e)=>{
 this.txt = e.target.value;
 this.setState({i:this.state.i+1})
    }

    btnCLicked = ()=>{
        this.props.addTodo(this.txt);
    }
    componentDidMount(){
        console.log(this.props.params)
    }
   
    render() {
        return <>
           { this.state.i < 5 ? <div><p>Add Todo</p></div>:<p>Remove todo</p>}
           <input onChange={this.txtChanged}></input>
           <button onClick={this.btnCLicked}>Add Todo</button>
           <p></p>
        </>
    }
}

export default AddTodo;
