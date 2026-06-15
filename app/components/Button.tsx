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
          px-6 h-11 rounded-none
          ${variants[variant]}
          font-medium 
          transition-all duration-500 ease-out
          hover:shadow-[4px_4px_0px_0px_rgba(27,107,83,1)]
          active:translate-y-1 active:translate-x-1 active:shadow-none
          font-sans tracking-[0.02em] text-xl
          border-2
        `}
    >
      {/* The "Track" that holds both words and moves up on hover */}
      <div className="absolute top-0 left-0 w-full h-[200%] flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-1/2">
        {/* Default Text */}
        <span className="h-1/2 flex items-center justify-center uppercase tracking-widest text-sm">{title}</span>

        {/* Hover Text */}
        <span className="h-1/2 flex items-center justify-center uppercase tracking-widest text-sm">{title}</span>
      </div>

      {/* Invisible placeholder text to maintain the button's dynamic width
          if you decide to pass variable length text via props. 
        */}
      <span className="invisible px-2 uppercase tracking-widest text-sm">{title}</span>
    </button>
  );
}
