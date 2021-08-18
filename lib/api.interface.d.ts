export interface IClient {
  id: string;
  image: string;
}

export interface IRestaurant {
  id: string;
  name: string;
  slug: string;
  stars: number;
  user?: {
    stars: number;
  };
  reviewers: number;
  tags: string[];
  averageCost: number;
  coverImageURL: string;
  images: string[];
  phoneNumber: string;
  address: string;
  facilities: string[];
}

export interface IUser {
  token: string;
  name: string;
  email: string;
}

export interface IMenu {
  id: string;
  slug: string;
  name: string;
  description: string;
  restaurant: {
    id: string;
    slug: string;
    name: string;
  };
}
