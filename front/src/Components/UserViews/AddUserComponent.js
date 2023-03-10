import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import req3 from '../../Services/UserServices';

export default function AddUser() {
    const[FName,SetFname]=useState("")
    const[LName,SetLname]=useState("")
    const[Email,SetEmail]=useState("")
    const[Password,SetPssword]=useState("")
    const navigate=useNavigate()
   
    async function SubmitUser(e)
    {e.preventDefault()
      try{
        
        const p={
          "FName":FName,
          "LName":LName,
          "Email":Email,
          "password":Password,
        }
        console.log(p)
      await req3.Addone(p)
      navigate("/")
      }catch(e)
      {
         console.log(e)
      }
    
    }
    return (
      <Form onSubmit={SubmitUser}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter " value={FName}  onChange={(e)=>SetFname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter User  last name" value={LName}  onChange={(e)=>SetLname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" placeholder="Enter User Email" value={Email}  onChange={(e)=>SetEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter User Password" value={Password}  onChange={(e)=>SetPssword(e.target.value)} />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}
