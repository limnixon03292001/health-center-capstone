const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connDb = require("./config/connDb");
const userRoutes = require("./routes/userRoutes");
const patientRoutes = require("./routes/patientRoutes");
const adminRoutes = require("./routes/adminRoutes");
const doctorRoutes = require("./routes/doctorRoutes");

const app  = express();

dotenv.config();
app.use(cors());
app.use(express.json());

connDb();

app.get("/", (req,res) => {
    res.send("Express server!")
})


app.use("/api/user", userRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/doctor", doctorRoutes);


const server = app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listeninng on port 5000.")
})