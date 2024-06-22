import { PlayerComponentProps } from '../types/components.types';
import { useState, ChangeEvent } from 'react';

export default function Player({ player, onNameChange }: PlayerComponentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player.name);

  function handleChangeEvent(event: ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value)
  }

  function handleClickEvent() {
    // If the state was on edit mode when the player clicked the button.
    if (isEditing) {
      onNameChange(player.id, playerName);
    }
    setIsEditing((prevVal) => !prevVal);
  }

  let styleClasses = 'player';

  if (player.myTurn) {
    styleClasses += " highlighted";
  }

  const playerNameElem = isEditing ? <input onChange={handleChangeEvent} value={playerName} type="text" className="player-name" size={4} name="playerName" id="playerName" /> : <span className="player-name">{player.name}</span>;

  return <div className={styleClasses}>
    {playerNameElem}
    <span className='player-sign'>{player.sign}</span>
    <button onClick={handleClickEvent} className="player-btn">{isEditing ? 'Save' : 'Edit'}</button>
  </div>
}