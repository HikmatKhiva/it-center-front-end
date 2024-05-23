import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schemaUser } from "../../utils/validation/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectItem } from "@nextui-org/select";
import { DatePicker } from "@nextui-org/date-picker";
import { courses } from "@/data";
import { HoverBorder } from "@/components/ui/hoverBorder";
const CreateUser = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}) => {
  const form = useForm<z.infer<typeof schemaUser>>({
    resolver: zodResolver(schemaUser),
  });
  const genders = [
    { id: 1, name: "Erkak", value: "erkak" },
    { id: 2, name: "Ayol", value: "ayol" },
  ];
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="min-w-[600px]">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Yangi o'quvchi yaratish
            </ModalHeader>
            <ModalBody>
              <Form {...form}>
                <form className="w-full">
                  <div className="flex gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              value={field.value || ""}
                              onChange={field.onChange}
                              autoComplete="off"
                              className="w-full"
                              placeholder="Ismini Kiriting"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="surname"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              value={field.value || ""}
                              onChange={field.onChange}
                              autoComplete="off"
                              className="w-full"
                              placeholder="Familyasini Kiriting"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <HoverBorder>
                              <Select
                                items={genders}
                                onChange={field.onChange}
                                placeholder="Jinsni tanlash "
                                aria-label="gender"
                                label="Jinsni tanlash"
                                aria-labelledby="gender"
                                labelPlacement="outside"
                                classNames={{
                                  trigger: "dark:bg-background/90",
                                  listboxWrapper: "dark:bg-background/90 ",
                                  listbox:
                                    "dark:bg-background/90 p-0 shadow-md ",
                                  popoverContent: "dark:bg-background/90 ",
                                }}
                                className="w-full border rounded-md dark:border-none dark:bg-background/70"
                              >
                                {(item) => (
                                  <SelectItem
                                    aria-label={item.name}
                                    aria-labelledby={item.value}
                                    key={item.id}
                                    textValue={item.value}
                                  >
                                    <div className="flex gap-2 items-center">
                                      <div className="flex flex-col">
                                        <span className="text-small">
                                          {item.name}
                                        </span>
                                        <span className="text-tiny text-default-400">
                                          {item.value}
                                        </span>
                                      </div>
                                    </div>
                                  </SelectItem>
                                )}
                              </Select>
                            </HoverBorder>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <HoverBorder>
                              <DatePicker
                                classNames={{
                                  label: "dark:bg-background/90  ",
                                  // calendarContent: "dark:bg-background/90",
                                  // calendar: "dark:bg-background/90",
                                  // inputWrapper: "dark:bg-background/90",
                                  // base: "dark:bg-background/90",
                                  // innerWrapper: "dark:bg-background/90",
                                  timeInput: "dark:bg-background/90",
                                  segment: "dark:bg-background/90",
                                  helperWrapper: "dark:bg-background/90",
                                  input: "dark:bg-background/90",
                                  selectorButton: "dark:bg-background/90",
                                  description: "dark:bg-background/90",
                                  timeInputLabel: "dark:bg-background/90",
                                  errorMessage: "dark:bg-background/90",
                                  selectorIcon: "dark:bg-background/90",
                                  popoverContent: "dark:bg-background/90",
                                }}
                                onChange={field.onChange}
                                labelPlacement="outside"
                                // value={field.value || ""}
                                label="Tu'gilgan sanani belgilang"
                              />
                            </HoverBorder>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <HoverBorder>
                              <Select
                                items={courses}
                                onChange={field.onChange}
                                placeholder="Couseni tanlash "
                                aria-label="gender"
                                aria-labelledby="gender"
                                labelPlacement="outside"
                                classNames={{
                                  trigger: "dark:bg-background/90",
                                  listboxWrapper: "dark:bg-background/90 ",
                                  listbox:
                                    "dark:bg-background/90 p-0 shadow-md ",
                                  popoverContent: "dark:bg-background/90 ",
                                }}
                                className="w-full border rounded-md dark:border-none dark:bg-background/70"
                              >
                                {(item) => (
                                  <SelectItem
                                    aria-label={item.name}
                                    aria-labelledby={item.value}
                                    key={item.id}
                                    textValue={item.value}
                                  >
                                    <div className="flex gap-2 items-center">
                                      <div className="flex flex-col">
                                        <span className="text-small">
                                          {item.name}
                                        </span>
                                        <span className="text-tiny text-default-400">
                                          {item.value}
                                        </span>
                                      </div>
                                    </div>
                                  </SelectItem>
                                )}
                              </Select>
                            </HoverBorder>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Telefon raqamni kiriting"
                              onChange={field.onChange}
                              value={field.value || ""}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            </ModalBody>

            <ModalFooter>
              {/* <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button> */}
              <Button radius="sm" className="text-white font-semibold" color="success" onPress={onClose}>
                Saqlash
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default CreateUser;
