import fs from 'fs';
import * as path from 'path';
import winston from 'winston';
import 'winston-daily-rotate-file';

const logDir = path.join(__dirname, 'logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const transport = new winston.transports.DailyRotateFile({
    filename: path.join(logDir, '%DATE%-results.log'),
    datePattern: 'YYYY-MM-DD',
    prepend: true,
    level: 'info',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[{timestamp}] [${level}] ${message}`;
        })
    ),
    transports: [transport],
});

export const logInfo = (message: string) => {
    logger.info(message);
};

export const logError = (message: string) => {
    logger.error(message);
};

export const logDebug = (message: string) => {
    logger.debug(message);
};
