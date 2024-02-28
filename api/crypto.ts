import fs from "fs";
import path from "path";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Read the JSON file
  const filePath = path.join(process.cwd(), "public", "crypto.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Return the data
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
  response.status(200).json(data);
}
