module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'dockergo',
  database: 'meetaap',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
