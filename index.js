import express from "express";
import ejs from "ejs";
import routes from "./src/controllers/router.js";

const app = express();

app.use(express.static("./src/public"));
app.set("views", "./src/views");
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

app.use(routes);

app.listen(3000);