import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const updateSizes = async (id, newSizes) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/update",
        { id, sizes: newSizes },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Sizes updated");
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to update sizes");
    }
  };

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(response.message);
    }
  };
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(response.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">All Product List </p>
      <div className="flex flex-col gap-2">
        {/* List table title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-300  bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>

          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* product List */}
        {list.map((item, idx) => (
          <div
            className="grid grid-cols-[1fr-3fr-1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 border border-gray-300 text-sm"
            key={idx}
          >
            <img className="w-12" src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>

            <p>
              {currency}
              {item.price}
            </p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-right md:text-center cursor-pointer text-lg"
            >
              X 
            </p>
            <input
              type="text"
              placeholder='["M", "L", "XL"]'
              defaultValue={JSON.stringify(item.sizes)}
              onBlur={(e) => updateSizes(item._id, e.target.value)}
              className="border px-1 text-xs"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
