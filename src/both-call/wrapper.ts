import { parse } from "cubing/alg";

console.log("wrapper started");
new Worker(new URL("./worker.ts", import.meta.url), { type: "module" });

console.log("wrapper call", parse("R U R'"));
