"use client";
import React from "react";
import { getUsers } from "../../api/api.users";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import {
  Selection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { SearchIcon } from "../../components/icons/SearchIcon";
import { Input } from "@nextui-org/input";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { VerticalDotsIcon } from "../../components/icons/VerticalDotsIcon";
import { User, useDisclosure } from "@nextui-org/react";
import { PlusIcon } from "../../components/icons/PlusIcon";
import CreateUser from "../components/CreateUser";
// import { columns } from "../components/data";
import { ChevronDownIcon } from "../../components/icons/ChevronDownIcon";
import { columns } from "../../constant";
const GroupUsers = () => {
  const { id } = useParams();
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const { data: users } = useQuery({
    queryFn: () => getUsers(id.toString()),
    queryKey: ["users", id],
    enabled: !!id,
  });
  console.log(users);
  const [filterValue, setFilterValue] = React.useState("");
  // const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            // isClearable
            radius="sm"
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            // value={filterValue}
            // onClear={() => onClear()}
            // onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            <Button
              color="primary"
              radius="sm"
              onClick={onOpen}
              endContent={<PlusIcon />}
            >
              Add New
            </Button>
          </div>
        </div>
      </div>
    );
  }, []);
  const renderCell = React.useCallback((user: IUsers, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof IUsers];

    switch (columnKey) {
      case "name":
        return (
          <User
            // avatarProps={{radius: "lg", src: user.avatar}}
            description={user.surname}
            name={cellValue}
          >
            {user.name}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {user.gender}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <div>
      {Array.isArray(users)  && (
        <>
          <Table
            isHeaderSticky
            topContentPlacement="outside"
            topContent={topContent}
            aria-label="Users table"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid} align={"end"}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody emptyContent={"users empty "} items={users}>
              {(item: IUsers) => (
                <TableRow key={item._id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
          <CreateUser isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
      )}
    </div>
  );
};

export default GroupUsers;
