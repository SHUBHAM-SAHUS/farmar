import ProductListingPage from "@/components/ProductListingPage";
const wholeSpices = [
  {
    name: "Red Chilli",
    category: "Whole",
    image: "/assets/products-spices/chilli-pepper-dark.webp",
    description: "Whole red chillies for intense heat and vibrant flavor.",
  },
  {
    name: "Coriander",
    category: "Whole",
    image: "/assets/products-spices/coriander-dried-seeds.webp",
    description:
      "Whole coriander seeds, perfect for tempering and grinding fresh.",
  },
  {
    name: "Cumin",
    category: "Whole",
    image: "/assets/products-spices/cumeen-seed.webp",
    description: "Aromatic whole cumin seeds, essential for Indian cooking.",
  },
  {
    name: "Turmeric",
    category: "Finger",
    image: "/assets/products-spices/tumeric-roots.webp",
    description:
      "Whole turmeric fingers, known for their earthy flavor and medicinal properties.",
  },
];

export default function Page() {
  return <ProductListingPage category="Whole Spices" products={wholeSpices} />;
}
