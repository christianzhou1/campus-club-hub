import express, { type Express, type Request, type Response } from "express";

import cors from "cors";
import pool from "./db.ts";

const app: Express = express();
app.use(cors());
const port = 3000;

interface Club {
  id: number;
  name: string;
  description: string;
}

const clubs: Club[] = [
  {
    id: 1,
    name: "Computer Science Club 2",
    description: "Tech talks and coding nights.",
  },
  { id: 2, name: "Music Society", description: "Jam sessions and open mics." },
  {
    id: 3,
    name: "Chess Club",
    description: "Weekly tournaments and casual play.",
  },
];

app.get("/", (req: Request, res: Response) => {
  res.send("This is the home page");
});

app.get("/api/clubs", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM clubs ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching clubs:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/clubs/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM clubs WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Club not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching club:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
