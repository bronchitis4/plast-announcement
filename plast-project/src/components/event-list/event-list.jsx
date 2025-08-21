import './event-list.css'

import { useSelector } from 'react-redux';
import EventListItem from '../event-list-item/event-list-item';

const EventList = () => {
    const events = useSelector(state => (state.event.events));
    const loading = useSelector(state => (state.event.loading))
    
    if(loading) {
        return <p>Зачекай...</p>
    }

    return (
        <div className='event-list-wrapper'>
            {events.map(event => {
                return <EventListItem key={event.id} title={event.title} imgUrl={event.imageFile} id={event.id} />
            })}
        </div>
    )
}

export default EventList;