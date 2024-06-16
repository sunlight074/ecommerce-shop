"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardItem from "@/components/CardItem";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function Hotsale() {
	const router = useRouter();
	const mockItem = [
		{
			id: 1,
			imageDefaultUrl: "/images/shirt1.avif",
			imageOtherUrl: "/images/shirt2.avif",
			title: "นาฬิกาขข้อมือแบบเข็ม",
			price: 1440,
			href: "#",
		},
		{
			id: 2,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "เสื้อแจ๊คเก็ต",
			price: 1440,
			href: "#",
		},
		{
			id: 3,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "เสื้อผ้างานฝีมือ",
			price: 1440,
			href: "#",
		},
		{
			id: 4,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "รถเข็นเด็ก",
			price: 1800,
			href: "#",
		},
		{
			id: 5,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "ท็อปส์ซูผู้หญิง",
			price: 1440,
			href: "#",
		},
		{
			id: 6,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "รองเท้า",
			price: 1200,
			href: "#",
		},
		{
			id: 7,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "หมวกแฟชั่น",
			price: 600,
			href: "#",
		},
		{
			id: 8,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "นาฬิกาสมาร์ท",
			price: 3500,
			href: "#",
		},
	];

	return (
		<Tabs defaultValue="men" className="w-full mx-auto max-w-5xl mt-10">
			<div className="flex justify-between items-center mb-5">
				<div className="text-2xl font-bold">สินค้าขายดี</div>
				<TabsList>
					<TabsTrigger value="men">ผู้ชาย</TabsTrigger>
					<TabsTrigger value="women">ผู้หญิง</TabsTrigger>
					<TabsTrigger value="baby">เด็ก</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent value="men">
				<div className="w-full mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-2">
					{mockItem.map((item) => (
						<CardItem
							key={item.id}
							imageDefaultUrl={item.imageDefaultUrl}
							imageOtherUrl={item.imageOtherUrl}
							title={item.title}
							price={item.price}
							href={item.href}
						/>
					))}
				</div>
				<div className="w-full  flex justify-center mt-5">
					<Button
						variant={"outline"}
						onClick={() => router.push("/collections/men")}
					>
						ดูทั้งหมด
					</Button>
				</div>
			</TabsContent>
			<TabsContent value="women">
				<div className="w-full mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-2">
					{mockItem.map((item) => (
						<CardItem
							key={item.id}
							imageDefaultUrl={item.imageDefaultUrl}
							imageOtherUrl={item.imageOtherUrl}
							title={item.title}
							price={item.price}
							href={item.href}
						/>
					))}
				</div>
				<div className="w-full  flex justify-center mt-5">
					<Button
						variant={"outline"}
						onClick={() => router.push("/collections/women")}
					>
						ดูทั้งหมด
					</Button>
				</div>
			</TabsContent>
			<TabsContent value="baby">
				<div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-2">
					{mockItem.map((item) => (
						<CardItem
							key={item.id}
							imageDefaultUrl={item.imageDefaultUrl}
							imageOtherUrl={item.imageOtherUrl}
							title={item.title}
							price={item.price}
							href={item.href}
						/>
					))}
				</div>
				<div className="w-full  flex justify-center mt-5">
					<Button variant={"outline"}>ดูทั้งหมด</Button>
				</div>
			</TabsContent>
		</Tabs>
	);
}

export default Hotsale;
