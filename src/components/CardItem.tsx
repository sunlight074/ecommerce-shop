"use client";
import Aos from "aos";
import Link from "next/link";
import { useEffect } from "react";
import "aos/dist/aos.css";

type props = {
	imageDefaultUrl: string;
	imageOtherUrl: string;
	title: string;
	price: number;
	href: string;
};

function CardItem({
	href,
	imageDefaultUrl,
	imageOtherUrl,
	price,
	title,
}: props) {
	useEffect(() => {
		Aos.init();
	});
	return (
		<div className="flex justify-center">
			<Link
				className="w-auto"
				href={href}
				data-aos="zoom-in"
				data-aos-delay="50"
			>
				<figure className="imghvr-push-right">
					<img src={imageDefaultUrl} alt="placehold" width={220} height={220} />
					<figcaption style={{ backgroundColor: "white", padding: 0 }}>
						<img src={imageOtherUrl} alt="placehold" width={220} height={220} />
					</figcaption>
				</figure>
				<div className="text-center font-medium text-xs lg:text-base">
					{title}
				</div>
				<div className="text-center">{price} ฿</div>
			</Link>
		</div>
	);
}

export default CardItem;
