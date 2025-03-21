import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router'
import Col from 'react-bootstrap/Col'

function Item ({ items }) {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={items.image} />
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>{items.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$ {items.price}</ListGroup.Item>
                </ListGroup>
                <Button as={Link} to={`/item/${items.id}`} variant="dark">+ info</Button>
            </Card>
        </Col>
    )
}

export default Item