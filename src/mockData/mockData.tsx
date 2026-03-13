import type { blogType } from "../utils/entityTypes";

export const usersData = [
  {
    name: "user_one",
    userName: "user_one",
    biography: "user_one biography",
    image: "user_one_image",
    type: "author",
  },
  {
    name: "user_two",
    userName: "user_two",
    biography: "user_two biography",
    image: "user_two_image",
    type: "author",
  },
  {
    name: "user_three",
    userName: "user_three",
    biography: "user_three biography",
    image: "user_three_image",
    type: "author",
  },
];

export const categoryData = [
  {
    name: "nature",
    description: "This is the nature category",
    image: "nature_img",
  },
  {
    name: "gaming",
    description: "This is the gaming category",
    image: "gaming_img",
  },
  {
    name: "coding",
    description: "This is the coding category",
    image: "coding_img",
  },
];

export const blogsData: blogType[] = [
  {
    blogId: 1,
    title: "This is blog one",
    description:
      "This is a description for blog one Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio doloribus inventore sequi, et optio!",
    blogText: "This is the blog for blog one",
    image: "blog_one_img",
    featured: 1,
    userId: 1,
    categoryId: 1,
  },
  {
    blogId: 2,
    title: "This is blog two",
    description:
      "This is a description for blog two Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio doloribus inventore sequi, et optio!",
    blogText: "This is the blog for blog two",
    image: "blog_two_img",
    featured: 0,
    userId: 1,
    categoryId: 2,
  },
  {
    blogId: 3,
    title: "This is blog three",
    description:
      "This is a description for blog three Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio doloribus inventore sequi, et optio!",
    blogText: "This is the blog for blog three",
    image: "blog_three_img",
    featured: 1,
    userId: 2,
    categoryId: 3,
  },
  {
    blogId: 4,
    title: "This is blog four",
    description:
      "This is a description for blog four Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio doloribus inventore sequi, et optio!",
    blogText: "This is the blog for blog four",
    image: "blog_four_img",
    featured: 1,
    userId: 2,
    categoryId: 1,
  },
  {
    blogId: 5,
    title: "This is blog five",
    description:
      "This is a description for blog five Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio doloribus inventore sequi, et optio!",
    blogText: "This is the blog for blog five",
    image: "blog_five_img",
    featured: 0,
    userId: 1,
    categoryId: 3,
  },
  {
    blogId: 6,
    title: "This is blog six",
    description:
      "This is a description for blog six Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio doloribus inventore sequi, et optio!",
    blogText: "This is the blog for blog six",
    image: "blog_six_img",
    featured: 1,
    userId: 3,
    categoryId: 2,
  },
];
