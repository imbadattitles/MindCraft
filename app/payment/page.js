"use client";
import { Payment } from "@/components/Payment";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PaymentPage() {
  const router = useRouter();
  const auth = useSelector((state) => state.user.auth);
  useEffect(() => {
    if (!auth && typeof window !== "undefined") {
      // alert("не зареган");
      router.push("/");
    } else {
    }
  }, [auth]);
  if (!auth) return null;
  return (
    <section className="container">
      <Payment />
    </section>
  );
}
