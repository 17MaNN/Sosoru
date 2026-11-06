import Menu from '../components/Menu'
import MoodPicker from '../components/MoodPicker'
import PageHeader from '../components/PageHeader'
import { menuNote, pages } from '../data/content'
import usePageMeta from '../lib/usePageMeta'

export default function MenuPage() {
  usePageMeta(pages.menu)

  return (
    <>
      <PageHeader
        eyebrow="Menu"
        title="The kitchen, in six parts"
        jp="品書"
        lead={menuNote}
      />

      <MoodPicker />
      <Menu />
    </>
  )
}
