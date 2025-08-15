'use client'
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import {increment, incrementByAmount} from "@/store/counterSlice";


export default function Home() {

  // const router = useRouter();
  //
  // // avoid executing in SSR
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) router.replace("/login");
  // }, [router]);
  //
  // // const count = useSelector((state:RootState) => state.counter.value);
  // // const dispatch = useDispatch<AppDispatch>();



  return (
      <>
        <div>Welcome! This is your Dashboard :)</div>
        {/*<div>{count}</div>*/}
        {/*<button onClick={()=>{dispatch(increment())}}>Add</button>*/}
        {/*<button onClick={()=>{dispatch(incrementByAmount(2))}}>Add 2</button>*/}
      </>
  );
}
