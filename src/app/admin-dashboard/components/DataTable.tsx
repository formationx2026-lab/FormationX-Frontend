"use client"
import { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/admin-dashboard/components/ui/table";
import { Card } from "@/app/admin-dashboard/components/ui/card";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
}

function DataTable<T extends { id: string }>({
  data,
  columns,
  onRowClick,
}: DataTableProps<T>) {
  return (
    <Card variant="glass" className="overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-border/50 hover:bg-transparent">
            {columns.map((column) => (
              <TableHead
                key={column.key.toString()}
                className="text-muted-foreground"
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              className="border-border/30 transition-colors hover:bg-muted/30 cursor-pointer"
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((column) => (
                <TableCell key={column.key.toString()}>
                  {column.render
                    ? column.render(item)
                    : String(item[column.key as keyof T] ?? "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default DataTable;
