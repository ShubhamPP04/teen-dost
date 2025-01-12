"use client"

import { Moon, Sun } from "lucide-react"
import { cn } from "../../lib/utils"
import { useTheme } from "../../lib/ThemeContext"

export function ThemeToggle({ className }) {
  const { isDark, setIsDark } = useTheme();

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        isDark 
          ? "bg-gray-800 border border-gray-700" 
          : "bg-white border border-gray-200",
        className
      )}
      onClick={() => setIsDark(!isDark)}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark 
              ? "transform translate-x-0 bg-gray-700" 
              : "transform translate-x-8 bg-gray-100"
          )}
        >
          {isDark ? (
            <Moon 
              className="w-4 h-4 text-gray-100" 
              strokeWidth={1.5}
            />
          ) : (
            <Sun 
              className="w-4 h-4 text-gray-600" 
              strokeWidth={1.5}
            />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark 
              ? "bg-transparent" 
              : "transform -translate-x-8"
          )}
        >
          {isDark ? (
            <Sun 
              className="w-4 h-4 text-gray-400" 
              strokeWidth={1.5}
            />
          ) : (
            <Moon 
              className="w-4 h-4 text-gray-400" 
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  )
} 