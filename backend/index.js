//import express which runs our HTTP server
const express = require("express");

//Cores helps calling the server from any other origin
const cors = require("cors");

const { default: axios } = require("axios");

//all the server calling happens here from line 8-10
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//post endpoint for authenticate (takes a username from the request body and returns a fake user with a username and password  )
app.post("/authenticate", async (req, res) => {
	const { username } = req.body;

	try {
		const r = await axios.put(
			"https://api.chatengine.io/users/",
			{ username: username, secret: username, first_name: username },
			{ headers: { "private-key": "2cefedfa-b61f-4bd9-ba7d-551d2db9f385" } }
		);
		return res.status(r.status).json(r.data);
	} catch (error) {
		return res.status(error.response?.status || 500).json(error.response?.data || e.message);
	}
});

//port on which the app will run
app.listen(3001);
