import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import { pages } from '../data/content'
import usePageMeta from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta(pages.notFound)

  return (
    <>
      <PageHeader
        eyebrow="404"
        title="This table does not exist"
        jp="無"
        lead="The page you asked for is not on the menu. The room is still open."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/" variant="solid">
            Back to the homepage
          </Button>
          <Button to="/menu" variant="outline">
            See the menu
          </Button>
        </div>
      </PageHeader>
      <div className="h-[30vh]" />
    </>
  )
}
