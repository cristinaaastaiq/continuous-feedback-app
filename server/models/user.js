import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    isProfessor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }}
);

export { User };
