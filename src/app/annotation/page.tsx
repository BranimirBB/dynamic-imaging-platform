import { DataTable } from "@/components/data-table"
import { IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import data from "../data.json"

export default function AnnotationToolPage() {
    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    {/* Single Card */}
                    <div className="px-4 lg:px-6">
                        <Card className="@container/card relative">
                            <CardHeader>
                                <CardDescription>Interpretation tool</CardDescription>
                                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                    2,847
                                </CardTitle>
                                <CardAction>
                                    <Badge variant="outline">
                                        <IconTrendingUp />
                                        +18.2%
                                    </Badge>
                                </CardAction>
                                {/* Dots image: bigger and 20px from right border, vertically centered */}
                                <img
                                    src="/assets/icons/dots.png"
                                    alt="dots"
                                    className="absolute right-[120px] top-1/2 -translate-y-1/2 w-16 h-16 object-contain"
                                    style={{ pointerEvents: 'none' }}
                                />
                            </CardHeader>
                            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                                <div className="line-clamp-1 flex gap-2 font-medium">
                                    Productivity increasing{" "}
                                    <IconTrendingUp className="size-4" />
                                </div>
                                <div className="text-muted-foreground">
                                    Annotation workflow efficiency improved
                                </div>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Data Table */}
                    <DataTable data={data} />
                </div>
            </div>
        </div>
    )
}
