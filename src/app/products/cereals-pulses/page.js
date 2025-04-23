import ProductListingPage from "@/components/ProductListingPage";
const grainsAndLegumes = [
  {
    name: "Chickpeas",
    category: "Whole",
    image: "/assets/products-cereals/chick-peas.webp",
    description: "Nutritious whole chickpeas, rich in protein and fiber.",
  },
  {
    name: "Green Gram",
    category: "Gram",
    image: "/assets/products-cereals/green-gram.webp",
    description:
      "Fresh green gram packed with nutrients and ideal for sprouting.",
  },
  {
    name: "Soyabean",
    category: "Whole",
    image: "/assets/products-cereals/soyabean.webp",
    description:
      "Whole soyabeans, a protein-rich ingredient for various recipes.",
  },
  {
    name: "Wheat",
    category: "Whole",
    image: "/assets/products-cereals/wheat.webp",
    description: "Premium quality whole wheat grains for milling or cooking.",
  },
];


export default function Page() {
  return <ProductListingPage category="Cereals & Pulses" products={grainsAndLegumes} />;
}
