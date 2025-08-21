import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, ".env");

const envVars = {
  VITE_EMAILJS_SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID || "your_service_id",
  VITE_EMAILJS_TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id",
  VITE_EMAILJS_USER_KEY: process.env.VITE_EMAILJS_USER_KEY || "your_user_key",
};

let envContent = "";
for (const [key, value] of Object.entries(envVars)) {
  envContent += `${key}=${value}\n`;
}

fs.writeFileSync(envPath, envContent);

console.log("✅ .env file created/updated with required variables");
