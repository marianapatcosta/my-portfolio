import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    // to preserve box-shadow on print in webkit browsers
    html {
        -webkit-print-color-adjust: exact;
        -webkit-filter: opacity(1);
    }

    html, body {
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    body {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.font};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 1rem;
        line-height: 2rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 1.1rem;;
        }
    }

    * {
        margin: 0;
        padding: 0;
    }

    * :focus {
        outline: 0.125rem solid ${({ theme }) => theme.colors.highlight};
    }

    * :focus:not(:focus-visible) {
        outline: none;
    }

    * ::selection {
      background: ${({ theme }) => theme.colors.highlight};
      color: ${({ theme }) => theme.colors.primary};
    }

`

export const StyledSection = styled.section`
  padding: 2rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 7rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 8rem;
  }
`

export const StyledSectionTitle = styled.h2`
  font-size: 200%;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 400;
  margin-bottom: 3rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 4rem;
  }
`