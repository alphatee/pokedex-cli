import type { State } from "./state.js"; 

export function commandHelp(state: State) {
    console.log(
        `
        Welcome to the Pokedex!
        Usage:
        `);
        
    for (const [name, item] of Object.entries(state.commands)) {
        console.log(`\t${name}: ${item.description}`);
    }
}
