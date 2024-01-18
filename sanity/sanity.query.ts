import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPost() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      author,
      body,
      mainImage {alt, "image": asset->url},
      bannerImage {alt, "image": asset->url},
      publishedAt,
      slug,
      title
    }`
  );
}

export async function getSinglePost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      author,
      body,
      mainImage {alt, "image": asset->url},
      bannerImage {alt, "image": asset->url},
      publishedAt,
      slug,
      title
    }`,
    { slug }
  );
}

export async function getGame() {
    return client.fetch(
      groq`*[_type == "game"]{
        _id,
        description,
        slug,
        mainImage {alt, "image": asset->url},
        title,
        value
      }`
    );
  }

export async function getSingleGame(slug: string) {
    return client.fetch(
        groq`*[_type == "game" && slug.current == $slug][0]{
        _id,
        description,
        slug,
        mainImage {alt, "image": asset->url},
        title,
        value
        }`,
        { slug }
    );
}