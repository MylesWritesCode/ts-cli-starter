import { createCommand } from "commander";

export const exampleCommand = () => {
  return createCommand("example").action(() => {
    console.log("Running example command");
  });
};

export const exampleWithArgsCommand = () => {
  return createCommand("with-args")
    .arguments("[args]")
    .action((args) => {
      console.log("Running example-with-args command with args:", args);
    });
};
