import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

export function cleanInput(input: string): string[] {
    return input 
	.toLowerCase()
	.trim()
	.split(/\s+/)
	.filter((word) => word !== "");  
}

export function startREPL() {
    const rl = createInterface({
      input: stdin,
      output: stdout,
      prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on('line', (line) => {
      const words = cleanInput(line)

      if(words.length === 0) {
          rl.prompt();
          return;
      }

      console.log(`Your command was: ${words[0]}`);
      rl.prompt(); 
    });
}
