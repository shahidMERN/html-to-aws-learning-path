import { Menu } from "antd";
import Link from "next/link";
//============================
import {
	AppstoreOutlined,
	LoginOutlined,
	UserAddOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const TopNav = () => {
	return (
		<Menu mode="horizontal">
			<Item icon={<AppstoreOutlined />}>
				<Link href="/">
					<a>Home</a>
				</Link>
			</Item>

			<Item icon={<UserAddOutlined />}>
				<Link href="/register">
					<a>Home Register</a>
				</Link>
			</Item>

			<Item icon={<LoginOutlined />}>
				<Link href="/login">
					<a>Home Login</a>
				</Link>
			</Item>
		</Menu>
	);
};

export default TopNav;
