import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Request from './pages/Request';
import Agent from './pages/Agent';
import Login from './pages/Login';
import Reports from './pages/Reports';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Order from './pages/Order';
import Channel from './pages/Channel';
import Wallet from './pages/Wallet';
import ManualRequest from './pages/ManualRequest';
import Master from './pages/Master';
import Add from './pages/add';
import AgentDetails from './pages/AgentDetails';
import Orderdetails from './pages/OrderDetails';
import ReportsViews from './pages/ReportsViews';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="router">
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Request" element={<Request/>} />
          <Route exact path="/Agent" element={<Agent/>} />
          <Route exact path="/Reports" element={<Reports/>} />
          <Route exact path="/Inventory" element={<Inventory/>} />
          <Route exact path="/Order" element={<Order/>} />
          <Route exact path="/Channel" element={<Channel/>} />
          <Route exact path="/Wallet" element={<Wallet/>} />
          <Route exact path="/ManualRequest" element={<ManualRequest/>} />
          <Route exact path="/Master" element={<Master/>} />
          <Route exact path="/Add" element={<Add/>} />
          <Route exact path='/Agentdetails' element={<AgentDetails/>} />
          <Route exact path='/Orderdetails' element={<Orderdetails/>}/>
          <Route exact path='/ReportsViews' element={<ReportsViews/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
