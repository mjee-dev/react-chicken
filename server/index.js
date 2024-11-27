// server/index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // .env 파일을 로드하여 환경변수 설정

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB 연결
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
