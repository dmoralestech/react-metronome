// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Metronome from './Metronome';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<Metronome />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react'
import { render } from 'react-dom'
import { compose, map, prop } from 'ramda'

const List = items => <ul>{items}</ul>
const Item = todo => <li key={todo.id}>{todo.text}</li>
const getTodos = prop('todos')
const TodoList = compose(List, map(Item), getTodos)
const props = {todos: [{id: 1, text: 'foo'}, {id: 2, text: 'bar'}, {id: 3, text: 'baz'}]}

render(<TodoList {...props} />, document.getElementById('root'))