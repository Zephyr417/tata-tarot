export type CardReading = {
  message: string;
  wifeMessage: string;
};

export type TarotCard = {
  id: number;
  name: string;
  chinese: string;
  image: string;
  upright: CardReading;
  reversed: CardReading;
};

export const cards: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    chinese: "愚者",
    image: "/cards/the-fool.png",
    upright: {
      message: "A fresh beginning is calling. Take the first step lightly, without needing every answer.",
      wifeMessage: "Be curious today, my love. I am cheering for every brave little beginning you make.",
    },
    reversed: {
      message: "Pause before leaping. A little care now can keep your freedom from becoming scattered.",
      wifeMessage: "You do not have to rush into anything. I trust your pace, and I am right here with you.",
    },
  },
  {
    id: 1,
    name: "The Magician",
    chinese: "魔术师",
    image: "/cards/the-magician.png",
    upright: {
      message: "You already have the tools you need. Focus your energy and make one small thing real.",
      wifeMessage: "You are clever, capable, and quietly magical. I hope you remember your own power today.",
    },
    reversed: {
      message: "Your energy may feel scattered. Return to one clear intention instead of trying to do everything.",
      wifeMessage: "Even when you feel unsure, I can see how much you are able to do. One gentle step is enough.",
    },
  },
  {
    id: 2,
    name: "The High Priestess",
    chinese: "女祭司",
    image: "/cards/the-high-priestess.png",
    upright: {
      message: "Listen to your inner voice. It may be quiet, but it knows more than the noise around you.",
      wifeMessage: "Trust yourself, my love. Your heart notices things before the world can explain them.",
    },
    reversed: {
      message: "If your intuition feels blocked, give yourself quiet. The answer may need softness, not pressure.",
      wifeMessage: "You do not need to force clarity today. I hope you can rest in your own gentle wisdom.",
    },
  },
  {
    id: 3,
    name: "The Empress",
    chinese: "皇后",
    image: "/cards/the-empress.png",
    upright: {
      message: "Choose care, comfort, and patience. Good things grow when they are allowed to breathe.",
      wifeMessage: "Please be tender with yourself today. You deserve the same warmth you give everyone else.",
    },
    reversed: {
      message: "You may be giving too much away. Come back to your body, your needs, and your own comfort.",
      wifeMessage: "Let me remind you: you deserve care too. Please save some softness for yourself.",
    },
  },
  {
    id: 4,
    name: "The Emperor",
    chinese: "皇帝",
    image: "/cards/the-emperor.png",
    upright: {
      message: "A little structure can protect your peace. Make one clear choice and let it support you.",
      wifeMessage: "You do not have to carry everything at once. I am here, and you can lean on me.",
    },
    reversed: {
      message: "Too much control may feel heavy today. Loosen your grip and let the day have some room.",
      wifeMessage: "You are safe even when everything is not perfectly arranged. I will help hold the edges.",
    },
  },
  {
    id: 5,
    name: "The Hierophant",
    chinese: "教皇",
    image: "/cards/the-hierophant.png",
    upright: {
      message: "Let old wisdom support you. A familiar ritual or trusted voice may bring steadiness.",
      wifeMessage: "Your way of seeing the world is precious. I love the softness and wisdom in you.",
    },
    reversed: {
      message: "Not every rule deserves your loyalty. Keep what feels true and release what feels too small.",
      wifeMessage: "You are allowed to choose your own way. I love you most when you are fully yourself.",
    },
  },
  {
    id: 6,
    name: "The Lovers",
    chinese: "恋人",
    image: "/cards/the-lovers.png",
    upright: {
      message: "Choose with love, not pressure. The right answer should leave room for your whole self.",
      wifeMessage: "No matter how today feels, you are deeply loved. Especially by me.",
    },
    reversed: {
      message: "If something feels misaligned, be honest gently. Harmony begins with listening to your real needs.",
      wifeMessage: "Your feelings matter to me, even the complicated ones. We can be honest and still be close.",
    },
  },
  {
    id: 7,
    name: "The Chariot",
    chinese: "战车",
    image: "/cards/the-chariot.png",
    upright: {
      message: "Move forward with calm focus. You do not need to rush to make real progress.",
      wifeMessage: "I believe in your strength, even on the days when you feel tired.",
    },
    reversed: {
      message: "If the day feels pulled in different directions, slow down and choose your next turn carefully.",
      wifeMessage: "You do not have to win the whole day. I am proud of you for simply keeping going.",
    },
  },
  {
    id: 8,
    name: "Strength",
    chinese: "力量",
    image: "/cards/strength.png",
    upright: {
      message: "Softness is also strength. Meet the day with patience instead of force.",
      wifeMessage: "You are strong in the most beautiful way: gentle, steady, and full of heart.",
    },
    reversed: {
      message: "Your courage may feel tired. Be kind to the tender part of you that has been trying so hard.",
      wifeMessage: "You do not need to be strong every minute. I love you in your soft moments too.",
    },
  },
  {
    id: 9,
    name: "The Hermit",
    chinese: "隐者",
    image: "/cards/the-hermit.png",
    upright: {
      message: "Give yourself a quiet moment. Clarity often arrives when the noise becomes smaller.",
      wifeMessage: "Take your little pause today. I hope you feel held, even in the quiet.",
    },
    reversed: {
      message: "Do not disappear too far into your thoughts. Let a small light or kind voice reach you.",
      wifeMessage: "If you feel alone today, please remember I am thinking of you and walking beside you.",
    },
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    chinese: "命运之轮",
    image: "/cards/wheel-of-fortune.png",
    upright: {
      message: "Things are moving. Stay open to a small turn that may surprise you.",
      wifeMessage: "Whatever changes today, my love for you is one of the steady things.",
    },
    reversed: {
      message: "A delay does not mean the story is stuck. Let the wheel turn at its own speed.",
      wifeMessage: "Even if today feels out of rhythm, we will find our little luck again together.",
    },
  },
  {
    id: 11,
    name: "Justice",
    chinese: "正义",
    image: "/cards/justice.png",
    upright: {
      message: "Be honest with what you need. Balance begins with telling yourself the truth.",
      wifeMessage: "Your feelings matter. I hope today treats you fairly and gently.",
    },
    reversed: {
      message: "If something feels unfair, do not turn it inward. Seek balance without blaming yourself.",
      wifeMessage: "Please be on your own side today. I am on your side too, always.",
    },
  },
  {
    id: 12,
    name: "The Hanged Man",
    chinese: "倒吊人",
    image: "/cards/the-hanged-man.png",
    upright: {
      message: "Pause before pushing. A new angle may make the whole day feel lighter.",
      wifeMessage: "You do not have to solve everything immediately. Rest is allowed, sweetheart.",
    },
    reversed: {
      message: "Waiting may feel frustrating now. Notice where you are stuck, then release one small resistance.",
      wifeMessage: "I know it is hard when things do not move. Let me sit with you in the pause.",
    },
  },
  {
    id: 13,
    name: "Death",
    chinese: "死神",
    image: "/cards/death.png",
    upright: {
      message: "Something old can be released. Let today make space for a kinder next chapter.",
      wifeMessage: "I am proud of every version of you, including the one you are becoming.",
    },
    reversed: {
      message: "Change may feel hard to accept. Start by letting go of one thing that no longer loves you back.",
      wifeMessage: "You can take transformation slowly. I will love you through every in-between stage.",
    },
  },
  {
    id: 14,
    name: "Temperance",
    chinese: "节制",
    image: "/cards/temperance.png",
    upright: {
      message: "Find the middle path. A small, balanced step is enough for today.",
      wifeMessage: "May your day feel peaceful in the tiny places. I am sending you calm.",
    },
    reversed: {
      message: "Your balance may be stretched. Come back to simple rhythms: water, breath, food, rest.",
      wifeMessage: "Please take care of your little human needs today. They matter because you matter.",
    },
  },
  {
    id: 15,
    name: "The Devil",
    chinese: "恶魔",
    image: "/cards/the-devil.png",
    upright: {
      message: "Notice what drains you. You are allowed to loosen what has become too heavy.",
      wifeMessage: "Nothing about a hard day makes you less wonderful. Come back to yourself slowly.",
    },
    reversed: {
      message: "A small release is possible. Something that once held you tightly may be losing its power.",
      wifeMessage: "I see how hard you try to be free from heavy feelings. I am so proud of you.",
    },
  },
  {
    id: 16,
    name: "The Tower",
    chinese: "高塔",
    image: "/cards/the-tower.png",
    upright: {
      message: "If something feels shaken, breathe first. Not every collapse is the end of the story.",
      wifeMessage: "Even when the day is messy, you are safe with me. We can rebuild anything together.",
    },
    reversed: {
      message: "You may sense change before it arrives. Make small adjustments now instead of waiting for pressure.",
      wifeMessage: "If today feels tense, come back to me in your heart. We can make things gentler.",
    },
  },
  {
    id: 17,
    name: "The Star",
    chinese: "星星",
    image: "/cards/the-star.png",
    upright: {
      message: "Hope is returning in small lights. Let one gentle thing guide you today.",
      wifeMessage: "You are my favorite little light. I hope something lovely finds you today.",
    },
    reversed: {
      message: "Hope may feel distant, but it has not left. Care for yourself before asking yourself to shine.",
      wifeMessage: "You do not have to sparkle today. I love your light even when it is quiet.",
    },
  },
  {
    id: 18,
    name: "The Moon",
    chinese: "月亮",
    image: "/cards/the-moon.png",
    upright: {
      message: "Things may be unclear, but your intuition is awake. Move slowly and trust what feels true.",
      wifeMessage: "When the path feels misty, hold my hand in your heart. I am with you.",
    },
    reversed: {
      message: "Fear is beginning to loosen. Let confusion clear gently instead of fighting every shadow at once.",
      wifeMessage: "You are not your worries, my love. I hope today feels a little clearer and kinder.",
    },
  },
  {
    id: 19,
    name: "The Sun",
    chinese: "太阳",
    image: "/cards/the-sun.png",
    upright: {
      message: "Let something be simple and bright today. Joy does not need permission.",
      wifeMessage: "You make my world warmer just by being in it. I hope you smile today.",
    },
    reversed: {
      message: "The light may feel covered, not gone. Look for a small joy instead of a perfect mood.",
      wifeMessage: "Even on cloudy days, you are still my sunshine. I hope one tiny happy thing finds you.",
    },
  },
  {
    id: 20,
    name: "Judgement",
    chinese: "审判",
    image: "/cards/judgement.png",
    upright: {
      message: "A fresh call is arriving. Forgive the old weight and answer gently.",
      wifeMessage: "You are allowed to begin again, as many times as you need. I will still be here.",
    },
    reversed: {
      message: "Try not to judge yourself too harshly. Growth can be quiet before it becomes visible.",
      wifeMessage: "Please speak to yourself with the tenderness I would use. You deserve that voice.",
    },
  },
  {
    id: 21,
    name: "The World",
    chinese: "世界",
    image: "/cards/the-world.png",
    upright: {
      message: "Notice how far you have come. Completion can be quiet and still be real.",
      wifeMessage: "I am so proud of you. Today, I hope you feel how much you mean to me.",
    },
    reversed: {
      message: "Something may feel unfinished. Close one small loop and let that be enough for now.",
      wifeMessage: "You do not have to complete everything to be worthy of rest. I am proud of you already.",
    },
  },
];
