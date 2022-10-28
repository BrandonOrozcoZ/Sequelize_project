import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "123456789", {
  host: "localhost",
  dialect: "postgres",
});
