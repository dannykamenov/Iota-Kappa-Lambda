const admin = require("firebase-admin");

function generateCustomToken(req, res) {
    const { token } = req.body;

    const verifyToken = process.env.KINDE_ADMIN_TOKEN;

    if(token !== verifyToken) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    admin.auth().createCustomToken("admin")
        .then((customToken) => {
            return res.status(200).json({ firebaseToken: customToken });
        })
        .catch((error) => {
            return res.status(500).json({ message: "Error generating custom token", error });
        });
}

module.exports = {
  generateCustomToken,
};