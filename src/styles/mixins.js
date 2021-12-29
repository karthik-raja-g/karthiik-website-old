import { css } from "styled-components";

const mixins = {
  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        /* content: '▹'; */
        content: '❆';
        /* content: '🍔'; */
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.highlightText};
      }
    }
  `,
}

export default mixins;