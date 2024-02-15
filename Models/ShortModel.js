const Sequelize = require("sequelize");

const Short = (sequelizeInstance) => {
  return sequelizeInstance.define(
    "shorts",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: "id",
      },
      short_url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          args: "short_url",
          msg: "Short Url Must Be Unique!",
        },
        validate: {
          notNull: {
            args: true,
            msg: "Short Url Can't be Null!",
          },
          notEmpty: {
            args: true,
            msg: "Short Url Can't be Empty!",
          },
        },
      },
      long_url: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Long Url Can't be Null!",
          },
          notEmpty: {
            args: true,
            msg: "Long Url Can't be Empty!",
          },
          isUrl: {
            args: true,
            msg: "Long Url Musr be URL!",
          },
        }, 
      },
      expaired_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Expaired Date Can't be Null!",
          },
          notEmpty: {
            args: true,
            msg: "Expaired Date Can't be Empty!",
          },
        },
      },
    },
    {
      freezeTableName: true,
      paranoid: true,
      underscored: true,
    }
  );
};

module.exports = Short;
