import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../public/images/logo.svg';
export default function Layout({ children }) {
    return (
        <>
            <Navbar className="shadow" bg="light" expand="lg">
                <Container fluid>
                    <Link href="/" passHref>
                        <Navbar.Brand>
                            <Image src={logo} alt="QuizzApp"
                                width={120}
                                height={40}
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Link href="/index" passHref>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href="/account/login" passHref>
                            <Nav.Link>Login</Nav.Link>
                        </Link>
                        <Link href="/account/register" passHref>
                            <Nav.Link>Register</Nav.Link>
                        </Link>
                        <Link href="/create-question" passHref>
                            <Nav.Link>Create question</Nav.Link>
                        </Link>
                        <Link href="/create-quiz" passHref>
                            <Nav.Link>Create quiz</Nav.Link>
                        </Link>
                        <Link href="/quiz-bank" passHref>
                            <Nav.Link>Quizzes</Nav.Link>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </>
    )
}