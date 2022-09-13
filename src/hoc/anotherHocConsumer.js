import {Incrementer} from './hoc';

function AnotherHOCConsumer(props){
    return <div style={{color:props.nameprop}}>
    <span>This is another hoc consumer</span>
    <p>{props.nameprop}</p>
    </div>
}
export default Incrementer(AnotherHOCConsumer);

