type Props = {
  alt: string;
  ratio?: string;
  shape?: "rect" | "circle";
  className?: string;
};

export default function ImagePlaceholder({
  alt,
  ratio = "3 / 2",
  shape = "rect",
  className = "",
}: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-sky-tint text-center ${
        shape === "circle" ? "rounded-full" : ""
      } ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="px-4 text-xs leading-snug text-slate/60">{alt}</span>
    </div>
  );
}
