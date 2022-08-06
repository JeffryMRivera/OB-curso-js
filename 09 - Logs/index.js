const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

try {
  throw new Error("Este es un error de nivel: ");
} catch (err) {
  logger.info(`${err} info`);
  logger.debug(`${err} debug`);
  logger.warn(`${err} warn`);
  logger.error(`${err} error`);
}
