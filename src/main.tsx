import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router'
import { Provider as ReduxProvider } from "react-redux"
import { persistor, store } from './redux/store.ts'
import { Toaster } from "sonner";
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './components/ui/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster
      position="bottom-right"
      richColors={true}
    />
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={App} />
      </PersistGate>
    </ReduxProvider>
    </ThemeProvider>
  </StrictMode>,
)