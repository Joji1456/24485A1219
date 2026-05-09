import { Log } from "./Log.js";

async function runTests() {
  console.log("Testing frontend logging middleware...\n");

  await Log("info", "component", "Navbar component rendered successfully");

  await Log("debug", "page", "Home page initialized");

  await Log("warn", "state", "User session token missing");

  await Log("error", "api", "Login API request failed");

  await Log("fatal", "middleware", "Critical frontend middleware failure");
}

runTests();