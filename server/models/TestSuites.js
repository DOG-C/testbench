module.exports = (sequelize, DataTypes) => {

    const TestSuites = sequelize.define("TestSuites", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        suiteid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        testcase: {
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

    return TestSuites;
}