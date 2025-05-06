'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const [count, setCount] = useState(3)
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000); 

    const countTimer = setInterval(() => {
      setCount((current) => {
        if (current > 1) return current - 1;
        clearInterval(countTimer);
        return 0;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countTimer);
    }
  }, [router]);
  return (
    <div className=" m-32 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-lg text-white/70">This page is under development.</p>
      <p className="text-lg text-white/70">You will be returned to the main page by {count}</p>
    </div>
  );
}