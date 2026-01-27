"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IconUserPlus, IconFilter, IconSearch, IconArchive, IconDotsVertical, IconSend } from "@tabler/icons-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PatientEvaluationsTable } from "@/components/patient-evaluations-table"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavLink, useLocation } from "react-router-dom"
import data from "../data.json"
import UltrasoundImage from "@/assets/UltrasoundImage.png"

// Shared styles for patient cards and badges
const patientStyles = `
    .selected-patient-card {
        border: 0.5px solid #5589C8 !important;
        box-shadow: 0 2px 8px 0 #5589C833 !important;
        background-color: #F4FAFF !important;
    }
    .selected-patient-card .patient-avatar {
        border: 2px solid #5589C8 !important;
    }
    .selected-patient-card .patient-notes {
        border: 1px solid #5589C8 !important;
    }
    .selected-patient-card hr,
    .selected-patient-card [data-orientation="horizontal"] {
        background-color: rgba(85, 137, 200, 0.5) !important;
        border-color: rgba(85, 137, 200, 0.5) !important;
    }
    .selected-patient-card .patient-evaluations-table .table-container {
        border: 1.2px solid #5589C8 !important;
        border-radius: 0.5rem;
        overflow: hidden;
    }
    .selected-patient-card .patient-evaluations-table tbody {
        background-color: white !important;
    }
    .selected-patient-card .patient-evaluations-table thead tr {
        border-bottom: 0.5px solid #5589C8 !important;
    }
    .badge-training {
        background-color: #fb923c !important;
        color: white !important;
        border-color: #fb923c !important;
    }
    .badge-training:hover {
        background-color: #f97316 !important;
    }
    .badge-ready {
        background-color: #22c55e !important;
        color: white !important;
        border-color: #22c55e !important;
    }
    .badge-ready:hover {
        background-color: #16a34a !important;
    }
    .badge-injury {
        background-color: #e5e7eb !important;
        color: #374151 !important;
        border-color: #d1d5db !important;
    }
    .badge-rehabilitation {
        background-color: #ef4444 !important;
        color: white !important;
        border-color: #ef4444 !important;
    }
    .badge-rehabilitation:hover {
        background-color: #dc2626 !important;
    }
    .badge-limited-training {
        background-color: #3b82f6 !important;
        color: white !important;
        border-color: #3b82f6 !important;
    }
    .badge-limited-training:hover {
        background-color: #2563eb !important;
    }
    .badge-post-surgery {
        background-color: #ef4444 !important;
        color: white !important;
        border-color: #ef4444 !important;
    }
    .badge-post-surgery:hover {
        background-color: #dc2626 !important;
    }
`

// Helper function to get badge class based on status
function getStatusBadgeClass(status: string): string {
    switch (status) {
        case "Ready for training": return "badge-training"
        case "Ready for competing": return "badge-ready"
        case "Early in rehabilitation": return "badge-rehabilitation"
        case "Limited training": return "badge-limited-training"
        case "Post surgery": return "badge-post-surgery"
        default: return ""
    }
}

