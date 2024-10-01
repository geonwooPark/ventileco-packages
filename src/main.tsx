import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ToastProvider from './components/Toast/ToastProvider'
import { motion } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      {({ toasts }) => (
        <React.Fragment>
          <App />
          <ToastProvider.List>
            {toasts.map((toast) => (
              <ToastProvider.Wrapper
                as={motion.div}
                key={toast.id}
                toastId={toast.id}
              >
                <div className="flex h-[80px] w-[320px] items-center rounded-full border px-4 py-2">
                  <div
                    className={`mr-2 size-5 shrink-0 ${toast.type === 'success' ? 'bg-success' : toast.type === 'error' ? 'bg-error' : 'bg-info'}`}
                  />
                  <div>
                    <p
                      className={`mr-2 text-lg font-semibold ${toast.type === 'success' ? 'text-success' : toast.type === 'error' ? 'text-error' : 'text-info'}`}
                    >
                      {toast.type}
                    </p>
                    <p className="text-sm">{toast.message}</p>
                  </div>
                </div>
              </ToastProvider.Wrapper>
            ))}
          </ToastProvider.List>
        </React.Fragment>
      )}
    </ToastProvider>
  </React.StrictMode>,
)
