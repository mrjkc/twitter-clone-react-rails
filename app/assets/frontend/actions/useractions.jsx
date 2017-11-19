import React from 'react';
import API from "../API";

export default{
  getAllUsers() {
    console.log(1, "UserActions");
    API.getAllUsers();
  }
}
