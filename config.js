
export const API_BASE_URL = "http://20.244.56.144/evaluation-service";

// Paste your Bearer token from /auth response here
export const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJqb2ppYmFidXRhbGFyaS5jbS4wODhAZ21haWwuY29tIiwiZXhwIjoxNzc4MzA3NDczLCJpYXQiOjE3NzgzMDY1NzMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIyMDA5MzIxNS1kNTQ3LTQwZmQtODA2ZC0xMjM1MmFiZWU5NzciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ0YWxhcmkgam9qaSBiYWJ1Iiwic3ViIjoiNTEzMWNmZTktNzFmYS00MWVjLWIxM2ItN2I1OTUwNDBjYzJlIn0sImVtYWlsIjoiam9qaWJhYnV0YWxhcmkuY20uMDg4QGdtYWlsLmNvbSIsIm5hbWUiOiJ0YWxhcmkgam9qaSBiYWJ1Iiwicm9sbE5vIjoiMjQ0ODVhMTIxOSIsImFjY2Vzc0NvZGUiOiJlSmRDdUMiLCJjbGllbnRJRCI6IjUxMzFjZmU5LTcxZmEtNDFlYy1iMTNiLTdiNTk1MDQwY2MyZSIsImNsaWVudFNlY3JldCI6ImhtYWNKcWFFV3Znd2tnQmgifQ.NBUJqWwvhE37tKNpqX6kzHkjU4iXxFcmNFZoqcCBBEI",";

// Allowed values for frontend track
export const VALID_STACK = "frontend";

export const VALID_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "fatal"
];

export const VALID_FRONTEND_PACKAGES = [
  "api",
  "component",
  "hook",
  "page",
  "state",
  "style",
  "auth",
  "config",
  "middleware",
  "utils"
];