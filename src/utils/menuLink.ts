export type menuType = {
	id: number;
	title: string;
	path: string;
};

export interface categoriesType extends menuType {
	image: string;
}

export const menuIndexItem: menuType[] = [
	{
		id: 1,
		title: "แฟชั่น 1",
		path: "#",
	},
	{
		id: 2,
		title: "แฟชั่น 2",
		path: "#",
	},
	{
		id: 3,
		title: "แฟชั่น 3",
		path: "#",
	},
	{
		id: 4,
		title: "แฟชั่น 4",
		path: "#",
	},
	{
		id: 5,
		title: "เครื่องประดับ",
		path: "#",
	},
	{
		id: 6,
		title: "เครื่องใช้ไฟฟ้า",
		path: "#",
	},
];

export const menuShopWomenItem: menuType[] = [
	{
		id: 1,
		title: "ท็อปส์ซูและเสื้อเบลาส์",
		path: "#",
	},
	{
		id: 2,
		title: "เสื้อกันหนาว",
		path: "#",
	},
	{
		id: 3,
		title: "กางเกงและกางเกงยีนส์",
		path: "#",
	},
	{
		id: 4,
		title: "ชุดชั้นในและชุดนอน",
		path: "#",
	},
	{
		id: 5,
		title: "กระโปรง",
		path: "#",
	},
	{
		id: 6,
		title: "ชุดออกกำลังกาย",
		path: "#",
	},
];

export const menuShopMenItem: menuType[] = [
	{
		id: 1,
		title: "เสื้อเชิ้ต",
		path: "#",
	},
	{
		id: 2,
		title: "เสื้อยืดและเสื้อโปโล",
		path: "#",
	},
	{
		id: 3,
		title: "เสื้อกันหนาวและเสื้อฮู้ด",
		path: "#",
	},
	{
		id: 4,
		title: "แจ็กเก็ตและเบลเซอร์",
		path: "#",
	},
	{
		id: 5,
		title: "กางเกงและชิโน",
		path: "#",
	},
	{
		id: 6,
		title: "ยีนส์",
		path: "#",
	},
];

export const menuAccessoriesItem: menuType[] = [
	{
		id: 1,
		title: "กระเป๋าและกระเป๋าสตางค์",
		path: "#",
	},
	{
		id: 2,
		title: "หมวกและหมวกแก๊ป",
		path: "#",
	},
	{
		id: 3,
		title: "ผ้าพันคอและผ้าคลุมไหล่",
		path: "#",
	},
	{
		id: 4,
		title: "เข็มขัดและสายเอี๊ยม",
		path: "#",
	},
	{
		id: 5,
		title: "แว่นกันแดด",
		path: "#",
	},
	{
		id: 6,
		title: "เครื่องประดับ",
		path: "#",
	},
];

export const menuFootwearItem: menuType[] = [
	{
		id: 1,
		title: "รองเท้าส้นเตี้ยและโลฟเฟอร์",
		path: "#",
	},
	{
		id: 2,
		title: "รองเท้าส้นสูงและปั๊ม",
		path: "#",
	},
	{
		id: 3,
		title: "รองเท้าผ้าใบและกีฬา",
		path: "#",
	},
	{
		id: 4,
		title: "ใส่รองเท้า",
		path: "#",
	},
	{
		id: 5,
		title: "รองเท้าลำลอง",
		path: "#",
	},
	{
		id: 6,
		title: "บู๊ทส์ แอนด์ ชุกก้า",
		path: "#",
	},
];

export const menuProductItem: menuType[] = [
	{
		id: 1,
		title: "รูปภาพตัวแปร",
		path: "#",
	},
	{
		id: 2,
		title: "ราคาต่อหน่วย",
		path: "#",
	},
	{
		id: 3,
		title: "สินค้าพรีออเดอร์",
		path: "#",
	},
	{
		id: 4,
		title: "นับถอยหลัง",
		path: "#",
	},
	{
		id: 5,
		title: "เสริม",
		path: "#",
	},
	{
		id: 6,
		title: "วีดีโอ",
		path: "#",
	},
];

export const menuBlogItem: menuType[] = [
	{
		id: 1,
		title: "บล็อก (ค่าเริ่มต้น)",
		path: "#",
	},
	{
		id: 2,
		title: "บล็อก (บริการ)",
		path: "#",
	},
];

export const menuListItem: menuType[] = [
	{
		id: 1,
		title: "เกี่ยวกับเรา",
		path: "#",
	},
	{
		id: 2,
		title: "บริการใหม่",
		path: "#",
	},
	{
		id: 3,
		title: "คำถามที่พบบ่อย",
		path: "#",
	},
	{
		id: 4,
		title: "ตารางขนาด",
		path: "#",
	},
	{
		id: 5,
		title: "สั่งซื้อตอนนี้",
		path: "#",
	},
];

export const menuCategoriesItem: categoriesType[] = [
	{
		id: 1,
		title: "ผลิตภัณฑ์พิเศษ",
		path: "#",
		image: "https://placehold.co/600x700",
	},
	{
		id: 2,
		title: "ของมาใหม่",
		path: "#",
		image: "https://placehold.co/600x700",
	},
	{
		id: 3,
		title: "สไตล์ฤดูร้อน",
		path: "#",
		image: "https://placehold.co/600x700",
	},
	{
		id: 4,
		title: "แฟชั่นหน้าหนาว",
		path: "#",
		image: "https://placehold.co/600x700",
	},
	{
		id: 5,
		title: "เครื่องประดับ",
		path: "#",
		image: "https://placehold.co/600x700",
	},
	{
		id: 6,
		title: "รองเท้า",
		path: "#",
		image: "https://placehold.co/600x700",
	},
	{
		id: 7,
		title: "ผู้ชาย",
		path: "#",
		image: "https://placehold.co/600x700",
	},
	{
		id: 8,
		title: "ผู้หญิง",
		path: "#",
		image: "https://placehold.co/600x700",
	},
];
