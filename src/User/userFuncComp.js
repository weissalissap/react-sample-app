import {useState,useEffect} from  'react';
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';


function UserFuncCmp (props){
    const [name,setName] = useState('test');
    const [age,setAge] = useState(12);
    const param = useParams();

    const counter = useSelector((state)=> state.count);
    const dispatch = useDispatch();
    const Users = ['U1','U2', 'U3'];

    const inc = () => {
        dispatch({type:'increment', payload:2})
      }
   

    useEffect(()=>{
        console.log('mount/update done for first time');
        return()=>{ console.log('snap from update');}
    },[]);

    useEffect(()=>{
        console.log('mount/update done for name');
        
    },[name]);
   
 
    const txtChanged=(e)=>{
        setName(e.target.value);
        setAge(14);
        console.log(name);
    }
    return <>
    <p>This is my function component todo - {param.name}</p>
    <input onChange={txtChanged}></input>
    <p>COunter from store in function : { counter}</p>
    <button onClick={inc}>Increase counter</button>
    <p>Users</p>
    {Users.map((user)=>{ return <p>User is {user}</p>})}
    <p>Users End</p>
    </>
}

export default UserFuncCmp;


let a =[1,2,3,4,5];
for(let i=0; i < 6 ;i++){
    console.log(a[i]);
}

a.forEach((i)=>{
console.log(i);
})

const  b = a.map((i) => {
    console.log(i);
    return i+10;
});




