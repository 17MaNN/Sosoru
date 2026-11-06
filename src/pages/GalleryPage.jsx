import Gallery from '../components/Gallery'
import PageHeader from '../components/PageHeader'
import { pages } from '../data/content'
import usePageMeta from '../lib/usePageMeta'

export default function GalleryPage() {
  usePageMeta(pages.gallery)

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Timber, paper and low light"
        jp="写真"
        lead="Photographed at Sosoru: the dining room, the lattice, the bar and the tables set for the evening. Tap any frame to open it full."
      />

      <Gallery />
    </>
  )
}
