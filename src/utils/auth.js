import { jwtDecode } from "jwt-decode";

export function verifyAuth(token) {
  try {
    const decodedToken = jwtDecode(token);

    // Check if token is expired
    const isExpired = decodedToken.exp * 1000 < Date.now();
    if (isExpired) {
      throw new Error("Token expired");
    }

    return decodedToken;
  } catch (error) {
    throw new Error("Invalid token");
  }
}

// Helper functions for token handling
export function getTokenExpirationDate(token) {
  try {
    const decoded = jwtDecode(token);
    return new Date(decoded.exp * 1000);
  } catch (error) {
    return null;
  }
}

export function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate ? expirationDate < new Date() : true;
}
