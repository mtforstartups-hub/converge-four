export default function Button({
  title,
  variant = "primary",
}: {
  title: string;
  // 1. Added "dark" to the allowed variant types
  variant?: "primary" | "secondary" | "dark";
}) {
  const variants = {
    primary: "bg-terracotta text-neutral-100 hover:bg-terracotta/90",
    secondary:
      "border border-pine text-pine hover:bg-pine hover:text-neutral-100",
    // 2. Added the dark variant with your exact requested classes
    dark: "border border-surface text-surface hover:bg-surface hover:text-neutral-900",
  };

  return (
    <button
      className={`
          group relative overflow-hidden
          px-4 md:px-6 h-10 md:h-11 
          ${variants[variant]}
          font-medium 
          shadow-sm
          transition-all duration-500 ease-out
          hover:shadow-lg
          active:scale-95 active:shadow-sm font-sans tracking-[0.02em] text-base md:text-xl
        `}
    >
      {/* The "Track" that holds both words and moves up on hover */}
      <div className="absolute top-0 left-0 w-full h-[200%] flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-1/2">
        {/* Default Text */}
        <span className="h-1/2 flex items-center justify-center">{title}</span>

        {/* Hover Text */}
        <span className="h-1/2 flex items-center justify-center">{title}</span>
      </div>

      {/* Invisible placeholder text to maintain the button's dynamic width
          if you decide to pass variable length text via props. 
        */}
      <span className="invisible px-2">{title}</span>
    </button>
  );
}
