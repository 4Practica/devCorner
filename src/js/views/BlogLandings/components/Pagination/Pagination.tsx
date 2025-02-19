import { Button } from '@common/components'
import { StrapiMetaData } from '@services/cms/strapi/types/strapiResponse'
import styles from './Pagination.module.css'

interface PaginationProps {
  metaBlogs: Record<never, never> | StrapiMetaData
  page: number
  handlePagination: (direction: string) => void
  DEFAULT_PAGE: number
}

const Pagination: React.FC<PaginationProps> = ({
  metaBlogs,
  page,
  handlePagination,
  DEFAULT_PAGE,
}) => {
  if ('pagination' in metaBlogs === false) {
    return null
  }

  return (
    <div className={`${styles.pagination}`}>
      <Button
        type='button'
        proportion='md'
        customClasses={`${styles.button_border}`}
        disabled={page === DEFAULT_PAGE}
        onClick={() => handlePagination('previous')}
      >
        Previous
      </Button>
      <Button
        type='button'
        proportion='md'
        customClasses={`${styles.button_border}`}
        disabled={page === metaBlogs.pagination.pageCount}
        onClick={() => handlePagination('next')}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
