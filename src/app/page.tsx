'use client'
import {useRouter} from "next/navigation";
import {useEffect} from "react";


export default function Home() {

  const router = useRouter();

  // avoid executing in SSR
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.replace("/login");
  }, [router]);

  return (
   <div>Welcome! This is your Dashboard :)</div>
  );
}