export default function HelmondPage() {
    const [selectedPatient, setSelectedPatient] = useState<number | null>(0)
    const [activeTab, setActiveTab] = useState<"evaluations" | "files">("evaluations")
    const [search, setSearch] = useState("")
    const location = useLocation()

    // Mock patient data
    const patientNames = [
        "John Smith", "Maria Garcia", "Alex Johnson", "Sarah Williams",
        "Michael Brown", "Emma Davis", "David Martinez", "Lisa Anderson",
        "James Wilson", "Anna Taylor", "Robert Moore", "Emily Thomas"
    ]

    const patientDOBs = [
        "11.04.2001", "23.08.1995", "05.12.1998", "17.03.2000",
        "29.06.1993", "14.11.1999", "08.02.1997", "21.09.2002",
        "03.07.1996", "19.01.2003", "26.05.1994", "12.10.2001"
    ]

    const patientInjuries = [
        "Calf strain", "Hamstring tear", null, "ACL sprain",
        "Quadriceps contusion", "Achilles tendinopathy", null, "Biceps femoris pain",
        "Tibia stress fracture", "Groin strain", null, "Patellar tendinitis"
    ]
    
    const patients = Array.from({ length: 12 }, (_, i) => {
        let status = i % 3 === 0 ? "Ready for training" : i % 3 === 1 ? "Early in rehabilitation" : "Ready for competing"
        if (i === 1) status = "Limited training"
        if (i === 3) status = "Post surgery"
        
        return {
            id: i,
            patientId: `P-${String(1000 + i).padStart(4, '0')}`,
            name: patientNames[i],
            status,
            currentInjury: i % 3 === 2 ? null : patientInjuries[i],
            dateOfBirth: patientDOBs[i],
            bmc: (2200 + (i * 120)).toLocaleString('de-DE'),
            avatar: "/avatars/shadcn.jpg"
        }
    })

    // Filtered patients based on search
    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(search.toLowerCase()) ||
        patient.patientId.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <style>{patientStyles}</style>
            
            {/* Inner Page Navigation */}
            <nav className="flex gap-8 border-b border-gray-200 mb-2 mt-4">
                <NavLink
                    to="/patients/helmond"
                    className={`pb-2 transition-colors flex items-center gap-2
                        ${location.pathname === "/patients/helmond"
                            ? "font-bold text-black border-b-2 border-black"
                            : "font-medium text-gray-500 border-b-2 border-transparent hover:text-black"}
                    `}
                    style={{ marginBottom: "-1px" }}
                >
                    Helmond Clinic
                </NavLink>
                <NavLink
                    to="/patients/psv"
                    className={`pb-2 transition-colors flex items-center gap-2
                        ${location.pathname === "/patients/psv"
                            ? "font-bold text-black border-b-2 border-black"
                            : "font-medium text-gray-500 border-b-2 border-transparent hover:text-black"}
                    `}
                    style={{ marginBottom: "-1px" }}
                >
                    PSV Eindhoven
                </NavLink>
                <button
                    onClick={() => {/* Non-functional - placeholder for future "Add more" functionality */}}
                    className="pb-2 transition-colors flex items-center gap-1.5 font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 cursor-pointer"
                    style={{ marginBottom: "-1px" }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add more
                </button>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 h-full">
                {/* Left Panel - Master List */}
                <div className="lg:col-span-3 flex flex-col gap-3">
                    <div className="space-y-3">
                        <div className="flex gap-2">
                            <Button variant="outline" className="flex-1">
                                <IconUserPlus className="w-4 h-4 mr-2" />
                                New athlete
                            </Button>
                            <Button variant="outline" className="flex-1">
                                <IconArchive className="w-4 h-4 mr-2" />
                                Archive
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                <Input placeholder="Search patients..." className="pl-9" value={search} onChange={e => setSearch(e.target.value)} />
                            </div>
                            <Button variant="outline">
                                <IconFilter className="w-4 h-4 mr-2" />
                                Filter
                            </Button>
                        </div>
                        <Separator />
                    </div>
                    
                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 -mr-2">
                        {filteredPatients.map((patient) => (
                            <Card
                                key={patient.id}
                                className={`cursor-pointer transition-all hover:shadow-md ${
                                    selectedPatient === patient.id ? 'selected-patient-card' : ''
                                }`}
                                onClick={() => setSelectedPatient(patient.id)}
                            >
                                <CardContent className="p-4">
                                    <div className="space-y-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-semibold text-base leading-none truncate flex-1">
                                                {patient.name}
                                            </h3>
                                            <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                                <Badge variant="outline" className={`text-xs ${getStatusBadgeClass(patient.status)}`}>
                                                    {patient.status}
                                                </Badge>
                                                {patient.currentInjury && (
                                                    <Badge className="text-xs badge-injury">{patient.currentInjury}</Badge>
                                                )}
                                            </div>
                                        </div>
                                        <div style={{ marginTop: patient.currentInjury ? '-10px' : '0px' }}>
                                            <p className="text-xs text-muted-foreground">DOB: {patient.dateOfBirth}</p>
                                            <p className="text-xs text-muted-foreground">ID: {patient.patientId}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Right Panel - Detail View */}
                <div className="lg:col-span-7">
                    <Card className="h-full overflow-auto selected-patient-card">
                        <CardContent className="p-6 space-y-6">
                            {selectedPatient !== null ? (
                                <>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <Avatar className="h-20 w-20 rounded-lg flex-shrink-0 patient-avatar">
                                                <AvatarImage src={patients[selectedPatient].avatar} alt={patients[selectedPatient].name} />
                                                <AvatarFallback className="rounded-lg text-2xl">
                                                    {patients[selectedPatient].name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                {/* Name, ID, DOB, BMC stacked */}
                                                <div className="space-y-1">
                                                    <h2 className="text-2xl font-bold leading-tight">{patients[selectedPatient].name}</h2>
                                                    <div>
                                                        <span className="text-muted-foreground">Patient ID:</span>
                                                        <span className="ml-2 font-medium">{patients[selectedPatient].patientId}</span>
                                                    </div>
                                                    <div className="flex gap-[20px] mt-1 text-sm">
                                                        <div>
                                                            <span className="text-muted-foreground">Date of Birth:</span>
                                                            <span className="ml-2 font-medium">{patients[selectedPatient].dateOfBirth}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-muted-foreground">BMC:</span>
                                                            <span className="ml-2 font-medium">{patients[selectedPatient].bmc}g</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Badges and menu, visually separated */}
                                            <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-4">
                                                <Badge variant="outline" className={`text-sm ${getStatusBadgeClass(patients[selectedPatient].status)}`}>
                                                    {patients[selectedPatient].status}
                                                </Badge>
                                                {patients[selectedPatient].currentInjury && (
                                                    <Badge className="text-sm badge-injury">{patients[selectedPatient].currentInjury}</Badge>
                                                )}
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <button className="p-1.5 hover:bg-gray-100 rounded transition-colors mt-1">
                                                            <IconDotsVertical className="w-5 h-5 text-muted-foreground" />
                                                        </button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-40">
                                                        <DropdownMenuItem className="cursor-pointer">
                                                            <IconArchive className="w-4 h-4 mr-2" />
                                                            Archive
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="cursor-pointer">
                                                            <IconSend className="w-4 h-4 mr-2" />
                                                            Send
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold">Notes</h3>
                                        <Textarea placeholder="Write notes about the patient's case..." className="min-h-[120px] resize-none patient-notes" />
                                    </div>

                                    <Separator />

                                    <div className="space-y-3">
                                        <nav className="flex gap-8 border-b border-gray-200">
                                            <button
                                                onClick={() => setActiveTab("evaluations")}
                                                className={`pb-2 transition-colors flex items-center gap-2 ${activeTab === "evaluations" ? "font-bold text-black border-b-2 border-black" : "font-medium text-gray-500 border-b-2 border-transparent hover:text-black"}`}
                                                style={{ marginBottom: "-1px" }}
                                            >
                                                Ultrasound Evaluations
                                            </button>
                                            <button
                                                onClick={() => setActiveTab("files")}
                                                className={`pb-2 transition-colors flex items-center gap-2 ${activeTab === "files" ? "font-bold text-black border-b-2 border-black" : "font-medium text-gray-500 border-b-2 border-transparent hover:text-black"}`}
                                                style={{ marginBottom: "-1px" }}
                                            >
                                                Patient's files
                                            </button>
                                        </nav>

                                        {activeTab === "evaluations" ? (
                                            <div className="patient-evaluations-table">
                                                <PatientEvaluationsTable data={data} patientName={patients[selectedPatient].name} />
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-4 gap-3 pt-2">
                                                {Array.from({ length: 16 }).map((_, index) => (
                                                    <Dialog key={index}>
                                                        <DialogTrigger asChild>
                                                            <div className="aspect-square cursor-pointer rounded-lg overflow-hidden border border-gray-200 hover:border-[#5589C8] hover:shadow-md transition-all">
                                                                <img src={UltrasoundImage} alt={`Ultrasound ${index + 1}`} className="w-full h-full object-cover" />
                                                            </div>
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-3xl">
                                                            <img src={UltrasoundImage} alt={`Ultrasound ${index + 1}`} className="w-full h-auto rounded-lg" />
                                                        </DialogContent>
                                                    </Dialog>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="h-full flex items-center justify-center">
                                    <p className="text-muted-foreground text-center">Select a patient to view details</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
