import { productlists } from "../../assets/database/database";
import { ProductCard } from "../../router";

export const Shop = () => {
  return (
    <>
        <section className="container mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {productlists.map((product) => (
                <ProductCard 
                    id={product.id}
                    key={product.key} 
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    price={product.price}
                    discount={product.discount}
                    rating={product.rating}
                    featured={product.featured}
                    category={product.category}
                    color={product.color}
                />
            ))}
        </section>
    </>
  )
}
