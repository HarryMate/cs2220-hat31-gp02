import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

export default function CreateQuiz() {
    return (
        <>
            <Container className="shadow-lg rounded-3 mt-4">

                <Row className="justify-content-center">
                    <Col sm={5}>
                        <FloatingLabel className="my-3" controlId="question" label="Quiz title">
                            <Form.Control type="text" placeholder="Quiz title" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Quiz description">
                            <Form.Control
                                as="textarea"
                                placeholder="Quiz description"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col sm={3}>
                    <Button className="mb-3" size="lg">Create and continue</Button>
                    </Col>
                </Row>
            </Container>
        </>

    )
}