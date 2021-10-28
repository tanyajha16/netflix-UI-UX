import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 140px 45px;
`

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 40px;
  font-weight: 600;
  margin: auto;
  margin-top:5rem;
 

  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const SubTitle = styled.h2`
  color: white;
  font-size: 25px;
  font-weight: normal;
  margin: 5px auto;
  margin-bottom:10.5rem;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`
