import dotenv from "dotenv";
import { Command } from "commander";

import { exampleCommand, exampleWithArgsCommand } from "@/commands/example";

dotenv.config();

function main() {
  const program = new Command();

  program
    .addCommand(exampleCommand())
    .addCommand(exampleWithArgsCommand())
}

main();
