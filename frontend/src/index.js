// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import App from './App';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         {/* <Route path="/about" element={<About />} /> */}
//         {/* Add more routes as needed */}
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
