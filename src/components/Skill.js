import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tr from '../utils/translator';


const SkillStatMap = {
    acrobatics: 'dex',
    animalhandling: 'wis',
    arcana: 'int',
    athletics: 'str',
    deception: 'cha',
    history: 'int',
    insight: 'wis',
    intimidation: 'cha',
    investigation: 'int',
    medicine: 'wis',
    nature: 'int',
    perception: 'wis',
    performance: 'cha',
    persuasion: 'cha',
    religion: 'int',
    sleightofhand: 'dex',
    stealth: 'dex',
    survival: 'wis'
  }


const Skill = (props) => {

    const calculateBonus = (state) => {

    };

    return (
        <Row className='pt-2'>
            <Col><Form.Control type="string" className="skillbonus" readOnly value={calculateBonus(props.state)} /></Col>
            <Col>{tr(props.skill, props.state.lang)}</Col>
        </Row>
    );
}

export default Skill;