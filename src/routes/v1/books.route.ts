import { Request, Response, Router } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json([
      {
        title: "Introduction to Python",
        summary: "A beginner's guide to Python programming language.",
        published_date: "2023-01-15",
        author: "John Doe",
      },
      {
        title: "Web Development with Flask",
        summary: "Building web applications using the Flask framework.",
        published_date: "2023-02-10",
        author: "Jane Smith",
      },
      {
        title: "Data Science and Machine Learning",
        summary: "Exploring the world of data science and machine learning.",
        published_date: "2023-03-20",
        author: "Alex Johnson",
      },
    ]);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, author } = req.body;
    const sql = "INSERT INTO books (title, author) VALUES (?, ?)";
    res.status(201).json({});
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json(error);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json(error);
  }
});

export default router;
