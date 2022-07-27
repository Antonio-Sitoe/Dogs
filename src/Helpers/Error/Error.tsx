import styled from 'styled-components'

const P = styled.p`
  color: #f31;
  margin: 1rem 0;
`

function Error({ error }: { error: string }) {

  if (!error) return null
  return (
    <P>{error}</P>
  )
}

export default Error