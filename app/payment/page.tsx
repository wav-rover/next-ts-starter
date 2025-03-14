"use client"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

// Replace with your Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "your_stripe_key")

export default function PaymentPage() {
  const [amount, setAmount] = useState(10)
  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    setLoading(true)
    
    try {
      // In a real app, you would make a call to your API to create a Stripe checkout session
      console.log(`Processing payment for $${amount}`)
      
      // Mock payment process
      setTimeout(() => {
        alert(`Payment of $${amount} was successful!`)
        setLoading(false)
      }, 2000)
      
      // Example of how you would redirect to Stripe Checkout:
      // const stripe = await stripePromise
      // const { error } = await stripe.redirectToCheckout({
      //   sessionId: response.data.id,
      // })
    } catch (error) {
      console.error("Payment error:", error)
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader>
            <CardTitle>Stripe Payment Demo</CardTitle>
            <CardDescription>Process a sample payment with Stripe</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </div>
            <Button 
              className="w-full" 
              onClick={handlePayment} 
              disabled={loading}
            >
              {loading ? "Processing..." : `Pay $${amount}`}
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/" className="text-sm text-primary hover:underline">
              Back to home
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
