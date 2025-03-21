import Button from 'react-bootstrap/Button' 
import Form from 'react-bootstrap/Form' 

function CheckoutForm ({enviarFormulario}) {

return (
    <div className="d-flex justify-content-center mt-5">
    <Form className="w-50 mt-4" onSubmit={enviarFormulario}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="name" placeholder="Ejemplo: Camila" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="surname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" name="surname" placeholder="Ejemplo: Perez" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" name="email" placeholder="Ejemplo: hola@chau.com" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="tel" name="phone" placeholder="Ejemplo: 11 4578-9865" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-4"> Finalizar Compra
        </Button>
    </Form>
    </div>
)}

export default CheckoutForm