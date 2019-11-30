// @flow
import "dotenv/config";
import { module1 } from "libs";

const bar = module1("foo");
console.log(bar);
