import winston from "winston";
import BrowserConsole from "winston-transport-browserconsole";

const logger = winston.createLogger({
    level: "debug",
    transports: [],
});

switch (process.env.NODE_ENV) {
    case "test":
        // - Write all logs with importance level of `error` or less to `error.log`
        const errorFile = new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
        });
        // - Write all logs with importance level of `info` or less to `combined.log`
        const infoFile = new winston.transports.File({
            filename: "logs/combined.log",
        });

        logger.add(errorFile).add(infoFile);
        break;
    case "development":
        const consoleLog = new BrowserConsole({
            format: winston.format.simple(),
        });
        logger.add(consoleLog);
        break;
    case "production":
    default:
        break;
}

export { logger };
