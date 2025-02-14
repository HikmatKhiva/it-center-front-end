import * as OTPAuth from "otpauth";

// Create a new TOTP object.
let totp = new OTPAuth.TOTP({
  issuer: "ACME", // Provider or service the account is associated with.
  label: "IT-khiva", // Account identifier.
  algorithm: "SHA1", // Algorithm used for the HMAC function.
  digits: 6, // Length of the generated tokens.
  period: 30, // Interval of time for which a token is valid, in seconds.
  secret: "NB2W45DFOIZA", // Arbitrary key encoded in base32 or OTPAuth.Secret instance
  // (if omitted, a cryptographically secure random secret is generated).
  // or `OTPAuth.Secret.fromBase32("NB2W45DFOIZA")` or `new OTPAuth.Secret()`
});

// A cryptographically secure random secret can also be generated with:
let secret = new OTPAuth.Secret({ size: 30 });

// Generate a token (returns the current token as a string).
let token = totp.generate();

// Validate a token (returns the token delta or null if it is not found in the
// search window, in which case it should be considered invalid).
let delta = totp.validate({ token, window: 1 });

// Get the remaining seconds until the current token changes.
let seconds = totp.period - (Math.floor(Date.now() / 1000) % totp.period);

// Convert to Google Authenticator key URI format (usually the URI is encoded
// in a QR code that can be scanned by the user. This functionality is outside
// the scope of the project, but there are many libraries that can be used for
// this purpose).
//
// otpauth://totp/ACME:AzureDiamond?issuer=ACME&secret=NB2W45DFOIZA&algorithm=SHA1&digits=6&period=30
let uri = totp.toString(); // or 'OTPAuth.URI.stringify(totp)'

// Convert from Google Authenticator key URI format.
totp = OTPAuth.URI.parse(uri);

console.log(uri);
