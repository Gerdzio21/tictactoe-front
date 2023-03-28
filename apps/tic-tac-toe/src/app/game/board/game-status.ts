export interface Player {
  uid: string,
  nick: string,
}

export function getPlayerFromString(playerString: string): Player | null {
  const regex = /Optional\[Player{uid='([-\w]+)', nick='([-\w]+)'}\]/;
  const match = playerString.match(regex);
  if (match) {
    const uid = match[1];
    const nick = match[2];

    return {uid, nick};
  }

  return null;
}


export interface GameStatus {
  opponentNick: string,
  mySign: string,
  turnSign: string,
  winner: string;
  board: Array<string>
}


