import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeneres
const PORT = process.env.PORT;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server is running and successfully connected to Database...")
    );
  })
  .catch((err) => console.log(err));