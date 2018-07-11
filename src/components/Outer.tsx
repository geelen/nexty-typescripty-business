import styled from 'styled-components'

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

export interface FrameProps {
  background: string,
  color: string
}

export const Frame = styled(
  ({ background, ...props }: FrameProps) => <div {...props} />
)`
  background: ${props => props.color} url("${props => props.background}") no-repeat 50% 50% / cover;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`
