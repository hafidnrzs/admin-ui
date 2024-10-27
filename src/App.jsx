import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignInPage from "./pages/signIn"
import SignUpPage from "./pages/signUp"

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ])

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
