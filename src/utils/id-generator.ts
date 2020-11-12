/* eslint-disable no-bitwise */
const s4 = (): string =>
  (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

export const idGenerator = (): string => s4() + s4() + s4() + s4();
