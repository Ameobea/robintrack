import * as express from "express";

const LISTEN_PORT = process.env["LISTEN_PORT"] || 8383;

const app = express();

// Mount routes
// TODO

app.listen(LISTEN_PORT);
