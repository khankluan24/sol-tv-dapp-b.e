import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.DATABASE || ''
const MONGO_DB_NAME = process.env.DB_NAME || "";
const JWT_AUTH_SECRET = process.env.JWT_AUTH_SECRET || "";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "";

export const config = {
  mongodb: {
    url: MONGO_URL,
    databaseName: MONGO_DB_NAME,
  },
  server: {
    jwtAuthSecret: JWT_AUTH_SECRET,
    jwtRefreshSecret: JWT_REFRESH_SECRET,
  },
};
