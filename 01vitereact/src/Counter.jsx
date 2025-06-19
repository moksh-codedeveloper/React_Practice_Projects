import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState("2");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-xl shadow-2xl border border-gray-700"></div>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <button
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg
                        hover:bg-indigo-500 active:bg-indigo-700 
                        transition-all duration-200 ease-in-out
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800
                        shadow-lg shadow-indigo-500/30"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span
          className="text-5xl font-bold text-white min-w-[80px] text-center
                        bg-gray-700/50 py-2 px-4 rounded-lg backdrop-blur-sm"
        >
          {count}
        </span>

        <button
          className="px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg
                        hover:bg-rose-500 active:bg-rose-700
                        transition-all duration-200 ease-in-out
                        focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-800
                        shadow-lg shadow-rose-500/30"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          className="w-20 px-3 py-2 bg-gray-700 text-white rounded-lg
                        border border-gray-600 focus:border-blue-500
                        focus:outline-none focus:ring-2 focus:ring-blue-500/50
                        transition-all duration-200"
        />

        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg
                        hover:bg-blue-500 active:bg-blue-700
                        transition-all duration-200 ease-in-out
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800
                        shadow-lg shadow-blue-500/30"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

        <button
          className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg
                        hover:bg-gray-500 active:bg-gray-700
                        transition-all duration-200 ease-in-out
                        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800
                        shadow-lg shadow-gray-500/30"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
