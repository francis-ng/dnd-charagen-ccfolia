import { useState, useReducer } from 'react';
import './styles/App.css';
import Container from 'react-bootstrap/Container';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stat from './components/Stat';
import Skill from './components/Skill';
import { reducer } from './utils/state';
import { exportToClipboard } from './utils/exporter';
import Classes from './data/classes';
import Backgrounds from './data/backgrounds';
import Races from './data/races';
import tr from './utils/translator';


const App = (props) => {
  const initialState = {
      lang: 'en',
      character: {
        name: '',
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
      },
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
        wealth: ''
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

  const [showClipboardMsg, setShowClipboardMsg] = useState(false);

  const classOptions = [];
  for (const key in Classes) {
    if (Classes.hasOwnProperty(key)) {
      classOptions.push(<option key={key} value={key}>{tr(key, state.lang)}</option>);
    }
  }

  const backgroundOptions = [];
  for (const key in Backgrounds) {
    if (Backgrounds.hasOwnProperty(key)) {
      backgroundOptions.push(<option key={key} value={key}>{tr(key, state.lang)}</option>);
    }
  }

  const raceOptions = [];
  for (const key in Races) {
    if (Races.hasOwnProperty(key)) {
      raceOptions.push(<option key={key} value={key}>{tr(key, state.lang)}</option>);
    }
  }

  return (
    <div className="App">
      <ToastContainer position={'top-center'}>
        <Toast bg={'info'} show={showClipboardMsg} onClose={() => setShowClipboardMsg(false)} delay={3000} autohide>
          <Toast.Header>
            <span className="me-auto">{tr("JSONOutput", state.lang)}</span>
          </Toast.Header>
        </Toast>
      </ToastContainer>
      <Container fluid>
        <header>
          <strong>DnD Character Creator for ccfolia</strong>
        </header>
      </Container>
      <Container fluid>
        <Row>
          <Col md={4}>
            <Button className="mb-2 output-btn" variant="primary" onClick={() => exportToClipboard(setShowClipboardMsg)} >{tr('Output', state.lang)}</Button>
          </Col>
          <Col md={{offset: 4, span: 4}}>
            <Button variant="outline-secondary" onClick={() => dispatch({ type: 'Language', value: 'jp' })}>日本語</Button>{' '}
            <Button variant="outline-secondary" onClick={() => dispatch({ type: 'Language', value: 'en' })}>English</Button>
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row className='py-4'>
          <Col md={3} sm={12}>
            <Form.Control type="text" placeholder="Name" className="mb-2"
                onChange={(ev) => dispatch({ type: "name", value: ev.target.value })}
                value={state.character.name} />
          </Col>
          <Col md={3} sm={12}>
            <Form.Select aria-label="Race" className="mb-2"
              onChange={(ev) => dispatch({ type: "race", value: ev.target.value })}>
              <option>{tr('Race', state.lang)}</option>
              {raceOptions}
            </Form.Select>
          </Col>
          <Col md={3} sm={12}>
            <Form.Select aria-label="Class" className="mb-2"
              onChange={(ev) => dispatch({ type: "class", value: ev.target.value })}>
              <option>{tr('Class', state.lang)}</option>
              {classOptions}
            </Form.Select>
          </Col>
          <Col md={3} sm={12}>
            <Form.Select aria-label="Background" className="mb-2"
              onChange={(ev) => dispatch({ type: "background", value: ev.target.value, data: {  } })}>
              <option>{tr('Background', state.lang)}</option>
              {backgroundOptions}
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12}>
            <Stat status={"Strength"} display={tr('Strength', state.lang)} value={state.character.str} racialBonus={state.race.str} dispatcher={dispatch} />
            <Stat status={"Dexterity"} display={tr('Dexterity', state.lang)} value={state.character.dex} racialBonus={state.race.dex} dispatcher={dispatch} />
            <Stat status={"Constitution"} display={tr('Constitution', state.lang)} value={state.character.con} racialBonus={state.race.con} dispatcher={dispatch} />
            <Stat status={"Intelligence"} display={tr('Intelligence', state.lang)} value={state.character.int} racialBonus={state.race.int} dispatcher={dispatch} />
            <Stat status={"Wisdom"} display={tr('Wisdom', state.lang)} value={state.character.wis} racialBonus={state.race.wis} dispatcher={dispatch} />
            <Stat status={"Charisma"} display={tr('Charisma', state.lang)} value={state.character.cha} racialBonus={state.race.cha} dispatcher={dispatch} />
          </Col>
          <Col md={8} sm={12}>
            <Skill skill={'Acrobatics'} lang={state.lang} value={state.skills.acrobatics} />
            <Skill skill={'Animal Handling'} lang={state.lang} value={state.skills.animalhandling} />
            <Skill skill={'Arcana'} lang={state.lang} value={state.skills.arcana} />
            <Skill skill={'Athletics'} lang={state.lang} value={state.skills.athletics} />
            <Skill skill={'Deception'} lang={state.lang} value={state.skills.deception} />
            <Skill skill={'History'} lang={state.lang} value={state.skills.history} />
            <Skill skill={'Insight'} lang={state.lang} value={state.skills.insight} />
            <Skill skill={'Intimidation'} lang={state.lang} value={state.skills.intimidation} />
            <Skill skill={'Investigation'} lang={state.lang} value={state.skills.investigation} />
            <Skill skill={'Medicine'} lang={state.lang} value={state.skills.medicine} />
            <Skill skill={'Nature'} lang={state.lang} value={state.skills.nature} />
            <Skill skill={'Perception'} lang={state.lang} value={state.skills.perception} />
            <Skill skill={'Performance'} lang={state.lang} value={state.skills.performance} />
            <Skill skill={'Persuasion'} lang={state.lang} value={state.skills.persuasion} />
            <Skill skill={'Religion'} lang={state.lang} value={state.skills.religion} />
            <Skill skill={'Sleight of Hand'} lang={state.lang} value={state.skills.sleightofhand} />
            <Skill skill={'Stealth'} lang={state.lang} value={state.skills.stealth} />
            <Skill skill={'Survival'} lang={state.lang} value={state.skills.survival} />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
