import { productlists } from "../../assets/database/database"
import { BodyOne, Title } from "../../components/common/CustomComponents"
import { ProductCard } from "../../router"


export const Product = () => {
  return (
    <>
        <section className="py-[120px] md:py-20 bg-white-100">
            <div className="container">
                <Title level={4}>Most Popular Products</Title>
                <div className="flex items-center gap-3 uppercase">
                    <BodyOne className="text-sm ">All Products (8)</BodyOne>
                    <BodyOne className="text-sm text-primary-green">Featured Products (4)</BodyOne>
                </div>
                
                <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-7">
                    {productlists.slice(0, 4).map((product) => (
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
                </div>
            </div>
        </section>
    </>
  )
}
