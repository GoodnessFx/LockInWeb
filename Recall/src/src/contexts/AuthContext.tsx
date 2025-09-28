import React, { createContext, useContext, useState, useEffect } from "react"
import { User } from "../types"

interface AuthContextType {
  user: User | null
  session: any | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => Promise<void>
  signInWithGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  // Simulate loading (like Supabase session check)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const makeFakeUser = (email: string, name?: string): User => ({
    id: Math.random().toString(36).slice(2),
    email,
    name: name || email.split("@")[0] || "User",
    avatar: null,
    isPremium: false,
    preferences: {
      theme: "system",
      defaultView: "timeline",
      autoSync: true,
      notifications: true,
    },
  })

  const signIn = async (email: string, password: string) => {
    setUser(makeFakeUser(email))
    setSession({ token: "dummy-session-token" })
  }

  const signUp = async (email: string, password: string, name: string) => {
    setUser(makeFakeUser(email, name))
    setSession({ token: "dummy-session-token" })
  }

  const signOut = async () => {
    setUser(null)
    setSession(null)
  }

  const signInWithGoogle = async () => {
    // Fake a Google login
    setUser(makeFakeUser("googleuser@example.com", "Google User"))
    setSession({ token: "dummy-google-session" })
  }

  const value = { user, session, loading, signIn, signUp, signOut, signInWithGoogle }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider")
  return ctx
}
