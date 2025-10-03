// import { useCart } from "@/hooks/useCart";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Link, useNavigate } from "react-router-dom";
// import { ShoppingBag } from "lucide-react";
// import { toast } from "sonner";

// export default function Checkout() {
//   const { items, getTotalPrice, clearCart } = useCart();
//   const navigate = useNavigate();

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <ShoppingBag className="w-20 h-20 mx-auto mb-4 text-muted-foreground" />
//           <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
//           <Link to="/shop">
//             <Button>Continue Shopping</Button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success("Order placed successfully! (Demo mode - payment integration pending)");
//     clearCart();
//     setTimeout(() => navigate("/"), 1500);
//   };

//   return (
//     <div className="min-h-screen py-8">
//       <div className="container mx-auto px-4 max-w-6xl">
//         <h1 className="text-4xl font-bold mb-8">Checkout</h1>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Checkout Form */}
//           <div className="lg:col-span-2">
//             <Card className="p-6">
//               <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="name">Full Name</Label>
//                     <Input id="name" required className="mt-1" />
//                   </div>
//                   <div>
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input id="phone" type="tel" required className="mt-1" />
//                   </div>
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email</Label>
//                   <Input id="email" type="email" required className="mt-1" />
//                 </div>
//                 <div>
//                   <Label htmlFor="address1">Address Line 1</Label>
//                   <Input id="address1" required className="mt-1" />
//                 </div>
//                 <div>
//                   <Label htmlFor="address2">Address Line 2 (Optional)</Label>
//                   <Input id="address2" className="mt-1" />
//                 </div>
//                 <div className="grid md:grid-cols-3 gap-4">
//                   <div>
//                     <Label htmlFor="city">City</Label>
//                     <Input id="city" required className="mt-1" />
//                   </div>
//                   <div>
//                     <Label htmlFor="state">State</Label>
//                     <Input id="state" required className="mt-1" />
//                   </div>
//                   <div>
//                     <Label htmlFor="pincode">Pincode</Label>
//                     <Input id="pincode" required className="mt-1" />
//                   </div>
//                 </div>
//                 <Button type="submit" className="w-full" size="lg">
//                   Place Order
//                 </Button>
//               </form>
//             </Card>
//           </div>

//           {/* Order Summary */}
//           <div>
//             <Card className="p-6 sticky top-20">
//               <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//               <div className="space-y-3 mb-6">
//                 {items.map((item) => (
//                   <div key={item.id} className="flex justify-between text-sm">
//                     <span className="text-muted-foreground">
//                       {item.title} x {item.quantity}
//                     </span>
//                     <span className="font-semibold">
//                       ₹{((item.price * item.quantity) / 100).toLocaleString()}
//                     </span>
//                   </div>
//                 ))}
//                 <div className="border-t pt-3">
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Subtotal</span>
//                     <span className="font-semibold">
//                       ₹{(getTotalPrice() / 100).toLocaleString()}
//                     </span>
//                   </div>
//                   <div className="flex justify-between mt-2">
//                     <span className="text-muted-foreground">Shipping</span>
//                     <span className="font-semibold">Free</span>
//                   </div>
//                 </div>
//                 <div className="border-t pt-3">
//                   <div className="flex justify-between text-lg">
//                     <span className="font-bold">Total</span>
//                     <span className="font-bold">
//                       ₹{(getTotalPrice() / 100).toLocaleString()}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-20 h-20 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Razorpay Checkout Options
    const options: any = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Razorpay Key ID from .env
      amount: getTotalPrice(), // total in paise
      currency: "INR",
      name: "Ranchi Decor",
      description: "Order Payment",
      image: "/logo.png", // optional: add your logo in public folder
      handler: function (response: any) {
        toast.success("Payment Successful! 🎉");
        clearCart();
        setTimeout(() => navigate("/"), 1500);
        console.log("Razorpay Response:", response);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#EF4444", // red theme
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="address1">Address Line 1</Label>
                  <Input id="address1" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                  <Input id="address2" className="mt-1" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input id="pincode" required className="mt-1" />
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Pay Now
                </Button>
              </form>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.title} x {item.quantity}
                    </span>
                    <span className="font-semibold">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">
                      ₹{getTotalPrice().toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">Free</span>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">
                      ₹{getTotalPrice().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
