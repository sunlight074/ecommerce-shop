"use client";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	menuAccessoriesItem,
	menuBlogItem,
	menuCategoriesItem,
	menuFootwearItem,
	menuIndexItem,
	menuListItem,
	menuProductItem,
	menuShopMenItem,
	menuShopWomenItem,
} from "@/utils/menuLink";

function navber() {
	const [currency, setCurrency] = useState<string>("สกุลเงิน");

	return (
		<div className="w-full h-20 max-w-6xl mx-auto flex items-center justify-between px-5">
			<div className="flex items-center space-x-3">
				<div className="lg:hidden">
					<IoMenu className="w-8 h-8" />
				</div>
				<Link href={"/"} className="font-bold  text-base lg:text-2xl">
					ดอกไม้<span className="text-sky-700">บาน</span>
				</Link>
			</div>
			<div className="hidden lg:flex space-x-1 ">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="font-bold text-base">
								หน้าแรก
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="p-4 w-[200px]">
									{menuIndexItem.map((item) => (
										<div className="mb-3" key={item.id}>
											<Link href={item.path} className="hover:text-sky-600">
												{item.title}
											</Link>
										</div>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="font-bold text-base">
								สินค้า
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="p-4 w-[800px] flex">
									<div className="w-1/4 px-4">
										<div className="font-bold border-b pb-3 mb-3">
											<Link href={"#"} className="hover:text-sky-600">
												เสื้อผ้าผู้หญิง
											</Link>
										</div>
										{menuShopWomenItem.map((item) => (
											<div className="mb-3" key={item.id}>
												<Link href={item.path} className="hover:text-sky-600">
													{item.title}
												</Link>
											</div>
										))}
									</div>
									<div className="w-1/4 px-4">
										<div className="font-bold border-b pb-3 mb-3">
											<Link href={"#"} className="hover:text-sky-600">
												เสื้อผ้าผู้ชาย
											</Link>
										</div>
										{menuShopMenItem.map((item) => (
											<div className="mb-3" key={item.id}>
												<Link href={item.path} className="hover:text-sky-600">
													{item.title}
												</Link>
											</div>
										))}
									</div>
									<div className="w-1/4 px-4">
										<div className="font-bold border-b pb-3 mb-3">
											<Link href={"#"} className="hover:text-sky-600">
												ของตกแต่ง
											</Link>
										</div>
										{menuAccessoriesItem.map((item) => (
											<div className="mb-3" key={item.id}>
												<Link href={item.path} className="hover:text-sky-600">
													{item.title}
												</Link>
											</div>
										))}
									</div>
									<div className="w-1/4 px-4">
										<div className="font-bold border-b pb-3 mb-3">
											<Link href={"#"} className="hover:text-sky-600">
												รองเท้า
											</Link>
										</div>
										{menuFootwearItem.map((item) => (
											<div className="mb-3" key={item.id}>
												<Link href={item.path} className="hover:text-sky-600">
													{item.title}
												</Link>
											</div>
										))}
									</div>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="font-bold text-base">
								ประเภท
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid grid-cols-4 grid-rows-2 p-4 w-[800px] gap-4">
									{menuCategoriesItem.map((item) => (
										<Link
											key={item.id}
											href={item.path}
											className="hover:text-sky-600"
										>
											<div className="font-bold border-b pb-3 mb-3">
												{item.title}
											</div>
											<img src={item.image} alt="" />
										</Link>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="font-bold text-base">
								โปรดัก
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="p-4 w-[200px]">
									{menuProductItem.map((item) => (
										<div className="mb-3" key={item.id}>
											<Link href={item.path} className="hover:text-sky-600">
												{item.title}
											</Link>
										</div>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="font-bold text-base">
								บล๊อค
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="p-4 w-[200px]">
									{menuBlogItem.map((item) => (
										<div className="mb-3" key={item.id}>
											<Link href={item.path} className="hover:text-sky-600">
												{item.title}
											</Link>
										</div>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="font-bold text-base">
								รายการ
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="p-4 w-[200px]">
									{menuListItem.map((item) => (
										<div className="mb-3" key={item.id}>
											<Link href={item.path} className="hover:text-sky-600">
												{item.title}
											</Link>
										</div>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className="w-auto flex items-center space-x-5">
				<DropdownMenu>
					<DropdownMenuTrigger className="font-bold text-base">
						{currency}
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => setCurrency("ไทย (THB ฿)")}>
							ไทย (THB ฿)
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setCurrency("ญี่ปุ่น (JPY ¥)")}>
							ญี่ปุ่น (JPY ¥)
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setCurrency("อิตาลี่ (EUR €)")}>
							อิตาลี่ (EUR €)
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setCurrency("รัชเซีย (USD $)")}>
							รัชเซีย (USD $)
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<IoSearch className="w-5 h-5" />
				<FaRegUser className="w-5 h-5" />
				<FiShoppingCart className="w-5 h-5" />
			</div>
		</div>
	);
}

export default navber;
