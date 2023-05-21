import mongoose from 'mongoose';
import app from './app';

const port: Number = 5000;

//Database Connection

async function server() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practise-mongoose');
    console.log(`👔Database Connection Succesfull!`);

    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to Database Connection`, error);
  }
}

server();
