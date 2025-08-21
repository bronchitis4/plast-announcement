import { db } from '../config/db.js';

class AnnouncedController {
    getAllAnnoucedsById = async (req, res) => {
        try {
            const id = req.params.id; 
            const annoucedsSnap = await db.collection("annouced").where("eventId", "==", id).get();
            const annouceds = annoucedsSnap.docs.map(doc => {
                return ({
                    id: doc.id,
                    ...doc.data()
                })
            })
            
            res.status(200).json({
                statusCode: 200,
                data: annouceds
            })

        }catch(error) {
            return res.status(500).json({
                statusCode: 500,
                error: `Server error ${error.message}`,
                message: "Спробуйте ще раз"
            })
        }
    }
    addAnnounced = async (req, res) => {
        try {
            const { eventId, ...data } = req.body;
            console.log(req.body);

            const newAnnouced = await db.collection("annouced").add({
                ...data,
                eventId
            });

            res.status(201).json({
                statusCode: 201,
                data: newAnnouced
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                statusCode: 500,
                error: `Server error ${error.message}`,
                message: "Спробуйте ще раз"
            })
        }
    }
}

export default AnnouncedController;