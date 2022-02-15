import { useReducer } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stat from './components/Stat';
import Skill from './components/Skill';
import { reducer } from './utils/state';
import tr from './utils/translator'


const App = (props) => {
  const initialState = {
      lang: 'en',
      name: '',
      str: 3,
      dex: 3,
      con: 3,
      int: 3,
      wis: 3,
      cha: 3,
      race: {
        name: '',
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        abilities: '',
        proficiencies: '',
        armorweapon: ''
      },
      background: {
        name: '',
        skills: '',
        wealth: '',
        equipment: ''
      },
      class: {
        name: '',
        proficiencybonus: 0,
        hitdice: '',
        savingthrows: '',
        armorweapon: ''
      },
      skills: {
        acrobatics: 0,
        animalhandling: 0,
        arcana: 0,
        athletics: 0,
        deception: 0,
        history: 0,
        insight: 0,
        intimidation: 0,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        performance: 0,
        persuasion: 0,
        religion: 0,
        sleightofhand: 0,
        stealth: 0,
        survival: 0
      }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={4}>
            <Button variant="primary">Output</Button>
          </Col>
          <Col md={{offset: 4, span: 4}}>
            <Button variant="outline-secondary" onClick={() => dispatch({ type: 'Language', value: 'jp' })}>日本語</Button>{' '}
            <Button variant="outline-secondary" onClick={() => dispatch({ type: 'Language', value: 'en' })}>English</Button>
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row className='py-4'>
          <Col md={6} sm={12}>
            <Form.Control type="text" placeholder="Name"
                onChange={(ev) => dispatch({ type: "name", value: ev.target.value })}
                value={state.name} />
          </Col>
          <Col md={6} sm={12}>
            <Row>
              <Col md={6} sm={12}>
                <Form.Select aria-label="Race">
                  <option>{tr('Race', state.lang)}</option>
                </Form.Select>
              </Col>
              <Col md={6} sm={12}>
                <Form.Select aria-label="Class"
                  onChange={(ev) => dispatch({ type: "class", value: ev.target.value })}>
                <option>{tr('Class', state.lang)}</option>
                <option value="Barbarian">{tr('Barbarian', state.lang)}</option>
                <option value="Bard">{tr('Bard', state.lang)}</option>
                <option value="Cleric">{tr('Cleric', state.lang)}</option>
                <option value="Druid">{tr('Druid', state.lang)}</option>
                <option value="Fighter">{tr('Fighter', state.lang)}</option>
                <option value="Monk">{tr('Monk', state.lang)}</option>
                <option value="Paladin">{tr('Paladin', state.lang)}</option>
                <option value="Ranger">{tr('Ranger', state.lang)}</option>
                <option value="Rogue">{tr('Rogue', state.lang)}</option>
                <option value="Sorcerer">{tr('Sorcerer', state.lang)}</option>
                <option value="Warlock">{tr('Warlock', state.lang)}</option>
                <option value="Wizard">{tr('Wizard', state.lang)}</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            <Stat status={"Strength"} display={tr('Strength', state.lang)} value={state.str} dispatcher={dispatch} />
            <Stat status={"Dexterity"} display={tr('Dexterity', state.lang)} value={state.dex} dispatcher={dispatch} />
            <Stat status={"Constitution"} display={tr('Constitution', state.lang)} value={state.con} dispatcher={dispatch} />
            <Stat status={"Intelligence"} display={tr('Intelligence', state.lang)} value={state.int} dispatcher={dispatch} />
            <Stat status={"Wisdom"} display={tr('Wisdom', state.lang)} value={state.wis} dispatcher={dispatch} />
            <Stat status={"Charisma"} display={tr('Charisma', state.lang)} value={state.cha} dispatcher={dispatch} />
          </Col>
          <Col md={8} sm={6}>
            <Skill skill={'Acrobatics'} state={state} />
            <Skill skill={'Animal Handling'} state={state} />
            <Skill skill={'Arcana'} state={state} />
            <Skill skill={'Athletics'} state={state} />
            <Skill skill={'Deception'} state={state} />
            <Skill skill={'History'} state={state} />
            <Skill skill={'Insight'} state={state} />
            <Skill skill={'Intimidation'} state={state} />
            <Skill skill={'Investigation'} state={state} />
            <Skill skill={'Medicine'} state={state} />
            <Skill skill={'Nature'} state={state} />
            <Skill skill={'Perception'} state={state} />
            <Skill skill={'Performance'} state={state} />
            <Skill skill={'Persuasion'} state={state} />
            <Skill skill={'Religion'} state={state} />
            <Skill skill={'Sleight of Hand'} state={state} />
            <Skill skill={'Stealth'} state={state} />
            <Skill skill={'Survival'} state={state} />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
