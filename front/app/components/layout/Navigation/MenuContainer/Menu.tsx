import { FC } from 'react'

import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import AuthItems from '@/components/layout/Navigation/MenuContainer/auth/AuthItems'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.types'

import styles from './Menu.module.scss'

const Menu: FC<{ menu: IMenu }> = ({ menu: { title, items } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item, index) => (
					<MenuItem item={item} key={index} />
				))}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
