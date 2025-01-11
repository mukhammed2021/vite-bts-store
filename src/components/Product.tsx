import { Link } from "react-router";

interface ProductProps {
  id: number;
  src: string;
  title: string;
  category: string;
  price: number;
  exclusive: boolean;
}

export default function Product({
  id,
  src,
  title,
  category,
  price,
  exclusive,
}: ProductProps) {
  return (
    <article className="group relative flex flex-col rounded-sm border border-zinc-200">
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <img
          src={src}
          alt={title}
          className="aspect-square size-full rounded-t-sm object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-auto flex-col px-2 pb-[.625rem] pt-2">
        <h3 className="mb-[1.125rem] grow text-sm font-semibold">
          <Link to={`/product/${id}`} className="after:absolute after:inset-0">
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
