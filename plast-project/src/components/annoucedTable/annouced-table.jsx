import { use, useEffect, useState } from 'react';
import AnnoucedService from '../../service/annoucedService';
import './annouced-table.css'

const AnnoucedTable = ({ event }) => {
    const [annoucedList, setAnnoucedList] = useState([]);
    const [tableFields, setTableFields] = useState(event.formFields);
    const annoucedService = new AnnoucedService();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnnouced = async () => {
            try {
                const response = await annoucedService.getAnnoucedsById(event.id);
                setAnnoucedList(response.data); 
                setLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchAnnouced();
    }, [])

    
    return (
        <div className='annouced-table-wrapper'>
            <h1 className='annouced-table-title'>{event.title}</h1>
            <div className='annouced-table'>
                {loading ? <p>Зачекайте...</p> :
                <table cellSpacing={0}>
                    <tbody>
                        <tr>
                            {tableFields.map(header => {
                                return <th key={header.label}>{header.label}</th>
                            })}
                        </tr>
                        { annoucedList.map((annouced) => {  
                            return <tr key={annouced.id}>
                                {tableFields.map(field => {
                                    return <td key={annouced[field.label]}>{annouced[field.label]}</td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>}
            </div>
        </div>
    );
}

export default AnnoucedTable;