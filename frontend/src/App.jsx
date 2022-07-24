import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Room from './pages/Room';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Subject from './pages/Subject';
import Events from './pages/Events';
import Tasks from './pages/Tasks';
import Test from './pages/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/room" element={<Room />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subjects" element={<Subject />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
