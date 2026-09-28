import test from "node:test";
import assert from "node:assert/strict";
import { mapCountriesToDots } from "./index.ts";

test("map countries point to Toronto", () => {
  assert.deepEqual(
    mapCountriesToDots([{ countryCode: "US", lat: 39, lng: -98, visitCount: 4 }]),
    [{ start: { lat: 39, lng: -98 }, end: { lat: 43.6532, lng: -79.3832 } }]
  );
});
