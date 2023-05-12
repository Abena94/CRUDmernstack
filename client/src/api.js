import axios from "axios";

export const updateUser = (id,data) =>{
    axios
    .patch(`https://crudmernwebapp.onrender.com/user/updateuser/${id}`,data)
    .then(function (response) {
      console.log(response.status, response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const createUser = (data) =>{
    axios.post('https://crudmernwebapp.onrender.com/user/createUser',data)
      .then(function (response) {
        console.log(response.status, response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  export const deleteUser = (id) =>{
    axios
    .delete(`https://crudmernwebapp.onrender.com/user/deleteuser/${id}`)
    .then(function (response) {
      console.log(response.status, response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  };