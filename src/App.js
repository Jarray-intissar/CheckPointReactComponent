
import './Profile/Profile.css';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Adresse from './Profile/Adresse';

function App() {
  return (

  <div className="Container">
          <ProfilePhoto />
          <FullName />
          <Adresse />
      </div>
      
  );
}

export default App;
