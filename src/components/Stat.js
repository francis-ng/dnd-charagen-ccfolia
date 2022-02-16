import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Stat = (props) => {
    const changeHandler = (event) => {
        props.dispatcher({ type: props.status, value: event.target.value });
    }

    return (
        <Row>
            <Col sm={12}><Form.Label>{props.display}</Form.Label></Col>
            <Col sm={12}><Form.Control type="number" className="statinput" onChange={changeHandler} value={props.value} />{' '}
            <Form.Control type="text" className="statinput" readOnly value={props.racialBonus} /></Col>
            <Col sm={12}>{Math.floor((props.value + props.racialBonus - 10)/2)}</Col>
        </Row>
    );
}

export default Stat;