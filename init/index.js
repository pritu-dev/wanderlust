
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



// const initDB2 = async () => {
//   try {
//     const preparedData = initData.data.map((obj, index) => ({
//       ...obj,
//       title: obj.title || `Listing ${index + 1}`,
//       description: obj.description || "Default description",
//       images: obj.image || [],
//       price: obj.price || 0,
//       location: obj.location || "Default location",
     
//     }));

//     await Listing.insertMany(preparedData);
//     console.log("सभी data insert हो गए!");
//   } catch (err) {
//     console.error("Error inserting data:", err);
//   } finally {
//     mongoose.disconnect();
//   }
// };

// initDB2();
// const initDB = async () => {
//   // await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({...obj, owner: "6931b0f3cbf32077dd56acf3", 
//     geometry: { type: "Point", coordinates: [77.1025, 28.7041] },
//   }));

//   await Listing.insertMany(initData.data);
//   console.log("Sample data saved successfully!");
// };

// initDB();

// Location -> coordinates mapping
const locationCoordinates = {
  "Malibu": [-118.7798, 34.0259],
  "New York City": [-74.0060, 40.7128],
  "Aspen": [-106.8241, 39.1911],
  "Florence": [11.2558, 43.7696],
  "Portland": [-122.6765, 45.5231],
  "Cancun": [-86.8515, 21.1619],
  "Lake Tahoe": [-120.0324, 39.0968],
  "Los Angeles": [-118.2437, 34.0522],
  "Verbier": [7.2275, 46.0965],
  "Serengeti National Park": [34.8230, -2.3333],
  "Amsterdam": [4.9041, 52.3676],
  "Fiji": [178.0650, -17.7134],
  "Cotswolds": [-1.7812, 51.8330],
  "Boston": [-71.0589, 42.3601],
  "Bali": [115.1889, -8.4095],
  "Banff": [-115.5708, 51.1784],
  "Miami": [-80.1918, 25.7617],
  "Phuket": [98.3381, 7.8804],
  "Scottish Highlands": [-4.5734, 57.5079],
  "Dubai": [55.2708, 25.2048],
  "Montana": [-110.3626, 46.8797],
  "Mykonos": [25.3289, 37.4467],
  "Costa Rica": [-84.0907, 9.9281],
  "Charleston": [-79.9311, 32.7765],
  "Tokyo": [139.6917, 35.6895],
  "New Hampshire": [-71.5724, 43.1939],
  "Maldives": [73.2207, 3.2028]
};

const updateListingsGeometry = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB");

    const listings = await Listing.find({});
    for (let listing of listings) {
      const coords = locationCoordinates[listing.location];
      if (coords) {
        listing.geometry = {
          type: "Point",
          coordinates: coords
        };
        await listing.save();
        console.log(`✅ Updated geometry for: ${listing.title}`);
      } else {
        console.log(`⚠️ No coordinates found for: ${listing.location}`);
      }
    }

    console.log("सभी listings में geometry update हो गया!");
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
};

updateListingsGeometry();
