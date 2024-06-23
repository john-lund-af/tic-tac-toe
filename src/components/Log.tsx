import { LogComponentProps } from '../types/components.types';

export default function Log({ logCollection }: LogComponentProps) {
  return <ol id="log">
    {logCollection.map((logItem) => <li key={`${logItem.square.row}${logItem.square.col}`}>{logItem.currentPlayer} selected {logItem.square.row}, {logItem.square.col}</li>)}
  </ol>
}