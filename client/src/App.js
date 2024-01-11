// App.js
import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Home = () => <Home />;
const Signup = () => <div>Signup Page</div>;
const Login = () => <div>Login Page</div>;
const HolisticAiAssistant = () => <div>Holistic AI Assistant Page</div>;
const Calendar = () => <div>Calendar Page</div>;
const DietPlans = () => <div>Diet Plans Page</div>;

const App = () => {
  return (
    <Router>
      <div>
        <Navigation/>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/holistic-ai-assistant" component={HolisticAiAssistant} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/deficiency" component={DietPlans} />
        <DietPlans />
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
