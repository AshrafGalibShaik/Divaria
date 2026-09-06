import Image from "next/image";

/**
 * A framed image. Falls back to a tonal panel when no photograph exists yet,
 * so the layout is identical either way.
 */
export function Plate({
  src,
  alt = "",
  caption,
  className = "",
  position,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  dark = false,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
  position?: string;
  sizes?: string;
  priority?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`plate relative overflow-hidden ${className}`}>
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${dark ? "brightness-[0.62]" : ""}`}
          style={position ? { objectPosition: position } : undefined}
        />
      )}
      {caption && (
        <span className="label absolute bottom-4 left-4 text-ink/45">{caption}</span>
      )}
    </div>
  );
}
