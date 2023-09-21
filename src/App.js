// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import "./styles.css";
import Header from "./Header";
// import LoginForm from './Comp/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Comp/Login";
import Layout from "./Layout";
import Indexpage from "./Comp/Indexpage";
import Registerpage from "./Comp/Registerpage";
import axios  from "axios";

axios.defaults.baseURL="http://localhost:3001"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Indexpage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registerpage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
