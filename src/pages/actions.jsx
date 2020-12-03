import Links from "./links.json";

export const readCategories = () => {
  let res = [];
  Links.map((link) => (res = [...res, ...link.categories]));
  return Array.from(new Set([...res])).sort();
};

export const filterLinkWithCategory = (category) => {
  const filteredLinks = [];
  Links.forEach((link) => {
    if (link.categories.some((e) => e === category)) {
      filteredLinks.push(link);
    }
  });
  return filteredLinks;
};
