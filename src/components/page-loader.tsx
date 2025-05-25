'use client'

import { useEffect, useState } from "react"

const loadingTexts = [
  "Build alınıyor...",
  "Derleniyor...",
  "Dağıtılıyor...",
  "Hazırlanıyor...",
  "Neredeyse hazır!"
]

const Progress = ({ value, className }: { value: number; className?: string }) => (
  <div className={`bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${className}`}>
    <div 
      className="bg-blue-600 h-full transition-all duration-700 ease-in-out"
      style={{ width: `${value}%` }}
    />
  </div>
)

export default function PageLoader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => {
        setProgress(p => p + 100 / loadingTexts.length)
      }, 800)
      return () => clearTimeout(timeout)
    } else {
      setTimeout(onFinish, 500)
    }
  }, [progress, onFinish])

  // Her progress adımında doğru yazıyı göster
  const textIndex = Math.min(
    Math.floor((progress / 100) * loadingTexts.length),
    loadingTexts.length - 1
  )

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#1f1e1e] transition-colors">
      <div className="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-200">
        {loadingTexts[textIndex]}
      </div>
      <div className="w-64">
        <Progress value={progress} className="h-3 w-full" />
      </div>
    </div>
  )
}