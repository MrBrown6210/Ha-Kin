import { rest } from "msw";
import { clients } from "./fixtures/feature-clients";
import { getRestaurants } from "./fixtures/restaurants";

const MOCK_API = "https://msw.io";

export const handlers = [
  rest.get(`${MOCK_API}/feature-clients`, (req, res, ctx) => {
    return res(ctx.delay(), ctx.json(clients));
  }),
  rest.get(`${MOCK_API}/restaurants`, (req, res, ctx) => {
    const restaurants = getRestaurants();
    return res(ctx.delay(), ctx.json(restaurants));
  }),
  rest.get(`${MOCK_API}/restaurants/:slug`, (req, res, ctx) => {
    const slug = req.params.slug;
    const restaurants = getRestaurants();
    const restaurant = restaurants.find(
      (restaurant) => restaurant.slug === slug
    );
    if (!restaurant) return res(ctx.delay(), ctx.status(404));
    return res(ctx.delay(), ctx.json(restaurant));
  }),
];
