"use client";
import Main from "./components/Main";
import NotFound from "./not-found";
import { useParams } from "next/navigation";

export default function Home() {

  const { category, brand} = useParams();

  return (
    <div className="flex flex-col w-full justify-center items-center bg-white h-full text-gray-700 py-8">
      <Main />
    </div>
  );
}
