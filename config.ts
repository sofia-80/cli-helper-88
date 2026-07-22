import fs from 'fs';
import path from 'path';

interface Config {
  host: string;
  port: number;
  useCache: boolean;
}

const defaultConfig: Config = {
  host: 'localhost',
  port: 3000,
  useCache: true,
};

function loadConfig(filePath: string): Config {
  const fullPath = path.resolve(__dirname, filePath);
  try {
    const data = fs.readFileSync(fullPath, 'utf-8');
    const userConfig = JSON.parse(data) as Partial<Config>;
    return { ...defaultConfig, ...userConfig };
  } catch (error) {
    console.warn(`Could not load config file: ${fullPath}, using defaults`);
    return defaultConfig;
  }
}

export { loadConfig, Config };