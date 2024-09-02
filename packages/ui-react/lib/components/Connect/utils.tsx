import {
  InjectedExtension,
  connectInjectedExtension,
} from "polkadot-api/pjs-signer"
import { Dispatch, SetStateAction } from "react"
import { SelectedAccountType } from "./types"

const { location } = window

export const localStorageKey = "@polkadot-ui/react/".concat(
  location.href,
  "|extensions"
)

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

    const doAllSequentually = async (promiseArr) => {
      for (let i = 0; i < promiseArr?.length; i++) {
        const val = await promiseArr[i]()
        console.log(val)
        return
      }
    }

    doAllSequentually(promises).then(() => console.log("finished"))
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
