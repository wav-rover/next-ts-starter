'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl space-y-8"
      >
        <Card className="border shadow-lg text-primary">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Next.js Starter</CardTitle>
            <CardDescription className="text-muted-foreground">
              Built with Next.js, Shadcn UI, Framer Motion, Next SEO, Tailwind CSS, Stripe, and Better Auth
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Get started by editing this page or exploring the features below:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button asChild variant="outline">
                <Link href="/auth/login">Authentication Demo</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/payment">Stripe Payment Demo</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">Ready to build something amazing</p>
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  )
}
