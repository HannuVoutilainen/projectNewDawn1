import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}
  let counter = 1
const refresh = () => {
  ReactDOM.render(
    <App counter={counter} />, 
    document.getElementById('root')
  )
}

/* versio 1
refresh()
counter += 1
refresh()
counter += 1
refresh() 
*/

setInterval(() => {
  refresh()
  counter += 1
}, 1000)

