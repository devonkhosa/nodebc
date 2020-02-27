const Logger = require('logplease');
const logger = Logger.create('ComIT');
logger.debug(`Hello Node.js`);
logger.info(`Node.js is great!!`);
logger.warn(`Warning, Warning, I think we have a Warning`);
logger.error(`Mayday Mayday, we have an error, repeat, we have an error`);