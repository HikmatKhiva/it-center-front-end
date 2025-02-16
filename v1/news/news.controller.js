import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { pool } from "../../db/db.js";
// create a news
const createNews = async (req, res) => {
  try {
    const image = req.file;
    const { title, description, content } = req.body;
    await cloudinary.uploader
      .upload(image.path, {
        folder: "news",
      })
      .then(async (result) => {
        await pool.query(
          `INSERT INTO news(
                  photo_url, news_title, news_description, content)
                  VALUES ($1, $2, $3, $4) RETURNING *;`,
          [result?.url, title, description, content]
        );
        fs.unlinkSync(image.path);
      });
    return res.status(201).json({ message: "created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
// get all news
const getAllNews = async (req, res) => {
  try {
    const { offset, limit, search } = req.query;
    const news = await pool.query(
      `SELECT * FROM news WHERE LOWER(news.news_title) LIKE LOWER($3) LIMIT $1 OFFSET $2;`,
      [limit, offset, `%${search || ""}%`]
    );
    const total_page = (await pool.query(`SELECT * FROM news;`)).rowCount;
    return res.status(200).json({
      news: news.rows,
      total_page,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
//  get a news
const getNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await pool.query(`SELECT  
            id, 
            news_title, 
            content, 
			      news_description,
            created_at,
            TO_CHAR((created_at AT TIME ZONE 'UTC')::timestamp, 'DD.MM.YYYY') AS created_time
            FROM news WHERE id = $1;`, [id]);
    return res.status(200).json(news.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};
// delete a news
const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM  news  WHERE id = $1;`, [id]);
    return res.status(200).json({ message: "Muoffaqiyatli o'chirildi." });
  } catch (error) {
    res.status(500).json(error);
  }
};
// update a news
const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, content } = req.body;
    let imageUrl;
    if (req.file) {
      const image = req.file;
      const result = await cloudinary.uploader.upload(image.path, {
        folder: "news",
      });
      imageUrl = result.url;
      fs.unlinkSync(image.path);
    }
    await pool.query(
      `UPDATE news SET 
            photo_url = COALESCE($1, photo_url), 
            news_title = COALESCE($2, news_title), 
            news_description = COALESCE($3, news_description), 
            content = COALESCE($4, content) 
          WHERE id = $5 RETURNING *;`,
      [imageUrl, title, description, content, id]
    );
    return res.status(200).json({ message: "Muoffaqiyatli yangilandi." });
  } catch (error) {
    res.status(500).json(error);
  }
};
export { createNews, getAllNews, getNews, deleteNews, updateNews };
