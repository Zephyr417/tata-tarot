import { cards, type TarotCard } from "@/data/cards";

export type TodayCard = TarotCard & {
  dateKey: string;
  reversed: boolean;
};

function getLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function hashText(text: string) {
  let hash = 0;

  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }

  return hash;
}

export function getTodayCard(date = new Date()): TodayCard {
  const dateKey = getLocalDateKey(date);
  const cardIndex = hashText(dateKey) % cards.length;
  const reversed = hashText(`${dateKey}-reversed`) % 2 === 1;

  return {
    ...cards[cardIndex],
    dateKey,
    reversed,
  };
}
