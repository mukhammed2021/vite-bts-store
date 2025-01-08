import { Link } from "react-router";

interface ProductProps {
  src: string;
  title: string;
  category: string;
  price: number;
  exclusive: boolean;
}

export default function Product({
  src,
  title,
  category,
  price,
  exclusive,
}: ProductProps) {
  return (
    <article className="group relative rounded-sm border border-zinc-200">
      <Link to="/" className="block">
        <img
          src={src}
          alt={title}
          className="aspect-[222/222] size-full object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
        />
      </Link>
      <div className="px-2 pb-[.625rem] pt-2">
        <h3 className="mb-[1.125rem] text-sm font-semibold">
          <Link to="/" className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        <div className="relative space-y-[.875rem] text-xs">
          <p className="uppercase tracking-widest">{category}</p>
          <div className="flex items-center justify-between">
            <span className="font-medium">${price}</span>
            {exclusive && (
              <span className="rounded-sm bg-zinc-300 px-2 py-1 uppercase text-zinc-500 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                exclusive
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
