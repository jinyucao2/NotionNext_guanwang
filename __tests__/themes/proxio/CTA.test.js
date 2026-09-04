import { render, screen } from '@testing-library/react'
import { CTA } from '@/themes/proxio/components/CTA'
import { siteConfig } from '@/lib/config'

jest.mock('@/lib/config', () => ({
  siteConfig: jest.fn()
}))

jest.mock('@/components/SmartLink', () => ({
  __esModule: true,
  default: ({ children, className = '', href = '' }) => (
    <a className={className} href={href}>
      {children}
    </a>
  )
}))

describe('proxio CTA', () => {
  beforeEach(() => {
    siteConfig.mockImplementation((key, defaultValue) => {
      const values = {
        PROXIO_CTA_ENABLE: true,
        PROXIO_CTA_BUTTON: true,
        PROXIO_CTA_BUTTON_TEXT: 'Book a call',
        PROXIO_CTA_BUTTON_URL: '/about'
      }
      return values[key] ?? defaultValue
    })
  })

  it('keeps the CTA button label visible in dark mode', () => {
    render(<CTA />)

    expect(screen.getByRole('link', { name: 'Book a call' })).toHaveClass(
      'text-dark',
      'dark:text-white'
    )
  })
})
