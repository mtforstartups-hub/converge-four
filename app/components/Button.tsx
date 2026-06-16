export default function Button({
  title,
  variant = "primary",
}: {
  title: string;
  variant?: "primary" | "secondary" | "dark";
}) {
  const variants = {
    primary: "bg-terracotta text-neutral-100 hover:bg-terracotta/90",
    secondary:
      "border border-pine text-pine hover:bg-pine hover:text-neutral-100",
    dark: "border border-surface text-surface hover:bg-surface hover:text-neutral-900",
  };

  return (
    <button
      className={`
        relative flex items-center justify-center
        px-4 md:px-6 h-10 md:h-11 
        ${variants[variant]}
        font-sans font-medium tracking-[0.02em] text-base md:text-xl
        shadow-sm transition-all duration-300 ease-out
        hover:shadow-lg hover:brightness-105
        active:scale-95 active:shadow-sm
      `}
    >
      {title}
    </button>
  );
}
