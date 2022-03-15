/*
    CETTE VARIABLE CONTIENT L'ENSEMBLE DES TEXTES ET DES VARIABLES UTILES AU FONCTIONNEMENT DU JEU
    SA STRUCTURE GÉNÉRALE (SAUF EXCEPTIONS) EST LA SUIVANTE :
    myGameTxt = {
        scenes : [
            {
                name : string,
                texts : [
                    [string, string, boolean]
                    .
                    .
                    .
                ],
                items : [
                    {
                        name : string,
                        lookOpens : int,
                        useOpens : int,
                        hitOpens : int,
                        inspectOpens : int,
                        waitOpens : int,
                        acceptOpens : int,
                        isOpened: boolean,
                        lookTxt : string,
                        lookTxtOpen : string,
                        useTxt : string,
                        useTxtOpen : string,
                        goTxt : string,
                        goTxtOpen : string,
                        hitTxt : string,
                        inspectTxt : string,
                        waitTxt : string,
                        acceptTxt : string,
                    }
                    .
                    .
                    .
                    {
                        name : string,
                        leftTxt: string,
                    }
                ]
            }
            .
            .
            .
        ]
    }
    
    LES EXCEPTIONS SONT DES CONDITIONS SPÉCIFIQUES À LA PROGRESSION
*/
var myGameTxt = {
    scenes: [
        {
            name: "Scene1",
            sceneNumber: 1,
            texts: [
                ["Me revoila devant cette maison. ", "angry", false],
                ["Ce n'est pas ma maison. Je me suis perdu dans les rues depuis un moment. Je suis face à un ", "regular", false],
                ["portail.", "regular", true],
                [" Il y a une ", "regular", false],
                ["route", "regular", true],
                [" qui mène à une ", "regular", false],
                ["porte.", "regular", true],
                [" Le portail est déjà ouvert. ", "regular", false],
                ["Revoir cette maison m'énerve.", "angry", false]
            ],
            items: [
                {
                    name: "route",
                    determinant: "la ",
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "La route est courte. C'est un chemin de terre mal entretenu.",
                    useTxtOpen: "Je ramasse de la terre du chemin. Elle est humide et sombre.",
                    goWin: true,
                    goTxtOpen: "Allons-y.",
                    hitTxtOpen: "Pourquoi frapper le sol ?",
                    inspectTxtOpen: "Le chemin est en terre. Que dire de plus ?",
                    waitTxtOpen: "J'attends quelques minutes. Rien. Il est temps de bouger.",
                    acceptWin: true,
                    acceptTxtOpen: "C'est la dernière fois que je verrai cette maison. J'en suis certain."
                },
                {
                    name: "porte",
                    determinant: "la ",
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "La porte est fermée. Je pourrais m'en rapporcher pour tenter de l'ouvrir.",
                    useTxtOpen: "J'ai besoin de m'en rapprocher.",
                    goWin: true,
                    goTxtOpen: "Allons-y.",
                    hitTxtOpen: "Je pourrais. Mais il faudrait que je m'en approche.",
                    inspectTxtOpen: "Elle est trop éloignée pour voir quoi que ce soit.",
                    waitTxtOpen: "J'attends un moment. La porte ne bouge pas.",
                    acceptTxtOpen: "Qu'est-ce qu'il y a à accepter ?"
                },
                {
                    name: "portail",
                    determinant: "le ",
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "Le portail est entrouvert. Je peux aisément prendre la route.",
                    useTxtOpen: "Je pousse le portail. Un ressort le ramène à moi. Il est toujours ouvert.",
                    goTxtOpen: "Je suis déjà devant le portail.",
                    hitTxtOpen: "Le portail est en métal. Je n'aurais pas envie de me blesser.",
                    inspectTxtOpen: "La plupart des lettres sont effacées, mais les deux premières sont ",
                    waitTxtOpen: "Rien n'a bougé durant mon attente.",
                    acceptTxtOpen: "Mon nom est écrit sur le portail. "
                },
                {
                    name: "leave",
                    leftTxt: "Cette maison m'intigue, je ne veux pas partir tout de suite."
                }
            ],
        },
        {
            name: "Scene2",
            sceneNumber: 2,
            texts: [
                ["Me voila devant la maison. La ", "regular", false],
                ["porte", "regular", true],
                [" est juste devant moi, fermée. ", "regular", false],
                ["L'air dehors est humaide est froid... ", "sad", false],
                ["Il y a aussi une ", "regular", false],
                ["fenêtre", "regular", true],
                [", à gauche de la porte. La maison a l'air figée dans le temps. Il y a une ", "regular", false],
                ["sonnette.", "regular", true],
                [" Je pourrais simplement... sonner, je présume. ", "regular", false],
                ["Le ", "regular", false],
                ["paillasson", "regular", true],
                [` est gris, et "bienvenue" est écrit dessus en noir. Il est très sale.`, "regular", false],
            ],
            items: [
                {
                    name: "fenêtre",
                    determinant: "la",
                    hitOpens: 0,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "Les rideaux sont tirés. Dur à dire ce qu'il y a à l'intérieur.",
                    lookTxtOpen: "La fenêtre est brisée. Je ne veux pas me couper en la touchant.",
                    useTxt: "La fenêtre est fermée. Je ne peux pas l'ouvrir de l'extérieur.",
                    useTxtOpen: "Je n'ai pas envie de me blesser sur le verre brisé.",
                    goTxt: "Mmmmh non. La fenêtre est fermée.",
                    goTxtOpen: "Certes, la fenêtre est ouverte, mais elle est surtout tranchante.",
                    hitTxt: "J'ai brisé la vitre. Le verre restant est tranchant.",
                    hitTxtOpen: "Le verre est déjà brisé. Je n'ai pas envie de le frapper à nouveau.",
                    inspectTxt: "Les rideaux me rappellent ceux de mon appartement. Étrange.",
                    inspectTxtOpen: "Le courant d'air créé par la vitre brisée fait voler les rideaux.",
                    waitTxt: "J'attends quelques minutes en regardant ma reflexion.",
                    waitTxtOpen: "Il n'y a rien à attendre ici.",
                    acceptTxt: "Je ne vois pas ce que je suis censé accepter.",
                    acceptTxtOpen: "Je ne vois toujours pas ce que je suis censé accepter."
                },
                {
                    name: "porte",
                    determinant: "la ",
                    hitOpens: 1,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "La porte est branlante. Elle a l'air fragile.",
                    lookTxtOpen: "La porte était déjà ouverte.",
                    useTxt: "La porte est vérouillée. Impossible de l'ouvrir sans clé.",
                    useTxtOpen: "La porte est déverouillée. Il n'y a rien à faire de plus.",
                    goWin: true,
                    goTxt: "Je veux bien y aller, mais est-elle déverouillée ?",
                    goTxtOpen: "J'entre dans la maison. Une bouffée d'air moite m'arrive en plein visage.",
                    hitTxt: "Je frappe la porte. Celle-ci se brise sous mon poing. Je peux entrer à présent.",
                    hitTxtOpen: "La porte est déjà brisée en deux.",
                    inspectTxt: "La peinture se défait de la porte. Celle-ci doit dater d'il y a des années.",
                    inspectTxtOpen: "Le bois de la porte est pourri. Cela ne donne pas envie...",
                    waitTxt: "La porte ne va pas s'ouvrir d'elle-même en attendant.",
                    waitTxtOpen: "La porte ne s'est pas ouverte avant, pourquoi le ferait-elle maintenant ?",
                    acceptTxt: "Je dois accepter d'entrer dans ma maison une dernière fois.",
                    acceptTxtOpen: "J'accepte d'entrer dans ma maison une dernière fois."
                },
                {
                    name: "sonnette",
                    determinant: "la ",
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "Elle a l'air cassée. Je serais surpris si elle sonne encore.",
                    useTxtOpen: "Pas un bruit. Je ne sais pas ce à quoi je m'attendais.",
                    goTxtOpen: "La sonnette est déjà devant moi.",
                    hitTxtOpen: "La sonnette a fait un bruit. Pas de réponse de la maison.",
                    inspectTxtOpen: "Le nom sur la sonnette est à peine lisible.",
                    waitTxtOpen: "Je ne sais pas ce que j'attends. Elle est clairement cassée.",
                    acceptTxtOpen: "Sur la sonnette est écrit mon nom de famille."
                },
                {
                    name: "paillasson",
                    determinant: "le ",
                    useOpens: 1,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: `Le paillasson est vieux et usé. Le "bienvenue" est à peine lisible.`,
                    useTxtOpen: "Sous le paillasson se trouve une vieille clé en cuivre. Je la ramasse.",
                    goTxtOpen: "Je suis déjà devant le paillasson.",
                    hitTxtOpen: "En lui donnant un coup de pied, le paillasson fait un bruit humide.",
                    inspectTxtOpen: "En marchant dessus, mes pas marquent le paillasson.",
                    waitTxtOpen: "Je ne sais pas sur quoi je devrais attendre.",
                    acceptTxtOpen: "Je reconnais ce vieux paillasson de quand j'étais enfant."
                },
                {
                    name: "leave",
                    leftTxt: "Je recule jusqu'au portail. L'air est froid.",
                }
            ],
        },
        {
            name: "Scene3",
            sceneNumber: 3,
            texts: [
                ["Me voila dans la maison... ", "regular", false],
                ["Une nouvelle fois. ", "sad", false],
                ["Il fait sombre, et le tout semble abandonné. ", "regular", false],
                ["Il n'y a qu'une pièce, avec un ", "regular", false],
                ["escalier", "regular", true],
                [" sur ma droite. Au milieu de la pièce, un ", "regular", false],
                ["bureau.", "regular", true],
                [" Sur ce dernier, une ", "bargain", false],
                ["carte.", "bargain", true],
                [" Il y a une vieille ", "regular", false],
                ["bibliothèque", "regular", true],
                [" au fond de la pièce. Rien d'autre ne sautait aux yeux dans la maison.", "regular", false],
            ],
            items: [
                {
                    name: "escalier",
                    determinant: "l'",
                    waitOpens: 0,
                    acceptOpens: 0,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "L'escalier mène à une porte à l'étage. Elle semble fermée.",
                    lookTxtOpen: "La porte est maintenant déverouillée.",
                    useTxt: "La porte est fermée à clé. Pas de chance.",
                    useTxtOpen: "La porte est maintenant déverouilléego.",
                    goWin: true,
                    goTxt: "Je dois déverouiller la porte avant de pouvoir passer.",
                    goTxtOpen: "La porte craque en s'ouvrant. J'entre à présent à l'étage.",
                    hitTxt: "Ma main fait mal après avoir frappé la porte. Et la porte n'a pas bougé.",
                    hitTxtOpen: "Je ne vais pas réessayer de frapper la porte.",
                    inspectTxt: "La serrure a l'air très ancienne et rouillée.",
                    inspectTxtOpen: "La poignée est autant rouillée que la serrure. Les gonds aussi.",
                    waitTxt: "Après un moment, un bruit sourd, et la porte face à moi s'ouvre lentement...",
                    waitTxtOpen: "La porte est maintenant ouverte... Attendre m'a servi.",
                    acceptTxt: "C'est la même porte que ma chambre d'enfant. La porte s'ouvre soudainement.",
                    acceptTxt: "C'est la même porte que ma chambre d'enfant. La porte est ouverte."
                },
                {
                    name: "bureau",
                    determinant: "le ",
                    hitOpens: 1,
                    acceptOpens: 1,
                    useOpensIfOpened: 0,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "C'est un bureau en chêne poussiéreux. Un cabinet se trouve à sa droite.",
                    lookTxtOpen: "Le cabinet de droite est maintenant cassé et ouvert.",
                    useTxt: "Il y a un cabinet sur la droite du bureau. Il est fermé à clé.",
                    useTxtOpen: "Le tiroir du cabinet peut être tiré. À l'intérieur, une clé rouillée. Je la prends.",
                    goTxt: "Je suis devant le bureau.",
                    goTxtOpen: "Je suis devant le bureau.",
                    hitTxt: "Je frappe le cabinet, et le tiroir saute sous mon coup de poing.",
                    hitTxtOpen: "Le cabinet est déjà ouvert, ça ne sert à rien de frapper encore.",
                    inspectTxt: "Un dossier posé sur le bureau porte un nom qui m'est familier. Ma qui...?",
                    inspectTxtOpen: "La clé est accompagnée d'une petite étiquette avec mon année de naissance.",
                    waitTxt: "Rien de se passe. Pourquoi est-ce que je perds mon temps ?",
                    waitTxtOpen: "Rien ne se passe non plus.",
                    acceptTxt: "Le bureau est à moi. Je l'avais acheté pour mon premier appartement.",
                    acceptTxtOpen: "Je devais déjà le frapper à l'époque, pour l'ouvrir."
                },
                {
                    name: "carte",
                    determinant: "la ",
                    useOpensIfClosed: 2,
                    useClosesifOpened: 2,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: `C'est une carte postale d'un parc à thème.`,
                    lookTxtOpen: `Au dos, il est écrit "16/08/1996". Ma date de naissance.`,
                    useTxt: "Je retourne la carte pour voir ce qui y est écrit.",
                    useTxtOpen: "Je retourne la carte côté image.",
                    goTxt: "Si seulement je pouvais me projeter dans le lieu montrer par la carte.",
                    goTxtOpen: "Je suis déjà devant la carte postale.",
                    hitTxt: "Je chiffonne la carte postale... je ne sais pas à quoi ça sert.",
                    hitTxtOpen: "Je déplie la carte postale... je ne sais pas pourquoi.",
                    inspectTxt: "Il y a une signature sur l'image. Je ne sais pas à qui elle appartient.",
                    inspectTxtOpen: "J'ai apparemment signé le verso. L'adresse est illisible par contre.",
                    waitTxt: "Rien ne se passe.",
                    waitTxtOpen: "Il n'y a rien à attendre.",
                    acceptTxt: "La signature à l'avant est celle de mon père. Mais pourquoi ? Et comment ?",
                    acceptTxtOpen: "Je suis né en 1996. Mais en quelle année sommes-nous maintenant...?"
                },
                {
                    name: "bibliothèque",
                    determinant: "la ",
                    isOpened: false,
                    isDoorOpen: false,
                    canBeOpened: true,
                    lookTxt: "The bookshelf was mostly old and dusty. The books did not look interesting.",
                    lookTxtOpen: "The shelf had moved to its left. Now there was a door behind.",
                    useTxt: "I opened a book at random. It was some encyclopedia. Nothing of notice.",
                    useTxtOpen: "Of course the door was locked. There was a ticking sound, though.",
                    goTxt: "Go where? The bookshelf wouldn't just run away.",
                    goTxtOpen: "Wow. It actually moved. I was impressed.",
                    goTxtDoorOpen: "I went through the door.",
                    hitTxt: "With a swift hit, some of the books fell.",
                    inspectTxt: `A book caught my eyes. "The Haze". It felt familiar, but I couldn't tell why.`,
                    waitTxt: "The ticking sounds faded, then a loud crack. Sounded like the door behind opened.",
                    acceptTxt: "This bookshelf belonged to my parents. Long ago. The shelf sled and the door behind was open."
                },
                {
                    name: "leave",
                    leftTxt: "I left the house. The air outside bit me with cold.",
                }
            ],
        },
        {
            name: "Scene4",
            sceneNumber: 4,
            texts: [
                ["The room was largely empty, except for a ", "regular", false],
                ["bed.", "regular", true],
                [" Beside it, a ", "regular", false],
                ["bedlamp", "regular", true],
                [" which was lit", "regular", false],
                [", plunging the room in a gloomy atmosphere", "sad", false],
                [". ", "regular", false],
                [" Under the bed was a ", "bargain", false],
                ["teddybear.", "bargain", true],
                [" There was a window, which was broken. ", "regular", false],
                ["On the ground laid some broken ", "angry", false],
                ["glass.", "angry", true],
                [" The moon shone through a hole in the roof.", "accept", false],
                [" There were papers on the ", "regular", false],
                ["wall", "regular", true],
                [" behind me.", "regular", false],
            ],
            items: [
                {
                    name: "bed",
                    inspectOpens: 2,
                    acceptOpens: 2,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "It was... moldy. Must've been here for ages. Pretty gross.",
                    useTxtOpen: "I wouldn't dare touch that. It smelled.",
                    goTxtOpen: "I was at the bed already, not like there was much to see.",
                    hitTxt: "Kicking the bed proved useless. Some insects crawled from under. I got goosebumps.",
                    inspectTxt: "Carved in the bed's framed laid a small copper key. I took it, just in case.",
                    waitTxt: "The stench made me feel sick. And somewhat nostalgic.",
                    acceptTxt: "It was my bed as a child. I knew I hid a key in it. It opened a compartment in the teddybear."
                },
                {
                    name: "bedlamp",
                    useOpens: 1,
                    hitOpens: 1,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "The lamp casted a dim yellow-ish light on the bed.",
                    lookTxtOpen: "Now it was turned off, and the room went dark. The wall, though, was now glowing.",
                    useTxt: "I pulled on the little chain dangling from the lamp. Now it was off.",
                    useTxtOpen: "I already turned it off. I could still see my way out of here.",
                    goTxt: "The lamp was right there.",
                    goTxtOpen: "The lamp was right there.",
                    hitTxt: "I smashed the lightbulb. The lamp couldn't shine anymore.",
                    inspectTxt: "The end of the chain had a little engraving, with my name on it.",
                    waitTxt: "Nothing happened.",
                    acceptTxt: "I remembered this lamp. It stood in my parent's room when I was little."
                },
                {
                    name: "teddybear",
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: `The bear was damp, which made it look gross and malformed.`,
                    lookTxtOpen: `There was a compartment at the back of its head.`,
                    useTxt: "It was heavier than expected. Not sure of its use, though.",
                    useTxtOpen: `Inside there was a note. It said: "Here's to you. Find the final letter".`,
                    goTxt: "The bear's right there.",
                    goTxtOpen: "The bear's right there.",
                    hitTxt: "I kicked the bear. It made squishy sound.",
                    inspectTxt: "The bear had a tag. On it were my initials.",
                    waitTxt: "I looked like it would crumble right in front of my eyes, but it didn't.",
                    acceptTxt: "It was given by my father long ago. Must've been 2 or 3. Loved that bear"
                },
                {
                    name: "glass",
                    useGlassOpens: [4, 1],
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The glass was a bit foggy.",
                    useTxtOpen: "I took a piece of glass and kept it in my coat.",
                    goTxtOpen: "The glass laid at my feet. How many years had this house been in such a state?",
                    hitTxt: "Stomping on the shards, I created smaller shards.",
                    inspectTxt: `Nothing of notice here.`,
                    waitTxt: "Was the glass supposed to magically fix itself? Surprise, it didn't.",
                    acceptTxt: "What was the meaning? That everything would be destroyed in time?"
                },
                {
                    name: "wall",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "The walls is littered with newspaper clips from the 1990s.",
                    lookTxtOpen: `Some words were underlined with glowing ink. "We always loved you".`,
                    useTxt: "I tore a newspaper clip, to find the exact same one underneath.",
                    useTxtOpen: "The ink was somehow fresh. Touching it smeared it further.",
                    goTxt: "I was in front of the wall now.",
                    goTxtOpen: "I was in front of the wall now.",
                    hitTxt: "The wall was study. Wouldn't want to break a bone hitting that...",
                    inspectTxt: `One article stood out. It was from this year, about a car accident.`,
                    waitTxt: "I read the papers in silence. It was pretty ominous.",
                    acceptTxt: "The articles were from the time I was born, and grew up. And something about a fatal car accident..."
                },
                {
                    name: "leave",
                    leftTxt: "I came down to the room. I still had chills from before.",
                }
            ],
        },
        {
            name: "Scene5",
            sceneNumber: 5,
            texts: [
                ["Behind the bookshelf was a staircase which lead to a tiny square room lit only by a series of five ", "regular", false],
                ["candles.", "regular", true],
                [" In the middle stood an ", "regular", false],
                ["altar", "regular", true],
                [" with a tiny car ", "regular", false],
                ["figurine.", "regular", true],
                [" It was very ominous. ", "sad", false],
                ["Scary, even. It made my blood crawl. ", "anger", false],
                ["That car was a replica of mine. ", "accept", false],
                ["There was a ", "sad", false],
                ["book", "sad", true],
                [" next to the figurine.", "sad", false],
            ],
            items: [
                {
                    name: "candles",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The candles were already burning. How is this possible?",
                    useTxtOpen: "I wouldn't dare touch that. I didn't to burn myself.",
                    goTxtOpen: "I was already neat the candles. The room was small enough.",
                    hitTxt: "One of the candles fell after I kicked the stand. Pretty sure it didn't help.",
                    inspectTxt: "The candles' wax was dripping and forming cascading shapes towards the ground.",
                    waitTxt: "I waited for about an hour. The candles didn't diminish in size. That was... weird.",
                    acceptTxt: "These candles were otherworldly. That was the only sound explaination."
                },
                {
                    name: "altar",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    bledOut: false,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "The altar stood proudly in the middle of this tiny chamber. Looked like marble.",
                    lookTxtOpen: "The altar looked scary in the middle of this tiny chamber.",
                    useTxt: "There was a receptacle, probably for some fluid. I shivered.",
                    useTxtOpen: "I wondered... I took the glass shard and made my hand bleed, let it drip on the altar.",
                    goTxt: "The room was too small for me to move anywhere.",
                    goTxtOpen: "The room was too small for me to move anywhere.",
                    hitTxt: "Why would I do that?",
                    inspectTxt: "It was marble indeed. A black-ish stone with white-grey irregular stripes.",
                    waitTxt: "Nothing to wait for.",
                    waitTxtBledOut: "I waited for it to have a result. Suddenly, a light, and I was transported elsewhere.",
                    acceptTxt: "Where was I? Why were all these items and texts about me? I was again transported elsewhere."
                },
                {
                    name: "figurine",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: `This was a family car, similar to the one I bought years ago, when I got my first job.`,
                    useTxtOpen: `I took it in my hands, trembling. Why was I trembling? I put it back.`,
                    goTxtOpen: "The altar was right there. And the car is on it.",
                    hitTxt: "I threw the car to the ground. Picked it up and placed it back after.",
                    inspectTxt: "The car looked hand-painted. There were a few imperfections here and there.",
                    waitTxt: "I waited, but it didn't do much.",
                    acceptTxt: "I bought that exact same car years ago. Last I knew I was driving it. Why am I here then?"
                },
                {
                    name: "book",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    tookTheBook: false,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: `It was a copy of "The Haze", a poetry book my mom used to read me when I was little.`,
                    useTxtOpen: "I took the book, maybe to read it later.",
                    goTxtOpen: "I was already at the altar upon which the book sat.",
                    hitTxt: "Why would I do such a thing? This had sentimental value.",
                    inspectTxt: `I read an extract: "Let it flow, like clear water, and be. Be with the ones you love."`,
                    waitTxt: "Waiting didn't do much. At all.",
                    acceptTxt: "It was a book about life after death. Weird to have been read that as a kid."
                },
                {
                    name: "leave",
                    leftTxt: "I rush up the stairs, I did not wait to stay down there for too long.",
                }
            ],
        },
        {
            name: "Final scene",
            sceneNumber: 6,
            texts: [
                ["The light was blinding at first. The warmth was unsettling, considering the coldness of the house. Where was I? ", "regular", false],
                ["Only two things laid before me in the garden. First, there was a ", "accept", false],
                ["letter,", "accept", true],
                [" folded in the grass, and a ", "accept", false],
                ["screen,", "accept", true],
                [" old-fashioned, but it seemed to be working. For the first time I felt... good. At peace.", "accept", false],
            ],
            items: [
                {
                    name: "letter",
                    lookingAtLetter: false,
                    letterRead: false,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The letter was folded. It was white, neat. It had a pleasant smell to it.",
                    useTxtOpen: [
                        `<div class="textDiv">Dear me,</div>`,
                        `<div class="textDiv">I've been meaning to tell you so, so much. About how I love you. And how I have been happy being you all this time. You must have many questions. Let me get to some.</div>`,
                        `<div class="textDiv">First and foremost, that house you've been seeing is indeed yours. Ours. The one we grew up in. It's been decayed this way because of we never thought about it in our adult life. We've been living our life, we didn't have the need to remember, we were busy with work, love, friends... It's unfortunate, but that's behind us now.</div>`,
                        `<div class="textDiv">Now the important part. Yes. You died. I mean, we died. Together. At the same time. You had a bad car accident. You've been badly injured, and fought for your life, in a coma, for 4 months. You caved in, you had to, but you never stopped fighting.</div>`,
                        `<div class="textDiv">But you do not have to worry anymore. The electrons of our body mingle and dance with the electrons of the ground below us and the air. We are no longer breathing. And we have to remember that there is no point where any of that ends and we begin. We now are energy. Not memory. Not self. Our choices, name, personality, all came after us. We were before them, and we will be after.</div>`,
                        `<div class="textDiv">There is no time. There is no death. Life is a dream. It's a wish. Made again, and again, and again, and again, and on into eternity. We are all of it. We are everything. We are all. </div>`,
                        `<div class="textDiv">So there is nothing to fear. You are loved. We are everywhere. We are dead, yet, in a sense, we are more alive. We joined the stars, and the rest of the universe.</div>`,
                        `<div class="textDiv">With you always,</div><br/><div class="textDiv">`,
                    ],
                    goTxtOpen: "It was at my feet already.",
                    hitTxt: "Was I out of your mind? No way would I've done that!",
                    inspectTxt: "The letter was rather small in my hands. It felt... fragile.",
                    waitTxt: "I took in the moment. I felt so... so peaceful.",
                    acceptTxt: "The letter was signed by myself. It was touching. I felt a tear running down my cheek."
                },
                {
                    name: "screen",
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The screen flashed pictures of places. Seemed familiar, somehow.",
                    useTxtOpen: "There wasn't any buttons to use. It was just a sceen.",
                    goTxtOpen: "The screen was in front of me.",
                    hitTxt: "I wasn't going to.",
                    inspectTxt: "These were scenes from my life. Memories, flashing, incendescent.",
                    waitTxt: "I watched for a few minutes, no picture was the same as the other.",
                    acceptTxt: "I felt like there was something missing. What was that letter saying?",
                    acceptTxtLetterOpen: [
                        [
                            "There I stood, at the end of my journey.",
                            "That house, once alien, now felt familiar.",
                            "I accepted its warm embrace.",
                            "Then, everything went black.",
                            "I was now part of all, whole again.",
                            "I stopped dreaming."
                        ],
                        [
                            "This is my home",
                            "I now feel it",
                            "I am the cosmos",
                            "I am everything",
                            "I am alive",
                            "I plunged into the horizon"
                        ]
                    ]
                },
                {
                    name: "leave",
                    leftTxt: "Why would I leave? I wouldn't even know how to.",
                }
            ],
        },
        {
            name: "Act Title",
            sceneNumber: 7,
            texts: [
                {
                    id: 0,
                    text: [
                        ["Acte 1", true],
                        ["La maison dans la rue", false]
                    ]
                },
                {
                    id: 1,
                    text: [
                        ["Acte 2", true],
                        ["L'ascension", false]
                    ]
                },
                {
                    id: 2,
                    text: [
                        ["Acte 3", true],
                        ["Mystères et découvertes", false]
                    ]
                },
                {
                    id: 3,
                    text: [
                        ["Acte 4", true],
                        ["La pièce cachée", false]
                    ]
                },
                {
                    id: 4,
                    text: [
                        ["Act 5", true],
                        ["Révélations", false]
                    ]
                }
            ],
        },
        {
            name: "Entrez votre nom",
            sceneNumber: 8,
            title: "Quel est votre prénom ?",
            text1: "S'il-vous-plaît entrez un prénom.",
            text2: "Utilisez votre vrai prénom fonctionne mieux pour le jeu."
        },
    ],
    currentScene: 6,
    currentAct: 0,
    username: "Alain",
    isFinished: false,
    isMenu: false,
    previousInput: [],
    mesInputs: [],
    nbrInputs: 0
};

