import mongoose from "mongoose";

const connection = {};

export async function connectDb() {
  if (connection.isConnected) {
    console.log("Already connected to the DataBase");
    return;
  } else if (mongoose.connections.length) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use Previous Connection to the DataBase");
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect("mongodb://127.0.0.1:27017/shoppay");
  connection.isConnected = db.connections[0].readyState;
  console.log("New Connection to the DataBase");
}

export async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not disconnecting from the database");
    }
  }
}
