"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function PatientsPage() {
    const navigate = useNavigate()
    
    useEffect(() => {
        navigate("/patients/helmond", { replace: true })
    }, [navigate])

    return null
}
