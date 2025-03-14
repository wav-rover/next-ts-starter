"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isChanging, setIsChanging] = useState(false)

  // Effet pour l'initialisation du composant
  useEffect(() => {
    // Marquer le composant comme monté côté client
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // Animation de transition
    setIsChanging(true)
    
    // Ajouter la classe d'animation au body et à l'html
    document.body.classList.add('theme-transition')
    document.documentElement.classList.add('theme-transition')
    
    // Basculer entre les deux modes (clair/sombre)
    const newTheme = theme === "light" ? "dark" : "light"
    
    // Changer le thème presque immédiatement, avec juste un petit délai
    // pour permettre aux classes de transition de s'appliquer
    setTimeout(() => {
      setTheme(newTheme)
      
      // Réinitialiser l'état d'animation après la transition
      setTimeout(() => {
        setIsChanging(false)
        document.body.classList.remove('theme-transition')
        document.documentElement.classList.remove('theme-transition')
      }, 300) // Correspond à la durée de l'animation (réduite)
    }, 50) // Délai minimal pour que les transitions s'appliquent correctement
  }

  // Si le composant n'est pas encore monté, afficher un placeholder pour éviter l'erreur d'hydratation
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <div className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Chargement du thème...</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={theme === "light" ? "Passer au mode sombre" : "Passer au mode clair"}
      className="overflow-hidden relative text-primary"
      disabled={isChanging}
    >
      <div className="relative">
        <Sun 
          className={`h-[1.2rem] w-[1.2rem] absolute top-0 left-0 transform transition-all duration-200 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-50'
          }`} 
        />
        <Moon 
          className={`h-[1.2rem] w-[1.2rem] transition-all duration-200 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-50'
          }`} 
        />
      </div>
      <span className="sr-only">
        {theme === "light" ? "Passer au mode sombre" : "Passer au mode clair"}
      </span>
    </Button>
  )
}