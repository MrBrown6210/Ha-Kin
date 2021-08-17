import { IRestaurant } from "../../lib/api.interface";
export const getRestaurants = (): IRestaurant[] => [
  {
    id: "1",
    name: "Cozy Royale",
    slug: "cozy-royale",
    stars: 4,
    reviewers: 249,
    tags: ["burger", "lunch"],
    averageCost: 220,
    coverImageURL:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
  },
  {
    id: "2",
    name: "KIMCHI, Czechia",
    slug: "kimchi-czrchia",
    stars: 5,
    reviewers: 729,
    tags: ["korean", "kimchi"],
    averageCost: 400,
    coverImageURL:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    id: "3",
    name: "Alabama",
    slug: "alabama",
    stars: 5,
    reviewers: 541,
    tags: ["wine", "salmon", "luxuly"],
    averageCost: 550,
    coverImageURL:
      "https://images.unsplash.com/photo-1515036918611-4b7f32b8406c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  },
  {
    id: "4",
    name: "Commissary",
    slug: "commissary",
    stars: 4,
    reviewers: 210,
    tags: ["cafe", "green house", "plant", "dinner"],
    averageCost: 140,
    coverImageURL:
      "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "5",
    name: "Barber and Parlour",
    slug: "barber-and-parlour",
    stars: 2,
    reviewers: 5042,
    tags: ["co-working", "business", "coffee"],
    averageCost: 220,
    coverImageURL:
      "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80",
  },
  {
    id: "6",
    name: "San Cristo",
    slug: "san-cristo",
    stars: 4,
    reviewers: 259,
    tags: ["drink", "cafe", "plant", "relax"],
    averageCost: 100,
    coverImageURL:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
];
