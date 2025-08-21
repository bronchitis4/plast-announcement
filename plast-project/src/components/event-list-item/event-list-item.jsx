import "./event-list-item.css";
import { Link } from "react-router-dom";

const EventListItem = ({title, imgUrl, id}) => {
    return(
        <div className="event-list-item-wrapper">
            <div className="event-list-item-title">{title}</div>
            <div className="event-list-item-img" style={{backgroundImage: `url(${imgUrl})`, backgroundSize: "cover"}}>
                 
            </div>
            <Link className="event-list-item-button" to={`event/${id}`}>Дет.</Link>
        </div>
    );
}

export default EventListItem;