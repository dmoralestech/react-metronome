// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Metronome from './Metronome';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<Metronome />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import { render } from 'react-dom';
import { compose, map, prop, curry, reduce, pipe } from 'ramda';

const combine = curry((c, o) => x =>
{
   console.log('combine', c, 'o', o, 'x', x);
    return (
  <div>
    {c(x)} {o(x)}
  </div>
)});

const combineComponents = (...args) => {
  const [first, ...rest] = args;
  return reduce((acc, c) => {
      console.log('reduce acc: ', acc, 'c: ', c);
      return combine(acc, c); }, first, rest);
};

const state = {
  year: '2016',
  title: 'Random stuff',
  todos: [{ id: 1, text: 'foo' }, { id: 2, text: 'bar' }],
};

const getTodos = prop('todos');

const Header = title => <h1>A Todo List: {title}</h1>;
const List = items => <ul>{items}</ul>;
const Item = todo => <li key={todo.id}>{todo.text}</li>;
const Footer = text => <div>{text}</div>;

const TodoHeader = pipe(s => s.title, Header);
const TodoList = pipe(getTodos, compose(List, map(Item)));
const TodoFooter = pipe(s => s.year, Footer);

const App = combineComponents(TodoList, TodoHeader, TodoFooter);
render(<App {...state} />, document.getElementById('root'));
