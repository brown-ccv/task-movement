// Event trigger settings - used in both the react app (renderer) and the electron app (main)
// teensyduino
const vendorId = "16c0";
const productId = "";

// brainvision - will be used if product Id (line 4) or process.env.EVENT_MARKER_PRODUCT_ID are not set
// commName can be changed with environment variable process.env.EVENT_MARKER_COM_NAME
const comName = "COM3";

// NOTE - these event codes must match what is in public/config/trigger.js
const eventCodes = {
  test_connect: 32,
  open_task: 12,
  left: 1,
  right: 2,
  up: 3,
  down: 4,
  center: 5,
  yawn: {
    start: 6,
    stop: 7,
  },
  events: {
    start: 8,
    stop: 9,
  },
  rest: {
    start: 10,
    stop: 11,
  },
};

// this is module.exports isntead of just exports as it is also imported into the electron app
module.exports = {
  vendorId,
  productId,
  eventCodes,
  comName,
};
