// // src/components/ShopByCategory.tsx
// import { categories } from "../data/categories";
// import { products } from "../data/products";
// import { Link } from "react-router-dom";

// export default function ShopByCategory() {
//   return (
//     <section className="py-16 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
//           {categories.map((cat) => {
//             const productCount = products.filter(
//               (p) => p.category === cat.id
//             ).length;

//             return (
//               <Link
//                 key={cat.id}
//                 to={`/shop?category=${cat.id}`}
//                 className="flex flex-col items-center text-center group"
//               >
//                 <div
//                   className="
//                     w-32 h-32 rounded-full overflow-hidden 
//                     border-4 border-transparent shadow 
//                     transition-all duration-300 
//                     group-hover:border-red-600 group-hover:scale-105
//                   "
//                 >
//                   <img
//                     src={cat.image}
//                     alt={cat.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="mt-4 font-semibold text-lg">{cat.name}</h3>
//                 <p className="text-sm text-muted-foreground">
//                   {productCount} Products
//                 </p>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import { categories } from "../data/categories";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function ShopByCategory() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* 🔴 Heading changed */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((cat) => {
            const productCount = products.filter(
              (p) => p.category === cat.id
            ).length;

            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className="
                    w-32 h-32 rounded-full overflow-hidden 
                    border-4 border-transparent shadow 
                    transition-all duration-300 
                    group-hover:border-red-600 group-hover:scale-105
                  "
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {productCount} Products
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
