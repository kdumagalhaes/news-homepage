import { LargeTitle, MediumTitle } from './styles'

export enum Headings {
  H2 = 'h2',
  H3 = 'h3',
}

interface TitleProps {
  heading: Headings
  text: string
  color: string
  size: string
  cssHandler?: string
}

export function Title({ heading, text, color, size, cssHandler }: TitleProps) {
  return (
    <>
      {(() => {
        switch (heading) {
          case 'h2':
            return (
              <LargeTitle
                titleColor={color}
                fontSize={size}
                className={cssHandler}
              >
                {text}
              </LargeTitle>
            )
          case 'h3':
            return (
              <MediumTitle
                titleColor={color}
                fontSize={size}
                className={cssHandler}
              >
                {text}
              </MediumTitle>
            )
          default:
            break
        }
      })()}
    </>
  )
}
