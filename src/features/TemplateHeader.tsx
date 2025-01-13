import { FiltersInfo } from '@/app/types'
import { Filters } from './Filters'
import { ChangesClearButton } from '@/shared/ChangesClearButton'
import { ChangesSaveButton } from '@/shared/ChangesSaveButton'
import styles from '@/app/styles/styles_features/TemplateHeader.module.css'


export function TemplateHeader(props: {
    currentTemplateName: string, 
    currentFilters: FiltersInfo,
    changeFilters: (filters: FiltersInfo) => void
}) {
    return (
        <header className={styles.container}>
            <div className={styles.container_block}>
                <Filters 
                currentFilters={props.currentFilters}
                changeFilters={props.changeFilters} />
            </div>
            <div className={styles.container_block}>
                <h1>{props.currentTemplateName}</h1>
            </div>
            <div className={styles.container_block}>
                <ChangesClearButton />
                <ChangesSaveButton />
            </div>
        </header>
    )
}