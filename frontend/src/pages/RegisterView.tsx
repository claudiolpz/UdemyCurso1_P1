import { useForm } from "react-hook-form";
import { Link } from "react-router";
import ErrorMessage from "../components/ErrorMessage";


const RegisterView = () => {
  const { register, watch, handleSubmit, formState:{errors}} = useForm();
  console.log(errors)
  const handleRegister = () =>{
    console.log("desde handleregister")
  }
  return (
    <>
      <h1 className="text-4xl text-white font-bold">Crear Cuenta</h1>
      <form className="max-w-sm mx-auto p-6 bg-gray-600 border border-gray-800 rounded-lg mt-4 shadow-sm" onSubmit={handleSubmit(handleRegister)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            {...register('name',{
              required:"El nombre es obligatorio"
            })}
          />
          {/* {errors.name && String(errors.name.message)} */}
          {errors.name && <ErrorMessage>{String(errors.name.message)}</ErrorMessage>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            {...register('email',{
              required:"El correo es obligatorio"
            })}
          />
          {errors.email && <ErrorMessage>{String(errors.email.message)}</ErrorMessage>}
        </div>
         <div className="mb-5">
          <label
            htmlFor="handle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Handle
          </label>
          <input
            type="text"
            id="handle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="JohnDoe"
            {...register('handle',{
              required:"El handle es obligatorio"
            })}
          />
          {errors.handle && <ErrorMessage>{String(errors.handle.message)}</ErrorMessage>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Constraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('password',{
              required:"La contraseña es obligatoria"
            })}
          />
          {errors.password && <ErrorMessage>{String(errors.password.message)}</ErrorMessage>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repetir Constraseña
          </label>
          <input
            type="password"
            id="password_confirmation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('password_confirmation',{
              required:"La contraseña es obligatoria"
            })}
          />
          {errors.password_confirmation && <ErrorMessage>{String(errors.password_confirmation.message)}</ErrorMessage>}
        </div>
       
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Registrarse
        </button>
      </form>
      <nav className="mt-10">
        <Link className="text-center text-white text-lg block" to="/auth/login">
          Tienes cuenta? inicia aqui
        </Link>
      </nav>
    </>
  );
};

export default RegisterView;
