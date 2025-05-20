
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import {toast} from 'sonner'
import ErrorMessage from '../components/ErrorMessage'
import { LoginForm } from '../types'
import { authLogin } from '../api/ApiRest'
import { isAxiosError } from 'axios'
export default function LoginView() {
  const initialValues : LoginForm = {
    email: '',
    password: ''
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })
  const handleLogin = async (formData : LoginForm) => {
    try {
      const response = await authLogin(formData);
      if (response.status === 200) {
        toast.success(response.data)
      }
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      }
    }
  }
  return (
    <>
      <h1 className='text-4xl text-white font-bold'>Login</h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="max-w-sm mx-auto p-6 bg-gray-600 border border-gray-800 rounded-lg mt-4 shadow-sm"
        noValidate
      >
        <div className="grid grid-cols-1 space-y-3 mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"

          >Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          value='Iniciar Sesión'
        />
      </form>

      <nav className='mt-10'>
        <Link
          className="text-center text-white text-lg block"
          to="/auth/register">no tienes cuenta? Crea una aqui</Link>
      </nav>
    </>
  )
}
