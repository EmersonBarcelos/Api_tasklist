module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'admin',
  password: 'admin',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
