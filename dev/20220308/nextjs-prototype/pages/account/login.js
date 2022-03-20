import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Register()
{
    return(
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
            <Row className="justify-content-center">
                <Col sm={5}>
                    <Form.Group className="mb-3" controlId="nick">
                        <Form.Label>Your nickname</Form.Label>
                        <Form.Control type="text" placeholder="Enter your nickname" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={5}>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={5}>
                    <Button className="mb-3 text-center" type="submit">Login</Button>
                </Col>
            </Row>

        </Container>
    )
}