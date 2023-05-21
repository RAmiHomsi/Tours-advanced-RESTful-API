const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', exitHandler);

dotenv.config({ path: './config.env' });
const app = require('./app');


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true})
  .then(() => console.log('DB connection successful!'));


  app.listen(3001, () => {
  console.log(`App running on port 3001`);
});

const exitHandler = err => {
  console.log('WARNING! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
}

process.on('unhandledRejection', exitHandler);
