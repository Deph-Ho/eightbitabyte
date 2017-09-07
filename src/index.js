import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export { Home } from './components/Home';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
