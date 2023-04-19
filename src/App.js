import logo from './logo.svg';
import './App.css';
import './css/sb-admin-2.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import CreateUser from './CreateUser';
import Users from './Users';
import Userview from './Userview';
import EditUser from './EditUser';
import Login from './Login';
function App() {
  return (
    <BrowserRouter>
    <div id='wrapper'>
<Sidebar />
    <div id='content-wrapper' class='d-flex flex-column'>
<div id='content'>
<Topbar />
    <Routes>
    <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/create-user' element={<CreateUser/>}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/users/users:id' element={<Userview/>}/>
      <Route path='/users/edit/:id' element={<EditUser/>}/>
 
    </Routes>
    
     


      
    </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
