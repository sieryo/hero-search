import { PrismaClient } from "@prisma/client";
import AddProduct from "./add-product";

const prisma = new PrismaClient();
const getProducts = async () => {
  const res = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      brandId: true,
      brand: true,
    },
  });

  return res;
};

const getBrands = async () => {
  const res = await prisma.brand.findMany();
  return res;
};

const CrudPage = async () => {
  const [products, brands] = await Promise.all([getProducts(), getBrands()]);
  return (
    <div className="relative overflow-x-auto px-5 py-7">
      <AddProduct brands={brands} />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr
              key={product.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{++i}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.title}
              </th>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.brand.name}</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudPage;
