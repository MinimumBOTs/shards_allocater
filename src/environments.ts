export const BOT_PATH = (() => {
  const path = process.argv.at(2) ?? process.env['BOT_PATH'];
  if (!path) throw new RangeError('The "BOT_PATH" environment is not specified.');

  return path;
})();
export const DISCORD_TOKEN = (() => {
  const token = process.argv.at(3) ?? process.env['DISCORD_TOKEN'];
  if (!token) throw new RangeError('The "DISCORD_TOKEN" environment is not specified.');

  return token;
})();;
export const TOTAL_SHARDS
  = Number(process.argv.at(4) ?? process.env['BOT_TOTAL_SHARDS']) || 'auto';
export const SHARD_LIST
  = (process.argv.at(5) ?? process.env['BOT_SHARD_LIST'])?.split(',').map(Number) ?? 'auto';