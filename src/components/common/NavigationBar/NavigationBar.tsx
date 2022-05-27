import { useLocation, useNavigate } from 'react-router-dom';
import { NavBar, Container, NavButton, NavBarTitle } from './NavigationBar.styles';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container position="static">
      <NavBarTitle variant="h4">
        SuCasa Conferences
      </NavBarTitle>
      <NavBar>
        <NavButton color="inherit" onClick={() => navigate('/')} active={location.pathname === '/'}>
          Register Attendee
        </NavButton>
        <NavButton color="inherit" onClick={() => navigate('/presentations')} active={location.pathname === '/presentations'}>
          Create Presentation
        </NavButton>
        <NavButton color="inherit" onClick={() => navigate('/presentations/attend')} active={location.pathname === '/presentations/attend'}>
          Attend a Presentation
        </NavButton>
      </NavBar>
    </Container>
  )
}

export default NavigationBar