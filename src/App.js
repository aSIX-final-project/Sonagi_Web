import './App.css';
import About from './screens/About';
import HowTo from './screens/HowTo';
import ListMember from './screens/ListMember';
import Masthead from './screens/Masthead';
import Navbar from './screens/Navbar';
import ThanksTo from './screens/ThanksTo';
import BoardNotice from './screens/BoardNotice';

function App() {

  return (
    <div style={{overflow: 'hidden'}}>
      <Navbar />
      <Masthead />
      <div style={{ display: 'flex', flexDirection: 'row', flex:1 }}>
        <About />
        <HowTo />
      </div>
      <BoardNotice/>
      <ThanksTo />
      <ListMember />

    </div>

  );
}

export default App;