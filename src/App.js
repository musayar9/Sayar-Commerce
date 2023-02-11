
import './App.css';
import SiteContext from './Context/SiteContext'
import AppContext from './AppContext'

function App() {


  return (
 <>
<SiteContext>
  <AppContext/>
</SiteContext>
    </>
  );
}

export default App;
