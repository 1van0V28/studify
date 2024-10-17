import { AccountButton } from '@/shared/AccountButton'
import { NavigatorButton } from '@/shared/NavigatorButton'
import styles from '@/entities/styles/Navigator.module.css'


export function Navigator() {
    return (
        <aside className={styles.container}>
            <div className={styles.container_account}>
                <AccountButton />
            </div>
            <nav className={styles.container_navigator}>
                <NavigatorButton />
                <NavigatorButton />
                <NavigatorButton />
                <NavigatorButton />
                <NavigatorButton />
            </nav>
        </aside>
    )
}