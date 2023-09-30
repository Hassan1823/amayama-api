require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/products");

// Array of objects, each containing the file name and its data
const productFiles = [
  { fileName: "Mazda", data: require("./mazda.json") },
  { fileName: "Lexus", data: require("./lexus.json") },
  { fileName: "Nissan", data: require("./nissan.json") },
  { fileName: "Subaru", data: require("./subaru.json") },
  { fileName: "Suzuki", data: require("./suzuki.json") },
  { fileName: "Toyota", data: require("./toyota.json") },
  { fileName: "Infiniti", data: require("./infiniti.json") },

  // Add more objects as needed
];

// Define start function
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL, { poolSize: 20 }); // Increase poolSize to 20 or higher as needed

    for (const fileObj of productFiles) {
      const { fileName, data } = fileObj;
      await Product.create(data);
      console.log(`Data from ${fileName} uploaded successfully!`);
    }

    console.log("All data uploaded !!!");
  } catch (error) {
    console.log("Error Message is : ", error);
  }
};

// Start function
start();
