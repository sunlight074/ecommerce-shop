import CardItem from "@/components/CardItem";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
	const mockItem = [
		{
			id: 1,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
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
		{
			id: 9,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "ชุดเด็ก",
			price: 199,
			href: "#",
		},
		{
			id: 10,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "เสื้อคลุมยาวผู้หญิง",
			price: 900,
			href: "#",
		},
		{
			id: 11,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "แม็กซี่ยาวผู้หญิง",
			price: 1440,
			href: "#",
		},
		{
			id: 12,
			imageDefaultUrl: "https://placehold.co/220x220",
			imageOtherUrl: "https://placehold.co/220x220",
			title: "แหวนเพชร",
			price: 8000,
			href: "#",
		},
	];

	return (
		<div className="max-w-6xl mx-auto px-10">
			<div className="bg-neutral-100  lg:h-72 mt-10 rounded-xl lg:flex p-6">
				<div className="w-full lg:w-1/2 flex items-center">
					<div>
						<p className="text-3xl font-bold pb-5 text-center lg:text-start">
							เครื่องประดับ
						</p>
						<div className="mb-5">
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem>
										<BreadcrumbLink className="font-semibold" href="/">
											หน้าแรก
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
									<BreadcrumbItem>
										<BreadcrumbLink className="text-sky-800 font-bold text-md">
											เครื่องประดับ
										</BreadcrumbLink>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
						<p className="text-center lg:text-start mb-5 lg:mb-0">
							ยินดีต้อนรับสู่คอลเลกชันของเรา ที่ซึ่งความตื่นเต้นมาพบกับการค้นพบ
							เรามุ่งมั่นที่จะทำให้คุณเป็นผู้นำด้านแฟชั่น เทคโนโลยี และเทรนด์ไลฟ์สไตล์
						</p>
					</div>
				</div>
				<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
					<img
						src="/images/accessories.webp"
						alt="placehold"
						className="rounded-xl"
					/>
				</div>
			</div>
			<div className="w-full mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-2">
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
		</div>
	);
}
