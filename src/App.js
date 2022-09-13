import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Login } from './Login';
import { User } from './User/UserCmp';
import  AddTodo  from './todo/AddTODO';
import  TodoList from './todo/TODOList';
import UserFuncCmp from './User/userFuncComp';
import HOCConsumer from './hoc/hocConsumer';
import AnotherHOCConsumer from './hoc/anotherHocConsumer';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = { todolist: '' };
  }


  btnClicked = (name) => {
    this.setState({ todolist: name });
  }

  shouldComponentUpdate(nextprop, nextState) {
    console.log(this.state, nextState);

    if (nextState.todolist == 'test')
      return false;
    else return true;
  }

  componentDidMount() {
    console.log('mount',this.state.todolist);
  }
  
  componentDidUpdate(prevProp, prevState,snap) {
    console.log('snap from update',snap);
    console.log('update');
    if (prevState.todolist !== this.state.todolist) {
      console.log('apicall in update');
    }
    localStorage.setItem('name','123');
  }

  getSnapshotBeforeUpdate(prevProp, prevState){
  console.log('getsnapshot');
  return {scroll:{x:100,y:100}};
  }

  componentWillUnmount(){
    localStorage.clear();
    console.log('unmouinting');
  }

  render() {
    console.log('render');
    return <div>
      <AddTodo addTodo={this.btnClicked} ></AddTodo>
      <TodoList todolist={this.state.todolist}></TodoList>
      <UserFuncCmp ></UserFuncCmp>
      <HOCConsumer name = "AB"></HOCConsumer>
      <AnotherHOCConsumer></AnotherHOCConsumer>


      <p>This is menu</p> 
      <BrowserRouter>
      <ul>
        <li>
      <Link to='/'>Home</Link></li>
      <li><Link to='/addtodo?q=12345'>Addtodo</Link></li>
      <li><Link to='/hocconsumer'>hocconsumer</Link></li>
      <li><Link to='/anotherhocconsumer'>anotherhocconsumer</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<p>Choose correct path</p>}></Route>
        <Route path='/addtodo' element={<AddTodo></AddTodo>}>
          <Route path=':name' element={<AddTodo></AddTodo>}></Route>
        </Route>
        <Route path='/hocconsumer' element={<HOCConsumer name = "ABC"></HOCConsumer>}></Route>
        <Route path='/anotherhocconsumer' element={<AnotherHOCConsumer></AnotherHOCConsumer>}></Route>
        <Route path= '/*' element={<p>This is in correct path</p>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  }
}

export default App;


