
import './styles/dashboard.less'
import './App.less'
import { Outlet } from 'react-router-dom';
import { UrlSwitcher } from './constants/_Requests/UrlSwitcher';
function App() {
  UrlSwitcher()
  return (
    <div className='app'>
      <div className='dashboard'>
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
