import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "5466",
  port: 5432,
});
db.connect();

async function getExistingList() {
  const result = await db.query("SELECT * FROM items");
  return result.rows;
}

  
app.get("/", async (req, res) => {
  const items = await getExistingList();
  console.log('data', items);
  
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

async function addList(item) {
  const result = await db.query("INSERT INTO  items  (title) VALUES($1)",[item]);
  return result;
}
app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await addList(item);
  res.redirect("/");
});



app.post("/edit", (req, res) => {});

app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
