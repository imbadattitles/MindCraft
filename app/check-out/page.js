"use client";
import { Order } from "@/components/Order";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CheckOut() {
  const router = useRouter();
  const auth = useSelector((state) => state.user.auth);
  useEffect(() => {
    if (auth && typeof window !== "undefined") {
      router.push("/");
    } else {
    }
  }, []);
  if (auth) return null;
  return (
    <section className="container">
      <Order />
    </section>
  );
}
