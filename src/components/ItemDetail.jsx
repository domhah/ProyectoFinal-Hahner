import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

function ItemDetail ({ detailProd }) {
    return (
        <Container className="mt-5 d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <Image src={detailProd?.image} rounded  style={{width: '270px'}}/>
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Text>
                            <div>
                                <p className="fw-bold">{detailProd?.name}</p>
                                <p>{detailProd?.description}</p>
                                <p>$ {detailProd?.price}</p>
                                <ItemCount product={detailProd}/>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
    </Container>
    ) 
}

export default ItemDetail
