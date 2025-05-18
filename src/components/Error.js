import { useRouteError } from "react-router"

const Error = () => {
    const err = useRouteError();
  return (
      <div className="text-center mt-20">
          <h1 className="text-6xl font-bold">Oops!!!!!</h1>
          <h2 className="text-2xl font-medium">Something went wrong</h2>
          <h3 className="text-red-600">{err.status}: { err.statusText}</h3>
    </div>
  )
}

export default Error