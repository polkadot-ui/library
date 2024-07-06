/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, CSSProperties } from "react"

// A generic type to handle React components. We assume the component may have
// children and styling applied to it.
export interface ComponentBase {
  // passing react children.
  children?: ReactNode
  // passing custom styling.
  style?: CSSProperties
}

export type VoidFn = () => void

export type ComponentBaseWithClassName = {
  // passing a className string.
  className?: string
  // passing react children.
  children?: ReactNode
  // passing custom styling.
  style?: CSSProperties
}

export type Sync = "synced" | "unsynced" | "syncing"

export type AnyApi = any
export type Any = any
export type AnyJson = any
export type AnyFunction = any
export type AnyObject = any
export type MaybeAddress = string | null
export type MaybeString = string | null

export type HPosition = HPositionLR & "center"
export type HPositionLR = "left" | "right"
export type DisplayFor = "default" | "modal" | "canvas"
