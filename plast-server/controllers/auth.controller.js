import { db } from '../config/db.js';
import admin from 'firebase-admin';
import bcrypt from 'bcrypt';

class AuthController {
    login = async (req, res) => {
        const { login, password } = req.body;

        if (!login || !password) {
            return res.status(400).json({
                statusCode: 400,
                error: "Missing fields",
                message: "Не всі поля заповнені!"
            });
        }

        try {
            const user = await db.collection("users").where("login", "==", login).limit(1).get();
            if (user.empty) {
                return res.status(401).json({
                    statusCode: 401,
                    error: "Invalid credentials",
                    message: "Помилкові дані!"
                })
            }

            const userDoc = user.docs[0];
            const userData = userDoc.data();
            const uid = userDoc.id;

            const isMatch = await bcrypt.compare(password, userData.password);

            if (!isMatch) {
                return res.status(401).json({
                    statusCode: 401,
                    error: "Invalid password",
                    message: "Неправильний пароль!"
                });
            }

            const token = await admin.auth().createCustomToken(uid, { role: "admin" });

            res.status(200).json({
                statusCode: 200,
                data: {
                    uid: userDoc.uid,
                    token,
                    role: "admin"
                }
            })

        } catch (error) {
            res.status(500).json({
                statusCode: 500,
                error: `Server error ${error.message}`,
                message: "Спробуйте ще раз"
            })
        }

    }
}

export default AuthController;