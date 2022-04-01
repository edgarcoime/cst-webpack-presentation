use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello_rust_wasm() -> String {
    "Hello from Rust WASM!".to_string()
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
