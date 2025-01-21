'use client';  

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default function AboutPage() {
  const [count, setCount] = useState(0); 
  const router = useRouter(); 

  useEffect(() => {
    console.log('AboutPage mounted');
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page!</p>
      <p>State example: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
