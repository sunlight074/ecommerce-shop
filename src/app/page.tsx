"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import Aos from "aos";
import "aos/dist/aos.css";
import Hotsale from "@/components/Hotsale";
import Link from "next/link";

export default function Page() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	const mockData = [
		{
			id: 1,
			title: "คอลเลคชั่นผู้ชาย",
			description: "ยกระดับพื้นฐานของคุณด้วยความหรูหรา",
			url: "/images/collection-men.webp",
			path: "#",
		},
		{
			id: 2,
			title: "คอลเลคชั่นผู้หญิง",
			description: "ยกระดับพื้นฐานของคุณด้วยความหรูหรา",
			url: "/images/collection-women.webp",
			path: "#",
		},
		{
			id: 3,
			title: "คอลเลคชั่นเด็ก",
			description: "ยกระดับพื้นฐานของคุณด้วยความหรูหรา",
			url: "/images/collection-baby.webp",
			path: "#",
		},
	];

	useEffect(() => {
		Aos.init();
		if (!api) {
			return;
		}
		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="max-w-7xl mx-auto px-10">
			<Carousel setApi={setApi} className="mt-10 mx-2">
				<CarouselContent>
					{mockData.map((item) => (
						<CarouselItem key={item.id}>
							<Card>
								<CardContent className="w-full lg:flex rounded-xl p-6 h-[600px] bg-neutral-100">
									<div className="w-full lg:w-1/2 flex justify-center items-center">
										<div data-aos="fade-up" data-aos-delay="700">
											<p className="text-center lg:text-start text-base lg:text-3xl font-bold pb-5">
												{item.title}
											</p>
											<p className="text-center lg:text-start text-base pb-5">
												{item.description}
											</p>
											<div className="text-center lg:text-start">
												<Button>ซื้อตอนนี้</Button>
											</div>
										</div>
									</div>
									<div className="w-full lg:w-1/2 flex items-center justify-center">
										<img src={item.url} alt="images" />
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="py-2 text-center text-sm text-muted-foreground">
				หน้า {current} ใน {count}
			</div>
			<div className="w-full mx-auto max-w-5xl mt-10 flex space-x-8 justify-center">
				<Link
					href={"#"}
					className="w-1/2 h-72 rounded-xl bg-[#ebebeb] flex items-center"
				>
					<div className="w-1/2 text-center space-y-5 p-5">
						<p className="text-xl font-bold">ชุดสูทและชุดทางการ</p>
						<Button>ซื้อตอนนี้</Button>
					</div>
					<div className="w-1/2 flex justify-center">
						<img
							src="/images/suits.png"
							className="object-cover h-56 hover:scale-125 ease-out duration-150"
							alt="suits"
						/>
					</div>
				</Link>
				<Link
					href={"#"}
					className="w-1/2 h-72 rounded-xl bg-[#ebebeb] flex items-center"
				>
					<div className="w-1/2 text-center space-y-5 p-5">
						<p className="text-xl font-bold">เสื้อและชุดแบบยาว</p>
						<Button>ซื้อตอนนี้</Button>
					</div>
					<div className="w-1/2 flex justify-center">
						<img
							src="/images/shirt3.png"
							className="object-cover h-56 hover:scale-125 ease-out duration-150"
							alt="suits"
						/>
					</div>
				</Link>
			</div>
			<Hotsale />
		</div>
	);
}
