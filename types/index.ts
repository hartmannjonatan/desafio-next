import { Slug } from "sanity";

export type PostType = {
  _id: string,
  author: string,
  slug: Slug,
  mainImage: {
    alt: string,
    image: string
  },
  body: string,
  publishedAt: Date,
  title: string
};

export type GameType = {
    _id: string,
  value: Number,
  slug: string,
  mainImage: {
    alt: string,
    image: string
  },
  description: string,
  title: string
}