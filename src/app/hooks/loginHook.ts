import { useState } from "react"
import type { Employee } from "@/app/types/employee"
import { employees } from "@/app/employeeMock"

export function useLogin() {
  const [user, setUser] = useState<Employee | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (username: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      const employee = employees.find(
        (emp) => emp.username === username && emp.password === password
      )
      if (employee) {
        // Excluye la contraseña antes de guardar en sessionStorage y en el estado
        const { password, ...employeeData } = employee
        setUser(employeeData as Employee)
        sessionStorage.setItem("employeeData", JSON.stringify(employeeData))
        return true
      } else {
        setError("Nombre de usuario o contraseña incorrectos")
        setUser(null)
        return false
      }
    } catch {
      setError("Ocurrió un error al iniciar sesión")
      setUser(null)
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem("employeeData")
  }

  return { user, loading, error, login, logout }
}