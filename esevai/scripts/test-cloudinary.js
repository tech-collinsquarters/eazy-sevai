require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function checkCloudinary() {
  console.log("--- Cloudinary Connection Test ---");
  console.log("Cloud Name:", cloudinary.config().cloud_name);
  
  try {
    const result = await cloudinary.api.ping();
    console.log("Ping Status:", result.status); // Should be 'ok'
    
    // Try to get account details
    const usage = await cloudinary.api.usage();
    console.log("Connection successful!");
    console.log("Plan:", usage.plan);
    console.log("Account created on:", usage.last_updated);
  } catch (error) {
    console.error("Connection failed!");
    console.error("Error Message:", error.message);
    if (error.http_code === 401) {
      console.error("Tip: Your API Key or Secret might be incorrect.");
    }
  }
}

checkCloudinary();
