export const getEnv = (key: any) => {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} is not set`);
  }
    return process.env[key];
};