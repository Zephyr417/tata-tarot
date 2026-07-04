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
      message: "A fresh beginning is calling. Try something before you feel completely ready, and let curiosity lead one small step. Keep your heart open, but do not demand a full map before you begin.",
      wifeMessage: "Be curious today, my love. I am cheering for every brave little beginning you make.",
    },
    reversed: {
      message: "Pause before the leap. Excitement is good, but impatience may make things scattered. Check the details, protect your energy, and choose the adventure that still respects your peace.",
      wifeMessage: "You do not have to rush into anything. I trust your pace, and I am right here with you.",
    },
  },
  {
    id: 1,
    name: "The Magician",
    chinese: "魔术师",
    image: "/cards/the-magician.png",
    upright: {
      message: "You already have more tools than you think. Choose one intention and put your energy there instead of scattering it everywhere. Confidence grows when you use what is already in your hands.",
      wifeMessage: "You are clever, capable, and quietly magical. I hope you remember your own power today.",
    },
    reversed: {
      message: "Your energy may be scattered. Avoid forcing too many outcomes at once. Come back to one honest intention, one clear task, and one thing you can actually complete.",
      wifeMessage: "Even when you feel unsure, I can see how much you are able to do. One gentle step is enough.",
    },
  },
  {
    id: 2,
    name: "The High Priestess",
    chinese: "女祭司",
    image: "/cards/the-high-priestess.png",
    upright: {
      message: "Listen beneath the surface. Some truths arrive as a feeling, a pause, or a quiet knowing. Give yourself space before deciding, and notice what makes your body relax or tighten.",
      wifeMessage: "Trust yourself, my love. Your heart notices things before the world can explain them.",
    },
    reversed: {
      message: "Your inner voice may be buried under noise, worry, or other people's expectations. Reduce the noise, rest your mind, and let the answer come back naturally.",
      wifeMessage: "You do not need to force clarity today. I hope you can rest in your own gentle wisdom.",
    },
  },
  {
    id: 3,
    name: "The Empress",
    chinese: "皇后",
    image: "/cards/the-empress.png",
    upright: {
      message: "Something may need warmth instead of pressure. Feed what you want to grow: your body, a relationship, a creative idea, or your own sense of safety. Softness is not laziness.",
      wifeMessage: "Please be tender with yourself today. You deserve the same warmth you give everyone else.",
    },
    reversed: {
      message: "You may be giving without receiving. Come back to your body and your comfort. Eat properly, rest when you can, and do not make love prove itself through exhaustion.",
      wifeMessage: "Let me remind you: you deserve care too. Please save some softness for yourself.",
    },
  },
  {
    id: 4,
    name: "The Emperor",
    chinese: "皇帝",
    image: "/cards/the-emperor.png",
    upright: {
      message: "A little structure can protect your peace. Make one clear plan, boundary, or practical decision. You do not have to control the whole day; just create enough steadiness to feel safe.",
      wifeMessage: "You do not have to carry everything at once. I am here, and you can lean on me.",
    },
    reversed: {
      message: "Too much control may feel heavy. Notice where the rules have become bigger than the problem. Loosen one grip, let something be imperfect, and keep only what truly needs holding.",
      wifeMessage: "You are safe even when everything is not perfectly arranged. I will help hold the edges.",
    },
  },
  {
    id: 5,
    name: "The Hierophant",
    chinese: "教皇",
    image: "/cards/the-hierophant.png",
    upright: {
      message: "A familiar practice or trusted piece of wisdom may help you feel grounded. Ask what has supported you before, what still feels true, and what small ritual can bring you back to yourself.",
      wifeMessage: "Your way of seeing the world is precious. I love the softness and wisdom in you.",
    },
    reversed: {
      message: "Question rules that no longer fit your heart. Keep the wisdom that supports you, and release the pressure that only makes you smaller. Your own path is allowed to be valid.",
      wifeMessage: "You are allowed to choose your own way. I love you most when you are fully yourself.",
    },
  },
  {
    id: 6,
    name: "The Lovers",
    chinese: "恋人",
    image: "/cards/the-lovers.png",
    upright: {
      message: "Choose from love rather than fear or pressure. This may be about a relationship, or about the life that feels honest. Ask whether this choice brings you closer to yourself.",
      wifeMessage: "No matter how today feels, you are deeply loved. Especially by me.",
    },
    reversed: {
      message: "Something may feel misaligned between what you want, say, do, or accept. Do not rush to make it look harmonious. A gentle truth is better than a pretty silence that makes you disappear.",
      wifeMessage: "Your feelings matter to me, even the complicated ones. We can be honest and still be close.",
    },
  },
  {
    id: 7,
    name: "The Chariot",
    chinese: "战车",
    image: "/cards/the-chariot.png",
    upright: {
      message: "Progress may come from choosing your lane and staying with it. You do not need to sprint. If emotions or tasks pull in different directions, name the destination first, then take one practical step.",
      wifeMessage: "I believe in your strength, even on the days when you feel tired.",
    },
    reversed: {
      message: "The day may feel pulled apart by competing needs or moods. Instead of forcing momentum, slow down and regain direction. It is okay to pause, adjust, and restart.",
      wifeMessage: "You do not have to win the whole day. I am proud of you for simply keeping going.",
    },
  },
  {
    id: 8,
    name: "Strength",
    chinese: "力量",
    image: "/cards/strength.png",
    upright: {
      message: "Gentle courage is still courage. Meet yourself and others with patience rather than force. If something feels difficult, breathe, soften your jaw, and respond from kindness instead of pressure.",
      wifeMessage: "You are strong in the most beautiful way: gentle, steady, and full of heart.",
    },
    reversed: {
      message: "Your courage may be tired. Do not judge yourself for not feeling brave enough. Care for the part of you that has been trying hard. Rest can be strength too.",
      wifeMessage: "You do not need to be strong every minute. I love you in your soft moments too.",
    },
  },
  {
    id: 9,
    name: "The Hermit",
    chinese: "隐者",
    image: "/cards/the-hermit.png",
    upright: {
      message: "Step back from noise if you can. You may need a small pocket of solitude to understand what you really feel. Return to yourself long enough to hear your own truth.",
      wifeMessage: "Take your little pause today. I hope you feel held, even in the quiet.",
    },
    reversed: {
      message: "Do not become too alone inside your thoughts. Reflection is helpful; isolation that makes everything darker is not. Let a kind voice reach you, even in a small way.",
      wifeMessage: "If you feel alone today, please remember I am thinking of you and walking beside you.",
    },
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    chinese: "命运之轮",
    image: "/cards/wheel-of-fortune.png",
    upright: {
      message: "Movement is happening, even if you cannot control every turn. Stay flexible and notice the opening when it appears. Meet change with curiosity instead of gripping the wheel too tightly.",
      wifeMessage: "Whatever changes today, my love for you is one of the steady things.",
    },
    reversed: {
      message: "Delays or repetition may feel frustrating, but a slow turn is still a turn. Do not decide that a stuck moment means a stuck life. Adjust one response, expectation, or tiny habit.",
      wifeMessage: "Even if today feels out of rhythm, we will find our little luck again together.",
    },
  },
  {
    id: 11,
    name: "Justice",
    chinese: "正义",
    image: "/cards/justice.png",
    upright: {
      message: "Separate facts from fear and responsibility from blame. What is fair to others should also be fair to you. If there is a decision to make, choose the one you can stand behind calmly.",
      wifeMessage: "Your feelings matter. I hope today treats you fairly and gently.",
    },
    reversed: {
      message: "Be careful not to punish yourself for things bigger than you. Seek balance without becoming harsh. Ask what is yours to carry, and what can be set down with dignity.",
      wifeMessage: "Please be on your own side today. I am on your side too, always.",
    },
  },
  {
    id: 12,
    name: "The Hanged Man",
    chinese: "倒吊人",
    image: "/cards/the-hanged-man.png",
    upright: {
      message: "Something may not move faster just because you push it. Try looking from another angle. Surrender does not mean giving up; it means releasing the struggle that is not helping.",
      wifeMessage: "You do not have to solve everything immediately. Rest is allowed, sweetheart.",
    },
    reversed: {
      message: "Waiting may feel frustrating or meaningless. Notice where resisting reality is draining you. You may not move the whole situation, but you can release one tension and choose one next step.",
      wifeMessage: "I know it is hard when things do not move. Let me sit with you in the pause.",
    },
  },
  {
    id: 13,
    name: "Death",
    chinese: "死神",
    image: "/cards/death.png",
    upright: {
      message: "Something old may be ready to fall away: a habit, a fear, a role, or a version of yourself you no longer need. You do not have to rush the new chapter, but you can stop clinging to the old one.",
      wifeMessage: "I am proud of every version of you, including the one you are becoming.",
    },
    reversed: {
      message: "Change may be knocking while part of you still holds the door closed. Do not force a dramatic transformation. Start by releasing one expectation or one old sentence about yourself.",
      wifeMessage: "You can take transformation slowly. I will love you through every in-between stage.",
    },
  },
  {
    id: 14,
    name: "Temperance",
    chinese: "节制",
    image: "/cards/temperance.png",
    upright: {
      message: "The answer may be moderation rather than extremes. Mix effort with rest, honesty with gentleness, and planning with flexibility. A steady rhythm will help you feel like yourself again.",
      wifeMessage: "May your day feel peaceful in the tiny places. I am sending you calm.",
    },
    reversed: {
      message: "Your balance may be stretched. You may be doing too much or forgetting basic needs. Come back to simple medicine: water, breath, food, rest, and slower choices.",
      wifeMessage: "Please take care of your little human needs today. They matter because you matter.",
    },
  },
  {
    id: 15,
    name: "The Devil",
    chinese: "恶魔",
    image: "/cards/the-devil.png",
    upright: {
      message: "Notice what has become too heavy, too tempting, or too familiar to question. Look at what drains your freedom: a thought loop, a habit, a fear, or an attachment. Naming it starts to loosen it.",
      wifeMessage: "Nothing about a hard day makes you less wonderful. Come back to yourself slowly.",
    },
    reversed: {
      message: "Something that once held you tightly may be losing its power. Support that freedom with one clear choice. Do not shame the old pattern; choose the next kinder thing.",
      wifeMessage: "I see how hard you try to be free from heavy feelings. I am so proud of you.",
    },
  },
  {
    id: 16,
    name: "The Tower",
    chinese: "高塔",
    image: "/cards/the-tower.png",
    upright: {
      message: "If today feels shaky, breathe before reacting. Something false or unstable may be exposed, but that does not mean everything is ruined. After the shock, there can be cleaner ground.",
      wifeMessage: "Even when the day is messy, you are safe with me. We can rebuild anything together.",
    },
    reversed: {
      message: "You may sense change before it fully arrives. Do not ignore the crack in the wall. Respond gently now, and you may not need a louder wake-up later.",
      wifeMessage: "If today feels tense, come back to me in your heart. We can make things gentler.",
    },
  },
  {
    id: 17,
    name: "The Star",
    chinese: "星星",
    image: "/cards/the-star.png",
    upright: {
      message: "Hope is returning quietly. You do not need perfect inspiration to move toward something better. Notice one beautiful thing, trust one gentle possibility, and let your softness have a future.",
      wifeMessage: "You are my favorite little light. I hope something lovely finds you today.",
    },
    reversed: {
      message: "Hope may feel far away, but it has not left. Care for the part of you that cannot shine on command. Let hope return as a tiny spark, not a performance.",
      wifeMessage: "You do not have to sparkle today. I love your light even when it is quiet.",
    },
  },
  {
    id: 18,
    name: "The Moon",
    chinese: "月亮",
    image: "/cards/the-moon.png",
    upright: {
      message: "Things may not be fully clear today, and that is okay. Avoid making fear into fact. Move slowly, check what is real, and listen to the quiet signals inside you.",
      wifeMessage: "When the path feels misty, hold my hand in your heart. I am with you.",
    },
    reversed: {
      message: "Confusion may be starting to clear. A worry or hidden feeling could become easier to name. Let truth arrive gently, and follow the small thread that feels calmer than before.",
      wifeMessage: "You are not your worries, my love. I hope today feels a little clearer and kinder.",
    },
  },
  {
    id: 19,
    name: "The Sun",
    chinese: "太阳",
    image: "/cards/the-sun.png",
    upright: {
      message: "Let something be easier than expected. Receive brightness without questioning whether you deserve it. Be honest, be playful, and let your heart stand in the light for a moment.",
      wifeMessage: "You make my world warmer just by being in it. I hope you smile today.",
    },
    reversed: {
      message: "The light may be covered, but it is not gone. Do not chase a perfect mood. Look for a smaller sun: a warm drink, a funny message, a soft blanket, one good breath.",
      wifeMessage: "Even on cloudy days, you are still my sunshine. I hope one tiny happy thing finds you.",
    },
  },
  {
    id: 20,
    name: "Judgement",
    chinese: "审判",
    image: "/cards/judgement.png",
    upright: {
      message: "Something may ask you to answer honestly: what are you ready to release, admit, or begin again? This is not harsh judgment; it is growth calling you forward.",
      wifeMessage: "You are allowed to begin again, as many times as you need. I will still be here.",
    },
    reversed: {
      message: "You may be holding yourself to an impossible standard. Do not confuse growth with punishment. You can learn without attacking yourself. Speak inwardly with tenderness.",
      wifeMessage: "Please speak to yourself with the tenderness I would use. You deserve that voice.",
    },
  },
  {
    id: 21,
    name: "The World",
    chinese: "世界",
    image: "/cards/the-world.png",
    upright: {
      message: "Pause long enough to notice what you have survived, learned, or finished. You may not feel perfect, but something in you is more complete than before. Let yourself receive that.",
      wifeMessage: "I am so proud of you. Today, I hope you feel how much you mean to me.",
    },
    reversed: {
      message: "Something may feel unfinished or not fully settled. Choose one small loop to close instead of resolving everything. Completion can be simple: send the message, name the feeling, or rest.",
      wifeMessage: "You do not have to complete everything to be worthy of rest. I am proud of you already.",
    },
  },
];
