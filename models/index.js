import fs from'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config/config.json';

const env = process.env.NODE_ENV || 'development';
const envConfig = config[env];
let db = {};

const sequelize = new Sequelize(envConfig.database, envConfig.username, envConfig.password, envConfig);

fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
}).forEach(file => {
  let model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
