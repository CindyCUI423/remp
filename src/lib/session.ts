import {cookies} from "next/headers";

/**
 * Set token in cookie
 * @param token
 * @param maxAgeInSeconds
 */
export async function createSession(token: string, maxAgeInSeconds = 7 * 24 * 60 * 60) {
    const cookieStore = await cookies();
    const expiresAt = new Date(Date.now() + maxAgeInSeconds * 1000);

    cookieStore.set("token", token, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
    });
};

/**
 * Delete token in BROWSER's cookie
 */
export async function deleteSession() {
    const cookieStore = await cookies();
    // use set() to properly delete cookie on browser
    // delete() only affects server, cannot delete cookie on browser
    cookieStore.set("token", '', {
        expires: new Date(0),
    })
}