import axios from "axios";

export const updateUser = (id,data) =>{
    axios
    .patch(`http://localhost:5000/user/updateuser/${id}`,data)
    .then(function (response) {
      console.log(response.status, response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const createUser = (data) =>{
    axios.post('http://localhost:5000/user/createUser',data)
      .then(function (response) {
        console.log(response.status, response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  export const deleteUser = (id) =>{
    axios
    .delete(`http://localhost:5000/user/deleteuser/${id}`)
    .then(function (response) {
      console.log(response.status, response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  };