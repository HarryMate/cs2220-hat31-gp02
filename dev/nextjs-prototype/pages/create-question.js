import { useState } from "react";
import { Badge, Button, Col, Container, Form, FormControl, Row } from "react-bootstrap"
import { BsUiChecksGrid, BsCheckCircle, IconName } from "react-icons/bs";
import { useFormik } from 'formik';

export default function CreateQuestion() {
    const [questionType, setQuestionType] = useState(1);

    return (
        <>
            <Container className="shadow-lg rounded-3 mt-4">
                <Row className="justify-content-center">
                    <Col sm={5}>
                        <Form.Group className="mb-3" controlId="question">
                            <Form.Label>Question</Form.Label>
                            <Form.Control type="text" placeholder="What is the average..." />
                        </Form.Group>
                    </Col>
                    <Col sm={1}>
                        <Form.Group className="mb-3" controlId="mark">
                            <Form.Label>Mark</Form.Label>
                            <Form.Control type="text" placeholder="5" />
                        </Form.Group>
                    </Col>
                </Row>





                <Row >
                    <Col className="text-center mb-3">
                        <Button variant={questionType == 1 ? "primary" : "outline-primary"} onClick={() => setQuestionType(1)}>
                            <BsUiChecksGrid />
                            {' '}Multiple Choice
                        </Button>
                        <Button className="mx-2" variant={questionType == 2 ? "primary" : "outline-primary"} onClick={() => setQuestionType(2)}>
                            <BsCheckCircle />
                            {' '}True or False
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <h3 className="mb-3">Answers:</h3>
                    </Col>
                </Row>
                {questionType == 1 &&
                    <>
                        <Row className="justify-content-center">
                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="radio" name="correctAnswerIndex" label={<Form.Control type="text" placeholder="Enter email" />} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="radio" name="correctAnswerIndex" label={<Form.Control type="text" placeholder="Enter email" />} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="radio" name="correctAnswerIndex" label={<Form.Control type="text" placeholder="Enter email" />} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-3 justify-content-center">
                            <Col sm={6} className="text-center">
                                <Button >Add another answer</Button>
                            </Col>
                        </Row>

                    </>
                }
                {questionType == 2 &&
                    <>
                        <Row className="justify-content-center">
                            <h3 className="text-center">Answers:</h3>
                        </Row>
                        <Row className="mt-3 justify-content-center">
                            <Col sm={3} className="text-center">
                                <Form.Check
                                    type={'radio'}
                                    value="1"
                                    name={'trueOrFalse'}
                                    label={'TRUE'}
                                />
                            </Col>
                            <Col sm={3} className="text-center">
                                <Form.Check
                                    type={'radio'}
                                    value="1"
                                    name={'trueOrFalse'}
                                    label={'FALSE'}
                                />
                            </Col>
                        </Row>
                    </>
                }





                <Row className="justify-content-center">
                    <Col sm={3}>
                        <Form.Group className="mb-3" controlId="upload">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group className="mb-3" controlId="time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="number" placeholder="30" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <Button className="mb-3" type="submit">Save</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}