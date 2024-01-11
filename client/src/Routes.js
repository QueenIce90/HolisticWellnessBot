import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import HolisticAiAssistant from './Pages/HolisticAiAssistant';
import Calendar from './Pages/Calendar';
import Chatbot from './Pages/chatbot';
import Deficiency from './Pages/Deficiency';

const Routes = () => {
return (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/holistic-ai-assistant" component={HolisticAiAssistant} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/chatbot" component={Chatbot} />
    <Route path="/deficiency" component={Deficiency} />
    </Switch>
);
};

export default Routes;

