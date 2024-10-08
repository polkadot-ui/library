import {
  InjectedExtension,
  InjectedPolkadotAccount,
  connectInjectedExtension,
} from "polkadot-api/pjs-signer"
import { Dispatch, SetStateAction } from "react"
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

export const getExtensionsStore = () => {
  let connectedExtensions = new Map<string, InjectedExtension>()

  const doAllSequentually = async (promiseArr: string | Any[]) => {
    for (let i = 0; i < promiseArr?.length; i++) {
      typeof promiseArr[i] === "function" && (await promiseArr[i]())
      return
    }
  }
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

    doAllSequentually(promises)
  }

  const disconnect = async (localStorage: string) => {
    const promises: Promise<void>[] = []

    localStorage
      .split(",")
      .filter((entry: string) => entry.trim() != "")
      .forEach((name: string) => {
        promises.push(
          connectInjectedExtension(name).then(
            (extension) => {
              connectedExtensions.delete(name)
              extension.disconnect()
              update()
            },
            () => {}
          )
        )
      })

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
    setSelected: Dispatch<SetStateAction<InjectedPolkadotAccount>>
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
    disconnect,
  }
}
