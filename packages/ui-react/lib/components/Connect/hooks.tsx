import { useContext, useEffect, useMemo, useState } from "react"
import { SelectedAccountCtx } from "./accountCtx"
import { extensionCtx } from "./extensionCtx"
import { getInjectedExtensions } from "polkadot-api/pjs-signer"
import { Any } from "../../utils"

const getJoinedInjectedExtensions = () => getInjectedExtensions()?.join(",")

export const useSelectedAccount = () => useContext(SelectedAccountCtx)!
export const useSelectedExtensions = () => useContext(extensionCtx)
export const useAvailableExtensions = (): string[] => {
  const [extensions, setExtensions] = useState(getJoinedInjectedExtensions)

  useEffect(() => {
    let token: Any
    const updateExtensions = () => {
      const jointedExtensions = getJoinedInjectedExtensions()
      setExtensions(jointedExtensions)
      token = setTimeout(updateExtensions, jointedExtensions ? 2_000 : 100)
    }
    updateExtensions()

    return () => {
      clearTimeout(token)
    }
  }, [])

  return useMemo(() => extensions?.split(",") ?? [], [extensions])
}

export const useExtensionStorage = (key: string, defaultValue: string) => {
  const [value, setLocal] = useState(() => {
    const getStorageValue = (key: string, defaultValue: string) => {
      const saved = localStorage.getItem(key)
      const initial = JSON.parse(saved)
      return initial || defaultValue
    }

    return getStorageValue(key, defaultValue)
  })

  const setValue = (name: string) => {
    const a = value?.split(",")
    let b: string[]
    if (a.includes(name)) {
      const index = a.indexOf(name)
      if (index > -1) a.splice(index, 1)
      b = a
    } else {
      b = [...a, name]
    }
    setLocal(b.join(","))
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export const useAccountStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    const getStorageValue = (key: string, defaultValue: string) => {
      const saved = localStorage.getItem(key)
      const initial = saved ? JSON.parse(saved) : ""
      return initial || defaultValue
    }

    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
