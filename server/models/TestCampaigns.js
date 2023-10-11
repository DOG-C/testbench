module.exports = (sequelize, DataTypes) => {

    const TestCampaigns = sequelize.define("TestCampaigns", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        campaignid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        testsuite: {
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

    return TestCampaigns;
}