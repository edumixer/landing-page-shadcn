/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axiosInstance from "@/lib/axiosInstance";

import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (endpoint: string, data: any) => {
    try {
      const response = await axiosInstance.post(`/${endpoint}`, data, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.data) {
        alert(
          `${endpoint} successful: ${JSON.stringify(response.data.message)}`
        );
      } else {
        alert(`Error: ${response.data?.message || "An error occurred."}`);
      }
    } catch (error: any) {
      console.log("Error:", error?.response?.data?.message);
      console.error(
        "Error:",
        error?.response?.data?.message || "An error occurred."
      );
      alert(error?.response?.data?.message);
    }
  };

  return (
    <header className="sticky top-5 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex items-center gap-x-4"
            >
              <div>
                <svg
                  width="60"
                  height="70"
                  viewBox="0 0 60 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.0647 0.0287016L0.201257 18.849C0.0789901 18.9026 0 19.0237 0 19.1575V30.8426C0 30.9763 0.0789901 31.0974 0.201257 31.1511L43.0647 49.9713C43.2869 50.0689 43.5359 49.9058 43.5359 49.6628V38.2777C43.5359 38.144 43.4569 38.0229 43.3346 37.9692L14.4997 25.3085C14.2313 25.1907 14.2313 24.8093 14.4997 24.6915L43.3346 12.0308C43.4569 11.9771 43.5359 11.856 43.5359 11.7223V0.337224C43.5359 0.094201 43.2869 -0.068842 43.0647 0.0287016Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.0647 0.0287016L0.201257 18.849C0.0789901 18.9026 0 19.0237 0 19.1575V30.8426C0 30.9763 0.0789901 31.0974 0.201257 31.1511L43.0647 49.9713C43.2869 50.0689 43.5359 49.9058 43.5359 49.6628V38.2777C43.5359 38.144 43.4569 38.0229 43.3346 37.9692L14.4997 25.3085C14.2313 25.1907 14.2313 24.8093 14.4997 24.6915L43.3346 12.0308C43.4569 11.9771 43.5359 11.856 43.5359 11.7223V0.337224C43.5359 0.094201 43.2869 -0.068842 43.0647 0.0287016Z"
                    fill="#4AC959"
                  />
                </svg>
              </div>
              Coopers
            </a>
          </NavigationMenuItem>

          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Coopers</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </span>

          <div className="hidden md:flex items-center gap-4">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button
                  className={`text-[17px] bg-black text-white border border-gray-600 px-10 py-2 rounded-md hover:bg-gray-600 hover:border-gray-400 hover:text-white transition duration-300 ease-in-out`} //${buttonVariants({ variant: "ghost" })}`}
                >
                  entrar
                </button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    Login ou se Registrar?
                  </DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="login">
                  <TabsList className="flex justify-center mb-4">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Registrar</TabsTrigger>
                  </TabsList>

                  {/* Login Form */}
                  <TabsContent value="login">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        handleSubmit("login", {
                          username: formData.get("username"),
                          password: formData.get("password"),
                        });
                      }}
                      className="flex flex-col gap-4"
                    >
                      <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        required
                        className="border rounded-md p-2 text-black"
                      />
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        className="border rounded-md p-2 text-black"
                      />
                      <button
                        type="submit"
                        className={`mt-4 ${buttonVariants({
                          variant: "default",
                        })}`}
                      >
                        Entrar
                      </button>
                    </form>
                  </TabsContent>

                  {/* Register Form */}
                  <TabsContent value="register">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        handleSubmit("register", {
                          username: formData.get("username"),
                          password: formData.get("password"),
                        });
                      }}
                      className="flex flex-col gap-4"
                    >
                      <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        required
                        className="border rounded-md p-2 text-black"
                      />
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        className="border rounded-md p-2 text-black"
                      />
                      <button
                        type="submit"
                        className={`mt-4 ${buttonVariants({
                          variant: "default",
                        })}`}
                      >
                        Register
                      </button>
                    </form>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>

            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
