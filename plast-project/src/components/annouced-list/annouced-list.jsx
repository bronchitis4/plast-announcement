import { useEffect } from 'react';
import './annouced-list.css'
import { useSelector } from 'react-redux';
import AnnoucedTable from '../annoucedTable/annouced-table';

const AnnoucedList = () => {
    const {events, loading} = useSelector(state => state.event);
    
    if(loading) {
        return <p>Зачекайте...</p>
    }
   
    return(
        <div className='annouced-list '>
            {events.map(event => {
                return <AnnoucedTable key={event.id} event={event}/>
            })}
        </div>
    )
}

export default AnnoucedList;