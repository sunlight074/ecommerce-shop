"use client";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";

function Footer() {
	return (
		<div className="bg-neutral-100">
			<div className="max-w-6xl mx-auto h-[300px] grid grid-cols-2 ">
				<div className="flex items-center">
					<div className="w-full space-y-3 px-5">
						<p className="text-2xl font-bold">เกี่ยวกับเรา</p>
						<p>
							<span className="font-semibold">ดอกไม้บาน </span>
							เป็นแพลตฟอร์มการค้าปลีกออนไลน์แบบไดนามิก
							<br />
							และเป็นนวัตกรรมที่นำเสนอผลิตภัณฑ์ที่หลากหลาย ให้กับลูกค้าทั่วโลก
						</p>
						<div className="flex space-x-5 items-center">
							<FaFacebook className="w-5 h-5" />
							<FaSquareTwitter className="w-5 h-5" />
							<FaYoutube className="w-6 h-6" />
							<FaInstagramSquare className="w-5 h-5" />
							<AiFillTikTok className="w-6 h-6" />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-5">
					<div className="flex items-center">
						<div className="w-full">
							<div className="mb-5">
								<p className="text-lg font-semibold">ลิงค์ด่วน</p>
							</div>
							<div className="flex flex-col space-y-3">
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										บัญชีของฉัน
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										รถเข็นของฉัน
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										สิ่งที่ปรารถนา
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										บัตรของขวัญ
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										ต้องการความช่วยเหลือ?
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<div className="w-full">
							<div className="mb-5">
								<p className=" text-lg font-semibold">ข้อมูลข่าวสาร</p>
							</div>
							<div className="flex flex-col space-y-3">
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										เกี่ยวกับเรา
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										ติดต่อ
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										บล็อก
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										ตารางขนาด
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										คำถามที่พบบ่อย
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<div className="w-full">
							<div className="mb-5">
								<p className=" text-lg font-semibold">นโยบาย</p>
							</div>
							<div className="flex flex-col space-y-3">
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										นโยบายความเป็นส่วนตัว
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										นโยบายการคืนเงิน
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										เงื่อนไขการให้บริการ
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										นโยบายการจัดส่งสินค้า
									</Link>
								</div>
								<div>
									<Link href={"#"} className=" hover:text-sky-600">
										ข้อมูลติดต่อ
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
