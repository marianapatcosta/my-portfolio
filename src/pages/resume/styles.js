import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const StyledModalDownloadIcon = styled.a`
  position: absolute;
  top: 1rem;
  right: 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.highlight};
  user-select: none;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 1;

  img {
    filter: ${({ theme }) => theme.colors.iconHighlight};
    width: 0.9rem;
    transition: transform 0.3s ease-in-out;
    user-select: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.a4}) {
    top: revert;
  }
`

export const StyledCv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4rem;
  font-size: 0.9rem;
  margin: 0 auto 2rem;
  position: relative;

  &:hover > ${StyledModalDownloadIcon} {
    visibility: visible;
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.a4}) {
    flex-direction: row;
    margin: 4rem auto;
    width: 209.55mm;
    height: 298.45mm;
    padding: 5mm;
    box-shadow: 0.2rem 0.2rem 0.4rem ${({ theme }) => theme.colors.shadow};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 5rem auto;
  }

  @media print {
    @page {
      size: A4 portrait;
      margin: 1mm;
    }
    background-size: 21cm 29.7cm;
    flex-direction: row;
    margin: auto;
    width: 209.55mm;
    height: 295.15mm;
    box-shadow: none;
  }
`

export const StyledThinColumn = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1.3;
`

export const StyledThickColumn = styled.div`
  flex: 2;
`

export const StyledProfile = styled.div`
  padding: 3rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: inset 0 -0.5rem 0.7rem -0.5rem
    ${({ theme }) => theme.colors.sectionShadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.a4}) {
    padding: 1rem 0.5rem;
  }
`

export const StyledName = styled.p`
  white-space: nowrap;
  text-transform: uppercase;
  margin-top: 1rem;
  text-align: center;
  font-size: 110%;
`

export const StyledRole = styled(StyledName)`
  text-transform: revert;
  margin-top: 0.3rem;
`

export const StyledImage = styled(GatsbyImage)`
  display: block;
  margin: 0 auto;
  width: 7rem;
  border-radius: 0.625rem;
  box-shadow: 0 0.1rem 0.4rem 0.3rem rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.a4}) {
    width: 8.5rem;
  }

  @media print {
    display: none;
  }
`

export const StyledImagePrint = styled.img`
  margin: 0 auto;
  border-radius: 0.625rem;
  box-shadow: 0 0.1rem 0.4rem 0.3rem rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 8.5rem;
  display: none;

  @media print {
    display: block;
  }
`

export const StyledTitle = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 110%;
`

export const StyledSection = styled.section`
  position: relative;
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.a4}) {
    padding: 1rem 0.5rem 0.5rem 1rem;
  }

  @media print {
    padding: 0.5rem 0.5rem 0.5rem 1rem;
  }
`

export const StyledItem = styled.div`
  position: relative;
  padding: 0.5rem 0 0.5rem 1rem;

  :last-child {
    padding-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.a4}) {
    padding: 0.5rem 0 0.5rem 1rem;
  }

  @media print {
    padding: 0.5rem 0 0.5rem 1rem;
  }
`

export const StyledBorder = styled.img`
  position: absolute;
  top: 4rem;
  left: 0.8rem;
  width: 1rem;
  height: 63%;
  user-select: none;

  // in safari , svg height is not responsive
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      display: none;
    }
  }
`

export const StyledBorder2 = styled(StyledBorder)`
  height: 70%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 68%;
    top: 3.8rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.a4}) {
    height: 73%;
  }

  @media print {
    height: 73%;
  }
`

export const StyledText = styled.p``

export const StyledProfileText = styled.p`
  padding-top: 0.5rem;
`

export const StyledBoldText = styled(StyledText)`
  font-weight: 700;
  font-size: 105%;
`

export const StyledLocationIcon = styled.img`
  position: absolute;
  top: 0.75rem;
  left: 0;
  width: 0.8rem;
  filter: ${({ theme }) => theme.colors.iconHighlight};
`

export const StyledItalicText = styled(StyledText)`
  font-style: italic;
`

export const StyledContact = styled.span`
  display: flex;
  align-content: center;
  text-decoration: none;
  color: inherit;
  font-style: normal;
  margin-top: 0.5rem;

  img {
    height: 1rem;
    margin-right: 0.5rem;
    filter: ${({ theme }) => theme.colors.icon};
    user-select: none;
  }

  span {
    line-height: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.a4}) {
    height: 1.1rem;
    margin-top: 0.75rem;
  }

  @media print {
    height: 1.1rem;
    margin-top: 0.75rem;
  }
`

export const StyledContactLink = styled.a`
  display: flex;
  align-content: center;
  text-decoration: none;
  color: inherit;
  font-style: normal;
  margin-top: 0.5rem;

  img {
    height: 1rem;
    margin-right: 0.5rem;
    filter: ${({ theme }) => theme.colors.icon};
    user-select: none;
  }

  span {
    line-height: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.a4}) {
    height: 1.1rem;
    margin-top: 0.75rem;
  }

  @media print {
    height: 1.1rem;
    margin-top: 0.75rem;
  }
`

export const StyledGrid = styled.div`
  display: grid;
  padding-top: 0.5rem;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 0.75rem;
  }

  @media print {
    grid-template-columns: 32% 32% 32%;
    grid-column-gap: 0.75rem;
  }
`

export const StyledSkill = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    height: 0.9rem;
    filter: ${({ theme }) => theme.colors.icon};
    margin-right: 0.2rem;
  }
`

export const StyleSkillText = styled(StyledText)`
  display: flex;
  align-items: center;
  white-space: nowrap;
`

export const StyledProgressBar = styled.progress`
  width: 100%;
  height: 0.5rem;
  box-shadow: 0 0.063rem 0.25rem ${({ theme }) => theme.colors.shadow};

  @-moz-document url-prefix() {
    height: 0.4rem;
  }

  &[value] {
    appearance: none;
    color: ${({ theme }) => theme.colors.highlight};

    @media print {
      width: 97%;
    }
  }

  ::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  ::-moz-progress-bar {
    background-color: ${({ theme }) => theme.colors.highlight};
    height: 0.4rem;
    box-shadow: 0 0.063rem 0.25rem ${({ theme }) => theme.colors.shadow};
  }

  ::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`