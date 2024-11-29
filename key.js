function generateKey(name, days, hours) {
  const key = `${name.toUpperCase()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const expiration = Date.now() + (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000);
  return { name, key, expiration };  // Include name in the key object
}
