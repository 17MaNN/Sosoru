import { useRef, useState } from 'react'
import { menuCategories } from '../data/menu'
import { Plus } from './Icons'

export default function MenuSection() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const [openDish, setOpenDish] = useState<string | null>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const activeCategory =
    menuCategories.find((category) => category.id === activeId) ?? menuCategories[0]

  const selectCategory = (id: string) => {
    setActiveId(id)
    setOpenDish(null)
  }

  const handleTabKeys = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = menuCategories.length - 1
    let next = index

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = index === last ? 0 : index + 1
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        next = index === 0 ? last : index - 1
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = last
        break
      default:
        return
    }

    event.preventDefault()
    selectCategory(menuCategories[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="section menu" id="menu" aria-labelledby="menu-title">
      <div className="shell">
        <div className="section-head">
          <p className="label section-head__index" data-reveal>
            03 — The menu
          </p>
          <div className="section-head__main">
            <h2 className="h2" id="menu-title" data-reveal>
              Across Asia, <em>in courses.</em>
            </h2>
            <p className="section-head__note note" data-reveal style={{ ['--reveal-delay' as string]: '70ms' }}>
              A preview menu, grouped the way dishes arrive at the table. Names,
              descriptions and availability still need the restaurant’s
              verification. Prices are confirmed in the restaurant and are not
              published here.
            </p>
          </div>
        </div>

        <div className="menu__grid">
          <div className="menu__rail">
            <div
              className="menu__tabs"
              role="tablist"
              aria-label="Menu categories"
            >
              {menuCategories.map((category, index) => {
                const selected = category.id === activeCategory.id
                return (
                  <button
                    key={category.id}
                    ref={(node) => {
                      tabRefs.current[index] = node
                    }}
                    type="button"
                    role="tab"
                    id={`menu-tab-${category.id}`}
                    className="menu-tab"
                    aria-selected={selected}
                    aria-controls="menu-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectCategory(category.id)}
                    onKeyDown={(event) => handleTabKeys(event, index)}
                  >
                    <span className="menu-tab__index" aria-hidden="true">
                      {category.index}
                    </span>
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div
            className="menu__panel"
            role="tabpanel"
            id="menu-panel"
            aria-labelledby={`menu-tab-${activeCategory.id}`}
            tabIndex={0}
          >
            <div className="menu__panel-head">
              <p className="menu__blurb">{activeCategory.blurb}</p>
              <p className="menu__legend">
                <span>
                  <span className="dot" aria-hidden="true" />
                  Photographed at Sosoru
                </span>
                <span>
                  <span className="ring" aria-hidden="true" />
                  Preview entry — awaiting verification
                </span>
              </p>
            </div>

            <div className="dishes">
              {activeCategory.items.map((dish, index) => {
                const slug = `${activeCategory.id}-${index}`
                const isOpen = openDish === slug
                const panelId = `dish-panel-${slug}`
                const buttonId = `dish-button-${slug}`

                return (
                  <div className="dish" key={dish.name} data-open={isOpen}>
                    <button
                      type="button"
                      className="dish__trigger"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenDish(isOpen ? null : slug)}
                    >
                      <span>
                        <span className="dish__name">
                          {dish.name}
                          {dish.photographed ? (
                            <span className="dish__marker">Photographed</span>
                          ) : null}
                        </span>
                        <span className="dish__desc">{dish.description}</span>
                      </span>
                      <span className="dish__toggle" aria-hidden="true">
                        <Plus />
                      </span>
                    </button>

                    <div
                      className="dish__panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                      inert={!isOpen || undefined}
                    >
                      <div>
                        <div className="dish__detail">
                          <p>{dish.detail}</p>
                          {dish.tags?.length ? (
                            <ul className="dish__tags">
                              {dish.tags.map((tag) => (
                                <li className="tag" key={tag}>
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="menu__foot">
          <p className="note" data-reveal>
            Allergens and dietary notes are not yet verified. Please tell the
            restaurant directly about allergies when you book or order.
          </p>
          <a className="text-link" href="#reservations" data-reveal>
            Reserve a table
          </a>
        </div>
      </div>
    </section>
  )
}
