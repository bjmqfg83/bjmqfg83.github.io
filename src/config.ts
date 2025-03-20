import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://bjmqfg83.github.io", // your site url
  title: "Leo's blog",
  slogan: "Exploring the World with Code",
  description: "This is a blog that wish can share something about website Knowledge and life for you",
  social: {
    github: "https://github.com/bjmqfg83", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/%E7%A6%B9%E5%8B%9D-%E6%9E%97-1aa475196/", // leave empty if you don't want to show the linkedin
    email: "bjmqfg83@gmail.com", // leave empty if you don't want to show the email
    rss: false, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "G-2T34DJBTW2", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
