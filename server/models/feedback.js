import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

const Feedback = sequelize.define("feedback", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
    },
    activity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    date: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    giver_id: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }}
);

export { Feedback };
