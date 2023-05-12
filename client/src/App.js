import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Create from './components/Create.jsx';
import Display from './components/Display';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [users,setUsers]=useState([]);
  const [userData, setuserData] = useState({
    firstName:'',
    lastName:'',
    Avatar:'',
    StudentNumber:''
  });
  const [Id,setId]=useState(0);
  const [isCreate,setisCreate]=useState(true);


  const getdata = async () =>{
  const response = await axios.get("https://crudmernwebapp.onrender.com/user/getall");
  console.log(response.data.users);
  setUsers(response.data.users);
}
  useEffect(() => {
  getdata();
  }, [users]);
  return (
    <div className="App">
      <Header />
    <Create isCreate={isCreate} setisCreate={setisCreate} Id={Id} setId={setId} users={users} setUsers={setUsers} userData={userData} setuserData={setuserData}/>
    <Display isCreate={isCreate} setisCreate={setisCreate} Id={Id} setId={setId} users={users} setUsers={setUsers} userData={userData} setuserData={setuserData}/>
    <Footer />
    </div>
  );
}

export default App;
