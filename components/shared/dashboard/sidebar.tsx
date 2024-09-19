"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { dashboardSidebar } from "@/constants";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { SignOutButton, SignUpButton } from "@clerk/nextjs";

// Array to store sidebar navigation items

const Sidebar = () => {
	const pathname = usePathname(); // Get current pathname

	return (
		<div className="hidden border-r bg-muted/40 md:block">
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link
						href="/"
						className="flex items-center gap-2 font-semibold transition-all duration-150 hover:text-primary"
					>
						<Icons.logo width={150} height={120} />
					</Link>
				</div>
				<div className="flex-1">
					<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
						{dashboardSidebar.map((item) => {
							const Icon = item.icon;
							const isActive = pathname === item.href;

							return (
								<Link
									key={item.href}
									href={item.href}
									className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
										isActive
											? "bg-muted text-primary"
											: "text-muted-foreground hover:text-primary"
									}`}
								>
									<Icon className="h-4 w-4" />
									{item.label}
								</Link>
							);
						})}
					</nav>
				</div>
				<div className="mt-auto p-4">
					<SignOutButton>
						<Button className="w-full">Logout</Button>
					</SignOutButton>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
