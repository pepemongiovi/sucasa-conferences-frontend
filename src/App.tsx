import NavigationBar from './components/common/NavigationBar/NavigationBar';

import RegisterAttendeePage from './pages/RegisterAttendeePage/RegisterAttendeePage';
import CreatePresentationPage from './pages/CreatePresentationsPage/CreatePresentationPage';
import AddAttendeeToPresentationPage from './pages/AddAttendeeToPresentationPage/AddAttendeeToPresentationPage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<RegisterAttendeePage />} />
        <Route path="/presentations" element={<CreatePresentationPage />} />
        <Route path="/presentations/attend" element={<AddAttendeeToPresentationPage />} />
      </Routes>
      <ToastContainer position='bottom-right' theme='colored' />
    </Router>
  );
}

export default App;
