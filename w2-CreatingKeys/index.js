var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as ed from "@noble/ed25519";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Generate a secure random private key
        const privKey = ed.utils.randomPrivateKey();
        // Generate the public key from the private key
        const pubKey = yield ed.getPublicKeyAsync(privKey);
        // Convert the message "hello world" to a Uint8Array
        const message = new TextEncoder().encode("hello world");
        // Sign the message
        const signature = yield ed.signAsync(message, privKey);
        // Verify the signature
        const isValid = yield ed.verifyAsync(signature, message, pubKey);
        // Output the result
        console.log(isValid); // Should print `true` if the signature is valid
    });
}
main();
