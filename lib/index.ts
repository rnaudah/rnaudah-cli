import { Command } from 'commander';
import * as fs from 'fs';
const commander = new Command();

commander
  .name('rnaudah')
  .description('rnaudah is very ...')
  .version('0.9.2.3');

const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
  commander.commands.push(command);
}

commander.parse()