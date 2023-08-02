module.exports = (sequelize, DataTypes) => {

    const Results = sequelize.define("Results", {

        testbench: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        chiptype: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        variant: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        version: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        build: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        results: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        report: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Results;
}