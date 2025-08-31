export default (sequelize, DataTypes) => {
  const Tutorial = sequelize.define('Tutorial', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Tutorial;
};
