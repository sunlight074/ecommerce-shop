"use client";
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
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

function navber() {
  const [currency, setCurrency] = useState<string>("สกุลเงิน");

  return (
    <div className="w-full h-20 max-w-6xl mx-auto flex items-center justify-between">
      <div className="font-bold text-2xl">
        <Link href={"/"}>
          ดอกไม้<span className="text-sky-700">บาน</span>
        </Link>
      </div>
      <div className="flex space-x-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-base">
                หน้าแรก
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 w-[200px]">
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      แฟชั่น 1
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      แฟชั่น 2
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      แฟชั่น 3
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      แฟชั่น 4
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      เครื่องประดับ
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      เครื่องใช้ไฟฟ้า
                    </Link>
                  </div>
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
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        ท็อปส์ซูและเสื้อเบลาส์
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        เสื้อกันหนาว
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        กางเกงและกางเกงยีนส์
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        ชุดชั้นในและชุดนอน
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        กระโปรง
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        ชุดออกกำลังกาย
                      </Link>
                    </div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="font-bold border-b pb-3 mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        เสื้อผ้าผู้ชาย
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        เสื้อเชิ้ต
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        เสื้อยืดและเสื้อโปโล
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        เสื้อกันหนาวและเสื้อฮู้ด
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        แจ็กเก็ตและเบลเซอร์
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        กางเกงและชิโน
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        ยีนส์
                      </Link>
                    </div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="font-bold border-b pb-3 mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        ของตกแต่ง
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        กระเป๋าและกระเป๋าสตางค์
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        หมวกและหมวกแก๊ป
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        ผ้าพันคอและผ้าคลุมไหล่
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        เข็มขัดและสายเอี๊ยม
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        แว่นกันแดด
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        เครื่องประดับ
                      </Link>
                    </div>
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="font-bold border-b pb-3 mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        รองเท้า
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        รองเท้าส้นเตี้ยและโลฟเฟอร์
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        รองเท้าส้นสูงและปั๊ม
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        รองเท้าผ้าใบและกีฬา
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        ใส่รองเท้า
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        รองเท้าลำลอง
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link href={"#"} className="hover:text-sky-600">
                        บู๊ทส์ แอนด์ ชุกก้า
                      </Link>
                    </div>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-base">
                ประเภท
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 w-[800px] flex">
                  <div className="w-1/4 px-4">
                    <Link href={"#"} className="hover:text-sky-600">
                      <div className="font-bold border-b pb-3 mb-3">
                        ผลิตภัณฑ์พิเศษ
                      </div>
                      <img src="https://placehold.co/600x700" alt="" />
                    </Link>
                  </div>
                  <div className="w-1/4 px-4">
                    <Link href={"#"} className="hover:text-sky-600">
                      <div className="font-bold border-b pb-3 mb-3">
                        ของมาใหม่
                      </div>
                      <img src="https://placehold.co/600x700" alt="" />
                    </Link>
                  </div>
                  <div className="w-1/4 px-4">
                    <Link href={"#"} className="hover:text-sky-600">
                      <div className="font-bold border-b pb-3 mb-3">
                        สไตล์ฤดูร้อน
                      </div>
                      <img src="https://placehold.co/600x700" alt="" />
                    </Link>
                  </div>
                  <div className="w-1/4 px-4">
                    <Link href={"#"} className="hover:text-sky-600">
                      <div className="font-bold border-b pb-3 mb-3">
                        แฟชั่นหน้าหนาว
                      </div>
                      <img src="https://placehold.co/600x700" alt="" />
                    </Link>
                  </div>
                </ul>
                <ul className="p-4 w-[800px] flex mt-5">
                  <div className="w-1/4 px-4">
                    <Link href={"#"} className="hover:text-sky-600">
                      <div className="font-bold border-b pb-3 mb-3">
                        เครื่องประดับ
                      </div>
                      <img src="https://placehold.co/600x700" alt="" />
                    </Link>
                  </div>
                  <div className="w-1/4 px-4">
                    <Link href={"#"} className="hover:text-sky-600">
                      <div className="font-bold border-b pb-3 mb-3">
                        รองเท้า
                      </div>
                      <img src="https://placehold.co/600x700" alt="" />
                    </Link>
                  </div>
                  <div className="w-1/4 px-4">
                    <Link href={"#"} className="hover:text-sky-600">
                      <div className="font-bold border-b pb-3 mb-3">ผู้ชาย</div>
                      <img src="https://placehold.co/600x700" alt="" />
                    </Link>
                  </div>
                  <div className="w-1/4 px-4">
                    <Link href={"#"} className="hover:text-sky-600">
                      <div className="font-bold border-b pb-3 mb-3">
                        ผู้หญิง
                      </div>
                      <img src="https://placehold.co/600x700" alt="" />
                    </Link>
                  </div>
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
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      รูปภาพตัวแปร
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      ราคาต่อหน่วย
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      สินค้าพรีออเดอร์
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      นับถอยหลัง
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      เสริม
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      วีดีโอ
                    </Link>
                  </div>
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
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      บล็อก (ค่าเริ่มต้น)
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      บล็อก (บริการ)
                    </Link>
                  </div>
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
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      เกี่ยวกับเรา
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      บริการใหม่
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      คำถามที่พบบ่อย
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      ตารางขนาด
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link href={"#"} className="hover:text-sky-600">
                      สั่งซื้อตอนนี้
                    </Link>
                  </div>
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
