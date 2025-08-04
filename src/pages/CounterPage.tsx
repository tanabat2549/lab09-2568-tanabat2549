import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      {/* Result Text */}
      <p>Counter:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
