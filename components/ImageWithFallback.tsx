import * as React from "react";
import banner01 from "public/img//banner01.jpg";
import Image from "next/image";
import { useState } from "react";
import { ImageProps } from "next/image";

interface Props extends ImageProps {
  fallBackSrc?: string;
}

const ImageWithFallback: React.FC<Props> = (props) => {
  const { src, fallBackSrc = banner01, alt } = props;
  const [imageError, setImageError] = useState(false);

  return (
    <Image
      {...props}
      alt={alt ? alt : "default image"}
      src={imageError || typeof src !== "string" ? fallBackSrc : src}
      onError={() => setImageError(true)}
      onLoadedData={() => setImageError(false)}
    />
  );
};

export default ImageWithFallback;
