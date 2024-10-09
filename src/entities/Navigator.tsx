import { AccountButton } from '@/shared/AccountButton'
import { NavigatorButton } from '@/shared/NavigatorButton'


export function Navigator() {
    return (
        <aside>
            <AccountButton />
            <nav>
                <NavigatorButton />
                <NavigatorButton />
            </nav>
        </aside>
    )
}