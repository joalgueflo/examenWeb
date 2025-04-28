import LoginForm from "@/components/login-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-purple-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">SkyTech</h1>
          <p className="mt-2 text-gray-600">Portal de Empleados</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}