import { useState } from "react"
import { IconPlayerPlay } from "@tabler/icons-react"
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { InnerPageNavigation } from "@/components/inner-page-navigation"

const probefixLowerBodyItems = [
    {
        title: "ProbeFix on thighs",
        shortDesc: "Quadriceps and hamstring imaging",
        fullDesc: "Learn how to use ProbeFix Dynamic on the thighs for comprehensive assessment of quadriceps, hamstrings, and other thigh muscles during functional movements.",
        author: {
            name: "Dr. Patricia W.",
            experience: "18 years of experience in sports rehabilitation",
            avatar: "/avatars/shadcn.jpg"
        }
    },
    {
        title: "ProbeFix on knees",
        shortDesc: "Knee joint and surrounding structures",
        fullDesc: "Master techniques for stabilizing the probe around the knee to evaluate ligaments, tendons, meniscus, and patellar tracking during dynamic testing.",
        author: {
            name: "Dr. Kevin M.",
            experience: "21 years of experience in orthopedic imaging",
            avatar: "/avatars/shadcn.jpg"
        }
    },
    {
        title: "ProbeFix on calves and ankles",
        shortDesc: "Lower leg and ankle stabilization",
        fullDesc: "Advanced methods for using ProbeFix Dynamic on the calf muscles and ankle structures to assess Achilles tendon, gastrocnemius, and foot mechanics.",
        author: {
            name: "Dr. Rachel K.",
            experience: "15 years of experience in lower extremity imaging",
            avatar: "/avatars/shadcn.jpg"
        }
    },
]

export default function ProbefixLowerPage() {
    const [selectedLowerBody, setSelectedLowerBody] = useState<number | null>(null)
    
    return (
        <div className="flex flex-1 flex-col gap-0 p-4 pt-0">
            <InnerPageNavigation />
            
            {/* ProbeFix Dynamic for lower body section */}
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>ProbeFix Dynamic for lower body</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {probefixLowerBodyItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedLowerBody(index)}
                                className="border rounded-lg p-4 cursor-pointer hover:bg-accent/50 transition-colors space-y-3"
                            >
                                <div className="relative aspect-video bg-muted rounded-md flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                                    <IconPlayerPlay className="size-8 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{item.title}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{item.shortDesc}</p>
                                </div>
                                {/* Author section */}
                                <div className="flex items-center gap-3 pt-2 border-t">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={item.author.avatar} alt={item.author.name} />
                                        <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-xs font-medium">{item.author.name}</p>
                                        <p className="text-xs text-muted-foreground">{item.author.experience}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Modal for ProbeFix Dynamic for lower body */}
            <Dialog open={selectedLowerBody !== null} onOpenChange={() => setSelectedLowerBody(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{selectedLowerBody !== null && probefixLowerBodyItems[selectedLowerBody].title}</DialogTitle>
                        <DialogDescription>
                            {selectedLowerBody !== null && probefixLowerBodyItems[selectedLowerBody].fullDesc}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden mt-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                        <IconPlayerPlay className="size-16 text-muted-foreground" />
                    </div>
                    {/* About the author section */}
                    {selectedLowerBody !== null && (
                        <div className="mt-6 pt-6 border-t">
                            <h3 className="text-sm font-semibold mb-3">About the author:</h3>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={probefixLowerBodyItems[selectedLowerBody].author.avatar} alt={probefixLowerBodyItems[selectedLowerBody].author.name} />
                                    <AvatarFallback>{probefixLowerBodyItems[selectedLowerBody].author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">{probefixLowerBodyItems[selectedLowerBody].author.name}</p>
                                    <p className="text-sm text-muted-foreground">{probefixLowerBodyItems[selectedLowerBody].author.experience}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
