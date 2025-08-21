import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventListItem from './components/event-list-item/event-list-item'
import './App.css'
import EventList from './components/event-list/event-list'
import NewEvent from './pages/add-new-event/add-new-event'
import LoginForm from './components/login-form/login-form'
import AdminMenu from './pages/admin-menu/admin-menu'
import EventService from './service/eventService'
import { useDispatch } from 'react-redux'
import { fetchedEvent } from './actions/actions'
import EventPage from './pages/event-page/event-page'
import NavMenu from './components/nav-menu/nav-menu'
import AnnoucedList from './components/annouced-list/annouced-list'


function App() {
  const eventService = new EventService();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
          const response = await eventService.getEvents();
          console.log(response);
          dispatch(fetchedEvent(response.data));
      } catch (error) {
          console.log(error.message);
      }
    }

    fetchEvents();

  }, []);

  return (
    <Router>
      <NavMenu/>
      <Routes>
        <Route path='/' element={
          <EventList />
        } />
        <Route path='/new-event' element={
          <NewEvent />
        } />
        <Route path='/login' element={
          <LoginForm />
        } />
        <Route path='/admin' element={
          <AdminMenu />
        } />
        <Route path='event/:id' element={
          <EventPage/>
        }/>
        <Route path='/annouced' element={
          <AnnoucedList/>
        }/>
      </Routes>
    </Router>
  )
}

export default App
