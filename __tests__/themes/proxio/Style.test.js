import { render } from '@testing-library/react'
import { Style } from '@/themes/proxio/style'

jest.mock('@/lib/config', () => ({
  siteConfig: jest.fn((key, defaultValue) => defaultValue)
}))

describe('proxio Style', () => {
  it('keeps the desktop navigation transparent after theme colour overrides', () => {
    const { container } = render(<Style />)
    const css = container.querySelector('style').textContent

    expect(css).toMatch(/@media \(min-width: 960px\)[\s\S]*#theme-proxio #navbarCollapse/)
    expect(css).toMatch(/background-color: transparent !important/)
    expect(css).toMatch(/box-shadow: none !important/)
  })

  it('uses one dark background across all content modules', () => {
    const { container } = render(<Style />)
    const css = container.querySelector('style').textContent

    expect(css).toMatch(
      /:is\(\.dark #theme-proxio \.proxio-home section\)[\s\S]*background-color: var\(--proxio-console-dark\) !important/
    )
  })
})
