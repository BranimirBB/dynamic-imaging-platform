import { IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"

export default function OverviewPage() {
    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6 lg:px-6">
                    {/* Main 4-column grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Left Area - 3 columns wide */}
                        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Row 1: Two cards side by side */}
                            <Card className="@container/card">
                                <CardHeader>
                                    <CardDescription>Case of the month</CardDescription>
                                    <CardTitle className="text-2xl font-semibold">
                                        Rare ACL Tear
                                    </CardTitle>
                                    <CardAction>
                                        <Badge variant="outline">
                                            <IconTrendingUp />
                                            See image
                                        </Badge>
                                    </CardAction>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Explore this month's featured case study
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="@container/card">
                                <CardHeader>
                                    <CardDescription>Pending requests for collaboration</CardDescription>
                                    <CardTitle className="text-2xl font-semibold tabular-nums">
                                        12
                                    </CardTitle>
                                    <CardAction>
                                        <Badge variant="outline">
                                            <IconTrendingUp />
                                            +3
                                        </Badge>
                                    </CardAction>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Review and respond to collaboration requests
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Row 2: Full-width card */}
                            <Card className="@container/card md:col-span-2">
                                <CardHeader>
                                    <CardDescription>Did you know that?</CardDescription>
                                    <CardTitle className="text-2xl font-semibold">
                                        Ultrasound Imaging Insights
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Discover interesting facts and tips about ultrasound imaging techniques
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Row 3: Full-width card */}
                            <Card className="@container/card md:col-span-2">
                                <CardHeader>
                                    <CardDescription>Learn now</CardDescription>
                                    <CardTitle className="text-2xl font-semibold">
                                        Advanced Training Modules
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Access educational resources and training materials
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Area - 1 column wide, full height */}
                        <Card className="@container/card lg:row-span-4">
                            <CardHeader>
                                <CardDescription>News</CardDescription>
                                <CardTitle className="text-2xl font-semibold">
                                    Latest Updates
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="border-b pb-3">
                                        <p className="font-medium text-sm">Platform Update v2.1</p>
                                        <p className="text-xs text-muted-foreground mt-1">New features released</p>
                                    </div>
                                    <div className="border-b pb-3">
                                        <p className="font-medium text-sm">Community Event</p>
                                        <p className="text-xs text-muted-foreground mt-1">Join our webinar next week</p>
                                    </div>
                                    <div className="pb-3">
                                        <p className="font-medium text-sm">Research Publication</p>
                                        <p className="text-xs text-muted-foreground mt-1">New study on imaging accuracy</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
