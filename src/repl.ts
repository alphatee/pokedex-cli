import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./command.js";
import { initState } from "./state.js";

export function cleanInput(input: string): string[] {
    return input 
	.toLowerCase()
	.trim()
	.split(/\s+/)
	.filter((word) => word !== "");  
}

export function startREPL() {
    const stateObject = initState();
    
    stateObject.readline.prompt();     

    stateObject.readline.on('line', (line) => {
      const words = cleanInput(line)

      if(words.length === 0) {
          stateObject.readline.prompt();
          return;
      }


      // check the command registry
      // const command = getCommands(); 
      const commandName = words[0];
      const cmd = stateObject.commands[commandName]; 

      if(cmd === undefined) {
          console.log("Unknown command");
	  stateObject.readline.prompt(); 
          return;
      }

      cmd.callback(stateObject);

      stateObject.readline.prompt(); 
    });
}
