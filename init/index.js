// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
// .then((res)=>{
//     console.log("connected to MongoDB");
// })
// .catch((err)=>{
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// };

// const initDB = async () =>{
//  await Listing.deleteMany({});
//  initData.data = initData.data.map((obj) =>({...obj, owner: "68ef3dc454beb47f89a93b0d"}));
// //  initData.data = initData.data.map((obj) =>({...obj, geometry: { type:"Point", coordinates: []}})); 
//  console.log(initData.data); 
           
 
//  await Listing.insertMany(initData.data);
//  console.log("saved data");
// };

// initDB();


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

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

const initDB = async () => {
  await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "68ef3dc454beb47f89a93b0d", 
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] },
  }));

  await Listing.insertMany(initData.data);
  console.log("✅ Sample data saved successfully!");
};

initDB();
// 5AFfSxnGjeBJddTP
// priti
// mongodb+srv://<db_username>:<db_password>@cluster0.xpnd8qy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://<db_username>:5AFfSxnGjeBJddTP@cluster0.xpnd8qy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0