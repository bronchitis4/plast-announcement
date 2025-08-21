import './input-text.css';

const InputText = ({placeholder, type, value, onChange}) => {
    return(
        <input 
            className='input-text-input' 
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default InputText;