import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tr from '../utils/translator';


const Skill = (props) => {

    return (
        <Row className='pt-2'>
            <Col md={{offset:3, span:4}} sm={5}><Form.Control type="string" className="skillbonus" readOnly value={props.value} /></Col>
            <Col md={4} sm={6}>{tr(props.skill, props.lang)}</Col>
        </Row>
    );
}

export default Skill;