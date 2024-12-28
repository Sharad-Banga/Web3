import * as ed from "@noble/ed25519";

async function main() {
  // Generate a secure random private key
  const privKey = ed.utils.randomPrivateKey();

  // Generate the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);

  // Convert the message "hello world" to a Uint8Array
  const message = new TextEncoder().encode("hello world");

  

  // Sign the message
  const signature = await ed.signAsync(message, privKey);

  // Verify the signature
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  // Output the result
  console.log(isValid); // Should print `true` if the signature is valid
}

main();
