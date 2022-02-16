import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { calculateSkillBonuses } from '../utils/calculators';
import tr from '../utils/translator';


const Skill = (props) => {

    return (
        <Row className='pt-2'>
            <Col><Form.Control type="string" className="skillbonus" readOnly value={calculateSkillBonuses(props.skill, props.state, props.dispatcher)} /></Col>
            <Col>{tr(props.skill, props.state.lang)}</Col>
        </Row>
    );
}

export default Skill;