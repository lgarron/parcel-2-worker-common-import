import { parse } from "cubing/alg";

console.log("wrapper started");
new Worker("./worker.ts");

console.log("wrapper call", parse("R U R'"));
