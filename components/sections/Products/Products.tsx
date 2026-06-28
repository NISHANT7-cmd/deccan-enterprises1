import ProductCard from "./ProductCard";
import { productCategories } from "./productData";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.35em] text-[#005EB8]">
            OUR PRODUCTS
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Complete Surgical &
            Medical Product Range
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We supply premium-quality medical and surgical
            products to hospitals, clinics, laboratories,
            distributors and healthcare professionals
            across Maharashtra.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}