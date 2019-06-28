import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Component/App'

const store = createStore(rootReducer)

// const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog'];

// const element = React.createElement('ol', null, tasks.map((task,index) => React.createElement('li', {key:index},   task))
// );

// const element =
//     <div>
//         <h1> Task List</h1>
//         <ol>
//             {tasks.map((task, index) => <li key={index}> {task} </li>)}
//         </ol>
//     </div>

// ---------------------- class-----------------------
// class List extends Component {
//     render() {
//         return (
//             <ol>
//                 {tasks.map((task, index) => <li key={index}> {task} </li>)}
//             </ol>
//         )
//     }
// }

// class Title extends Component {
//     render(){
//         return <h1> Task List</h1>
//     }
// }

// class Main extends Component{
//     render(){
//        return <div>
//            <Title/>
//              <List/>
//        </div>
//     }
// }
// ReactDOM.render(<Main/>, document.getElementById('root'));

// --------------------------- end of class--------------------------


// ----------------------------props-----------------------------------
// class List extends Component {
//     render() {
//         return (
//             <ol>
//                 {this.props.tasks.map((task, index) => <li key={index}> {task} </li>)}
//             </ol>
//         )
//     }
// }

// class Title extends Component {
//     render(){
//         return <h1> {this.props.title}</h1>
//     }
// }

// class Main extends Component{
//     render(){
//        return <div>
//            <Title title ={'toDos'}/>
//              <List tasks={['Mow the lawn', 'walk the dog']}/>
//              <List tasks={['hose the driveway', 'finish the laundry']}/>
//        </div>
//     }
// }
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));

// ----------------------------------- end of props -----------------------------