import Product from "./Product";
import ProductsHeader from "./ProductsHeader";

const products = [
  {
    id: 1,
    src: "products/2_cool_4_skool.jpg",
    title: "Single Album [2 COOL 4 SKOOL]",
    category: "album",
    price: 8.52,
    exclusive: false,
  },
  {
    id: 2,
    src: "products/dark_and_wild.jpg",
    title: "BTS 1st Album [Dark & Wild]",
    category: "album",
    price: 12.21,
    exclusive: false,
  },
  {
    id: 3,
    src: "products/orul82.jpg",
    title: "BTS 1st Mini Album[O!RUL8,2?]",
    category: "album",
    price: 9.75,
    exclusive: false,
  },
  {
    id: 4,
    src: "products/skool_luv_affair.jpg",
    title: "BTS 2nd Mini Album[Skool Luv Affair]",
    category: "album",
    price: 9.75,
    exclusive: false,
  },
  {
    id: 5,
    src: "products/beanie.png",
    title: "Beanie",
    category: "merch",
    price: 34.44,
    exclusive: true,
  },
  {
    id: 6,
    src: "products/eco-bag.png",
    title: "Eco Bag",
    category: "merch",
    price: 14.76,
    exclusive: true,
  },
  {
    id: 7,
    src: "products/baby_costume_plush_doll_bakery_shop.png",
    title: "BABY COSTUME PLUSH DOLL BAKERY SHOP",
    category: "bt21",
    price: 15.58,
    exclusive: false,
  },
  {
    id: 8,
    src: "products/PLUSH_K-EDITION_ver2.png",
    title: "PLUSH K-EDITION ver.2",
    category: "bt21",
    price: 26.24,
    exclusive: false,
  },
  {
    id: 9,
    src: "products/talk.png",
    title: "Talk! with BTS",
    category: "book",
    price: 49.2,
    exclusive: true,
  },
  {
    id: 10,
    src: "products/365_bts.png",
    title: "365 BTS DAYS (New Cover Edition)",
    category: "edu",
    price: 30.34,
    exclusive: false,
  },
  {
    id: 11,
    src: "products/BTS_RECIPE_BOOK_2.png",
    title: "BTS RECIPE BOOK 2",
    category: "edu",
    price: 28.7,
    exclusive: false,
  },
  {
    id: 12,
    src: "products/Parts_Set.png",
    title: "Parts Set",
    category: "tinytan",
    price: 22.14,
    exclusive: false,
  },
  {
    id: 13,
    src: "products/hoodie.png",
    title: "[In the SEOM] HOODIE (IVORY)",
    category: "in the seom by fans",
    price: 72.98,
    exclusive: true,
  },
];

export default function Products() {
  return (
    <main className="flex-auto pl-4 pr-4 md:pl-2">
      <ProductsHeader />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-[.625rem] pb-4">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
