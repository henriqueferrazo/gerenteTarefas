import Headers from './components/header/Headers';
import Home from './components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterForm from './components/header/registerForm';
import FormLogin from './components/header/FormLogin';
import Tarefas from './components/Page/Tarefas';


function App() {
  return (

    <Router>
      <Headers />
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
        <Route path="/login">
            <FormLogin />
          </Route>
          <Route path="/register">
            <RegisterForm/>
          </Route>
          <Route path="/tarefa">
            <Tarefas/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
