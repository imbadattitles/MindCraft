const argon2 = require("argon2-browser");
const hash = async (password) => {
  const res = await argon2.hash({
    pass: password,
    salt: "m1i2n3d4",
    time: 2, // the number of iterations
    mem: 16, // used memory, in KiB
    hashLen: 16, // desired hash length
    parallelism: 1, // desired parallelism (it won't be computed in parallel, however)
    type: argon2.ArgonType.Argon2i, // Argon2d, Argon2i, Argon2id
  });
  return res;
};
export { hash };
