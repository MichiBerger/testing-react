import './App.css';
import styled from 'styled-components';
import Card from './components/Card.js';

function App(props) {
  return (
    <>
      <AppContainer>
        <Card />
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
