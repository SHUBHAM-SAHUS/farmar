import ProductListingPage from "@/components/ProductListingPage";
const spices = [
  {
    name: "Turmeric",
    category: "Powder",
    image: "/assets/product-images/Turmuric-6.webp",
    description:
      "Pure turmeric powder, known for its color and medicinal properties.",
  },
  {
    name: "Red Chilli",
    category: "Powder",
    image: "/assets/product-images/Red-Chilli-1.webp",
    description: "Fiery red chilli powder to spice up your dishes.",
  },
  // {
  //   name: "Kashmiri Mirch",
  //   category: "Mirch",
  //   image: "/assets/product-images/kashmiri.webp",
  //   description: "Mild Kashmiri mirch with vibrant color and aroma.",
  // },
  {
    name: "Green Chilli",
    category: "Powder",
    image: "/assets/product-images/Green-Chilli-Powder-1.webp",
    description: "Spicy green chilli powder for a sharp, tangy flavor.",
  },
  {
    name: "Garam Masala",
    category: "Masala",
    image: "/assets/product-images/Garma-Masala-1.webp",
    description: "Aromatic blend of spices for rich and flavorful curries.",
  },
  {
    name: "Coriander",
    category: "Powder",
    image: "/assets/product-images/Corinader-1.webp",
    description: "Fresh coriander powder with earthy and citrusy notes.",
  },
];


export default function Page() {
  return <ProductListingPage category="FMCG Products" products={spices} />;
}
