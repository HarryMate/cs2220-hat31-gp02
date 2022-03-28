import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap"
import React, { useState } from 'react'
import axios from 'axios'

const API_URL = "http://localhost:8000/api/";

export default function Register() {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [conPass, setConPass] = useState('')
    let [role, setRole] = useState('')

    let login_token = null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const headers = {
            "Content-Type": `multipart/form-data`,
        };

        let data = new FormData();
        data.append('username', document.getElementById("username").value);
        data.append('email', document.getElementById("email").value);
        data.append('password', document.getElementById("password").value);
        data.append('conPass', document.getElementById("conPass").value);
        data.append('role', 'Quiz Master');

        let result = await axios({
            method: 'post',
            url: 'register',
            baseURL: API_URL,
            data: data,
            headers: headers,
        });

        let response = result.data;

        if (response['success']) {
            console.log(response['debug'])
            console.log("Login Successful");
            login_token = response['token'];
        } else {
            console.log("Failed to Login");
            console.log(response['debug'])
        }

    }

    const get_user = async () => {

        if (login_token) {
            const headers = {
                "Authorization": `Bearer ${login_token}`
            };

            let result = await axios({
                method: 'get',
                url: 'auth-user',
                baseURL: API_URL,
                data: JSON.stringify({}),
                headers: headers,
            });

            let response = result.data;

            console.log(response);

        } else {
            console.log("Login Token is empty");
        }

    }

    return (
        <Container className="shadow-lg rounded-3 my-3">
            <Row>
                <Col>
                    <h2 className="text-center text-primary mt-3">
                        <Badge>
                            Register
                        </Badge>
                    </h2>
                </Col>
            </Row>
            <form onSubmit={(e) => handleSubmit(e)} action="" method="post">
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter your Username" id="username"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your Email" id="email"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter your Password" id="password"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" placeholder="Enter your Password" id="conPass"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <label htmlFor="">Role</label> <br />
                        Quiz Master <input type="radio" value="Quiz Master"/>
                        Quiz Maintainer <input type="radio" value="Quiz Maintainer"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <Button type="submit" className="mb-3 text-center">Register</Button>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}