import { db } from '../config/db.js'

class EventController {
    createEvent = async (req, res) => {
        console.log(req.body);

        const { title, imageFile, description, sum, account, formFields } = req.body;

        if (title == "" || description == "" || !formFields.length) {
            return res.status(400).json({
                statusCode: 400,
                error: "Missing fields",
                message: "Не всі поля заповнені!"
            })
        }

        try {

            const record = await db.collection("event").add(req.body);
            res.status(201).json({
                statusCode: 200,
                data: {
                    id: record.id
                }
            })

        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                error: `Server error ${error.message}`,
                message: "Спробуйте ще раз"
            })
        }
    }

    getAllEvent = async (req, res) => {
        try {
            const eventsSnap = await db.collection("event").get();
            const events = eventsSnap.docs.map(doc => {
                return ({
                    id: doc.id,
                    ...doc.data()
                })
            })
            console.log(events);

            res.status(200).json({
                statusCode: 200,
                data: events
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                error: `Server error ${error.message}`,
                message: "Спробуйте ще раз"
            })
        }
    }

    getEventById = async (req, res) => {
        const id = req.params.id;
        try{
            const eventSnap = await db.collection('event').doc(id).get();
            const event = eventSnap.data();
            
            res.status(200).json({
                statusCode: 200,
                data: event
            })
            
        }catch(error) {
             return res.status(500).json({
                statusCode: 500,
                error: `Server error ${error.message}`,
                message: "Спробуйте ще раз"
            })
        }
    }
}

export default EventController;