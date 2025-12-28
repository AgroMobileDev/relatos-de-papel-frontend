import { useCounterStore } from "../../store/useCounterStore";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  return (
    <div className="p-6 bg-white rounded-lg shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Contador Zustand</h2>

      {/* Mostramos el valor del estado */}
      <p className="text-5xl font-bold text-primary mb-6">{count}</p>

      {/* Botones que llaman a las acciones */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -1
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default Counter;