let baseGameTxt = JSON.parse(JSON.stringify(myGameTxt));
myGameTxt.mesInputs = countOutcomes();
myGameTxt.nbrInputs = myGameTxt.mesInputs.length;

function countOutcomes() {
    let mesCommandes = [];
    let totalCommandsForThisAct = 0;
    let i = 0;
    let monAct = myGameTxt.currentAct;
    if (monAct == 0) i = 2;
    else if (monAct == 1 || monAct == 2) i = 3;
    else if (monAct == 3) i = 4;
    else if (monAct == 4) i = 5;
    for (let k = i; k >= 0; k--) {
        let mesItems = myGameTxt.scenes[k].items;
        let monActe = parseInt(monAct);
        let nbrCommands = 3 + monActe;
        if (mesItems) {
            let lengthItem = parseInt(mesItems.length);
            let actualItemLength = lengthItem - 1;
            if (monAct < 2 && k == 2) {
                actualItemLength--;
            }
            if (monAct == 2 && k == 3) {
                actualItemLength--;
            }
            mesItems.forEach((e) => {
                let canBeAdded = false;
                let canBeAdded2 = false;
                if (e.name != "leave") {
                    if (e.canBeOpened && e.isOpened == false) {
                        if (monAct == 0) {
                            if (e.name == "door") {
                                actualItemLength++;
                                canBeAdded = true;
                            }
                        }
                        else if (monAct == 1) {
                            if (e.name == "door" || e.name == "desk" || e.name == "window" || e.name == "bedlamp" || e.name == "staircase") {
                                actualItemLength++;
                                canBeAdded = true;
                            }
                        }
                        else if (monAct == 2) {
                            if (e.name == "door" || e.name == "desk" || e.name == "window" || e.name == "bedlamp" || e.name == "staircase" || e.name == "bed" || e.name == "postcard" || e.name == "bookshelf") {
                                actualItemLength++;
                                canBeAdded = true;
                            }
                        }
                        else if (monAct == 3) {
                            if (e.name == "door" || e.name == "desk" || e.name == "window" || e.name == "bedlamp" || e.name == "staircase" || e.name == "bed" || e.name == "postcard" || e.name == "bookshelf" || e.name == "altar") {
                                actualItemLength++;
                                canBeAdded = true;
                            }
                        }
                        else {
                            actualItemLength++;
                            canBeAdded = true;
                        }
                        if (canBeAdded) {
                            mesCommandes.push(`look ${e.name} ${k} opened`);
                            mesCommandes.push(`use ${e.name} ${k} opened`);
                            mesCommandes.push(`go ${e.name} ${k} opened`);
                            if (monAct >= 1) mesCommandes.push(`hit ${e.name} ${k} opened`);
                            if (monAct >= 2) mesCommandes.push(`inspect ${e.name} ${k} opened`);
                            if (monAct >= 3) mesCommandes.push(`wait ${e.name} ${k} opened`);
                            if (monAct >= 4) mesCommandes.push(`accept ${e.name} ${k} opened`);
                        }
                    }
                    if (monAct == 0 && e.name != "postcard") canBeAdded2 = true;
                    if (monAct == 1 && e.name != "postcard" && e.name != "teddybear") canBeAdded2 = true;
                    if (monAct > 1) canBeAdded2 = true;

                    if (canBeAdded2) {
                        mesCommandes.push(`look ${e.name} ${k}`);
                        mesCommandes.push(`use ${e.name} ${k}`);
                        mesCommandes.push(`go ${e.name} ${k}`);
                        if (monAct >= 1) mesCommandes.push(`hit ${e.name} ${k}`);
                        if (monAct >= 2) mesCommandes.push(`inspect ${e.name} ${k}`);
                        if (monAct >= 3) mesCommandes.push(`wait ${e.name} ${k}`);
                        if (monAct >= 4) mesCommandes.push(`accept ${e.name} ${k}`);
                    }
                }
            });
            totalCommandsForThisAct += (actualItemLength * nbrCommands) + 1;
        }
    }
    return mesCommandes;
}