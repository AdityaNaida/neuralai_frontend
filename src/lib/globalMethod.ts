import { decodeJwt, jwtVerify } from "jose";

// const key = new TextEncoder().encode(secretKey);
const key = new TextEncoder().encode(import.meta.env.VITE_JWTKEY);

export async function verifyAndDecodeToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}

export async function getSessionFromLocalStorage() {
  const token = localStorage.getItem("UserSession");

  if (!token) return null;
  return decodeJwt(token);
}
