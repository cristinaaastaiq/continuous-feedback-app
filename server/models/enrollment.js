import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

const Enrollment = sequelize.define("enrollment", {
    id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
        activity_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
            references: {
                model: 'activity',
                key: 'id'
            },

        },

        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
            references: {
                model: 'user',
                key: 'id'
            },

        },
    });

export {Enrollment}