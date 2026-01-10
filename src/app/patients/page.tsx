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
import data from "../data.json"

export default function PatientsPage() {
    const [selectedPatient, setSelectedPatient] = useState<number | null>(0)

    // Mock patient data - will be populated later
    const patientNames = [
        "John Smith", "Maria Garcia", "Alex Johnson", "Sarah Williams",
        "Michael Brown", "Emma Davis", "David Martinez", "Lisa Anderson",
        "James Wilson", "Anna Taylor", "Robert Moore", "Emily Thomas"
    ]
    
    const patients = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        name: patientNames[i],
        status: i % 3 === 0 ? "Ready for training" : i % 3 === 1 ? "Early in rehabilitation" : "Ready for competing",
        age: 20 + (i * 2),
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
                .selected-patient-card .left-panel-avatar {
                    border: 2px solid #5589C8 !important;
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
                                    <div className="flex items-start gap-4">
                                        {/* Left Side - Avatar */}
                                        <Avatar className="h-16 w-16 rounded-lg flex-shrink-0 left-panel-avatar">
                                            <AvatarImage src={patient.avatar} alt={patient.name} />
                                            <AvatarFallback className="rounded-lg text-lg">
                                                {patient.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        
                                        {/* Right Side - Information Stack */}
                                        <div className="flex-1 min-w-0 space-y-1.5">
                                            {/* Top Row - Patient Name and Status Badge */}
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="font-semibold text-base leading-none truncate flex-1">
                                                    {patient.name}
                                                </h3>
                                                <Badge 
                                                    variant={
                                                        patient.status === "Early in rehabilitation" ? "secondary" : 
                                                        "outline"
                                                    }
                                                    className={`text-xs flex-shrink-0 ${
                                                        patient.status === "Ready for training" ? "badge-training" : 
                                                        patient.status === "Ready for competing" ? "badge-ready" : ""
                                                    }`}
                                                >
                                                    {patient.status}
                                                </Badge>
                                            </div>
                                            
                                            {/* Bottom Row - Metrics */}
                                            <p className="text-xs text-muted-foreground">
                                                {patient.age}yo | {patient.weight}kg
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
                                                    <Badge 
                                                        variant={
                                                            patients[selectedPatient].status === "Early in rehabilitation" ? "secondary" : 
                                                            "outline"
                                                        }
                                                        className={`text-sm ${
                                                            patients[selectedPatient].status === "Ready for training" ? "badge-training" : 
                                                            patients[selectedPatient].status === "Ready for competing" ? "badge-ready" : ""
                                                        }`}
                                                    >
                                                        {patients[selectedPatient].status}
                                                    </Badge>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <span className="text-muted-foreground">Age:</span>
                                                        <span className="ml-2 font-medium">{patients[selectedPatient].age} years</span>
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

                                    {/* 3. Ultrasound Evaluations Section */}
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold">Ultrasound Evaluations</h3>
                                        <div className="patient-evaluations-table">
                                            <PatientEvaluationsTable 
                                                data={data} 
                                                patientName={patients[selectedPatient].name}
                                            />
                                        </div>
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
