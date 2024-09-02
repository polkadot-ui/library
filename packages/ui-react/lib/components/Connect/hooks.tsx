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

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    const getStorageValue = (key: string, defaultValue: string) => {
      const saved = localStorage.getItem(key)
      const initial = JSON.parse(saved)
      return initial || defaultValue
    }

    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
