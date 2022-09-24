import React, { FC } from 'react'
import Menu from "@/components/layout/Navigation/MenuContainer/Menu";
import {menus} from './menu.data'

const MenuContainer: FC = () => {
	return <div>
		<Menu menu={menus[0]}/>
		{/*{genres menu}*/}
		<Menu menu={menus[1]}/>
	</div>
}

export default MenuContainer