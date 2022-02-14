import { useReducer } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stat from './components/Stat';
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
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col med={6} sm={12}>
            <Form.Control type="text" placeholder="Name"
                onChange={(ev) => dispatch({ type: "name", value: ev.target.value })}
                value={state.name} />
            </Col>
            <Col med={6} sm={6}>
              <Row>
                <Col med={6} sm={12}>
                  <Form.Select aria-label="Race">
                    <option>{tr('Race', state.lang)}</option>
                  </Form.Select>
                </Col>
                <Col med={6} sm={12}>
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
            <Col sm={2}>
              <Stat status={"Strength"} display={tr('Strength', state.lang)} value={state.str} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"Dexterity"} display={tr('Dexterity', state.lang)} value={state.dex} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"Constitution"} display={tr('Constitution', state.lang)} value={state.con} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"Intelligence"} display={tr('Intelligence', state.lang)} value={state.int} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"Wisdom"} display={tr('Wisdom', state.lang)} value={state.wis} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"Charisma"} display={tr('Charisma', state.lang)} value={state.cha} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
