"use client"

import * as React from "react"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"
import { z } from "zod"
import {
    IconDotsVertical,
} from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

/**
 * Schema for patient evaluations
 */
export const evaluationSchema = z.object({
    id: z.number(),
    date: z.string(),
    patientName: z.string(),
    assessmentName: z.string(),
    status: z.string(),
    target: z.string(),
    limit: z.string(),
    reviewer: z.string(),
    teamDoctor: z.string(),
})

/**
 * Column definitions for patient evaluations table
 * Note: Status column is removed as per requirements
 */
const columns: ColumnDef<z.infer<typeof evaluationSchema>>[] = [
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => (
            <div className="font-medium">
                {new Date(row.original.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })}
            </div>
        ),
    },
    {
        accessorKey: "patientName",
        header: "Patient Name",
        cell: ({ row }) => (
            <div className="font-medium">
                {row.original.patientName}
            </div>
        ),
    },
    {
        accessorKey: "assessmentName",
        header: "Assessment Type",
        cell: ({ row }) => (
            <Badge variant="outline" className="text-muted-foreground px-2">
                {row.original.assessmentName}
            </Badge>
        ),
    },
    {
        accessorKey: "reviewer",
        header: "Physiotherapist",
        cell: ({ row }) => (
            <div>
                {row.original.reviewer}
            </div>
        ),
    },
    {
        accessorKey: "teamDoctor",
        header: "Team Doctor",
        cell: ({ row }) => (
            <div>
                {row.original.teamDoctor}
            </div>
        ),
    },
    {
        id: "actions",
        cell: () => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                        size="icon"
                    >
                        <IconDotsVertical />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Make a copy</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
]

export function PatientEvaluationsTable({
    data,
    patientName,
}: {
    data: z.infer<typeof evaluationSchema>[]
    patientName: string
}) {
    const [sorting, setSorting] = React.useState<SortingState>([
        { id: "date", desc: true } // Sort by date descending by default
    ])

    // Filter data to only show evaluations for the selected patient
    const filteredData = React.useMemo(() => {
        return data.filter(item => item.patientName === patientName)
    }, [data, patientName])

    const table = useReactTable({
        data: filteredData,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    return (
        <div className="w-full space-y-3">
            <div className="rounded-md border table-container">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="bg-muted/50 hover:bg-muted/50 border-b-2 border-border">
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    <div className="text-muted-foreground">
                                        No evaluations found for this patient.
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {filteredData.length > 0 && (
                <div className="text-sm text-muted-foreground">
                    Showing {filteredData.length} evaluation{filteredData.length !== 1 ? 's' : ''} for {patientName}
                </div>
            )}
        </div>
    )
}
