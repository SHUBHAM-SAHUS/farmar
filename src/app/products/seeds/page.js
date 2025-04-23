import ProductListingPage from "@/components/ProductListingPage";
const products = [
  {
    name: "TG-Dark",
    category: "Seed",
    description: "Premium quality dark tomato seeds for optimal yield.",
    image: "/assets/products-seeds/Dark-Red.webp",
  },
  {
    name: "TG-Celebrity",
    category: "Seed",
    description: "High-performing celebrity variety tomato seeds.",
    image: "/assets/products-seeds/Celebrity.webp",
  },
  {
    name: "TG-Darsh",
    category: "Seed",
    description: "Disease-resistant Darsh variety tomato seeds.",
    image: "/assets/products-seeds/Darsh.webp",
  },
  {
    name: "TG-Kiran",
    category: "Seed",
    description: "Early maturing Kiran variety tomato seeds.",
    image: "/assets/products-seeds/Kira.webp",
  },
  {
    name: "TG-Modak",
    category: "Seed",
    description: "High-yielding Modak variety tomato seeds.",
    image: "/assets/products-seeds/Modak.webp",
  },
  {
    name: "TG-Komal",
    category: "Seed",
    description: "Soft-skinned Komal variety tomato seeds.",
    image: "/assets/products-seeds/Komal.webp",
  },
  {
    name: "TG-Ornate",
    category: "Seed",
    description:
      "Premium Ornate variety tomato seeds for greenhouse cultivation.",
    image: "/assets/products-seeds/Ornate.webp",
  },
  {
    name: "TG-Nandini",
    category: "Seed",
    description: "Heat-tolerant Nandini variety tomato seeds.",
    image: "/assets/products-seeds/Nandini.webp",
  },
];

export default function Page() {
  return <ProductListingPage category="Seeds" products={products} />;
}
