'use client'

import { useState, useEffect, useRef, RefObject } from 'react'

export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: 0.1 }
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Ensure we don't re-observe if it's already intersecting
    if (isIntersecting) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        // Disconnect the observer once the element is visible
        if (observerRef.current) {
          observerRef.current.disconnect()
        }
      }
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observerRef.current.observe(currentRef)
    }

    return () => {
      if (observerRef.current && currentRef) {
        observerRef.current.unobserve(currentRef)
      }
    }
  }, [ref, options, isIntersecting])

  return isIntersecting
}