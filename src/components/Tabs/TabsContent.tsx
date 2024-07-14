import { PropsWithChildren } from 'react'
import { useTabsContext } from './TabsMain'

interface TabsContentProps {
  contentIndex: number
  motion?: any
  animationProps?: object
}

function TabsContent({
  children,
  contentIndex: index,
  motion,
  animationProps,
}: PropsWithChildren<TabsContentProps>) {
  const { id, currentTab } = useTabsContext()

  const Component = motion ? motion['div'] : 'div'

  const props = motion
    ? animationProps || {
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        },
        initial: 'hidden',
        animate: 'visible',
        viewport: { once: true },
        transition: { duration: 0.3 },
      }
    : {}

  return currentTab === index ? (
    <Component
      id={`${id}-tab-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-button-${index}`}
      {...props}
    >
      {children}
    </Component>
  ) : null
}

export default TabsContent
