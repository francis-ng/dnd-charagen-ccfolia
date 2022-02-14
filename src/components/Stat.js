import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Stat = (props) => {
    const changeHandler = (event) => {
        props.dispatcher({ type: 'stat', index: props.index, value: event.target.value });
    }

    return (
        <Row>
            <Col><Form.Label>{props.status}</Form.Label></Col>
            <Col><Form.Control type="number" className="statinput" onChange={changeHandler} value={props.value} /></Col>
            <Col>+5</Col>
        </Row>
    );
}

export default Stat;