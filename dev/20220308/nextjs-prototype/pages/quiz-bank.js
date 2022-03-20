import { Badge, Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import '@syncfusion/ej2/bootstrap4.css'
import { BsFillFileEarmarkArrowDownFill, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, Toolbar } from "@syncfusion/ej2-react-grids";

export default function QuizBank() {

    const data = [
        {
            id: 1,
            title: 'JS riddle',
            date: Date.parse('2022-03-22')
        },
        {
            id: 2,
            title: 'Software engineering',
            date: Date.parse('2022-03-12')
        },
        {
            id: 3,
            title: 'CSS know how',
            date: Date.parse('2022-03-09')
        }
    ]



    return (


        <Container className="shadow-lg rounded-3 my-3">
            <Row>
                <Col>
                    <h2 className="text-center text-primary mt-3">
                        <Badge>
                            Quiz list
                        </Badge>
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GridComponent dataSource={data} allowSorting={true} allowSelection={true} editSettings={{ allowEditing: true, allowDeleting: true }} selectionSettings={{mode:'Row'}} toolbar={['Edit', 'Delete', 'Export']} >

                        <ColumnsDirective>
                            <ColumnDirective headerText='ID' field='id' />
                            <ColumnDirective headerText='Title' field='title' />
                            <ColumnDirective headerText='Created at' field='date' type='date' format='yyyy/MM/dd' />
                        </ColumnsDirective>
                        <Inject services={[Sort, Toolbar]} />
                    </GridComponent>
                </Col>
            </Row>

        </Container>

    )

}