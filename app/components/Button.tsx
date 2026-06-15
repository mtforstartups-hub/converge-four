export default function Button({ title }: { title: string }) {
  return (
    <button
      className="
          group relative overflow-hidden
          px-6 h-10 
          bg-terracotta text-neutral-100 font-medium 
          rounded-full shadow-sm
          transition-all duration-500 ease-out
          hover:shadow-lg hover:bg-terracotta/90
          active:scale-95 active:shadow-sm font-sans tracking-[0.02em] text-xl
        "
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
