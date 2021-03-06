import { rest } from "msw";
import { IMenu, IRestaurant, IUser } from "../lib/api.interface";
import { clients } from "./fixtures/feature-clients";
import { getMenuList } from "./fixtures/menuList";
import { getRestaurants } from "./fixtures/restaurants";
import { getUsers } from "./fixtures/users";

const MOCK_API = "https://msw.io";

export const handlers = [
  rest.post<{ email: string; password: string }, IUser>(
    `${MOCK_API}/auth/login`,
    (req, res, ctx) => {
      const { email, password } = req.body;
      const users = getUsers();
      const user = users.find((user) => user.email === email);
      if (!user) return res(ctx.delay(), ctx.status(401));
      return res(ctx.delay(), ctx.json(user));
    }
  ),
  rest.post<{ name: string; email: string; password: string }, IUser>(
    `${MOCK_API}/auth/signup`,
    (req, res, ctx) => {
      const { name, email, password } = req.body;
      const users = getUsers();
      const user = users.find((user) => user.email === email);
      if (!user) return res(ctx.delay(), ctx.status(400));
      return res(ctx.delay(), ctx.json(user));
    }
  ),
  rest.get(`${MOCK_API}/users/me`, (req, res, ctx) => {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) return res(ctx.delay(), ctx.status(401));
    const user = getUsers().find((user) => user.token === token);
    if (!user) return res(ctx.delay(), ctx.status(401));
    return res(ctx.delay(), ctx.json(user));
  }),
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
  rest.patch<{ stars: number }>(
    `${MOCK_API}/restaurants/:slug/stars`,
    (req, res, ctx) => {
      const { stars } = req.body;
      return res(ctx.delay(), ctx.json(stars));
    }
  ),
  rest.get<any, IRestaurant>(
    `${MOCK_API}/randoms/restaurant`,
    (req, res, ctx) => {
      const restaurants = getRestaurants();
      const randomIndex = Math.floor(Math.random() * restaurants.length);
      const restaurant = restaurants[randomIndex];

      return res(ctx.delay(), ctx.json(restaurant));
    }
  ),
  rest.get<any, IMenu>(`${MOCK_API}/populars/menu`, (req, res, ctx) => {
    const menu = getMenuList()[0];
    return res(ctx.delay(), ctx.json(menu));
  }),
];
