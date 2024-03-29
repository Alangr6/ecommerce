import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialState, reducer } from './components/reducer/Reducer';
import { StateProvider } from './components/reducer/StateProvider';

const root = document.getElementById('root');
ReactDOM.render(
  
    <StateProvider initialState={initialState} reducer={reducer}>
    <App/>
    </StateProvider>
  ,
  root
);

