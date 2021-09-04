import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
const Conn = require('./models/conn/conn');

const port = 3000;

app.listen(process.env.PORT || port, ()=>{
  console.info(`Servidor rodando na porto ${port}`);
})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
