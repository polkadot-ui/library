import {
  InjectedExtension,
  connectInjectedExtension,
} from "polkadot-api/pjs-signer"
import { Dispatch, SetStateAction } from "react"
import { NameUrlType, SelectedAccountType } from "./types"
import { Any } from "../../utils"

const { location } = window

export const localStorageKeyExtensions = "@polkadot-ui/react|".concat(
  location.hostname,
  "|extensions"
)

export const localStorageKeyAccount = "@polkadot-ui/react|".concat(
  location.hostname,
  "|account"
)

export const allExtensions: NameUrlType[] = [
  {
    name: "enkrypt",
    url: "https://www.enkrypt.com/download",
  },
  {
    name: "subwallet-js",
    url: "https://www.subwallet.app/download.html",
  },
  {
    name: "talisman",
    url: "https://www.talisman.xyz/",
  },
  { name: "polkagate", url: "https://polkagate.xyz/" },
  {
    name: "polkadot-js",
    url: "https://polkadot.js.org/extension/",
  },
  {
    name: "fearless-wallet",
    url: "https://fearlesswallet.io/download",
  },
]

export const getExtensionsStore = () => {
  let connectedExtensions = new Map<string, InjectedExtension>()

  // restores from the
  const revive = async (localStorage: string) => {
    const promises: Promise<void>[] = []

    localStorage
      .split(",")
      .filter((entry: string) => entry.trim() != "")
      .forEach((name: string) => {
        promises.push(
          connectInjectedExtension(name).then(
            (extension) => {
              connectedExtensions.set(name, extension)

              update()
            },
            () => {}
          )
        )
      })

    const doAllSequentually = async (promiseArr: string | Any[]) => {
      for (let i = 0; i < promiseArr?.length; i++) {
        typeof promiseArr[i] === "function" && (await promiseArr[i]())
        return
      }
    }

    doAllSequentually(promises)
  }

  const getSnapshot = () => connectedExtensions

  const listeners = new Set<() => void>()
  const update = () => {
    connectedExtensions = new Map(connectedExtensions)
    listeners.forEach((cb) => {
      cb()
    })
  }

  const subscribe = (cb: () => void) => {
    listeners.add(cb)
    return () => {
      listeners.delete(cb)
    }
  }

  let isRunning = false

  const onToggleExtension = (
    name: string,
    setSelected: Dispatch<SetStateAction<SelectedAccountType>>
  ) => {
    if (isRunning) return

    if (connectedExtensions.has(name)) {
      connectedExtensions.delete(name)
      setSelected(null)
      return update()
    }

    isRunning = true
    connectInjectedExtension(name)
      .then(
        (extension) => {
          connectedExtensions.set(name, extension)
          update()
        },
        () => {}
      )
      .finally(() => {
        isRunning = false
      })
  }

  return {
    revive,
    subscribe,
    getSnapshot,
    onToggleExtension,
  }
}
