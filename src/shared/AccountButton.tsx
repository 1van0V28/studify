import { useRouter } from 'next/navigation'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import styles from '@/app/styles/styles_shared/AccountButton.module.css'


export function AccountButton() {
    const router = useRouter()

    const buttonClick = function() {
        router.push('/')
    }

    return (
        <button className={styles.button} onClick={buttonClick}>
            <AccountCircleIcon className={styles.icon} />
        </button>
    )
}