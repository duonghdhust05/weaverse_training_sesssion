//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error("Invalid input");
    }
    this._p = p;
    this._g = g;
  }

  isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  modPow(base, exponent, modulus) {
    if (modulus === 1) return 0;
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
      if (exponent % 2 === 1) result = (result * base) % modulus;
      exponent = Math.floor(exponent / 2);
      base = (base * base) % modulus;
    }
    return result;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this._p) {
      throw new Error("Private key must be greater than 1 and less than p");
    }
    return this.modPow(this._g, privateKey, this._p);
  }

  getSecret(theirPublicKey, myPrivateKey) {
    if (myPrivateKey <= 1 || myPrivateKey >= this._p) {
      throw new Error("Private key must be greater than 1 and less than p");
    }
    return this.modPow(theirPublicKey, myPrivateKey, this._p);
  }

  static getPrivateKey(p) {
    return Math.floor(Math.random() * (p - 2)) + 2;
  }
}
