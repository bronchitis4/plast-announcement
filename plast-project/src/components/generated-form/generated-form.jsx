import './generated-form.css';
import { useState } from 'react';
import AnnoucedService from '../../service/annoucedService';
import { useNavigate } from 'react-router-dom';

const GeneratedForm = ({ fields, eventId }) => {
    const [inputs, setInputs] = useState(fields);
    const [error, setError] = useState("");
    const annoucedService = new AnnoucedService();
    const navigate = useNavigate();

    const handleChangeValue = (inputId, newValue) => {
        setInputs(state => {
            return state.map(item => {
                return item.id == inputId ? {...item, id: inputId, value: newValue} : item;
            })
        })
    }

   const handleSubmit = async (e) => {
            e.preventDefault();

            const data = inputs.reduce((acc, item) => {
                acc[item.label] = item.value;
                return acc;
           }, {});
           data.eventId = eventId;
           console.log(data);
           
           try {
               const response = await annoucedService.addAnnouced(data);
               if(response.statusCode != 201){
                   setError(response.message);
                   return;
               }
               
               alert("Ви зголосилися!");
               navigate("/");
           }catch(error) {
               setError(error.message);
           }
       }

    return (
        <>
            <h1>Форма зголошення</h1>
            <form className='generated-form'>
                {inputs.map(item => {
                    return (
                        <div key={item.id}>
                            <label htmlFor={item.id}>{item.label}:</label>
                            <input
                                id={item.id}
                                type={item.type}
                                onChange={(e) => {
                                    handleChangeValue(item.id, e.target.value);
                                }} />
                        </div>)
                })}
                <button onClick={handleSubmit}>Зголоситися</button>
                <p>{error}</p>
            </form>
        </>
    )
}

export default GeneratedForm;