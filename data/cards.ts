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
      wifeMessage: "叮咯儿哩个啷，今天，就像刘哥一样勇敢，像刘哥一样自信，像刘哥一样绽放吧！",
    },
    reversed: {
      message: "Pause before the leap. Excitement is good, but impatience may make things scattered. Check the details, protect your energy, and choose the adventure that still respects your peace.",
      wifeMessage: "今天是Slough House的Slow Horse. 按下暂停键and do nothing. 要慢一点，然后再慢一点~",
    },
  },
  {
    id: 1,
    name: "The Magician",
    chinese: "魔术师",
    image: "/cards/the-magician.png",
    upright: {
      message: "You already have more tools than you think. Choose one intention and put your energy there instead of scattering it everywhere. Confidence grows when you use what is already in your hands.",
      wifeMessage: "Hogwarts is not the only place for magic. You have the otter magic every day. 冲吧！骑马的魔法师獭獭！",
    },
    reversed: {
      message: "Your energy may be scattered. Avoid forcing too many outcomes at once. Come back to one honest intention, one clear task, and one thing you can actually complete.",
      wifeMessage: "One gentle step is enough. Even when you feel unsure, I can still see how much you are able to do. 别让大地母亲，圣光和怀疑忽悠了你",
    },
  },
  {
    id: 2,
    name: "The High Priestess",
    chinese: "女祭司",
    image: "/cards/the-high-priestess.png",
    upright: {
      message: "Listen beneath the surface. Some truths arrive as a feeling, a pause, or a quiet knowing. Give yourself space before deciding, and notice what makes your body relax or tighten.",
      wifeMessage: "I could have hit Roshan with my eyes closed. Trust yourself, my love. Your heart notices things before the world can explain them.",
    },
    reversed: {
      message: "Your inner voice may be buried under noise, worry, or other people's expectations. Reduce the noise, rest your mind, and let the answer come back naturally.",
      wifeMessage: "Meld away. You do not need to force clarity today. 别让外界的声音淹没了自己的判断, 耐心等待, 迷雾终会散去。",
    },
  },
  {
    id: 3,
    name: "The Empress",
    chinese: "皇后",
    image: "/cards/the-empress.png",
    upright: {
      message: "Something may need warmth instead of pressure. Feed what you want to grow: your body, a relationship, a creative idea, or your own sense of safety. Softness is not laziness.",
      wifeMessage: "You deserve the same warmth you give everyone else. 你就像你的AK皇后一样强大,温柔,聪慧,善良,勇敢,坚定,独立,包容,体贴,细腻,敏感,热情,专注,执着,努力,稳重,成熟,虽然你不会用AK。",
    },
    reversed: {
      message: "You may be giving without receiving. Come back to your body and your comfort. Eat properly, rest when you can, and do not make love prove itself through exhaustion.",
      wifeMessage: "You deserve care too. 发出去了AK皇后, 也要给自己留下一把M4A1-S。别让自己太累了, 遗迹道具大师。",
    },
  },
  {
    id: 4,
    name: "The Emperor",
    chinese: "皇帝",
    image: "/cards/the-emperor.png",
    upright: {
      message: "A little structure can protect your peace. Make one clear plan, boundary, or practical decision. You do not have to control the whole day; just create enough steadiness to feel safe.",
      wifeMessage: "真正优秀的指挥, 不是每一枪都自己开, 而是让整个队伍都知道下一步该往哪里走。Rush B, 懂？",
    },
    reversed: {
      message: "Too much control may feel heavy. Notice where the rules have become bigger than the problem. Loosen one grip, let something be imperfect, and keep only what truly needs holding.",
      wifeMessage: "You are safe even when everything is not perfectly arranged. 如果所有眼都要你来插, 再强的酱油也会累。今天就试着放松, 试着相信你的carry。",
    },
  },
  {
    id: 5,
    name: "The Hierophant",
    chinese: "教皇",
    image: "/cards/the-hierophant.png",
    upright: {
      message: "A familiar practice or trusted piece of wisdom may help you feel grounded. Ask what has supported you before, what still feels true, and what small ritual can bring you back to yourself.",
      wifeMessage: "今天我们每个人都是每个人的老师, 正所谓三人行必有我师。你是我的老师，我是你的老师。但你日我的老师, 我也日你的老师。",
    },
    reversed: {
      message: "Question rules that no longer fit your heart. Keep the wisdom that supports you, and release the pressure that only makes you smaller. Your own path is allowed to be valid.",
      wifeMessage: "....那鲁迅当独立营团长时候说了, 从前特娘的本没有路, 走的人多了, 也便成了路。二营长, 把意大利炮拉出来给我打。",
    },
  },
  {
    id: 6,
    name: "The Lovers",
    chinese: "恋人",
    image: "/cards/the-lovers.png",
    upright: {
      message: "Choose from love rather than fear or pressure. This may be about a relationship, or about the life that feels honest. Ask whether this choice brings you closer to yourself.",
      wifeMessage: "真正的队友不是 KDA 最高的人, 而是一起坚持走到最后的人。No matter how today feels, you are deeply loved. Especially by me.",
    },
    reversed: {
      message: "Something may feel misaligned between what you want, say, do, or accept. Do not rush to make it look harmonious. A gentle truth is better than a pretty silence that makes you disappear.",
      wifeMessage: "Your feelings matter to me, even the complicated ones. We can be honest and still be close. 所以把麦打开好吗？",
    },
  },
  {
    id: 7,
    name: "The Chariot",
    chinese: "战车",
    image: "/cards/the-chariot.png",
    upright: {
      message: "Progress may come from choosing your lane and staying with it. You do not need to sprint. If emotions or tasks pull in different directions, name the destination first, then take one practical step.",
      wifeMessage: "...那我们先从量子力学出发, 粒子在被观察之前可以同时处于多种状态。但反馈增益调得太高, 再稳定的系统也会开始振荡....总之闭眼冲就行啦! IceBear和Panpan带你前进。",
    },
    reversed: {
      message: "The day may feel pulled apart by competing needs or moods. Instead of forcing momentum, slow down and regain direction. It is okay to pause, adjust, and restart.",
      wifeMessage: "...而根据热力学第二定律, 房间总会越来越乱。所以今天如果整理了桌子, 真的很了不起了, 因为我们刚刚短暂战胜了宇宙。",
    },
  },
  {
    id: 8,
    name: "Strength",
    chinese: "力量",
    image: "/cards/strength.png",
    upright: {
      message: "Gentle courage is still courage. Meet yourself and others with patience rather than force. If something feels difficult, breathe, soften your jaw, and respond from kindness instead of pressure.",
      wifeMessage: "今天要保持耐心哦! 3..,2..,1..,今天已经坚持3秒了, 击败了99%的人，你很棒了！小九给你力量!",
    },
    reversed: {
      message: "Your courage may be tired. Do not judge yourself for not feeling brave enough. Care for the part of you that has been trying hard. Rest can be strength too.",
      wifeMessage: "接受自己的不完美, 也是一种勇敢。失败是成功的老师, 而我失败你的老师",
    },
  },
  {
    id: 9,
    name: "The Hermit",
    chinese: "隐者",
    image: "/cards/the-hermit.png",
    upright: {
      message: "Step back from noise if you can. You may need a small pocket of solitude to understand what you really feel. Return to yourself long enough to hear your own truth.",
      wifeMessage: "今天适合学习、阅读、思考或整理计划。J人来了, 大家闪开！记得计划一下明天的写周末计划的计划吧！",
    },
    reversed: {
      message: "Do not become too alone inside your thoughts. Reflection is helpful; isolation that makes everything darker is not. Let a kind voice reach you, even in a small way.",
      wifeMessage: "If you feel alone today, 回家跟我一起玩游戏吧！我第二座城直接赠送给你, 再做个鸡蛋羹给你吃。",
    },
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    chinese: "命运之轮",
    image: "/cards/wheel-of-fortune.png",
    upright: {
      message: "Movement is happening, even if you cannot control every turn. Stay flexible and notice the opening when it appears. Meet change with curiosity instead of gripping the wheel too tightly.",
      wifeMessage: "大摆钟来喽！机不可失, 失不再来, 来日方丈, 方丈不同意.....你是不是看成来日方长了？",
    },
    reversed: {
      message: "Delays or repetition may feel frustrating, but a slow turn is still a turn. Do not decide that a stuck moment means a stuck life. Adjust one response, expectation, or tiny habit.",
      wifeMessage: "赌徒谬误说过连续发生某件事, 并不会改变下一次发生的概率。但我们仍然要regain lost courage, 再给踏马比的一首歌的时间。",
    },
  },
  {
    id: 11,
    name: "Justice",
    chinese: "正义",
    image: "/cards/justice.png",
    upright: {
      message: "Separate facts from fear and responsibility from blame. What is fair to others should also be fair to you. If there is a decision to make, choose the one you can stand behind calmly.",
      wifeMessage: "分院帽会倾听你的想法, 但最终决定你是谁的, 不是帽子, 而是你的选择。Griffindor!",
    },
    reversed: {
      message: "Be careful not to punish yourself for things bigger than you. Seek balance without becoming harsh. Ask what is yours to carry, and what can be set down with dignity.",
      wifeMessage: "发现自己的错误并改正, 也是一种勇敢。但是尖沙咀还是你说了算。",
    },
  },
  {
    id: 12,
    name: "The Hanged Man",
    chinese: "倒吊人",
    image: "/cards/the-hanged-man.png",
    upright: {
      message: "Something may not move faster just because you push it. Try looking from another angle. Surrender does not mean giving up; it means releasing the struggle that is not helping.",
      wifeMessage: "You do not have to solve everything immediately. Rest is allowed, tata. TP是补状态,撤退是等CD,头头是道,我是你爹",
    },
    reversed: {
      message: "Waiting may feel frustrating or meaningless. Notice where resisting reality is draining you. You may not move the whole situation, but you can release one tension and choose one next step.",
      wifeMessage: "新的风暴已经出现, 胡思乱想烧脑袋, 今天要放下对完美结果的执着, 大胆开雾出击, 打他的老师！",
    },
  },
  {
    id: 13,
    name: "Death",
    chinese: "死神",
    image: "/cards/death.png",
    upright: {
      message: "Something old may be ready to fall away: a habit, a fear, a role, or a version of yourself you no longer need. You do not have to rush the new chapter, but you can stop clinging to the old one.",
      wifeMessage: "Professor Otter Says:I am proud of every version of you, including the one you are becoming. 不必害怕改变,我会一直陪着你。",
    },
    reversed: {
      message: "Change may be knocking while part of you still holds the door closed. Do not force a dramatic transformation. Start by releasing one expectation or one old sentence about yourself.",
      wifeMessage: "复活之后还在看死亡回放的人, 永远赶不上下一波兵线。暂停复盘可以, 别忘了重新买活. Now the game is on!",
    },
  },
  {
    id: 14,
    name: "Temperance",
    chinese: "节制",
    image: "/cards/temperance.png",
    upright: {
      message: "The answer may be moderation rather than extremes. Mix effort with rest, honesty with gentleness, and planning with flexibility. A steady rhythm will help you feel like yourself again.",
      wifeMessage: "复仇者联盟真正战胜灭霸, 不是因为每个人都最强, 而是因为每个人都在最合适的时间, 做了最合适的事情。爱你三千次。",
    },
    reversed: {
      message: "Your balance may be stretched. You may be doing too much or forgetting basic needs. Come back to simple medicine: water, breath, food, rest, and slower choices.",
      wifeMessage: "不是每个人都能像美国队长一样电梯1v9。那也没事, 要记得好好吃饭, 好好睡觉哦。",
    },
  },
  {
    id: 15,
    name: "The Devil",
    chinese: "恶魔",
    image: "/cards/the-devil.png",
    upright: {
      message: "Notice what has become too heavy, too tempting, or too familiar to question. Look at what drains your freedom: a thought loop, a habit, a fear, or an attachment. Naming it starts to loosen it.",
      wifeMessage: "Nothing about a hard day makes you less wonderful. Come back to yourself slowly. 今天不能做犯了贪婪之罪的5号位点金手敌法师。看看这77和99可不可爱。"
    },
    reversed: {
      message: "Something that once held you tightly may be losing its power. Support that freedom with one clear choice. Do not shame the old pattern; choose the next kinder thing.",
      wifeMessage: "I am so proud of you. I see how hard you try to be free from heavy feelings. The chamber of secrets is opened, but we can still defeat the basilisk together.",
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
      wifeMessage: "If today feels tense, come back to me. 不要因为金字塔被抢了就忘了, 你还可以建罗马斗兽场, 我还可以送你一座城。",
    },
  },
  {
    id: 17,
    name: "The Star",
    chinese: "星星",
    image: "/cards/the-star.png",
    upright: {
      message: "Hope is returning quietly. You do not need perfect inspiration to move toward something better. Notice one beautiful thing, trust one gentle possibility, and let your softness have a future.",
      wifeMessage: "星星卡, 卡星星，星星是你，你是星星。星星不会驱散黑暗, 但它会让黑暗不那么可怕。而且你是我的星星。",
    },
    reversed: {
      message: "Hope may feel far away, but it has not left. Care for the part of you that cannot shine on command. Let hope return as a tiny spark, not a performance.",
      wifeMessage: "你就是星星。今天, 也许你还没有看到星光, 但请别忘了抬头。The sky is always full of stars. 我想一直在你身边, 陪你一起看星星。",
    },
  },
  {
    id: 18,
    name: "The Moon",
    chinese: "月亮",
    image: "/cards/the-moon.png",
    upright: {
      message: "Things may not be fully clear today, and that is okay. Avoid making fear into fact. Move slowly, check what is real, and listen to the quiet signals inside you.",
      wifeMessage: "月亮是宇宙中最温柔的光。今夜月亮尖尖, 风也温柔, 你也温柔。",
    },
    reversed: {
      message: "Confusion may be starting to clear. A worry or hidden feeling could become easier to name. Let truth arrive gently, and follow the small thread that feels calmer than before.",
      wifeMessage: "月光光, 照大王。AUV, 当烟雾弹被手雷炸开, 再不往前走会吃第二颗雷。",
    },
  },
  {
    id: 19,
    name: "The Sun",
    chinese: "太阳",
    image: "/cards/the-sun.png",
    upright: {
      message: "Let something be easier than expected. Receive brightness without questioning whether you deserve it. Be honest, be playful, and let your heart stand in the light for a moment.",
      wifeMessage: "The sun, the moon, and all the stars could never shine as brightly as you. Don't forget to smile today.",
    },
    reversed: {
      message: "The light may be covered, but it is not gone. Do not chase a perfect mood. Look for a smaller sun: a warm drink, a funny message, a soft blanket, one good breath.",
      wifeMessage: "守得云开见月明, 但这好像是太阳卡, 算了你懂我意思吧。不管怎么样, 今天也要好好吃饭哦。",
    },
  },
  {
    id: 20,
    name: "Judgement",
    chinese: "审判",
    image: "/cards/judgement.png",
    upright: {
      message: "Something may ask you to answer honestly: what are you ready to release, admit, or begin again? This is not harsh judgment; it is growth calling you forward.",
      wifeMessage: "You are allowed to begin again, as many times as you need. I will still be here. 这一世,我不再留遗憾。封印千年,今日解开。我终于想起来了,我是京圈大小姐。",
    },
    reversed: {
      message: "You may be holding yourself to an impossible standard. Do not confuse growth with punishment. You can learn without attacking yourself. Speak inwardly with tenderness.",
      wifeMessage: "每个人都会经历自己的Endgame, 但真正重要的, 不是那场最后的战斗, 而是在战斗结束之后, 你决定成为一个怎样的人。以前我没得选, 现在我想要做个好人。",
    },
  },
  {
    id: 21,
    name: "The World",
    chinese: "世界",
    image: "/cards/the-world.png",
    upright: {
      message: "Pause long enough to notice what you have survived, learned, or finished. You may not feel perfect, but something in you is more complete than before. Let yourself receive that.",
      wifeMessage: "就像霍格沃茨特快列车每年都会回到九又四分之三站台, 今天新的故事也将开始。I am so proud of you. It's ok to celebrate. And see you next adventure.",
    },
    reversed: {
      message: "Something may feel unfinished or not fully settled. Choose one small loop to close instead of resolving everything. Completion can be simple: send the message, name the feeling, or rest.",
      wifeMessage: "总有一天, 我会夺回属于我的一切。The Fool taught you to begin.The World reminds you that every ending is simply the next beginning. Now... shuffle again.",
    },
  },
];
