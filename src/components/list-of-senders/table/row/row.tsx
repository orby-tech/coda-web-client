/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
    target:string | ReactElement;
    countOfDays: string | ReactElement;
    subject: string | ReactElement;
    lastSendDate: string | ReactElement;
    submit?: string | ReactElement | undefined;
}

const Td = styled.td`
    min-width: 200px;
`;

const RowComponent = ({
  target, countOfDays, subject, lastSendDate, submit,
}:Props) => (
  <tr>
    <Td>{target}</Td>
    <Td>{countOfDays}</Td>
    <Td>{subject}</Td>
    <Td>{lastSendDate}</Td>
    <Td>{submit}</Td>
  </tr>
);
export default RowComponent;
