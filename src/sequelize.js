import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  "futurocode", // nome do banco
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mariadb',
    host: process.env.DB_HOST // use 'host' em vez de 'storage' para conexões com MariaDB
  }
);

export default sequelize; // Usando exportação default do ES6
