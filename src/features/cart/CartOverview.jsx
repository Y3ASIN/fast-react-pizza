import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalPizzaQuantity = useSelector(getTotalCartQuantity);
  const totalPizzaPrice = useSelector(getTotalCartPrice);

  if (!totalPizzaQuantity) return null;
  return (
    <div className=" flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalPizzaQuantity} pizzas</span>
        <span>{formatCurrency(totalPizzaPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
