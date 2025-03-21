import Item from './Item'
import Row from 'react-bootstrap/Row'

function ItemList ({ items }) {
    return (
       <>
       <Row xs={2} md={3} className="g-4 m-2">
            {items.map(prod => (
            <Item items={prod} key={prod.id} />))}
        </Row>
        </> 
    )
}

export default ItemList
