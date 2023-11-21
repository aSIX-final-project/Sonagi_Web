import './App.css';
import About from './screens/About';
import HowTo from './screens/HowTo';
import ListMember from './screens/ListMember';
import Masthead from './screens/Masthead';
import Navbar from './screens/Navbar';
import ThanksTo from './screens/ThanksTo';

function App() {

  return (
    <div>
      <Navbar />
      <Masthead />
      <About />
      <HowTo />
      <ThanksTo />
      <ListMember />
    </div>

  );
}

export default App;