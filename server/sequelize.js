import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/projectdatabase.db",
});

// sequelize.sync({ alter: true }).then(() => {
//   console.log("All the models have been synchronized");
// });

export { sequelize };