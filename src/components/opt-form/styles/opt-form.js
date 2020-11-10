import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin: auto;
  max-width: 950px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 1px solid grey;
  padding: 10px;
  border-radius: 2px;
  height: 60px;
  box-sizing: border-box;
  margin-right: 1px;

  @media (max-width: 1000px) {
    height: 50px;
  }

  &:focus {
    outline: none;
  }
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  height: 60px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 45px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`
