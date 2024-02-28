import fs from "fs";
import path from "path";

import type { VercelRequest, VercelResponse } from "@vercel/node";
export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const { id } = request.query;
    console.log("Requested ID:", id); // Log the requested ID
    response.setHeader("Access-Control-Allow-Origin", "*"); // or specify the origin
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    response.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    // Read the JSON file
    const filePath = path.join(process.cwd(), "public", "crypto.json");
    console.log("File path:", filePath); // Log the file path
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    console.log("Data:", data); // Log the parsed data

    // Find the item by id
    const item = data.find((item) => item.id.toString() === id.toString());
    console.log("Found item:", item); // Log the found item

    if (item) {
      response.status(200).json(item);
    } else {
      response.status(404).json({ message: id });
    }
  } catch (error) {
    console.error("Error in serverless function:", error);
    response.status(500).json({ message: "Internal server error" });
  }
}
