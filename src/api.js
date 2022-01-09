import axios from "axios";

const apiCall = async () => {
  const { data } = await axios.get(
    "https://mocki.io/v1/3fb1488d-bbdb-4ddd-9a03-a0d2efc98597"
  );
  return data;
};

export const getCategories = async () => {
  const categories = [];
  const data = await apiCall();

  // All categories
  data.map((d) =>
    categories.push({
      category: d.category,
      numberOfRestaurants: d.restaurantList.length,
    })
  );

  // Swiggy category
  categories.push({
    category: "Only In Swiggy",
    numberOfRestaurants: (await isExlusiveRestaurants()).length,
  });

  // All restaurants
  categories.push({
    category: "See All",
    numberOfRestaurants: (await allRestaurants()).length,
  });
  return categories;
};

export const isExlusiveRestaurants = async () => {
  const restaurants = [];
  const data = await apiCall();
  data.map((info) => {
    info?.restaurantList?.map((d) => {
      if (d.isExlusive && !restaurants.includes(d.name)) {
        restaurants.push(d);
      }
    });
  });
  return restaurants;
};

export const allRestaurants = async () => {
  const restaurants = [];
  const data = await apiCall();
  data.map((item) => {
    item?.restaurantList?.map((d) => {
      if (!restaurants.includes(d.name)) {
        restaurants.push(d);
      }
    });
  });
  return restaurants;
};

export const categoryInfo = async (categoryName) => {
  const data = await apiCall();
  switch (categoryName) {
    case "Only In Swiggy":
      return isExlusiveRestaurants();

    case "See All":
      return allRestaurants();

    default:
      let res = data.map((d) => {
        if (d.category.toLowerCase() == categoryName.toLowerCase())
          return d.restaurantList;
      });
      res = res.filter((d) => d !== undefined);
      return res[0];
  }
};
