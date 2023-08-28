import { useState } from 'react';

let interval: string | number | NodeJS.Timeout | undefined = undefined;
function useMaterial() {
  const [count, setCount] = useState({
    gold: 20,
  });

  interval && clearInterval(interval);
  interval = setInterval(() => setCount({ gold: count.gold + 1 }), 1000);

  return { count };
}

export default useMaterial;
