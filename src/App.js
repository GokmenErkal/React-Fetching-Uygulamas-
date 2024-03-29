import { useState } from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

import './App.css';

function App() {

  const [activeUserId, setActiveUserId] = useState(null)

  return (
    <div className="App">
      <div>
        <UserList setActiveUserId={setActiveUserId} />
      </div>
      <div>
        {
          activeUserId && <UserDetail activeUserId={activeUserId} />
        }
      </div>
    </div>
  );
}

export default App;
