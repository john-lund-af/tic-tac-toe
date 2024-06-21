import { PlayerComponentProps } from '../types/components.types';

export default function Player({ player }: PlayerComponentProps) {
  let styleClasses = 'player';

  if (player.myTurn) {
    styleClasses += " highlighted";
  }
  return <div className={styleClasses}>
    <span className="player-name">{player.name}</span>
    <span className='player-sign'>{player.sign}</span>
    <button className="player-btn">Edit</button>
  </div>
}