'use client'
import { useState, useEffect } from 'react'

interface TypingProps {
  texts: string[]
  prefix?: string
  suffix?: string
  timeBetweenTexts?: number
  loop: boolean
}

const Typing: React.FC<TypingProps> = ({
  prefix,
  texts,
  suffix,
  timeBetweenTexts = 3000,
  loop
}) => {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < texts.length) {
        const currentText = texts[currentIndex]
        const nextIndex = currentIndex + 1

        if (typedText === currentText) {
          if (nextIndex < texts.length || loop) {
            setTimeout(() => {
              setTypedText('')
              setCurrentIndex(nextIndex % texts.length)
            }, timeBetweenTexts)
          }
        } else {
          const nextTypedText = currentText.substring(0, typedText.length + 1)
          setTypedText(nextTypedText)
        }
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [currentIndex, texts, typedText, loop, timeBetweenTexts])

  return (
    <div>
      {prefix}
      <span className="text-blue-500">
        {typedText}
        {suffix}
      </span>
    </div>
  )
}

export default Typing
