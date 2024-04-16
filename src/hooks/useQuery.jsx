import { useLocation } from "react-router-dom"
import { useMemo } from "react"

export function useQuery() {
  const { search } = useLocation()
  const memo = useMemo(() => new URLSearchParams(search), [search])
  return memo
}
