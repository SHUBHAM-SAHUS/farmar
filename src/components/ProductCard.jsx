import React from "react";
import SpaIcon from "@mui/icons-material/Spa";
import Link from "next/link";

const ProductCard = ({ title, content, backgroundImage, link }) => {
  const CardContent = () => (
    <div className="relative rounded-2xl shadow-lg border border-green-100 bg-white overflow-hidden flex flex-col group transition-transform hover:scale-[1.03] hover:shadow-2xl">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end items-center p-4">
          <SpaIcon className="text-white mb-2" style={{ fontSize: 36 }} />
          <div className="text-lg sm:text-xl font-bold text-white drop-shadow mb-1">
            {title}
          </div>
          <div className="text-xs sm:text-sm text-white/90">{content}</div>
        </div>
      </div>
    </div>
  );

  return link ? (
    <Link href={link}>
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
};

export default ProductCard;
