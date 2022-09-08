import { useState } from 'react';
export const Token ={

    setToken({userToken}) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
      },
      
       getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      }
      
    }
