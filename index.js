const express = require("express");
const app = express();
const PORT = 3000;

/**
 * Middleware
 */
app.use((req, res, next, err) => {
    console.error(err.stack)
    res.status(500).send({ error: 'Something failed!' })
    next();
})

/**
 * Routes
 */
app.use("/api", require("./routes/api"));


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});