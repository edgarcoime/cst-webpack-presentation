import "./index.css";
import * as _ from "lodash";
import * as BasicRust from "basic-rust-wasm";
// import "../../basic_rust_wasm/pkg"

console.log("Hello world!");

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function chunkifyArray(chunkSize) {
  return _.chunk(myArr, chunkSize);
}

console.log("Hello!");