import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/notifications", (req, res) => {
  res.json([
    { id: 1, message: "Campus library will be closed on Monday." },
    { id: 2, message: "New semester registration opens next week." },
    { id: 3, message: "Sports day scheduled for this Friday." }
  ]);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
