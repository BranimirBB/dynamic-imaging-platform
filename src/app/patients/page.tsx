"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IconUserPlus, IconFilter, IconSearch } from "@tabler/icons-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PatientEvaluationsTable } from "@/components/patient-evaluations-table"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import data from "../data.json"
import UltrasoundImage from "@/assets/UltrasoundImage.png"

export default function PatientsPage() {
    const [selectedPatient, setSelectedPatient] = useState<number | null>(0)
    const [activeTab, setActiveTab] = useState<"evaluations" | "files">("evaluations")

    // Mock patient data - will be populated later
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

    // Mock injury data - muscle/skeleton related injuries
    const patientInjuries = [
        "Calf strain", "Hamstring tear", null, "ACL sprain",
        "Quadriceps contusion", "Achilles tendinopathy", null, "Biceps femoris pain",
        "Tibia stress fracture", "Groin strain", null, "Patellar tendinitis"
    ]
    
    const patients = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        patientId: `P-${String(1000 + i).padStart(4, '0')}`,
        name: patientNames[i],
        status: i % 3 === 0 ? "Ready for training" : i % 3 === 1 ? "Early in rehabilitation" : "Ready for competing",
        currentInjury: i % 3 === 2 ? null : patientInjuries[i], // No injury for "Ready for competing"
        dateOfBirth: patientDOBs[i],
        weight: 65 + (i * 3),
        avatar: "/avatars/shadcn.jpg"
    }))

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <style>{`
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
                    background-color: #6b7280 !important;
                    color: white !important;
                    border-color: #6b7280 !important;
                }
            `}</style>
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 mt-4 h-full">
                {/* Left Panel - Master List (30-35% width) */}
                <div className="lg:col-span-3 flex flex-col gap-3">
                    {/* Action buttons */}
                    <div className="space-y-3">
                        <div className="flex gap-2">
                            <Button variant="outline" className="flex-1">
                                <IconUserPlus className="w-4 h-4 mr-2" />
                                New athlete
                            </Button>
                            <Button variant="outline" className="flex-1">
                                <IconFilter className="w-4 h-4 mr-2" />
                                Filter
                            </Button>
                        </div>
                        <div className="relative">
                            <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                            <Input 
                                placeholder="Search patients..." 
                                className="pl-9"
                            />
                        </div>
                        <Separator />
                    </div>
                    
                    {/* Patient list */}
                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 -mr-2">
                        {patients.map((patient) => (
                            <Card
                                key={patient.id}
                                className={`cursor-pointer transition-all hover:shadow-md ${
                                    selectedPatient === patient.id ? 'selected-patient-card' : ''
                                }`}
                                onClick={() => setSelectedPatient(patient.id)}
                            >
                                <CardContent className="p-4">
                                    <div className="space-y-0">
                                        {/* Top Row - Patient Name and Status Badge */}
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-semibold text-base leading-none truncate flex-1">
                                                {patient.name}
                                            </h3>
                                            <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                                <Badge 
                                                    variant="outline"
                                                    className={`text-xs ${
                                                        patient.status === "Ready for training" ? "badge-training" : 
                                                        patient.status === "Ready for competing" ? "badge-ready" :
                                                        patient.status === "Early in rehabilitation" ? "badge-rehabilitation" : ""
                                                    }`}
                                                >
                                                    {patient.status}
                                                </Badge>
                                                {patient.currentInjury && (
                                                    <Badge className="text-xs badge-injury">
                                                        {patient.currentInjury}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Bottom Row - DOB and Patient ID */}
                                        <div style={{ marginTop: patient.currentInjury ? '-10px' : '0px' }}>
                                            <p className="text-xs text-muted-foreground">
                                                DOB: {patient.dateOfBirth}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                ID: {patient.patientId}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Right Panel - Detail View (65-70% width) */}
                <div className="lg:col-span-7">
                    <Card className="h-full overflow-auto selected-patient-card">
                        <CardContent className="p-6 space-y-6">
                            {selectedPatient !== null ? (
                                <>
                                    {/* 1. Basic Details Section */}
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <Avatar className="h-20 w-20 rounded-lg flex-shrink-0 patient-avatar">
                                                <AvatarImage src={patients[selectedPatient].avatar} alt={patients[selectedPatient].name} />
                                                <AvatarFallback className="rounded-lg text-2xl">
                                                    {patients[selectedPatient].name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-start justify-between gap-2">
                                                    <h2 className="text-2xl font-bold">
                                                        {patients[selectedPatient].name}
                                                    </h2>
                                                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                                        <Badge 
                                                            variant="outline"
                                                            className={`text-sm ${
                                                                patients[selectedPatient].status === "Ready for training" ? "badge-training" : 
                                                                patients[selectedPatient].status === "Ready for competing" ? "badge-ready" :
                                                                patients[selectedPatient].status === "Early in rehabilitation" ? "badge-rehabilitation" : ""
                                                            }`}
                                                        >
                                                            {patients[selectedPatient].status}
                                                        </Badge>
                                                        {patients[selectedPatient].currentInjury && (
                                                            <Badge className="text-sm badge-injury">
                                                                {patients[selectedPatient].currentInjury}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <span className="text-muted-foreground">Date of Birth:</span>
                                                        <span className="ml-2 font-medium">{patients[selectedPatient].dateOfBirth}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted-foreground">Patient ID:</span>
                                                        <span className="ml-2 font-medium">{patients[selectedPatient].patientId}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted-foreground">Weight:</span>
                                                        <span className="ml-2 font-medium">{patients[selectedPatient].weight} kg</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* 2. Notes Section */}
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold">Notes</h3>
                                        <Textarea 
                                            placeholder="Write notes about the patient's case..."
                                            className="min-h-[120px] resize-none patient-notes"
                                        />
                                    </div>

                                    <Separator />

                                    {/* 3. Tabbed Section - Evaluations & Files */}
                                    <div className="space-y-3">
                                        {/* Tab Navigation */}
                                        <nav className="flex gap-8 border-b border-gray-200">
                                            <button
                                                onClick={() => setActiveTab("evaluations")}
                                                className={`pb-2 transition-colors flex items-center gap-2
                                                    ${activeTab === "evaluations"
                                                        ? "font-bold text-black border-b-2 border-black"
                                                        : "font-medium text-gray-500 border-b-2 border-transparent hover:text-black"}
                                                `}
                                                style={{ marginBottom: "-1px" }}
                                            >
                                                Ultrasound Evaluations
                                            </button>
                                            <button
                                                onClick={() => setActiveTab("files")}
                                                className={`pb-2 transition-colors flex items-center gap-2
                                                    ${activeTab === "files"
                                                        ? "font-bold text-black border-b-2 border-black"
                                                        : "font-medium text-gray-500 border-b-2 border-transparent hover:text-black"}
                                                `}
                                                style={{ marginBottom: "-1px" }}
                                            >
                                                Patient's files
                                            </button>
                                        </nav>

                                        {/* Tab Content */}
                                        {activeTab === "evaluations" ? (
                                            <div className="patient-evaluations-table">
                                                <PatientEvaluationsTable 
                                                    data={data} 
                                                    patientName={patients[selectedPatient].name}
                                                />
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-4 gap-3 pt-2">
                                                {Array.from({ length: 16 }).map((_, index) => (
                                                    <Dialog key={index}>
                                                        <DialogTrigger asChild>
                                                            <div className="aspect-square cursor-pointer rounded-lg overflow-hidden border border-gray-200 hover:border-[#5589C8] hover:shadow-md transition-all">
                                                                <img 
                                                                    src={UltrasoundImage} 
                                                                    alt={`Ultrasound ${index + 1}`}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-3xl">
                                                            <img 
                                                                src={UltrasoundImage} 
                                                                alt={`Ultrasound ${index + 1}`}
                                                                className="w-full h-auto rounded-lg"
                                                            />
                                                        </DialogContent>
                                                    </Dialog>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="h-full flex items-center justify-center">
                                    <p className="text-muted-foreground text-center">
                                        Select a patient to view details
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
