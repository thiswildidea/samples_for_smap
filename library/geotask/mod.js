// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.
// Re-export default export
import Default from "./lib/mod.js";
export default Default;
// Re-export all other exports
export * from "./lib/mod.js";
// Execute
// tslint:disable-next-line:no-duplicate-imports
import "./lib/mod.js";
