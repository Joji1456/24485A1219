import axios from "axios";
import {
  API_BASE_URL,
  ACCESS_TOKEN,
  VALID_STACK,
  VALID_LEVELS,
  VALID_FRONTEND_PACKAGES
} from "./config.js";

/**
 * Reusable frontend logging middleware
 *
 * @param {string} level - debug | info | warn | error | fatal
 * @param {string} packageName - frontend package name
 * @param {string} message - descriptive log message
 *
 * Example:
 * Log("info", "component", "Navbar rendered successfully");
 */
export async function Log(level, packageName, message) {
  try {
    // Validation
    if (!VALID_LEVELS.includes(level)) {
      throw new Error(
        `Invalid level: ${level}. Allowed: ${VALID_LEVELS.join(", ")}`
      );
    }

    if (!VALID_FRONTEND_PACKAGES.includes(packageName)) {
      throw new Error(
        `Invalid package: ${packageName}. Allowed: ${VALID_FRONTEND_PACKAGES.join(", ")}`
      );
    }

    if (!message || typeof message !== "string") {
      throw new Error("Message must be a non-empty string");
    }

    // API Request
    const response = await axios.post(
      `${API_BASE_URL}/logs`,
      {
        stack: VALID_STACK,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log created successfully:");
    console.log(response.data);

    return response.data;

  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Middleware Error:", error.message);
    }
  }
}