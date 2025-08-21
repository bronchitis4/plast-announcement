import './add-new-event.css'
import { useState } from 'react';
import FlexibleForm from '../../components/form/form/form';
import InputText from '../../components/input-text/input-text';
import PageTitle from '../../components/page-title/page-title';
import Textarea from '../../components/textarea/textarea';
import UploadMedia from '../../components/upload media/upload-media';
import useAuth from '../../hooks/useAuth';
import EventService from '../../service/eventService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEvent } from '../../actions/actions';


const NewEvent = () => {
    const {user, loading, isAuthenticated} = useAuth();
    
    const [formFields, setFormFields] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [sum, setSum] = useState("");
    const [account, setAccount] = useState("");
    const [imageFile, setImageFile] = useState(null); 
    const [error, setError] = useState("");

    const eventService = new EventService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if(loading) {
        return <p>Зачекай...</p>
    }

    if(!isAuthenticated) {
        return <p>НЕА</p>
    }

    const handleSubmit = async () => {
        const data = {
            title,
            description,
            sum,
            account,
            formFields: formFields,
            imageFile
        }
        try {
            const response = await eventService.createEvent(data);
            if(response.statusCode != 201){
                setError(response.message);
                return;
            }
            dispatch(addEvent(data));
            
            alert("Івент додано!");
            navigate("/");
        }catch(error) {
            setError();
        }
    }

    return(
        <div className="add-new-event">
            <PageTitle>Івент</PageTitle>
            <UploadMedia setImageFile={setImageFile}/>
            <InputText placeholder={"Назва..."} onChange={(e) => setTitle(e.target.value)}/>
            <Textarea placeholder={"Опис..."} onChange={(e) => setDescription(e.target.value)}/>
            <InputText placeholder={"Сума..."} type={"number"} onChange={(e) => setSum(e.target.value)}/>
            <InputText placeholder={"Рахунок..."} type={"number"} onChange={(e) => setAccount(e.target.value)}/>
            <FlexibleForm setFormFields={setFormFields}/>
            <button onClick={handleSubmit}>Додати подію</button>
            <p>{error}</p>
        </div>
    )
}

export default NewEvent;