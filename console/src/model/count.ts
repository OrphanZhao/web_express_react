import { create } from 'zustand'

type CountState = {
  count: number
}

type CountAction = {
  inc: () => void
}

type CountModel = CountState & CountAction

export const useCountModel = create<CountModel>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 }))
}))
