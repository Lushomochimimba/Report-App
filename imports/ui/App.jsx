import React, { Component } from 'react';



export default ({main}) => {
  return(
    <div id='app'>
      {React.createElement(main)}
    </div>
  )
};