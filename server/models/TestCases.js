module.exports = (sequelize, DataTypes) => {

    const TestCases = sequelize.define("TestCases", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        caseid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        log: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cmd: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        detection: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        behavior: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return TestCases;
}