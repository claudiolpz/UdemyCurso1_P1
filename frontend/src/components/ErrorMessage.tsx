type ErrorMessageProps = {
  children: React.ReactNode
}

function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <p className=" text-red-600 bg-red-50 p-2 mt-1 uppercase text-sm font-bold rounded text-center">
      {children}
    </p>
  )
}

export default ErrorMessage
