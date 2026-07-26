/** Client IP hashing and same-origin helpers for visitor / download tracking. */

export function getClientIp(request: Request): string | null {
  const address =
    request.headers.get("x-real-ip") ??
    (process.env.VISITOR_TRUST_CLOUDFLARE_HEADERS === "true"
      ? request.headers.get("cf-connecting-ip")
      : null);
  return address && address.length <= 128 ? address.trim() : null;
}

export async function hashIp(ip: string): Promise<string> {
  const secret = process.env.VISITOR_IP_HASH_SECRET;
  if (!secret) {
    throw new Error("VISITOR_IP_HASH_SECRET is not configured");
  }
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(ip),
  );
  return Array.from(new Uint8Array(signature), (value) =>
    value.toString(16).padStart(2, "0"),
  ).join("");
}

export function publicRequestOrigin(request: Request): string {
  const url = new URL(request.url);
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const forwardedHost = request.headers
    .get("x-forwarded-host")
    ?.split(",")[0]
    ?.trim();
  const protocol = forwardedProtocol || url.protocol.replace(/:$/, "");
  const host = forwardedHost || request.headers.get("host") || url.host;
  return `${protocol}://${host}`;
}

export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  return origin === publicRequestOrigin(request);
}
