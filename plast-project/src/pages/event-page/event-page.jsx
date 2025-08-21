import { useSelector } from 'react-redux';
import './event-page.css';
import { useParams } from 'react-router-dom';
import EventService from '../../service/eventService';
import { useEffect, useState } from 'react';
import GeneratedForm from '../../components/generated-form/generated-form';

const EventPage = () => {
    const {id} = useParams();
    // const eventService = new EventService();
    //const [event, setEvent] = useState({});
    const event = useSelector(state => state.event.events.find(item => item.id === id));
    
    const loading = useSelector(state => state.event.loading);
    const [error, setError] = useState("");

    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     console.log(eve2nt);

    //     const fetchEventById = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await eventService.getEventById(id);
    //             setEvent(response.data);
    //             setLoading(false);
    //         } catch(error) {
    //             setError(error.message)
    //         }
    //     }
    //     fetchEventById();

    // }, [])
    
    useEffect(() => {
        console.log(event);
    }, [])
    
    if(loading) {
        return <p>Зачекай...</p>
    }

    return(
        <div className='event-page-wrapper'>
            <h1>{event?.title}</h1>
            <img src={event?.imageFile}/>
            <p>{event?.description}</p>
            <GeneratedForm eventId={id} fields={event?.formFields ? event?.formFields : [] }/>
        </div>
    )
}

export default EventPage;