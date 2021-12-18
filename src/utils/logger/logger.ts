import winston from 'winston';

// - Write all logs with importance level of `error` or less to `error.log`
const errorFile = new winston.transports.File({ filename: 'logs/error.log', level: 'error' });

// - Write all logs with importance level of `info` or less to `combined.log`
const infoFile = new winston.transports.File({ filename: 'logs/combined.log' });

const consoleLog = new winston.transports.Console({ format: winston.format.simple() });

const logger = winston.createLogger({
    level: 'debug',
    transports: [],
});

if (!['production', 'test'].includes(process.env.NODE_ENV)) {
    logger.add(consoleLog);
}

// if (!['test'].includes(process.env.NODE_ENV)) {
logger.add(errorFile).add(infoFile);
// }

export {logger};