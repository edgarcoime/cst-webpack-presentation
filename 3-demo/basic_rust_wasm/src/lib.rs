use serde::{Deserialize, Serialize};
use rand::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn get_random_positive_number(max: u32) -> u32 {
    let mut rng = thread_rng();
    rng.gen_range(0..=max)
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
