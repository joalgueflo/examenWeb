"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Employee } from "@/app/types/employee"


export default function Dashboard() {
  const [employee, setEmployee] = useState<Employee | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Verificar si hay datos de empleado en sessionStorage
    const storedData = sessionStorage.getItem("employeeData")

    if (storedData) {
      setEmployee(JSON.parse(storedData))
    } else {
      // Si no hay datos, redirigir al login
      router.push("/")
    }
  }, [router])

  const handleLogout = () => {
    // Limpiar los datos de la sesión y redirigir al login
    sessionStorage.removeItem("employeeData")
    router.push("/")
  }

  if (!employee) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-purple-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Portal de SkyTech</h1>
          <Button variant="outline" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">¡Hola, {employee.fullName}! Bienvenido al portal de SkyTech.</h2>
          </div>
          <Card className="w-96 h-60 flex flex-col justify-center">
            <CardHeader>
              <CardTitle>Información del Empleado</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-medium">Nombre de Usuario:</p>
                  <p>{employee.username}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-medium">Nombre Completo:</p>
                  <p>{employee.fullName}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-medium">Correo Electrónico:</p>
                  <p>{employee.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500">
          Hola profe :D
        </div>
      </footer>
    </div>
  )
}
