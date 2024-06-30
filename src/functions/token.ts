import { SignJWT, jwtVerify } from "jose";
const JWT_SECRET_KEY = "APIDJHJSFGFHGFHJ";

export const signJWT = async (payload: { id: string, username:string }) => {
  const secret = new TextEncoder().encode(JWT_SECRET_KEY);
  const alg = "HS256";
  return new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime("8h")
    .setIssuedAt()
    .setSubject(payload.id)
    .sign(secret);
};

export const verifyJWT = async (token: string) => {
  try {
    return (await jwtVerify(token, new TextEncoder().encode(JWT_SECRET_KEY)))
      .payload;
  } catch (error) {
    console.log(error);
    throw new Error("Your token has expired.");
  }
};

export async function decrypt(session: string | undefined = "") {
  const secret = new TextEncoder().encode(JWT_SECRET_KEY);
  try {
    const { payload } = await jwtVerify(session, secret, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}
