import { useReducer } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stat from './components/Stat';
import { reducer } from './utils/state';


const App = (props) => {
  const initialState = {
      kind: "character",
      data: {
          name: "",
          initiative: 0,
          externalUrl: "",
          iconUrl: null,
          commands: "",
          status: [
              {
                  label: "",
                  value: 0,
                  max: 0
              }
          ],
          params: [
            { label: "STR", value: "1" },
            { label: "DEX", value: "1" },
            { label: "CON", value: "1" },
            { label: "INT", value: "1" },
            { label: "WIS", value: "1" },
            { label: "CHA", value: "1" },
            { label: "StrProf", value: "0" },
            { label: "DexProf", value: "0" },
            { label: "ConProf", value: "0" },
            { label: "IntProf", value: "0" },
            { label: "WisProf", value: "0" },
            { label: "ChaProf", value: "0" }
          ]
      }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col sm={2}>
              <Stat status={"STRength"} value={state.data.params[0].value} proficiency={state.data.params[6]} index={0} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"DEXterity"} value={state.data.params[1].value} proficiency={state.data.params[7]} index={1} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"CONstitution"} value={state.data.params[2].value} proficiency={state.data.params[8]} index={2} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"INTelligence"} value={state.data.params[3].value} proficiency={state.data.params[9]} index={3} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"WISdom"} value={state.data.params[4].value} proficiency={state.data.params[10]} index={4} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Stat status={"CHArisma"} value={state.data.params[5].value} proficiency={state.data.params[11]} index={5} dispatcher={dispatch} />
            </Col>
            <Col sm={10}></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
