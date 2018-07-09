import styled from 'styled-components'

interface PropTypes {
  background: string
}

export const Outer = styled.div`
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 2rem auto;
  padding: 0.5rem;
  border: 1px solid #ddd;

  > * + * {
    margin-top: 0.5rem;
  }
`

export const Frame = styled(
  ({ background, ...props }: { background: string }) => <div {...props} />
)`
  background: url("${props => props.background}") no-repeat 50% 50% / cover;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`
