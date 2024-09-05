import {
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react"
import { SelectedAccountCtx } from "./accountCtx"
import { extensionCtx } from "./extensionCtx"
import {
  InjectedPolkadotAccount,
  getInjectedExtensions,
} from "polkadot-api/pjs-signer"
import { Any } from "../../utils"
import { getExtensionsStore } from "./utils"

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

export const useExtensionAccounts = () => {
  const [extensionAccounts, setExtensionAccounts] = useState<
    InjectedPolkadotAccount[]
  >([])

  return [extensionAccounts, setExtensionAccounts]
}

export const useStoredAccount = (key: string, defaultValue: string) => {
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

const extensionsStore = getExtensionsStore()

export const useConnect = (extensionLocalStorage: string) => {
  const [connectAccounts, setConnectAccounts] = useState<
    InjectedPolkadotAccount[]
  >([])

  const connectExtensions = useSyncExternalStore(
    extensionsStore.subscribe,
    extensionsStore.getSnapshot
  )

  useEffect(() => {
    const acc: InjectedPolkadotAccount[] = []
    for (const [, value] of connectExtensions) {
      value.subscribe(() => {
        acc.push(...value.getAccounts())
      })
    }
    setConnectAccounts(acc)
  }, [connectExtensions])

  useEffect(() => {
    extensionsStore.revive(extensionLocalStorage)
  }, [extensionLocalStorage])

  return { connectExtensions, connectAccounts }
}
