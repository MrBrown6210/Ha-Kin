import { rest } from "msw";
import { clients } from "./fixtures/feature-clients";
import { restaurants } from "./fixtures/restaurants";

const MOCK_API = "https://msw.io";

export const handlers = [
  rest.get(`${MOCK_API}/feature-clients`, (req, res, ctx) => {
    return res(ctx.delay(), ctx.json(clients));
  }),
  rest.get(`${MOCK_API}/restaurants`, (req, res, ctx) => {
    return res(ctx.delay(), ctx.json(restaurants));
  }),
];
