// server vs client components

// all components are server by default
// but server comp cant aceess browser apis or listen to browser events
// usually we default to server components in next but use client only when necessary

import Link from "next/link";
import AddToCart from "./components/AddToCart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Homepage</h1>
      {/* dont put a anchor tag it re request the assests */}
      <Link href={'/login'}>loginpage</Link>
      <br/><br/>

      <div>
        <AddToCart/>
      </div>
    </main>
  );
}
