const franc = require("franc");
const lang = require("langs");
const colors = require("colors");
const sample = process.argv[2];
const langCode = franc(sample);

if (langCode === "und") {
    console.log("Error in the sample provided. Try a larger sample or check the argument quotes".red);
} else {
    const language = lang.where("3", langCode);
    console.log(language.name.yellow);
}