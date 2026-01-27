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
import { useNavigate } from "react-router-dom"
import data from "../data.json"
import UltrasoundImage from "@/assets/UltrasoundImage.png"
import LastAssessment1 from "@/assets/LastAssessment1.png"
import LastAssessment2 from "@/assets/LastAssessment2.png"
import LastAssessment3 from "@/assets/LastAssessment3.png"
import JerdyAvatar from "@/assets/athletes/Jerdy.webp"
import PepiAvatar from "@/assets/athletes/Pepi.webp"
import RvanBommelAvatar from "@/assets/athletes/RvanBommel.webp"
import PerisicAvatar from "@/assets/athletes/Perisic.webp"
import SaibariAvatar from "@/assets/athletes/Saibari.webp"
import PleaAvatar from "@/assets/athletes/Plea.webp"
import VeermanAvatar from "@/assets/athletes/Veerman.webp"

export default function PSVPage() {
    const navigate = useNavigate()
    const [selectedPlayer, setSelectedPlayer] = useState<number | null>(0)
    const [activeTab, setActiveTab] = useState<"evaluations" | "files">("evaluations")
    const [search, setSearch] = useState("")

    // PSV Eindhoven players data
    const psvPlayers = [
        {
            id: 0,
            patientId: "PSV-0001",
            name: "Jerdy Schouten",
            status: "Ready for training",
            currentInjury: "Calf strain",
            dateOfBirth: "12.01.1997",
            bmc: "2,850",
            avatar: JerdyAvatar
        },
        {
            id: 1,
            patientId: "PSV-0002",
            name: "Ricardo Pepi",
            status: "Limited training",
            currentInjury: "Hamstring tear",
            dateOfBirth: "09.01.2003",
            bmc: "2,620",
            avatar: PepiAvatar
        },
        {
            id: 2,
            patientId: "PSV-0003",
            name: "Ruben van Bommel",
            status: "Early in rehabilitation",
            currentInjury: "ACL injury",
            dateOfBirth: "29.08.2004",
            bmc: "2,480",
            avatar: RvanBommelAvatar
        },
        {
            id: 3,
            patientId: "PSV-0004",
            name: "Ivan Perišić",
            status: "Limited training",
            currentInjury: "ACL sprain",
            dateOfBirth: "02.02.1989",
            bmc: "3,120",
            avatar: PerisicAvatar
        },
        {
            id: 4,
            patientId: "PSV-0005",
            name: "Ismael Saibari",
            status: "Ready for competing",
            currentInjury: null,
            dateOfBirth: "07.04.2001",
            bmc: "2,750",
            avatar: SaibariAvatar
        },
        {
            id: 5,
            patientId: "PSV-0006",
            name: "Alassane Pléa",
            status: "Early in rehabilitation",
            currentInjury: "ACL injury",
            dateOfBirth: "10.03.1993",
            bmc: "2,900",
            avatar: PleaAvatar
        },
        {
            id: 6,
            patientId: "PSV-0007",
            name: "Joey Veerman",
            status: "Ready for competing",
            currentInjury: null,
            dateOfBirth: "19.11.1998",
            bmc: "2,780",
            avatar: VeermanAvatar
        }
    ]

    // Filtered players based on search
    const filteredPlayers = psvPlayers.filter(player =>
        player.name.toLowerCase().includes(search.toLowerCase()) ||
        player.patientId.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <style>{`
                .selected-patient-card {
                    border: 0.5px solid #C85555 !important;
                    box-shadow: 0 2px 8px 0 #5589C833 !important;
                    background-color: #FFF4F4 !important;
                }
                .selected-patient-card .patient-avatar {
                    border: 2px solid #C88C8C !important;
                }
                .selected-patient-card .patient-notes {
                    border: 1px solid #C88C8C !important;
                }
                .selected-patient-card hr,
                .selected-patient-card [data-orientation="horizontal"] {
                    background-color: rgba(200, 85, 85, 0.5) !important;
                    border-color: rgba(200, 85, 85, 0.5) !important;
                }
                .selected-patient-card .patient-evaluations-table .table-container {
                    border: 1.2px solid #C88C8C !important;
                    border-radius: 0.5rem;
                    overflow: hidden;
                }
                .selected-patient-card .patient-evaluations-table tbody {
                    background-color: white !important;
                }
                .selected-patient-card .patient-evaluations-table thead tr {
                    border-bottom: 0.5px solid #C88C8C !important;
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
            `}</style>
            
            {/* Inner Page Navigation */}
            <nav className="flex gap-8 border-b border-gray-200 mb-2 mt-4">
                <button
                    onClick={() => navigate("/patients/helmond")}
                    className="pb-2 transition-colors flex items-center gap-2 font-medium text-gray-500 border-b-2 border-transparent hover:text-black"
                    style={{ marginBottom: "-1px" }}
                >
                    Helmond Clinic
                </button>
                <button
                    className="pb-2 transition-colors flex items-center gap-2 font-bold text-black border-b-2 border-black"
                    style={{ marginBottom: "-1px" }}
                >
                    PSV Eindhoven
                </button>
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
                                <IconArchive className="w-4 h-4 mr-2" />
                                Archive
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                <Input 
                                    placeholder="Search players..." 
                                    className="pl-9"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </div>
                            <Button variant="outline">
                                <IconFilter className="w-4 h-4 mr-2" />
                                Filter
                            </Button>
                        </div>
                        <Separator />
                    </div>
                    
                    {/* Player list */}
                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 -mr-2">
                        {filteredPlayers.map((player) => (
                            <Card
                                key={player.id}
                                className={`cursor-pointer transition-all hover:shadow-md ${
                                    selectedPlayer === player.id ? 'selected-patient-card' : ''
                                }`}
                                onClick={() => setSelectedPlayer(player.id)}
                            >
                                <CardContent className="p-4">
                                    <div className="space-y-0">
                                        {/* Top Row - Player Name and Status Badge */}
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-semibold text-base leading-none truncate flex-1">
                                                {player.name}
                                            </h3>
                                            <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                                <Badge 
                                                    variant="outline"
                                                    className={`text-xs ${
                                                        player.status === "Ready for training" ? "badge-training" : 
                                                        player.status === "Ready for competing" ? "badge-ready" :
                                                        player.status === "Early in rehabilitation" ? "badge-rehabilitation" :
                                                        player.status === "Limited training" ? "badge-limited-training" :
                                                        player.status === "Post surgery" ? "badge-post-surgery" : ""
                                                    }`}
                                                >
                                                    {player.status}
                                                </Badge>
                                                {player.currentInjury && (
                                                    <Badge className="text-xs badge-injury">
                                                        {player.currentInjury}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Bottom Row - Player ID */}
                                        <div style={{ marginTop: player.currentInjury ? '-10px' : '0px' }}>
                                            <p className="text-xs text-muted-foreground">
                                                ID: {player.patientId}
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
                            {selectedPlayer !== null ? (
                                <>
                                    {/* 1. Basic Details Section */}
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <Avatar className="h-24 w-20 rounded-lg flex-shrink-0 patient-avatar">
                                                <AvatarImage src={psvPlayers[selectedPlayer].avatar} alt={psvPlayers[selectedPlayer].name} className="object-cover object-top" />
                                                <AvatarFallback className="rounded-lg text-2xl">
                                                    {psvPlayers[selectedPlayer].name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                {/* Name, ID, DOB, BMC stacked */}
                                                <div className="space-y-1">
                                                    <h2 className="text-2xl font-bold leading-tight">
                                                        {psvPlayers[selectedPlayer].name}
                                                    </h2>
                                                    <div>
                                                        <span className="text-muted-foreground">ID:</span>
                                                        <span className="ml-1 font-semibold text-sm">{psvPlayers[selectedPlayer].patientId}</span>
                                                    </div>
                                                    <div className="flex gap-[20px] mt-1 text-sm">
                                                        <div>
                                                            <span className="text-muted-foreground">Date of Birth:</span>
                                                            <span className="ml-2 font-medium">{psvPlayers[selectedPlayer].dateOfBirth}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-muted-foreground">BMC:</span>
                                                            <span className="ml-2 font-medium">{psvPlayers[selectedPlayer].bmc}g</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Badges and menu, visually separated */}
                                            <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-4">
                                                <Badge 
                                                    variant="outline"
                                                    className={`text-sm ${
                                                        psvPlayers[selectedPlayer].status === "Ready for training" ? "badge-training" : 
                                                        psvPlayers[selectedPlayer].status === "Ready for competing" ? "badge-ready" :
                                                        psvPlayers[selectedPlayer].status === "Early in rehabilitation" ? "badge-rehabilitation" :
                                                        psvPlayers[selectedPlayer].status === "Limited training" ? "badge-limited-training" :
                                                        psvPlayers[selectedPlayer].status === "Post surgery" ? "badge-post-surgery" : ""
                                                    }`}
                                                >
                                                    {psvPlayers[selectedPlayer].status}
                                                </Badge>
                                                {psvPlayers[selectedPlayer].currentInjury && (
                                                    <Badge className="text-sm badge-injury">
                                                        {psvPlayers[selectedPlayer].currentInjury}
                                                    </Badge>
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

                                    {/* 2. Notes Section */}
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold">Notes</h3>
                                        <Textarea 
                                            placeholder="Write notes about the player's case..."
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
                                                Player's files
                                            </button>
                                        </nav>

                                        {/* Tab Content */}
                                        {activeTab === "evaluations" ? (
                                            <div className="patient-evaluations-table">
                                                <PatientEvaluationsTable 
                                                    data={data} 
                                                    patientName={psvPlayers[selectedPlayer].name}
                                                />
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-4 gap-3 pt-2">
                                                {[
                                                    UltrasoundImage, LastAssessment1, LastAssessment2, LastAssessment3,
                                                    LastAssessment1, UltrasoundImage, LastAssessment3, LastAssessment2,
                                                    LastAssessment2, LastAssessment3, UltrasoundImage, LastAssessment1
                                                ].map((image, index) => (
                                                    <Dialog key={index}>
                                                        <DialogTrigger asChild>
                                                            <div className="aspect-square cursor-pointer rounded-lg overflow-hidden border border-gray-200 hover:border-[#C85555] hover:shadow-md transition-all">
                                                                <img 
                                                                    src={image} 
                                                                    alt={`Ultrasound scan ${index + 1}`}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-3xl">
                                                            <img 
                                                                src={image} 
                                                                alt={`Ultrasound scan ${index + 1}`}
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
                                        Select a player to view details
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
