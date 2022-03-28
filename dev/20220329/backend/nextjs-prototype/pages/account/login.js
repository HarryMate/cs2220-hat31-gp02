import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from 'react'
import axios from 'axios'

const API_URL = "http://localhost:8000/api/"

export default function Login() {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    let login_token = null

    const handleSubmit = async (e) => {
        e.preventDefault()

        const headers = {
            "Content-Type": `multipart/form-data`
        };

        let data = new FormData();
        data.append('email', document.getElementById("email").value)
        data.append('password', document.getElementById("password").value)

        let result = await axios({
            method: 'post',
            url: 'login',
            baseURL: API_URL,
            data: data,
            headers: headers,
        });

        let response = result.data

        if (response['success']) {
            console.log("Login Successful")
            login_token = response['token']
        } else {
            console.log(response['debug'])
            console.log("Failed to Login")
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

            console.log("get_user", response);

        } else {
            console.log("Login Token is empty")
        }

    }

    return (
        <Container className="shadow-lg rounded-3 my-3">
            <Row>
                <Col>
                    <h2 className="text-center text-primary mt-3">
                        <Badge>
                            Log in
                        </Badge>
                    </h2>
                </Col>
            </Row>
            <form onSubmit={(e) => handleSubmit(e)} action="" method="post">
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your Email" id="email"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Enter your Password" id="password"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <Button className="mb-3 text-center" type="submit">Login</Button>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}