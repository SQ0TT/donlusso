import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { Check, Info, X } from 'lucide-react'

type Notice = { message: string; tone: 'info' | 'success' }
type ToastContextValue = { notify: (message: string, tone?: Notice['tone']) => void }

const ToastContext = createContext<ToastContextValue>({ notify: () => undefined })

export function useToast() {
  return useContext(ToastContext)
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [notice, setNotice] = useState<Notice | null>(null)
  const notify = useCallback((message: string, tone: Notice['tone'] = 'info') => {
    setNotice({ message, tone })
    window.setTimeout(() => setNotice(null), 4200)
  }, [])
  const value = useMemo(() => ({ notify }), [notify])

  return (
    <ToastContext.Provider value={value}>
      {children}
      {notice && (
        <div role="status" className="fixed bottom-5 left-1/2 z-[80] flex w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 items-start gap-3 rounded-xl border border-[#d3bd7d]/20 bg-[#151b24]/95 px-4 py-4 shadow-[0_16px_45px_rgba(0,0,0,.45)] backdrop-blur-xl sm:bottom-8">
          <span className="mt-0.5 text-[#d2bc7f]">{notice.tone === 'success' ? <Check size={17} /> : <Info size={17} />}</span>
          <p className="flex-1 text-sm leading-5 text-[#d2d5d8]">{notice.message}</p>
          <button aria-label="Dismiss message" className="text-[#929ba6] transition hover:text-white" onClick={() => setNotice(null)}><X size={16} /></button>
        </div>
      )}
    </ToastContext.Provider>
  )
}
