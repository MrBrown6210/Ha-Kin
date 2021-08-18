import { IMenu } from "../../lib/api.interface";
import { getRestaurants } from "./restaurants";

const restaurant = getRestaurants()[0];

export const getMenuList = (): IMenu[] => [
  {
    id: "1",
    slug: "canada-breakfast-style",
    name: "Canada Breakfast Style",
    description:
      "Traditional Newfoundland fare goes gourmet at Chef Todd Perrin’s Mallard Cottage in Quidi Vidi. The former Top Chef Canada contestant uses local ingredients – think seal flipper, chanterelles and cod – in his ever-changing menu. The Brakey Special, pictured here, is a generous off-menu breakfast of the best, biggest and freshest daily fare.",
    restaurant: {
      id: restaurant.id,
      slug: restaurant.slug,
      name: restaurant.name,
    },
  },
];
