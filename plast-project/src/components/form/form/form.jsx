import './form.css';
import { useState } from "react"
import deleteIcon from '../../../assets/icons/delete-icon.png';

const FlexibleForm = ({setFormFields}) => {
    const [inputs, setInputs] = useState([]);

    const addNewField = (type, label) => {
        setInputs(state => {
            const newData = {
                id: Date.now(),
                type,
                value: "",
                label
            }
            setFormFields([...state, newData]);
            return [
                ...state,
                newData
            ]
            
        })
    }

    // const handleChangeValue = (inputId, newValue) => {
    //     setInputs(state => {
    //         return state.map(item => {
    //             return item.id == inputId ? {...item, id: inputId, value: newValue} : item;
    //         })
    //     })
    // }

    const handleDeleteField = (id) => {
        setInputs(state => {
            return state.filter(item => item.id !== id);
        })
    }

    return (
        <form className='flexible-form-wrapper'>
            <h1>Форма зголошення</h1>
            {inputs.map(item => {
                return (
                    <div key={item.id}>
                        <label htmlFor={item.id}>{item.label}:</label>
                        <input 
                            id={item.id} 
                            type={item.type} 
                            onChange={(e) => {
                            // handleChangeValue(item.id, e.target.value);
                        }} disabled/>
                        <div 
                            className='delete-field' 
                            onClick={() => handleDeleteField(item.id)
                        }>
                            <img src={deleteIcon} width={'90%'}/>
                        </div>
                    </div>)
            })}
            <ModalInputsWindow addNewField={addNewField}/>
        </form>
    )
}

const ModalInputsWindow = ({ addNewField, winIsOpen, }) => {
    const [label, setLable] = useState("");
    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(winIsOpen);
   
    const addField = (type, label) => {
        if(label === "") {
            setMessage("Поле пусте!")
            return;
        }

        addNewField(type, label);
        setLable("");
        setMessage("");
    }

    if (!isOpen) {
        return <button type="button" onClick={(e) => setIsOpen(state => !state)}>Додати поле</button>;
    }

    return (
        <div className='modal-inputs-window-wrapper'>
            <input type='text' placeholder='Заголовок...' value={label} onChange={(e) => setLable(e.target.value)} />
            <p className='message-error'>{message}</p>
            <div className='select-modal-inputs-window'>
                <p onClick={() => addField('text', label)}>Текст</p>
                <p onClick={() => addField('number', label)}>Число</p>
                <p onClick={() => addField('date', label)}>Дата</p>
            </div>
            <button type="button" onClick={() => setIsOpen(state => !state)}>Відмінити</button>
        </div>
    )
}

export default FlexibleForm;