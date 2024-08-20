
import postcss from 'postcss';
import { assert, test } from 'vitest';
import Plugin from '../src';

const input = `
  .container {
    font-size: 14px ;
    :global .ant-btn {
      font-weight: 500 ;
      &:hover, &:focus, &:visited {
        color: red ;
      }
    }
  }
`;

const output = `
  .container {
    font-size: 14px !important;
    :global .ant-btn {
      font-weight: 500 !important;
      &:hover, &:focus, &:visited {
        color: red !important;
      }
    }
  }
`;

test('postcss-important-plugin test case', () => {
  postcss([Plugin]).process(input).then(({ css }) => {
    assert.equal(css, output);
  })
})
