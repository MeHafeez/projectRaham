"use client"

import { useEffect, useState } from "react"
import { Zap } from "lucide-react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative text-center">
        {/* Thunder icon with animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping">
            <Zap className="w-16 h-16 text-blue-400 mx-auto" />
          </div>
          <Zap className="w-16 h-16 text-blue-500 mx-auto animate-bounce" />
        </div>

        {/* Company name */}
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">Raham Electro</h1>

        {/* Loading text */}
        <p className="text-blue-300 text-lg animate-pulse">Powering Your World...</p>

        {/* Loading bar */}
        <div className="mt-8 w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-loading-bar" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-loading-bar {
          animation: loading-bar 2.5s ease-out;
        }
      `}</style>
    </div>
  )
}
