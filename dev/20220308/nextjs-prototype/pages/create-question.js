import { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
import { Badge, Button, Col, Container, Form, FormControl, Row } from "react-bootstrap"
import { BsUiChecksGrid, BsCheckCircle, IconName } from "react-icons/bs";
import { useFormik } from 'formik';

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function CreateQuestion() {
    const [questionType, setQuestionType] = useState(1);
    const [answerType, setAnswerType] = useState(1);

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
                        <Row className=" mb-3 justify-content-center">
                            <Col sm={3} className="">
                                <Form.Check
                                    type={'radio'}
                                    value="1"
                                    name={'answerType'}
                                    label={'Normal'}
                                    onChange={() => setAnswerType(1)}
                                />
                            </Col>
                            <Col sm={3} className="">
                                <Form.Check
                                    type={'radio'}
                                    value="1"
                                    name={'answerType'}
                                    label={'Code'}
                                    onChange={() => setAnswerType(2)}
                                />
                            </Col>
                        </Row>
                        {answerType == 1 &&
                            <>
                                <Row className="justify-content-center">
                                    <Col sm={6}>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="radio" name="correctAnswerIndex" label={<Form.Control type="text" placeholder="Enter answer" />} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col sm={6}>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="radio" name="correctAnswerIndex" label={<Form.Control type="text" placeholder="Enter answer" />} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col sm={6}>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="radio" name="correctAnswerIndex" label={<Form.Control type="text" placeholder="Enter answer" />} />
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
                        {answerType == 2 &&

                            <>
                                <Row className="justify-content-center">
                                    <Col sm={6}>
                                        <Form.Check type="radio" name="correctAnswerIndex" />
                                        <CodeEditor
                                            language="js"
                                            placeholder="Please enter code"

                                        />
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col sm={6}>
                                        <Form.Check type="radio" name="correctAnswerIndex" />
                                        <CodeEditor
                                            language="js"
                                            placeholder="Please enter code"

                                        />
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col sm={6}>
                                        <Form.Check type="radio" name="correctAnswerIndex" />
                                        <CodeEditor
                                            language="js"
                                            placeholder="Please enter code"

                                        />
                                    </Col>
                                </Row>
                                <Row className="mt-3 justify-content-center">
                                    <Col sm={6} className="text-center">
                                        <Button >Add another answer</Button>
                                    </Col>
                                </Row>
                            </>

                        }
                    </>
                }
                {questionType == 2 &&
                    <>
                        <Row className=" mb-3 justify-content-center">
                            <Col sm={3} className="">
                                <Form.Check
                                    type={'radio'}
                                    value="1"
                                    name={'trueOrFalse'}
                                    label={'TRUE'}
                                />
                            </Col>
                            <Col sm={3} className="">
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