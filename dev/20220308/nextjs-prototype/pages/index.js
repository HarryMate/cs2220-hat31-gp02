import { Button, Col, Container, Row } from "react-bootstrap";


export default function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="py-3 text-center">
            <h1 className="text-primary display-1">EASY, QUICK,<br />INTERACTIVE<br />QUIZESS </h1>
            <h3>Login to start making amazing quizess!</h3>
            <Button size="lg">Login</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
