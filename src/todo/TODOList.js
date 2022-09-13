import React, { useReducer } from 'react';
import {connect} from 'react-redux';


export class TodoList extends React.Component {
constructor(props){
    super(props);
}

    render() {
        return <>
           <p> Todo List</p>
           <span>{this.props.name}</span>
           <button onClick={this.props.propFunc}>Increment</button>
           <p></p>
        </>
    }
}

const mapStateToProp = (stateOfStore) =>{
const propOfComp = {name:stateOfStore.count};
return propOfComp;
}


const mapDispatchToProp = (dispatch) => 
({ propFunc: ()=> dispatch({type:'increment', payload:2}) });


export default connect(mapStateToProp,mapDispatchToProp)(TodoList);




