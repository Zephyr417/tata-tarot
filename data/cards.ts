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
      message: "A fresh beginning is calling. The Fool is not asking you to be careless; it is asking you to leave a little room for wonder. Today may be a good day to try something before you feel completely ready, to follow curiosity, or to let a lighter version of yourself make the first move. Take one small step, keep your heart open, and do not demand a full map before you begin.",
      wifeMessage: "Be curious today, my love. I am cheering for every brave little beginning you make.",
    },
    reversed: {
      message: "The Fool reversed asks for a softer pause before the leap. There may be excitement, but there may also be distraction, impatience, or a tiny warning you have not listened to yet. Today, freedom will feel better if it has a little care around it. Check the details, protect your energy, and choose the adventure that still respects your peace.",
      wifeMessage: "You do not have to rush into anything. I trust your pace, and I am right here with you.",
    },
  },
  {
    id: 1,
    name: "The Magician",
    chinese: "魔术师",
    image: "/cards/the-magician.png",
    upright: {
      message: "The Magician says you already have more tools than you think. Your words, attention, skills, and timing can turn an idea into something real today. Choose one intention and put your energy there instead of scattering it everywhere. This card is a reminder that confidence is built by using what is in your hands, not by waiting until everything feels perfect.",
      wifeMessage: "You are clever, capable, and quietly magical. I hope you remember your own power today.",
    },
    reversed: {
      message: "The Magician reversed can show scattered energy or a feeling that your power is not landing where you want it to. Today, avoid trying to force too many outcomes at once. Come back to one honest intention, one clear task, and one thing you can actually complete. Your magic is still there; it simply needs focus and a gentler container.",
      wifeMessage: "Even when you feel unsure, I can see how much you are able to do. One gentle step is enough.",
    },
  },
  {
    id: 2,
    name: "The High Priestess",
    chinese: "女祭司",
    image: "/cards/the-high-priestess.png",
    upright: {
      message: "The High Priestess invites you to listen beneath the surface. Not every answer needs to be spoken out loud immediately; some truths arrive as a feeling, a pause, or a quiet knowing. Today, give yourself space before deciding. Notice what your body relaxes around and what makes you tighten. Your intuition may be subtle, but it is not random.",
      wifeMessage: "Trust yourself, my love. Your heart notices things before the world can explain them.",
    },
    reversed: {
      message: "The High Priestess reversed suggests that your inner voice may be buried under noise, worry, or other people's expectations. If clarity feels far away, do not chase it aggressively. Reduce the noise, rest your mind, and let the answer come back naturally. Today, your task is not to know everything; it is to stop abandoning your own quiet wisdom.",
      wifeMessage: "You do not need to force clarity today. I hope you can rest in your own gentle wisdom.",
    },
  },
  {
    id: 3,
    name: "The Empress",
    chinese: "皇后",
    image: "/cards/the-empress.png",
    upright: {
      message: "The Empress brings care, beauty, nourishment, and slow growth. Today, something may need warmth instead of pressure. Feed what you want to grow: your body, a relationship, a creative idea, or your own sense of safety. This card reminds you that softness is not laziness. Some things become stronger because they are treated tenderly.",
      wifeMessage: "Please be tender with yourself today. You deserve the same warmth you give everyone else.",
    },
    reversed: {
      message: "The Empress reversed asks where you have been giving without receiving. You may be caring for everyone else while quietly ignoring your own needs. Today, come back to your body and your comfort. Eat properly, rest when you can, and do not make love prove itself through exhaustion. The gentleness you offer others belongs to you too.",
      wifeMessage: "Let me remind you: you deserve care too. Please save some softness for yourself.",
    },
  },
  {
    id: 4,
    name: "The Emperor",
    chinese: "皇帝",
    image: "/cards/the-emperor.png",
    upright: {
      message: "The Emperor is about structure that protects, not control that suffocates. Today may benefit from a clear plan, a boundary, or one practical decision that makes everything feel less messy. Choose what needs order and give it a simple frame. You do not have to dominate the day; you only need enough steadiness to feel safe inside it.",
      wifeMessage: "You do not have to carry everything at once. I am here, and you can lean on me.",
    },
    reversed: {
      message: "The Emperor reversed can point to pressure, rigidity, or the feeling that everything must be controlled before you can breathe. Today, notice where the rules have become heavier than the problem. Loosen one grip. Let something be imperfect. Real stability is not about holding everything tightly; it is about knowing what truly needs holding.",
      wifeMessage: "You are safe even when everything is not perfectly arranged. I will help hold the edges.",
    },
  },
  {
    id: 5,
    name: "The Hierophant",
    chinese: "教皇",
    image: "/cards/the-hierophant.png",
    upright: {
      message: "The Hierophant points to tradition, guidance, learning, and meaningful rituals. Today, a familiar practice or trusted piece of wisdom may help you feel grounded. You do not need to invent everything from zero. Ask what has supported you before, what values still feel true, and what small ritual could bring you back to yourself.",
      wifeMessage: "Your way of seeing the world is precious. I love the softness and wisdom in you.",
    },
    reversed: {
      message: "The Hierophant reversed asks you to question rules that no longer fit your heart. Something may be called 'the right way' simply because it is familiar, not because it is kind or true. Today, keep the wisdom that supports you and release the pressure that only makes you smaller. Your own path is allowed to be valid.",
      wifeMessage: "You are allowed to choose your own way. I love you most when you are fully yourself.",
    },
  },
  {
    id: 6,
    name: "The Lovers",
    chinese: "恋人",
    image: "/cards/the-lovers.png",
    upright: {
      message: "The Lovers is about alignment, choice, and the kind of connection that lets you be whole. Today, choose from love rather than fear or pressure. This may be about a relationship, but it can also be about choosing the version of your life that feels honest. Ask: does this choice bring me closer to myself, or further away?",
      wifeMessage: "No matter how today feels, you are deeply loved. Especially by me.",
    },
    reversed: {
      message: "The Lovers reversed can show a place where things feel misaligned: what you want, what you say, what you do, or what someone expects from you. Today, do not rush to make everything look harmonious. Start with honesty. A gentle truth is more healing than a pretty silence that makes you disappear.",
      wifeMessage: "Your feelings matter to me, even the complicated ones. We can be honest and still be close.",
    },
  },
  {
    id: 7,
    name: "The Chariot",
    chinese: "战车",
    image: "/cards/the-chariot.png",
    upright: {
      message: "The Chariot brings direction, focus, and forward motion. Today, progress may come from choosing your lane and staying with it. You do not need to sprint; you need to keep your hands on the reins. If emotions or tasks pull in different directions, name the destination first. Then take the next practical step toward it.",
      wifeMessage: "I believe in your strength, even on the days when you feel tired.",
    },
    reversed: {
      message: "The Chariot reversed suggests the day may feel pulled apart by competing needs, moods, or expectations. Instead of forcing momentum, slow down and regain direction. Ask what you are actually trying to move toward. It is okay to pause, adjust, and restart. Control is not the goal; inner steering is.",
      wifeMessage: "You do not have to win the whole day. I am proud of you for simply keeping going.",
    },
  },
  {
    id: 8,
    name: "Strength",
    chinese: "力量",
    image: "/cards/strength.png",
    upright: {
      message: "Strength is gentle courage. It does not shout; it stays. Today, meet yourself and others with patience rather than force. If something feels difficult, you may not need to conquer it all at once. Breathe, soften your jaw, and respond from the part of you that knows kindness can be stronger than pressure.",
      wifeMessage: "You are strong in the most beautiful way: gentle, steady, and full of heart.",
    },
    reversed: {
      message: "Strength reversed can appear when your courage is tired. You may be judging yourself for not feeling brave enough, but tenderness is needed more than criticism. Today, do not make your softer feelings into a problem. Care for the part of you that has been trying hard. Rest can be an act of strength too.",
      wifeMessage: "You do not need to be strong every minute. I love you in your soft moments too.",
    },
  },
  {
    id: 9,
    name: "The Hermit",
    chinese: "隐者",
    image: "/cards/the-hermit.png",
    upright: {
      message: "The Hermit invites quiet, reflection, and your own inner lantern. Today, step back from noise if you can. You may need a small pocket of solitude to understand what you really feel. This card does not ask you to withdraw forever; it asks you to return to yourself long enough to hear your own truth.",
      wifeMessage: "Take your little pause today. I hope you feel held, even in the quiet.",
    },
    reversed: {
      message: "The Hermit reversed warns against becoming too alone inside your thoughts. Reflection is helpful; isolation that makes everything darker is not. Today, let a kind voice reach you. Send the message, open the window, ask for a hug, or do one small thing that reconnects you with warmth.",
      wifeMessage: "If you feel alone today, please remember I am thinking of you and walking beside you.",
    },
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    chinese: "命运之轮",
    image: "/cards/wheel-of-fortune.png",
    upright: {
      message: "The Wheel of Fortune says movement is happening, even if you cannot control every turn. Today may bring a shift in mood, timing, or perspective. Stay flexible and notice the opening when it appears. The best response is not to grip the wheel too tightly, but to meet change with curiosity and a little trust.",
      wifeMessage: "Whatever changes today, my love for you is one of the steady things.",
    },
    reversed: {
      message: "The Wheel reversed can feel like delays, repetition, or bad timing. But a slow turn is still a turn. Today, avoid deciding that a stuck moment means a stuck life. Look for what can be adjusted: your response, your expectation, or one tiny habit. The wheel may need patience before it moves again.",
      wifeMessage: "Even if today feels out of rhythm, we will find our little luck again together.",
    },
  },
  {
    id: 11,
    name: "Justice",
    chinese: "正义",
    image: "/cards/justice.png",
    upright: {
      message: "Justice asks for honesty, balance, and clear seeing. Today, try to separate facts from fear and responsibility from blame. What is fair to others should also be fair to you. If there is a decision to make, choose the one you can stand behind calmly. Truth may be simple, even when emotions are not.",
      wifeMessage: "Your feelings matter. I hope today treats you fairly and gently.",
    },
    reversed: {
      message: "Justice reversed can show self-blame, unfair pressure, or a situation where the scales feel off. Today, be careful not to punish yourself for things that are bigger than you. Seek balance without becoming harsh. Ask what is actually yours to carry, and what can be set down with dignity.",
      wifeMessage: "Please be on your own side today. I am on your side too, always.",
    },
  },
  {
    id: 12,
    name: "The Hanged Man",
    chinese: "倒吊人",
    image: "/cards/the-hanged-man.png",
    upright: {
      message: "The Hanged Man is a sacred pause. Something may not move faster just because you push it, and that pause may be teaching you a new angle. Today, try looking at the situation from another side. Surrender does not mean giving up; it means releasing the struggle that is not helping.",
      wifeMessage: "You do not have to solve everything immediately. Rest is allowed, sweetheart.",
    },
    reversed: {
      message: "The Hanged Man reversed suggests frustration with waiting or a feeling of being stuck without meaning. Today, notice where you are resisting reality so hard that it drains you. You may not be able to move the whole situation, but you can release one small tension and choose one practical next step.",
      wifeMessage: "I know it is hard when things do not move. Let me sit with you in the pause.",
    },
  },
  {
    id: 13,
    name: "Death",
    chinese: "死神",
    image: "/cards/death.png",
    upright: {
      message: "Death is not here to frighten you; it is here to mark an ending that makes room for life. Something old may be ready to fall away: a habit, a fear, a role, or a version of yourself you no longer need. Today, let the ending be honest. You do not have to rush the new chapter, but you can stop clinging to the old one.",
      wifeMessage: "I am proud of every version of you, including the one you are becoming.",
    },
    reversed: {
      message: "Death reversed can mean change is already knocking, but part of you is still holding the door closed. That is human. Today, do not force a dramatic transformation. Start gently: release one expectation, one old sentence about yourself, or one thing that has stopped loving you back.",
      wifeMessage: "You can take transformation slowly. I will love you through every in-between stage.",
    },
  },
  {
    id: 14,
    name: "Temperance",
    chinese: "节制",
    image: "/cards/temperance.png",
    upright: {
      message: "Temperance brings balance, blending, and healing in small measures. Today, the answer may be moderation rather than extremes. Mix effort with rest, honesty with gentleness, and planning with flexibility. You do not need to fix everything at once. A steady rhythm will help you feel like yourself again.",
      wifeMessage: "May your day feel peaceful in the tiny places. I am sending you calm.",
    },
    reversed: {
      message: "Temperance reversed suggests your balance may be stretched. Maybe you have been doing too much, reacting too quickly, or forgetting your basic needs. Today, come back to simple medicine: water, breath, food, rest, and slower choices. Harmony can begin with one very ordinary act of care.",
      wifeMessage: "Please take care of your little human needs today. They matter because you matter.",
    },
  },
  {
    id: 15,
    name: "The Devil",
    chinese: "恶魔",
    image: "/cards/the-devil.png",
    upright: {
      message: "The Devil asks you to notice what has become too heavy, too tempting, or too familiar to question. This card is not a judgment; it is a light turned on. Today, look at what drains your freedom: a thought loop, a habit, a fear, or an attachment. Naming it is already the beginning of loosening it.",
      wifeMessage: "Nothing about a hard day makes you less wonderful. Come back to yourself slowly.",
    },
    reversed: {
      message: "The Devil reversed is a beautiful sign of release. Something that once held you tightly may be losing its power. Today, support that freedom with one clear choice. Do not shame the old pattern; simply choose the next kinder thing. A small release can become a larger door.",
      wifeMessage: "I see how hard you try to be free from heavy feelings. I am so proud of you.",
    },
  },
  {
    id: 16,
    name: "The Tower",
    chinese: "高塔",
    image: "/cards/the-tower.png",
    upright: {
      message: "The Tower brings sudden truth, disruption, or the collapse of something that could not keep standing as it was. If today feels shaky, breathe before reacting. This card does not mean everything is ruined; it means something false or unstable is being exposed. After the shock, there can be cleaner ground.",
      wifeMessage: "Even when the day is messy, you are safe with me. We can rebuild anything together.",
    },
    reversed: {
      message: "The Tower reversed can mean you sense change before it fully arrives. There may be tension under the surface, but you still have a chance to make small adjustments. Today, do not ignore the crack in the wall. Respond gently now, and you may not need a louder wake-up later.",
      wifeMessage: "If today feels tense, come back to me in your heart. We can make things gentler.",
    },
  },
  {
    id: 17,
    name: "The Star",
    chinese: "星星",
    image: "/cards/the-star.png",
    upright: {
      message: "The Star is hope after difficulty, a quiet light returning. Today, let healing be simple. You do not need to feel perfectly inspired to move toward something better. Drink in one small beautiful thing, trust one gentle possibility, and let yourself believe that your softness still has a future.",
      wifeMessage: "You are my favorite little light. I hope something lovely finds you today.",
    },
    reversed: {
      message: "The Star reversed can feel like hope is far away or your light is hidden behind tiredness. It has not left. Today, care for the part of you that cannot shine on command. Lower the pressure, seek comfort, and let hope return as a tiny spark rather than a big performance.",
      wifeMessage: "You do not have to sparkle today. I love your light even when it is quiet.",
    },
  },
  {
    id: 18,
    name: "The Moon",
    chinese: "月亮",
    image: "/cards/the-moon.png",
    upright: {
      message: "The Moon speaks of uncertainty, dreams, emotions, and the strange light of intuition. Things may not be fully clear today, and that is okay. Avoid making fear into fact. Move slowly, check what is real, and listen to the quiet signals inside you. The path may be misty, but you do not have to walk it blindly.",
      wifeMessage: "When the path feels misty, hold my hand in your heart. I am with you.",
    },
    reversed: {
      message: "The Moon reversed suggests confusion may be starting to clear. A worry, illusion, or hidden feeling could become easier to name. Today, let the truth arrive gently. You do not have to fight every shadow at once. Notice what feels calmer than before, and follow that small thread of clarity.",
      wifeMessage: "You are not your worries, my love. I hope today feels a little clearer and kinder.",
    },
  },
  {
    id: 19,
    name: "The Sun",
    chinese: "太阳",
    image: "/cards/the-sun.png",
    upright: {
      message: "The Sun brings warmth, openness, and simple joy. Today, let something be easier than you expected. This card asks you to receive brightness without questioning whether you deserve it. Be honest, be playful, and let your heart stand in the light for a moment. Joy can be useful too.",
      wifeMessage: "You make my world warmer just by being in it. I hope you smile today.",
    },
    reversed: {
      message: "The Sun reversed means the light may be covered, but it is not gone. Maybe joy feels delayed, muted, or hard to trust. Today, do not chase a perfect mood. Look for a smaller sun: a warm drink, a funny message, a soft blanket, one good breath. Let that be enough.",
      wifeMessage: "Even on cloudy days, you are still my sunshine. I hope one tiny happy thing finds you.",
    },
  },
  {
    id: 20,
    name: "Judgement",
    chinese: "审判",
    image: "/cards/judgement.png",
    upright: {
      message: "Judgement is a call to wake up, forgive, and step into a truer version of yourself. Today, something may ask you to answer honestly: what are you ready to release, admit, or begin again? This is not about harsh judgment. It is about hearing the call of growth and responding with courage.",
      wifeMessage: "You are allowed to begin again, as many times as you need. I will still be here.",
    },
    reversed: {
      message: "Judgement reversed can show self-criticism or fear of answering the call. You may be holding yourself to an impossible standard. Today, try not to confuse growth with punishment. You can learn without attacking yourself. Speak inwardly with the same tenderness you would offer someone you love.",
      wifeMessage: "Please speak to yourself with the tenderness I would use. You deserve that voice.",
    },
  },
  {
    id: 21,
    name: "The World",
    chinese: "世界",
    image: "/cards/the-world.png",
    upright: {
      message: "The World marks completion, wholeness, and the quiet pride of having come far. Today, pause long enough to notice what you have survived, learned, or finished. You may not feel perfect, but something in you is more complete than before. Let yourself receive that. A chapter can close softly and still matter.",
      wifeMessage: "I am so proud of you. Today, I hope you feel how much you mean to me.",
    },
    reversed: {
      message: "The World reversed suggests something feels unfinished or almost complete but not fully settled. Today, choose one small loop to close instead of trying to resolve everything. Completion does not have to be dramatic. Send the message, tidy the corner, name the feeling, or rest with the truth that you are still becoming.",
      wifeMessage: "You do not have to complete everything to be worthy of rest. I am proud of you already.",
    },
  },
];
