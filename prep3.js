import { program } from "commander";
import { promises as fs } from "node:fs";
import process from "node:process";

program
    .name("count-containing-words")
    .description("Counts words in a file that contain a particular character")
    .option("-c, --char <char>", "The character to search for", "e")
    .option("-s, --sensitive <boolean", "Should be case sensitive", false)
    .argument("<path>", "The file path to process");

program.parse();

const argv = program.args;
if (argv.length != 1) {
    console.error(`Expected exactly 1 argument (a path) to be passed but got ${argv.length}.`);
    process.exit(1);
}
const path = argv[0];
const char = program.opts().char;
const isSensitive=program.opts().sensitive;

const content = await fs.readFile(path, "utf-8");
const countOfWordsContainingChar = content
  .split(" ").filter((word) => {
    if (isSensitive==="true"){
        return word.includes(char);
    } else{
        return word.toLowerCase().includes(char.toLowerCase());
    }
  }).length;
console.log(countOfWordsContainingChar);