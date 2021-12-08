import winston from 'winston';

const logger = winston.createLogger({
    level: 'debug'
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export {logger};