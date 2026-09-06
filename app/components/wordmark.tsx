import Image from "next/image";

/** Wordmark cropped out of the supplied logo, background made transparent. */
export function Wordmark({
  className = "w-52",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Image
      src="/divaria-wordmark.png"
      alt="Label Divaria, Pret | Bridal"
      width={1060}
      height={237}
      priority
      sizes="320px"
      className={`h-auto ${className} ${invert ? "invert" : ""}`}
    />
  );
}
