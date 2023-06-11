import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  line-height: 100%;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;

    b {
      font-size: 0.875rem;
    }
    span {
      color: ${({ theme }) => theme.colors.gray[500]};
      font-size: 0.75rem;
    }
  }
`
