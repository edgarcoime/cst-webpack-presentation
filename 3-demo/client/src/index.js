import * as _ from "lodash";

console.log("Hello world!");

let my_arr = [1, 2, 3, 4, 5, 6];

export function chunker() {
  return _.chunk(my_arr, 4);
}
