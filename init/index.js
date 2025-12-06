
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://joshipriti954_db_user:b6OFiKdhLBOP4cwo@cluster0.uijh2tf.mongodb.net/?appName=Cluster0";

main()
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// const initDB = async () => {
//   // await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({...obj, owner: "6931b0f3cbf32077dd56acf3", 
//     geometry: { type: "Point", coordinates: [77.1025, 28.7041] },
//   }));

//   await Listing.insertMany(initData.data);
//   console.log("Sample data saved successfully!");
// };

// initDB();

const initDB2 = async () => {
  try {
    const preparedData = initData.data.map((obj, index) => ({
      ...obj,
      title: obj.title || `Listing ${index + 1}`,
      description: obj.description || "Default description",
      images: obj.image || [],
      price: obj.price || 0,
      location: obj.location || "Default location",
      categories: obj.categories || "Default location",
     
    }));

    await Listing.insertMany(preparedData);
    console.log("सभी data insert हो गए!");
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    mongoose.disconnect();
  }
};

initDB2();