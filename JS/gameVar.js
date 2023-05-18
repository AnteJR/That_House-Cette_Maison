let today = getToday();

const MYGAME = {
    scenes: [
        {       // ACTES
            name: "actes",
            texts: [
                {
                    id: 0,
                    text: [
                        ["Prologue", true],
                        ["Dans les rues sinueuses.", false]
                    ]
                }, {
                    id: 1,
                    text: [
                        ["Acte 1", true],
                        ["La maison dans la rue.", false]
                    ]
                }, {
                    id: 2,
                    text: [
                        ["Acte 2", true],
                        ["Entrée fracassante.", false]
                    ]
                }, {
                    id: 3,
                    text: [
                        ["Acte 3", true],
                        ["L'ascension.", false]
                    ]
                }, {
                    id: 4,
                    text: [
                        ["Acte 4", true],
                        ["Au clair de lune.", false]
                    ]
                }, {
                    id: 5,
                    text: [
                        ["Acte 5", true],
                        ["Par-delà cette maison.", false]
                    ]
                }, {
                    id: 6,
                    text: [
                        ["Épilogue", true],
                        ["L'horizon.", false]
                    ]
                }
            ],
        }, {    // PRENOM
            name: "nommez-vous",
            title: "Quel est votre prénom ?",
            text1: "S'il-vous-plaît entrez un prénom.",
            text2: "Utiliser votre vrai prénom fonctionne mieux pour le jeu."
        }, {    // PORTAIL
            name: "portail",
            texts: [
                {
                    text: "Mes yeux s'ouvrent face à une rue. Je ne sais pas où je suis. Je ne reconnaît pas ces maisons.",
                    act: "shock",
                    active: false
                }, {
                    text: "Je n'étais pas là il y a une seconde. J'étais ailleurs. Mais où ? Où donc...?",
                    act: "shock",
                    active: false
                }, {
                    text: "Je ne sais plus. Même en m'efforçant, impossible de m'en souvenir.",
                    act: "shock",
                    active: false
                }, {
                    text: "Mes pas s'accélèrent, je passe devant des bâtisses, toutes uniformes. Les mêmes, encore et encore. Et encore.",
                    act: "shock",
                    active: false
                }, {
                    text: "Ma respiration est halletante. Est-ce que je deviens fou ? Ce n'est pas possible, je dois revenir en arrière.",
                    act: "shock",
                    active: false
                }, {
                    text: "Mais la",
                    act: "shock",
                    active: false
                }, {
                    text: "route",
                    act: "shock",
                    active: true
                }, {
                    text: "ne me permet que d'avancer. Derrière moi, une brume. L'obscurité. Le néant. Les paysages, disparus, comme mes souvenirs...",
                    act: "shock",
                    active: false
                }, {
                    text: "Me revoila devant cette maison...",
                    act: "angry",
                    active: false
                }, {
                    text: "Je me suis perdu dans les rues depuis un moment. Une maison m'intringue, et je m'y arrête. Je me tiens devant son jardin. Je suis face à un",
                    act: "regular",
                    active: false
                }, {
                    text: "portail.",
                    act: "regular",
                    active: true
                }, {
                    text: "À ma droite, une",
                    act: "bargain",
                    active: false
                }, {
                    text: "boîte",
                    act: "bargain",
                    active: true
                }, {
                    text: "aux lettres endommagée par le temps.",
                    act: "bargain",
                    active: false
                }, {
                    text: "La",
                    act: "sad",
                    active: false
                }, {
                    text: "Lune",
                    act: "sad",
                    active: true
                }, {
                    text: "brille d'un doux éclat, et révèle un",
                    act: "sad",
                    active: false
                }, {
                    text: "buisson",
                    act: "sad",
                    active: true
                }, {
                    text: "à gauche du portail.",
                    act: "sad",
                    active: false
                }, {
                    text: "De là part un ",
                    act: "regular",
                    active: false
                }, {
                    text: "chemin",
                    act: "regular",
                    active: true
                }, {
                    text: "qui mène à la",
                    act: "regular",
                    active: false
                }, {
                    text: "porte",
                    act: "regular",
                    active: true
                }, {
                    text: "d'entrée, sous un porche.",
                    act: "regular",
                    active: false
                }, {
                    text: "C'est la ",
                    act: "accept",
                    active: false
                }, {
                    text: "maison",
                    act: "accept",
                    active: true
                }, {
                    text: "dans laquelle j'ai grandi.",
                    act: "accept",
                    active: false
                }, {
                    text: `Je ne suis plus seul. Parler en "je" est même trompeur. Mes particules flottent avec le reste du monde.`,
                    act: "end",
                    active: false
                }, {
                    text: `Le temps s'écroule, et ne s'écoule plus comme avant. Est-ce que 10 secondes ont passé ? Ou serait-ce plutôt 10 ans, ou 10 siècles ?`,
                    act: "end",
                    active: false
                }, {
                    text: `Rien n'est moins sûr. Cette`,
                    act: "end",
                    active: false
                }, {
                    text: `maison,`,
                    act: "end",
                    active: true
                }, {
                    text: `celle que j'ai revisité, m'a permis de comprendre ce qui m'attendait au-delà de ce qu'on appelle la vie.`,
                    act: "end",
                    active: false
                }, {
                    text: `L'horizon est vaste, invisible tant il est grand. L'univers est partout, tout comme mes électons, et mes atomes.`,
                    act: "end",
                    active: false
                }
            ],
            items: [
                {       // portail
                    name: "portail",
                    determinant: "le ",
                    isLocated: true,
                    one: {
                        isOpened: true,
                        open: {
                            look: "Le portail est entrouvert. Je peux aisément prendre le chemin.",
                            use: "La peinture s'effrite sous mes doigts. Le bois dessous est un légèrement humide.",
                            go: "Je suis déjà devant le portail."
                        }
                    },
                    two: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "frapper", state: "open", target: [0, 1, 2] }],
                            look: "Le portail est différent. Il est maintenant en métal. Il est aussi fermé à clef et l'accès m'est bloqué.",
                            use: "Le métal est froid sous mes doigts. La serrure est rouillée, et s'effrite par endroit.",
                            go: "Je suis déjà devant le portail.",
                            hit: "Je donne un coup de pied au portail. J'entends au bruit sourd, et la poignée est cassée."
                        },
                        open: {
                            look: "Le portail est maintenant entrouvert. Je peux aisément prendre le chemin.",
                            use: "La serrure est fendue en deux morceaux tranchants. Je n'ose pas la toucher de peur de me couper.",
                            go: "Je suis déjà devant le portail.",
                            hit: "Le portail est cassé et ouvert, pas besoin de le frapper encore."
                        }
                    },
                    three: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "Le portail est encore différent. Il est en métal, mais en bien meilleur état. Il est à nouveau fermé à clef.",
                            use: "Le métal est froid sous mes doigts. Il est légèrement mouillé et semble solide.",
                            go: "Je suis déjà devant le portail.",
                            hit: "Je donne un coup de pied au portail. Rien ne semble se passer.",
                            inspect: "Il y a un nom sur le portail, mais il est illisible, à l'exception de deux lettres : ",

                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [0, 1, 2] }],
                            look: "J'ai maintenant la clef, je peux ouvrir le portail.",
                            use: "J'ouvre le portail avec la clef de la boîte aux lettres.",
                            go: "Je suis déjà devant le portail.",
                            hit: "Le frapper ne va pas m'aider ; j'ai la clef, je peux l'utiliser.",
                            inspect: `La serrure correpond à la clef que j'ai récupérée.`
                        },
                        open: {
                            look: "Le portail est maintenant ouvert. Je peux aisément prendre le chemin.",
                            use: "La poignée m'est familière, une fois en main. Je me demande pourquoi.",
                            go: "Je suis déjà devant le portail.",
                            hit: "Le portail est déjà ouvert, je ne vois pas pourquoi je le frapperais.",
                            inspect: `J'ai comme un sentiment de déjà vu sur cette "version" du portail.`
                        }
                    },
                    four: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "Cette fois, le portail est le même que mon dernier passage. Il est en métal, en bon état, et fermé à clef.",
                            use: "Le métal est froid sous mes doigts. Cette fois, une fine couche de peinture blanche rugueuse le recouvre.",
                            go: "Je suis déjà devant le portail.",
                            hit: "Je donne un coup de pied au portail. Mon pied droit commence à me faire mal.",
                            inspect: "Le nom n'a pas changé. Il est toujours illisible à l'exception de deux lettres : ",
                            wait: "Attendre devant le portail me rend inconfortable. Il fait froid à l'extérieur.",
                        },
                        opening: {
                            interaction: [{ command: "frapper", state: "open", target: [1, 2] }],
                            look: "J'ai maintenant la clef, je peux ouvrir le portail.",
                            use: "J'ouvre le portail avec la clef récupérée dans le buisson.",
                            go: "Je suis déjà devant le portail.",
                            hit: "Le frapper ne va pas m'aider ; j'ai la clef, je peux l'utiliser.",
                            inspect: `La serrure correpond à la clef que j'ai récupérée dans le buisson.`,
                            wait: "À quoi bon attendre ? J'ai la clef en main."
                        },
                        open: {
                            look: "Le portail est maintenant ouvert. Je peux aisément prendre le chemin.",
                            use: "Je pousse le portail gentiment, son ressort le ramène à moi. Il est toujours ouvert.",
                            go: "Je suis déjà devant le portail.",
                            hit: "Le portail est déjà ouvert et mon pied me fait mal, je ne vais pas le frapper.",
                            inspect: `Malgré mes efforts, impossible de reconnaître le nom inscrit sur le portail.`,
                            wait: "Il fait trop froid pour attendre, j'ai besoin de bouger."
                        }
                    },
                    five: {
                        isOpened: true,
                        open: {
                            look: "C'est un portail en métal peint en blanc. Il ne nécessite pas de clef pour entrer.",
                            use: "Si le métal est froid sous mes doigts encore une fois, la sensation est moins désagréable qu'avant.",
                            go: "Je suis déjà devant le portail.",
                            hit: "Je n'ai pas envie de frapper le portail.",
                            inspect: "Le nom sur le portail est mon nom de famille. Il est lisible cette fois.",
                            wait: "L'air est plus doux cette fois. Une odeur familière me parvient du jardin.",
                            accept: "C'est le portail de la maison de mes parents. Je le reconnais maintenant."
                        }
                    }
                }, {    // chemin
                    name: "chemin",
                    determinant: "le ",
                    isLocated: true,
                    one: {
                        isOpened: true,
                        open: {
                            win: { command: "aller" },
                            look: "C'est un court chemin de terre mal entretenu à travers un jardin qui mène à un porche.",
                            use: "Je me baisse et touche le sol. La terre est humide et froide.",
                            go: "Je prends le chemin en direction du porche.",
                        }
                    },
                    two: {
                        isOpened: false,
                        closed: {
                            look: "Le chemin me paraît plus long cette fois. Il zig-zag un peu.",
                            use: "Le chemin est derrière le portail qui est fermé à clef, je ne peux pas le toucher pour le moment.",
                            go: "Il me faut d'abord ouvrir le portail.",
                            hit: "Il me faut d'abord ouvrir le portail pour atteindre le chemin.",
                        },
                        open: {
                            win: { command: "aller" },
                            look: "Le chemin me paraît plus long cette fois. Il zig-zag un peu.",
                            use: "Le sol est moins en terre qu'en gravier. Il est plus dur et rugueux sous ma paume.",
                            go: "Je prends le chemin en direction du porche.",
                            hit: "Je frappe le chemin de mon talon. Rien ne se passe. Ma colère ne passe pas non plus."
                        }
                    },
                    three: {
                        isOpened: false,
                        closed: {
                            look: "Le chemin s'étend dans un vaste jardin à la nature dormante.",
                            use: "Le chemin est derrière le portail qui est fermé à clef, je ne peux pas le toucher pour le moment.",
                            go: "Il me faut d'abord ouvrir le portail.",
                            hit: "Il me faut d'abord ouvrir le portail pour atteindre le chemin.",
                            inspect: "Je ne peux pas me rapprocher du chemin pour le moment. Le portail est fermé.",
                        },
                        open: {
                            win: { command: "aller" },
                            look: "Le chemin s'étend dans un vaste jardin à la nature dormante.",
                            use: "Le sol de gravier est rassurant sous mes pieds. Il est ferme et solide.",
                            go: "Je prends le chemin en direction du porche.",
                            hit: "Je frappe le chemin de mon talon. Rien ne se passe. Cela ne sert à rien",
                            inspect: "Le chemin est composé d'une fine couche de gravillons gris et beige."
                        }
                    },
                    four: {
                        isOpened: false,
                        closed: {
                            look: "Le chemin est plus terne, cette fois. Il semble plus... propre, plus travaillé.",
                            use: "Il me faut ouvrir le portail avant de pouvoir faire ça.",
                            go: "Je dois d'abord ouvrir le portail.",
                            hit: "Il me faut ouvrir le portail en premier.",
                            inspect: "Je ne peux pas le faire pour le moment. Le portail est fermé.",
                            wait: "Attendre ne va pas me permettre d'atteindre le chemin. L'air est frais, j'aimerais rentrer chez moi.",
                        },
                        open: {
                            win: { command: "aller" },
                            look: "Le chemin est plus terne, cette fois. Il semble plus... propre, plus travaillé.",
                            use: "Le gravier est coulé avec du ciment, je ne peux plus le prendre dans ma main.",
                            go: "Je prends le chemin en direction du porche.",
                            hit: "Je ne vois pas l'intérêt de frapper le chemin, cela ne me mènera à rien.",
                            inspect: "Il y a çà et là de petites mauvaises herbes qui poussent dans les fissures du béton.",
                            wait: "Un vent froid me passe dans la nuque. Je n'aime pas rester là-dehors."
                        }
                    },
                    five: {
                        isOpened: true,
                        open: {
                            look: "Le chemin est clair, net et défini. Il sillonne le jardin jusqu'à la maison.",
                            use: "Le chemin est ferme, le béton qui le compose est doux et apaisant.",
                            go: "Je vais prendre ce chemin une dernière fois...",
                            hit: "Je n'ai pas envie de frapper le chemin.",
                            inspect: "Je me rappelle chaque creux, chaque crevasse, chaque mauvaise herbe qui parcourent le chemin.",
                            wait: "Je suis fatigué. J'ai envie de rentrer, me reposer, enfin.",
                            accept: "Je retourne à la maison. Je rentre chez moi. Où j'ai vécu, où j'ai... existé."
                        }
                    }
                }, {    // porte
                    name: "porte",
                    isLocated: true,
                    determinant: "la ",
                    one: {
                        isOpened: true,
                        open: {
                            win: { command: "aller" },
                            look: "C'est une porte de bois. Je suis trop loin pour la voir précisément.",
                            use: "Il me faut me rapprocher pour pouvoir faire ça.",
                            go: "Je me rends vers la porte, vers cette maison..."
                        }
                    },
                    two: {
                        isOpened: false,
                        closed: {
                            look: "La porte a maintenant une petite vitre en son centre, sur sa moitié supérieure.",
                            use: "Je ne peux pas tenter de l'ouvrir sans m'en rapprocher.",
                            go: "Le portail est fermé, la maison m'est pour le moment inaccessible...",
                            hit: "J'aimerais bien, mais je suis trop loin, et le portail m'empêche d'avancer.",
                        },
                        open: {
                            win: { command: "aller" },
                            look: "La porte a maintenant une petite vitre en son centre, sur sa moitié supérieure.",
                            use: "Je ne peux pas tenter de l'ouvrir sans m'en rapprocher.",
                            go: "Je me rends vers la porte, sous le porche.",
                            hit: "J'aimerais bien, mais je suis trop loin. Je devrais me rapprocher."
                        }
                    },
                    three: {
                        isOpened: false,
                        closed: {
                            look: "La porte semble avoir une fine couche de peinture.",
                            use: "Je ne peux rien faire sans m'en rapprocher.",
                            go: "Le portail est fermé, je ne peux pas m'y rendre...",
                            hit: "À quoi bon ? Le portail est fermé de toute façon.",
                            inspect: "Il vaudrait mieux m'en rapprocher pour inspecter quoi que ce soit.",
                        },
                        open: {
                            win: { command: "aller" },
                            look: "La porte semble avoir une fine couche de peinture.",
                            use: "Je ne peux rien faire sans m'en rapprocher.",
                            go: "Je me dirige vers le porche pour atteindre la porte.",
                            hit: "Je peux le faire, si je m'en approche. Ça avait marché la dernière fois.",
                            inspect: "Il vaudrait mieux m'en rapprocher pour inspecter quoi que ce soit."
                        }
                    },
                    four: {
                        isOpened: false,
                        closed: {
                            look: "La porte m'a l'air plus précise, mais elle est trop loin pour voir les détails.",
                            use: "Il faut s'en rapprocher, je le sais...",
                            go: "Je ne peux pas y aller avant d'ouvrir le portail.",
                            hit: "Je ne vois pas l'intérêt. De toute façon elle est trop loin.",
                            inspect: "Il vaudrait mieux m'en rapprocher.",
                            wait: "Attendre ne va pas la faire s'ouvrir, ni ouvrir le portail.",
                        },
                        open: {
                            win: { command: "aller" },
                            look: "La porte m'a l'air plus précise, mais elle est trop loin pour voir les détails.",
                            use: "Il faut s'en rapprocher, je le sais...",
                            go: "Je me dirige vers la porte, à-travers le chemin.",
                            hit: "Je suis trop loin. Et ça n'avait pas marché la dernière fois.",
                            inspect: "Il vaudrait mieux m'en rapprocher.",
                            wait: "La porte semble m'inviter avec ce froid. Mieux vaut que je rentre.",
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            look: "La porte a l'air accueillante d'ici.",
                            use: "Je vais l'ouvrir une dernière fois, mais pas tout de suite.",
                            go: "J'ai l'impression d'oublier quelque chose.",
                            hit: "Je ne peux pas la frapper d'ici.",
                            inspect: "Je pourrai l'admirer de plus près.",
                            wait: "L'air est plus sec, et plus chaud qu'avant. Une brise légère frôle mes joues.",
                            accept: "C'est la porte de la maison de mes parents. Une nostalgie m'envahit.",
                        },
                        open: {
                            win: { command: "aller" },
                            look: "La porte m'accueillit.",
                            use: "Je devrais m'en rapprocher pour l'ouvrir.",
                            go: "Je me dirige une dernière fois vers la porte de ma maison.",
                            hit: "Je ne veux plus la frapper.",
                            inspect: "Je pourrai l'admirer de plus près quand je m'en serai approché.",
                            wait: "J'inspire un grand coup, apprécie ce moment devant ma maison.",
                            accept: "Ce sera la dernière fois que je l'ouvre...",
                        }
                    },
                }, {    // boîte
                    name: "boite",
                    isLocated: true,
                    determinant: "la ",
                    three: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "frapper", state: "open", target: [3] }],
                            look: "La boîte est toute cabossée et tient à peine debout.",
                            use: "La boîte est fermée, et un pli du métal la coince dans cette position.",
                            go: "La boîte est déjà devant moi.",
                            hit: "Je frappe la boîte. Celle-ci se débloque à cause du choc.",
                            inspect: "Il n'y a rien à voir de spécial sur cette boîte, la plaquette du nom n'est plus là.",
                        },
                        open: {
                            interaction: [{ command: "inspecter", state: "opening", target: [0] }],
                            look: "Suite à mon coup de poing, la boîte est encore plus difforme.",
                            use: "Je peux ouvrir la porte de la boîte aux lettres, mais elle ne se ferme plus.",
                            go: "La boîte est déjà devant moi.",
                            hit: "Je l'ai déjà cassée, je ne vais pas en remettre une couche.",
                            inspect: `À l'intérieur se trouve une petite clef ronde. Il y est écrit "portail". Je la prends.`
                        }
                    },
                    four: {
                        isOpened: true,
                        open: {
                            look: "La boîte au lettre est réparée. Elle n'est plus cabossée comme avant.",
                            use: "En posant ma main sur elle, son métal est froid et lisse. Elle semble robuste.",
                            go: "La boîte aux lettres est déjà devant moi.",
                            hit: "Elle est déjà ouverte, pas besoin de la casser cette fois.",
                            inspect: "Pas de clef à l'intérieur. Je vais devoir chercher ailleurs.",
                            wait: "Je ne vois pas sur quoi je dois attendre... c'est une boîte aux lettres vide."
                        }
                    },
                    five: {
                        isOpened: true,
                        open: {
                            look: "La boîte m'est familière. Elle est en métal poli mat.",
                            use: "Au toucher, des souvenirs me reviennent. Je connais cette boîte aux lettre.",
                            go: "La boîte aux lettres est déjà devant moi.",
                            hit: "Je n'ai plus envie de frapper la boîte aux lettres.",
                            inspect: "La boîte est vide, et la plaquette toujours perdue.",
                            wait: "La lune se reflète de manière hypnotique sur le métal de la boîte.",
                            accept: "Même sans mon nom, je la reconnais comme étant la boîte aux lettres de mon appartement."
                        }
                    },
                }, {    // lune
                    name: "lune",
                    determinant: "la ",
                    isLocated: true,
                    four: {
                        isOpened: true,
                        open: {
                            interaction: [{ command: "attendre", state: "opening", target: [5] }],
                            look: "La lune brille dans le ciel d'une pâle lueur. Elle est presque pleine.",
                            use: "Je ne peux pas toucher la lune. Même si l'idée me plairait.",
                            go: "Impossible, c'est la lune...",
                            hit: "Ça s'annonce compliqué.",
                            inspect: "Les cratères sont visibles d'ici. Ils rajoutent de la rudesse à l'astre.",
                            wait: "En regardant la lune, je remarque un reflet de sa lumière dans le buisson à ma gauche. Une clef ?"
                        }
                    },
                    five: {
                        isOpened: true,
                        open: {
                            look: "La lune éclaircit la nuit de sa douce blancheur.",
                            use: "Pourquoi toucher la lune ? J'ai tout un monde et une vie ici.",
                            go: "Ça ne va malheureusement pas être possible, mais un jour peut-être.",
                            hit: "Je ne vois pas l'intérêt. La lune est si belle.",
                            inspect: "La rudesse de sa surface m'apaise. J'aime me perdre dans ses cratères.",
                            wait: "Pas de clef dans un buisson cette fois, juste un sentiment de plénitude.",
                            accept: "La lune est magnifique. Elle m'apaise. J'ai toujours aimé cet astre."
                        }
                    }
                }, {    // buisson
                    name: "buisson",
                    determinant: "le ",
                    isLocated: true,
                    four: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "Le buisson est touffu, mais ses feuilles sont mortes.",
                            use: "Ses branches se brisent sans effort sous mes doigts tellement il est sec.",
                            go: "Je suis déjà devant le buisson.",
                            hit: "Donner même un léger coup de pied transforme les feuilles en poussière.",
                            inspect: "Le buisson est similaire à du gui, ses feuilles ont comme des piques.",
                            wait: "Le vent fait frémir les branches mortes, virvoleter les feuilles déséchées."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "opening", target: [0] }, { command: "utiliser", state: "open", target: [5] }],
                            look: "La lune reflète une clef, coincée entre les brindilles déséchées.",
                            use: "Je ramasse la clef. L'arbuste craque quand je la retire. Je la glisse dans une poche.",
                            go: "Je suis déjà devant le buisson.",
                            hit: "Je ne vois pas en quoi ça m'aiderait à récupérer la clef.",
                            inspect: "La clef est la même que j'ai récupérée toute à l'heure dans la boîte aux lettres.",
                            wait: "Je ne vais pas attendre de récupérer la clef, il fait assez froid comme ça."
                        },
                        open: {
                            look: "Le buisson est touffu, mais ses feuilles sont mortes.",
                            use: "Ses branches se brisent sans effort sous mes doigts tellement il est sec.",
                            go: "Je suis déjà devant le buisson.",
                            hit: "Donner même un léger coup de pied transforme les feuilles en poussière.",
                            inspect: "Le buisson est similaire à du gui, ses feuilles ont comme des piques.",
                            wait: "Le vent fait frémir les branches mortes, virvoleter les feuilles déséchées."
                        }
                    },
                    five: {
                        isOpened: true,
                        open: {
                            look: "Le buisson a retrouvé la vie. Ses feuilles sont plus vertes, il est plus vigoureux.",
                            use: "Ses branches sont fraîches, et sont flexibles. Il est agréable au toucher.",
                            go: "Je suis déjà devant le buisson.",
                            hit: "Je ne vois pas pourquoi je ferais ça.",
                            inspect: "Le buisson est un chèvrefeuille arbustif.",
                            wait: "La légère brise du soir berce les branches du buisson.",
                            accept: "J'avais un arbrisseau de ce genre chez moi, il y a quelques années."
                        }
                    }
                }, {    // maison
                    name: "maison",
                    isLocated: true,
                    determinant: "la ",
                    five: {
                        isOpened: true,
                        open: {
                            interaction: [{ command: "accepter", state: "open", target: [2] }],
                            look: "Ma maison est assez modeste, de par ses deux étages et sa peinture beige très sobre.",
                            use: "Je devrais me rapprocher de ma maison pour la toucher.",
                            go: "Je préfère prendre mon temps et ne pas me presser. J'observe ma maison un moment.",
                            hit: "Je n'ai pas envie de frapper ma maison.",
                            inspect: "De là, je ne vois pas beaucoup de détails.",
                            wait: "L'air doux d'une nuit d'été est agréable. Il manque tout de même le bruit des criquets.",
                            accept: "C'est donc ma maison. Je suis prêt à y entrer une dernière fois.",
                        }
                    },
                    six: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "accepter", state: "open", target: [6] }],
                            accept: "Cette maison qui est la mienne est maintenant lointaine. Un souvenir. Elle est aussi omniprésente. Une énergie"
                        },
                        open: {
                            triggerEvent: { command: "accepter", name: "theEnd" },
                            accept: "Je (ne) suis (plus)."
                        }
                    }
                }, {    // route
                    name: "route",
                    isLocated: true,
                    determinant: "la ",
                    zero: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "voir", state: "open", target: [7], condition: 4 }],
                            look: [
                                "Pourquoi cette route ? Qu'est-ce que je fais là ? Elle ne m'a pas l'air familière. Je n'ai pas envie de la prendre.",
                                "La route est comme un gouffre qui s'enfonce dans un quartier que je ne connais pas. Est-ce que je me suis perdu ?",
                                "Je ne sais pas si je veux continuer. Mon estomac se tord. Mes tempes transpirent. Mes joues se crispent.",
                                "La brume derrière moi m'empêche de revenir en arrière. Est-ce que je devrais juste prendre la route ? Continuer d'avancer ?"
                            ],
                            use: "Mon corps est paralysé pour le moment. J'ai de la peine à respirer. Oh mon Dieu, qu'est-ce qui se passe ?",
                            go: "Mes jambes ne me répondent pas. Pourquoi cette route ? Pourquoi ce quartier ? Je ne comprends pas.",
                        },
                        open: {
                            newAct: { command: "aller" },
                            look: "Je ne vois qu'une façon de sortir d'ici : voir où cette route me mène.",
                            use: "Je sens peu à peu mes jambes à nouveau. Je devrais pouvoir marcher un moment.",
                            go: "Hésitants, mes pas se font l'un après l'autre, lentement... J'avance dans la rue, la nuit m'enlace. Le silence m'entoure, alors que je m'enfonce sur le route goudronnée.",
                        }
                    }
                }, {    // leave
                    name: "leave",
                    zero: { text: "La route derrière moi est plongée dans la brume. Je ferais mieux d'avancer." },
                    one: { text: "Cette maison m'attire. En plus, j'ai marché trop longtemps, je ne vais pas partir maintenant." },
                    two: { text: "Je suis à nouveau devant cette maison. Pourquoi ? Je ne peux pas partir maintenant." },
                    three: { text: "Je ne comprends pas pourquoi je suis à nouveau devant cette maison, mais je compte le découvrir. Je reste." },
                    four: { text: "Je veux savoir ce qui se cache derrière cette maison. Je ne vais pas partir." },
                    five: { text: "Cette maison est mienne. Je ne vais pas partir. Je dois y entrer une dernière fois..." }
                }
            ]
        }, {    // PORCHE
            name: "porche",
            texts: [
                {
                    text: "Me voilà devant la maison. La",
                    act: "regular",
                    active: false
                },
                {
                    text: "porte",
                    act: "regular",
                    active: true
                },
                {
                    text: "est juste devant moi, fermée.",
                    act: "regular",
                    active: false
                },
                {
                    text: "L'air est humide et froid, j'aimerais bien pouvoir rentrer rapidement...",
                    act: "sad",
                    active: false
                },
                {
                    text: "Il y a aussi une",
                    act: "regular",
                    active: false
                },
                {
                    text: "fenêtre,",
                    act: "regular",
                    active: true
                },
                {
                    text: "à gauche de la porte. La maison a l'air figée dans le temps. Il y a une",
                    act: "regular",
                    active: false
                },
                {
                    text: "sonnette.",
                    act: "regular",
                    active: true
                },
                {
                    text: "À côté, une petite",
                    act: "angry",
                    active: false
                },
                {
                    text: "boîte",
                    act: "angry",
                    active: true
                },
                {
                    text: "à ouvrir avec un code.",
                    act: "angry",
                    active: false
                },
                {
                    text: "Le",
                    act: "regular",
                    active: false
                },
                {
                    text: "paillasson",
                    act: "regular",
                    active: true
                },
                {
                    text: `est gris, et le mot "bienvenue" se distingue à peine. Il est très sale.`,
                    act: "regular",
                    active: false
                },
            ],
            items: [
                {       // porte
                    name: "porte",
                    determinant: "la ",
                    isLocated: true,
                    one: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "La porte est fermée, et en mauvais état. La maison tombe en ruine.",
                            use: "La porte est fermée. La poignée se bloque immédiatement.",
                            go: "Je suis déjà devant la porte."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [0] }],
                            look: "La clef que j'ai en main semble correspondre à la serrure.",
                            use: "Je tourne la clef dans la porte, et un bruit sourd m'indique qu'elle est déverouillée.",
                            go: "Je suis déjà devant la porte."
                        },
                        open: {
                            newAct: { command: "aller" },
                            look: "La porte est déverouillée, je peux y aller.",
                            use: "Je pousse la porte, qui s'ouvre sur une pièce sombre. Je me prépare à aller à l'intérieur.",
                            go: "J'entre dans la maison pour la première fois..."
                        }
                    },
                    two: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "frapper", state: "open", target: [0], condition: 2 }],
                            look: "La porte est toujours en mauvais état, mais cette fois a en son centre un carreau de verre opaque.",
                            use: "La porte est fermée à clef, impossible de l'ouvrir.",
                            go: "Je suis déjà devant la porte.",
                            hit: ["Je prends un peu d'élan pour donner un coup d'épaule à la porte. Je sens que je dois le répéter pour qu'elle s'ouvre.",
                                "Je prends un peu plus d'élan pour donner un violent coup d'épaule à la porte. Elle cède sous mon poids et est ouverte."
                            ]
                        },
                        open: {
                            win: { command: "aller" },
                            look: "La porte est cassée, je peux donc entrer.",
                            use: "Le bois est fin et fragile. Pas surprenant que la porte ait cassé quand je l'ai frappée.",
                            go: "J'entre à nouveau dans la maison...",
                            hit: "Je donne un petit coup de pied à ce qui reste de la porte. Rien de change, elle est déjà cassée."
                        }
                    },
                    three: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "La porte est fermée, et son carreau de verre est plus large. Elle est peinte ocre rouge.",
                            use: "La porte est encore une fois fermée à clef. Cette fois elle a l'air plus solide.",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je prends un peu d'élan pour donner un violent coup d'épaule à la porte, ce qui me fait mal à l'épaule.",
                            inspect: "La peinture est argileuse, comme si on avait jeté de la terre sur la porte."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [0] }],
                            look: "La clef que j'ai en main semble correspondre à la serrure.",
                            use: "En un mouvement sec de la clef dans la serrure, la porte se déverouille.",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je me suis déjà fait mal à l'épaule en fonçant contre la porte la dernière fois. De plus, j'ai la clef en main.",
                            inspect: "La clef est lourde dans ma main. Elle est un peu rouillée."
                        },
                        open: {
                            win: { command: "aller" },
                            look: "La porte est déverouillée, je peux y aller.",
                            use: "Je pousse la porte, qui s'ouvre sur la pièce du rez-de-chaussée.",
                            go: "J'entre une fois de plus dans la maison...",
                            hit: "La porte est déjà ouverte. Et puis, je me suis déjà fait mal à l'épaule.",
                            inspect: "La porte entrouverte m'accueille d'un air mélancolique."
                        }
                    },
                    four: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "attendre", state: "opening", target: [3] }],
                            look: "La porte est fermée. Ses teintes rouges me barrent une nouvelle fois l'entrée.",
                            use: "À nouveau fermée à clef. À ce stade, cela ne me surprent guère.",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je risque de me faire mal à chercher à défoncer la porte.",
                            inspect: "La peinture est lisse et appliquée avec soin. On voit cependant qu'il s'agit d'un travail d'amateur.",
                            wait: "Je réfléchis à comment l'ouvrir... Est-ce que la boîte à code serait la solution cette fois-ci ?"
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [0] }],
                            look: "La clef que j'ai en main correspond à la serrure.",
                            use: "La porte était fermée à double tour. Je tourne la clef plusieurs fois, et la porte est ouverte.",
                            go: "Je suis déjà devant la porte.",
                            hit: "J'ai la clef en main, je ne vais pas chercher à enfoncer la porte.",
                            inspect: "La clef est nettement plus légère que les précédentes. Plus moderne également.",
                            wait: "J'ai la clef, je n'ai plus besoin d'attendre ou de réfléchir."
                        },
                        open: {
                            win: { command: "aller" },
                            look: "La porte est déverouillée, je peux y aller.",
                            use: "Je pousse la porte, qui donne sur le bureau et la bibliothèque.",
                            go: "J'entre dans la maison...",
                            hit: "La porte est déjà ouverte, je n'ai pas de raison de la casser.",
                            inspect: "La porte est comme la bouche de cette maison, qui s'apprête encore une fois à m'engloutir.",
                            wait: "L'air épais et moite de la maison m'arrive en plein visage maintenant que la porte est ouverte."
                        }
                    },
                    five: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "accepter", state: "opening", target: [4] }],
                            look: "La porte est encore une fois fermée. Elle est en bois peint, visiblement à la main.",
                            use: "À nouveau fermée à clef. Aucune surprise. Où est-ce que la clef se trouve cette fois ?",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je n'ai pas envie de la frapper.",
                            inspect: "La vitre centrale de la porte donne sur le bureau à l'intérieur.",
                            wait: "Je réfléchis. Comment l'ouvrir cette fois-ci ?",
                            accepter: "Peut-être que la clef est sous le paillasson, comme au début ?"
                        },
                        opening: {
                            interaction: [{ command: "accepter", state: "open", target: [0] }],
                            look: "La clef que j'ai en main semble correspondre à la serrure de la porte.",
                            use: "J'essaie de mettre la clef dans la porte, mais un sentiment de peur m'envahit. Je me ravise.",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je n'ai pas envie de la frapper.",
                            inspect: "La clef me parait si lourde en main, elle me met mal à l'aise... Comment cela se fait-il ?",
                            wait: "Est-ce que je pense trop ? De quoi ai-je peur ?",
                            accept: "Ce sera la dernière fois que j'entrerai dans la maison. Je dois accepter cela."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [0] }],
                            look: "La clef que j'ai en main correspond à la serrure de la porte.",
                            use: "J'essaie de mettre la clef dans la porte, malgré mon malaise. Je tourne la clef dans la serrure...",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je n'ai pas envie de la frapper.",
                            inspect: "Ma main tremble en tenant la clef. Je dois affronter ma peur que mon aventure se termine.",
                            wait: "J'essaie de me calmer. Est-ce que c'est vraiment la fin ?",
                            accept: "Pourquoi cela serait la fin ? C'est peut-être un commencement."
                        },
                        final: {
                            win: { command: "aller" },
                            look: "La porte est déverouillée, je peux y aller.",
                            use: "Je pousse la porte, qui s'ouvre sur le bureau et la bibliothèque.",
                            go: "J'entre dans la maison une dernière fois. La porte se referme derrière moi.",
                            hit: "Je ne veux pas frapper la porte, cela ne me servira à rien.",
                            inspect: "La maison va m'engloutir encore une fois. Est-ce que j'en sortirai ?",
                            wait: "L'air de la maison m'arrive en plein visage maintenant que la porte est ouverte. Il est plus léger qu'avant.",
                            accept: "Pas de retour en arrière possible. Je dois continuer. Je n'ai pas le choix."
                        }
                    }
                }, {    // fenêtre
                    name: "fenetre",
                    determinant: "la ",
                    isLocated: true,
                    one: {
                        isOpened: false,
                        closed: {
                            look: "La fenêtre est fermée. Son verre est sale et opaque.",
                            use: "Ma main est accueillie par une surface froide et lisse, humide à cause de la buée.",
                            go: "Je suis déjà devant la fenêtre."
                        }
                    },
                    two: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "frapper", state: "open", target: [1] }],
                            look: "Impossible de voir à travers cette vitre, elle est toujours aussi sale.",
                            use: "Il n'y a pas de poignée à l'extérieur, je peux seulement toucher le verre opaque.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "Je donne un coup de coude dans la vitre, qui se brise en plusieurs morceaux."
                        },
                        open: {
                            look: "La fenêtre est cassée. Il fait sombre dans la maison, je n'y distingue rien.",
                            use: "Je ne vais pas toucher du verre tranchant.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "J'ai déjà cassé la fenêtre, pas la peine de faire plus de débris."
                        }
                    },
                    three: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "inspecter", state: "opening", target: [1] }],
                            look: "La vitre est moins sale, mais la buée épaisse n'aide pas à voir à travers.",
                            use: "Je ne peux pas ouvrir la fenêtre de l'extérieur.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "Je n'ai pas de raison de casser la fenêtre pour le moment.",
                            inspect: "De l'autre côté, pendant à un fil, la clef de la maison. Je dois ouvrir cette fenêtre."
                        },
                        opening: {
                            interaction: [{ command: "frapper", state: "open", target: [1] }],
                            look: "La clef est derrière la fenêtre, mais je ne vois pas de poignée pour l'ouvrir.",
                            use: "Je ne peux pas l'ouvrir depuis l'extérieur.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "Je donne un coup sec avec mon coude, le verre se brise sous le choc.",
                            inspect: "La clef est clairement celle de la maison, c'est la même qu'à mon premier passage."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [1] }, { command: "utiliser", state: "opening", target: [0] }],
                            look: "La vitre est cassée en son centre. De là, je peux aisément saisir la clef.",
                            use: "Je tends mon bras en faisant attention à ne pas me couper. Je prends la clef de la maison.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "J'ai déjà cassé la fenêtre, pas la peine de faire plus de casse.",
                            inspect: "C'est une fenêtre à un seul vitrage. Heureusement, sinon la casser aurait été compliqué."
                        },
                        final: {
                            look: "La fenêtre est cassée. Il fait trop sombre pour voir dans la maison.",
                            use: "J'ai déjà récupéré la clef, je n'ai plus rien à prendre ici.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "J'ai déjà cassé la fenêtre, pas la peine de faire plus de casse.",
                            inspect: "Il n'y a rien à observer de plus."
                        }
                    },
                    four: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "inspecter", state: "open", target: [1] }],
                            look: "Toujours couverte de buée, la fenêtre a un triste air d'abandon.",
                            use: "Je ne peux toujours pas ouvrir la fenêtre de l'extérieur.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "Je n'ai pas de raison de casser la fenêtre pour le moment.",
                            inspect: "Il n'y a pas de clef de l'autre côté cette fois. Je dois chercher ailleurs.",
                            wait: "Malgré mon attente, la buée ne se dissipe pas."
                        },
                        open: {
                            look: "Toujours couverte de buée, la fenêtre a un triste air d'abandon.",
                            use: "Je ne peux toujours pas ouvrir la fenêtre de l'extérieur.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "Sans une clef à récupérer, je ne vais pas m'amuser à casser cette vitre une énième fois.",
                            inspect: "Il n'y a pas de clef de l'autre côté cette fois. Je dois chercher ailleurs.",
                            wait: "Malgré mon attente, la buée ne se dissipe pas."
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            look: "La fenêtre n'est plus enbuée. Je peux voir l'intérieur sans trop de problème.",
                            use: "La fenêtre s'ouvre uniquement de l'intérieur.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "Je n'ai aucune raison de casser la fenêtre.",
                            inspect: "Il n'y a pas de clef de l'autre côté. Je dois chercher ailleurs.",
                            wait: "Cette fenêtre donne sur le bureau. Elle agit comme un puit de lumière sur ce dernier.",
                            accept: "De l'autre côté de cette fenêtre la fin de mon aventure m'attend."
                        }
                    }
                }, {    // sonnette
                    name: "sonnette",
                    determinant: "la ",
                    isLocated: true,
                    one: {
                        isOpened: false,
                        closed: {
                            look: "La sonnette est en piteux état. Je doute qu'elle fonctionne.",
                            use: "J'appuie sur la sonnette... Pas un bruit. Je ne suis pas surpris.",
                            go: "La sonnette est déjà à ma portée."
                        }
                    },
                    two: {
                        isOpened: false,
                        closed: {
                            look: "La sonnette semble toujours cassée, je ne pense pas qu'elle fonctionnera cette fois.",
                            use: "J'appuie à nouveau sur la sonnette... Toujours rien. Je ne suis pas surpris.",
                            go: "La sonnette est déjà à ma portée.",
                            hit: "Je donne un coup sur la sonnette. Rien ne se passe."
                        }
                    },
                    three: {
                        isOpened: false,
                        closed: {
                            look: "La sonnette est en meilleur état, son plastique blanc n'est plus fendu.",
                            use: "J'appuie encore une fois sur la sonnette... Rien. Encore une fois.",
                            go: "La sonnette est déjà à ma portée.",
                            hit: "J'essaie de tirer sur le boîtier pour l'enlever mais n'y parviens pas. Je la frappe, rien ne se passe.",
                            inspect: "Il y a un nom arraché sur la sonnette. Je ne sais pas à qui elle appartient."
                        }
                    },
                    four: {
                        isOpened: false,
                        closed: {
                            look: "La sonnette a meilleure mine, mais je parie qu'elle ne fonctionnera pas.",
                            use: "Rien. Encore une fois. C'est à se demander si elle sert à quelque chose.",
                            go: "La sonnette est déjà à ma portée.",
                            hit: "Je ne veux pas m'acharner dessus.",
                            inspect: "Aucun nom n'est présent sur la sonnette. Étrange.",
                            wait: "Attendre ne va pas magiquement la réparer..."
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "open", target: [2] }],
                            look: "La sonnette est nettement plus moderne. Va-t-elle fonctionner cette fois ?",
                            use: "Elle sonne ! Pas sûr que cela serve à quelque chose, cependant.",
                            go: "La sonnette est déjà à ma portée.",
                            hit: "Je ne veux plus frapper tout ce qui m'entoure inutilement.",
                            inspect: "Toujours aucun nom, ni de signe qu'elle m'est utile pour entrer.",
                            wait: "J'attends un moment devant. Fonctionnera-t-elle ? Je me le demande...",
                            accept: "Elle va fonctionner, j'en suis sûr."
                        },
                        open: {
                            look: "La sonnette est en état de marche. Pas sûr qu'elle me serve, cela dit.",
                            use: "Je rappuie sur la sonnette. Elle sonne. Personne ne vient.",
                            go: "La sonnette est déjà à ma portée.",
                            hit: "Je ne vais pas la frapper si elle fonctionne.",
                            inspect: "Peut-être que l'absence de nom s'explique car il n'y avait personne à l'intérieur lors de mes précédents passages.",
                            wait: "J'attends un moment devant. Personne ne vient m'ouvrir.",
                            accept: "Elle a fonctionné. Elle ne va par contre pas m'aider à avancer."
                        }
                    }
                }, {    // boite
                    name: "boite",
                    determinant: "la ",
                    isLocated: true,
                    two: {
                        isOpened: false,
                        closed: {
                            look: "C'est une petite boîte à clef. Elle s'ouvre avec un code. Aucune idée de ce qu'il pourrait être.",
                            use: "Je tente des codes aux hasards. Rien n'y fait.",
                            go: "La boîte est déjà à ma portée.",
                            hit: "Je frappe la boîte. Rien ne se passe, elle est solide."
                        }
                    },
                    three: {
                        isOpened: false,
                        closed: {
                            look: "Je ne vois pas comment l'ouvrir sans code. Son clapet en métal semble solide.",
                            use: "Je tente d'entrer des codes aux hasards. Je ne trouve pas le bon.",
                            go: "La boîte est déjà à ma portée.",
                            hit: "Elle m'a l'air trop solide. Je risque de me faire mal inutilement.",
                            inspect: "Le pavé numérique ne me permet pas de déterminer si des chiffres sont plus utilisés que d'autres."
                        }
                    },
                    four: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "Je n'ai toujours aucune idée du code à utiliser. Je dois y réfléchir.",
                            use: "Entrer des codes au hasard ne me mène à rien.",
                            go: "La boîte est déjà à ma portée.",
                            hit: "Je ne pense pas que c'est la solution.",
                            inspect: "Le code s'entre sur un pavé numérique.",
                            wait: "J'essaie de réfléchir à un code, mais je ne suis pas sûr que la clef soit à l'intérieur."
                        },
                        opening: {
                            interaction: [{ command: "attendre", state: "open", target: [3] }],
                            look: "Plus je la regarde, plus je me dis qu'elle doit être la solution.",
                            use: "Je dois être patient et réfléchir à un code. Cette boîte m'est familière.",
                            go: "La boîte est déjà à ma portée.",
                            hit: "Ce n'est pas la solution à tout.",
                            inspect: "Le pavé numérique a les numéros 1, 9 et 6 plus usés que le reste.",
                            wait: "Elle ressemble à un coffre que je possède, dont le code est mon année de naissance, 1996. Je l'entre. La boîte s'ouvre..."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [3] }, { command: "utiliser", state: "opening", target: [0] }],
                            look: "À l'intérieur, une clef en metal est accrochée à un petit porte-clef rouge.",
                            use: "Je saisis la clef, qui devrait me permettre d'ouvrir la porte.",
                            go: "La boîte est déjà à ma portée.",
                            hit: "J'ai réussi à ouvrir la boîte sans m'énerver.",
                            inspect: "La clef à l'intérieur est accrochée à un porte-clef géométrique en cuir rouge.",
                            wait: "J'ai trouvé le code, pas besoin de réfléchir plus longtemps."
                        },
                        final: {
                            look: "La boîte reste entrouverte.",
                            use: "Je n'arrive pas à refermer la boîte, je vais la laisser entrouverte.",
                            go: "La boîte est déjà à ma portée.",
                            hit: "À quoi bon ?",
                            inspect: "La boîte était vide en-dehors de la clef.",
                            wait: "J'ai récupéré la clef, je n'ai plus à attendre."
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "open", target: [3] }],
                            look: "La boîte a plus des airs de coffre-fort. Je me demande si elle contient la clef.",
                            use: "J'entre 1996. La boîte s'ouvre, mais pas de clef à l'intérieur.",
                            go: "La boîte est déjà à ma portée.",
                            hit: "Je ne pense pas que la frapper soit utile.",
                            inspect: "Je ne vois rien de spécial sur la boîte à code.",
                            wait: "Je ne pense pas qu'il y ait quelque chose à attendre. Je connais le code, déjà.",
                            accept: "J'ai le sentiment qu'elle ne contiendra pas ce que je cherche."
                        },
                        open: {
                            look: "La boîte est vide. Pas de clef à l'intérieur cette fois.",
                            use: "Je laisse la boîte entrouverte. Elle ne me sert à rien.",
                            go: "La boîte est déjà à ma portée.",
                            hit: "Même si je suis frustré, ça ne me sert à rien de la frapper.",
                            inspect: "Je ne vois rien de spécial à l'intérieur.",
                            wait: "Il n'y a rien à attendre.",
                            accept: "Mon présentiment était correct. Mon propre coffre-fort ne contient d'ailleurs pas mes clefs."
                        }
                    }
                }, {    // paillasson
                    name: "paillasson",
                    determinant: "le ",
                    isLocated: true,
                    one: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "opening", target: [4] }],
                            look: "Le paillasson à mes pieds est sale et répugnant.",
                            use: "Je retire le paillasson. Une vieille clef métallique se trouve dessous.",
                            go: "Le paillasson est à mes pieds."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "opening", target: [0] }, { command: "utiliser", state: "open", target: [4] }],
                            look: "La clef est rouillée et sale. Elle est assez grosse et semble correspondre à la porte.",
                            use: "Je ramasse la clef et la met dans ma poche.",
                            go: "Le paillasson est à mes pieds."
                        },
                        open: {
                            look: "Le paillasson est moins sale maintenant qu'il est retourné.",
                            use: "Je n'ai plus envie de toucher ce paillasson.",
                            go: "Le paillasson est à mes pieds."
                        }
                    },
                    two: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "open", target: [4] }],
                            look: "Le paillasson à mes pieds est toujours aussi sale.",
                            use: "Je retourne le paillasson. Pas de clef dessous cette fois-ci.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je donne un coup de talon au paillasson. Un peu de poussière s'en dégage."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "closed", target: [4] }],
                            look: "Le paillasson est moins sale dessous. Son message est caché maintenant par contre.",
                            use: "Je retourne le paillasson pour le remettre à l'endroit.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je donne un coup de talon au paillasson. Un insecte s'en échappe, paniqué."
                        }
                    },
                    three: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "open", target: [4] }],
                            look: "Le paillasson est relativement propre, mais a tout de même vécu.",
                            use: "Je retourne le paillasson. Il n'y a pas de clef dessous.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je ne vois pas en quoi cela va m'aider.",
                            inspect: `Le "bienvenue" est écrit en noir dans une police sans-serif facile à lire.`
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "closed", target: [4] }],
                            look: "C'est un paillasson retourné, il n'y a rien à voir.",
                            use: "Je retourne le paillasson pour le remettre à l'endroit.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je ne vois pas en quoi cela va m'aider.",
                            inspect: "Il n'y a rien à inspecter."
                        }
                    },
                    four: {
                        isOpened: false,
                        closed: {
                            look: "Le paillasson est pratiquement comme neuf. Il n'est plus moisi comme avant, ni aussi sale.",
                            use: "Je ne pense pas que retourner le paillasson soit la solution cette fois.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je donne un petit coup de pied au paillasson. Rien. Quelle surprise...",
                            inspect: `Je pense avoir vu ce qu'il y avait à voir sur ce paillasson.`,
                            wait: "Je perds mon temps. Je ferais mieux de m'activer."
                        }
                    },
                    five: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "accepter", state: "opening", target: [4] }],
                            look: "C'est un joli paillasson presque neuf. Il me souhaite la bienvenue.",
                            use: "Je ne pense pas que la clef sera dessous cette fois, c'était différent à chaque passage.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je ne veux pas le frapper...",
                            inspect: "La police d'écriture utilisée est probablement Helvetica, ou Frutiger. Difficile à dire comme ça.",
                            wait: "Je réfléchis à où la clef pourrait se situer. Sous le paillasson semble trop évident.",
                            accept: "Mes parents cachaient un double des clefs sous le paillasson. Peut-être que ça vaut la peine que je le retourne."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [4] }],
                            look: "C'est un joli paillasson presque neuf. Il me souhaite la bienvenue.",
                            use: "Je retourne le paillasson. Pas de clef dessous cette fois.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je ne veux pas le frapper...",
                            inspect: "Aucun indice ni particularité à souligner.",
                            wait: "Si la clef n'est pas dessous, où aller chercher ?",
                            accept: "Est-ce que mon intuition sera correcte ?"
                        },
                        open: {
                            interaction: [{ command: "accepter", state: "opening", target: [0] }],
                            look: "Rien sous le paillasson. Je dois chercher ailleurs.",
                            use: "Je ne vais pas remettre le paillasson en place, pas besoin de m'y attarder plus que ça.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je ne veux pas le frapper...",
                            inspect: "Je ne vois rien d'intéressant.",
                            wait: "Si la clef n'est pas dessous, où est-ce qu'elle peut bien se cacher ?",
                            accept: "Soudain, je sens quelque chose de dur dans ma poche. En y passant ma main, je sens... une clef ? Je la prends en main."
                        }
                    }
                }, {    // leave
                    name: "leave",
                    one: { text: "Je traverse le jardin triste pour revenir vers le portail. Cette maison me fait froid dans le dos." },
                    two: { text: "Je reviens au portail, toujours en colère de me retrouver devant cette maison. Pourquoi elle ? Pourquoi moi ?" },
                    three: { text: "Je marche le long du chemin traversant le jardin, la nature semble figée autour de moi. Je suis devant le portail." },
                    four: { text: "J'ai besoin de prendre du temps. Je reviens sur mes pas, et attends devant le portail, ouvert." },
                    five: { text: "Je suis de retour chez moi, mais un sentiment étouffant se saisit de moi. Je recule vers le portail." }
                }
            ]
        }, {    // BUREAU
            name: "bureau",
            texts: [
                {
                    text: "Me voila dans la maison.",
                    act: "regular",
                    active: false
                }, {
                    text: "Une nouvelle fois...",
                    act: "sad",
                    active: false
                }, {
                    text: "Il fait sombre. On dirait que l'endroit est abandonné.",
                    act: "regular",
                    active: false
                }, {
                    text: "Je ne remarque aucun signe de vie récente.",
                    act: "bargain",
                    active: false
                }, {
                    text: "Il n'y a qu'une pièce, et la seule porte à cet étage est l'entrée.",
                    act: "regular",
                    active: false
                }, {
                    text: "La porte d'entrée est fermée à clef, je ne peux pas revenir en arrière.",
                    act: "accept",
                    active: false
                }, {
                    text: "Sur ma droite, un",
                    act: "regular",
                    active: false
                }, {
                    text: "escalier",
                    act: "regular",
                    active: true
                }, {
                    text: "qui mène à une porte, fermée.",
                    act: "regular",
                    active: false
                }, {
                    text: "Au milieu de la pièce, un",
                    act: "regular",
                    active: false
                }, {
                    text: "bureau.",
                    act: "regular",
                    active: true
                }, {
                    text: "Juste à l'entrée, sur une chaise, une",
                    act: "bargain",
                    active: false
                }, {
                    text: "carte",
                    act: "bargain",
                    active: true
                }, {
                    text: "postale est posée.",
                    act: "bargain",
                    active: false
                }, {
                    text: "Il y a une vieille",
                    act: "regular",
                    active: false
                }, {
                    text: "bibliothèque",
                    act: "regular",
                    active: true
                }, {
                    text: "au fond de la pièce.",
                    act: "regular",
                    active: false
                }, {
                    text: "Sur une commode à sa gauche, un",
                    act: "sad",
                    active: false
                }, {
                    text: "livre",
                    act: "sad",
                    active: true
                }, {
                    text: `appelé "LA BRUME" attire mon attention.`,
                    act: "sad",
                    active: false
                }
            ],
            items: [
                {       // escalier
                    name: "escalier",
                    determinant: "l'",
                    isLocated: false,
                    two: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "C'est un escalier en bois nu et craquelé. Il n'a pas l'air sûr à monter.",
                            use: "Je reste bloqué face à la porte fermée.",
                            go: "Je suis devant la porte, en haut de l'escalier.",
                            hit: "Je donne un coup d'épaule à la porte, comme je l'ai fait à l'entrée. Rien ne se passe."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [0] }],
                            look: "La clef que j'ai en main semble correspondre à la porte en haut des escaliers.",
                            use: "J'insère la clef dans la serrure. Après un tour, la porte est ouverte.",
                            go: "Je suis déjà en haut des escaliers.",
                            hit: "Malgré que j'ais la clef, je donne un autre coup d'épaule à la porte. Toujours rien."
                        },
                        open: {
                            newAct: { command: "aller" },
                            look: "La porte, entrouverte, semble donner sur une chambre à coucher.",
                            use: "J'ai déjà utilisé la clef pour ouvrir la porte, je peux entrer.",
                            go: "J'entre dans la pièce à l'étage, plongée dans la pénombre...",
                            hit: "J'ai pu ouvrir la porte, pas besoin d'essayer de la casser une nouvelle fois."
                        }
                    },
                    three: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "L'escalier est cette fois-ci en bois plus solide et foncé. Il a meilleure mine.",
                            use: "La porte en haut des escaliers est à nouveau fermée à clef, impossible de l'ouvrir.",
                            go: "Je suis en haut des escaliers.",
                            hit: "Je donne un coup de talon dans la porte. Elle ne bouge pas d'une pouce.",
                            inspect: "Je remarque quelques gravures aux motifs animaliers dans la rampe de l'escalier."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [0] }],
                            look: "J'ai enfin récupéré une clef. Elle semble correspondre à la porte, heureusement.",
                            use: "J'insère la clef dans la serrure. Après deux tours cette fois, la porte s'ouvre.",
                            go: "Je suis en haut des escaliers.",
                            hit: "J'ai déjà la clef, je ne vais pas m'acharner sur la porte en haut des escaliers.",
                            inspect: "La clef est similaire à celle de l'entrée. Elle est lourde et légèrement rouillée."
                        },
                        open: {
                            win: { command: "aller" },
                            look: "La porte donne sur une chambre à coucher éclairée par la lune.",
                            use: "J'ai déjà ouvert la porte.",
                            go: "J'entre dans la pièce à l'étage, baignée dans la lueur lunaire...",
                            hit: "J'ai déjà ouvert la porte, je n'ai pas de raison de la casser.",
                            inspect: "La porte est en bois massif, et se pare d'une affiche pour un film, ou une exposition, je ne suis pas sûr."
                        }
                    },
                    four: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "L'escalier est nettement mieux défini, en un bois sombre et massif. Il a l'air solide. La porte en haut également.",
                            use: "J'appuie sur la poignée. Rien. La porte est fermée à clef encore une fois...",
                            go: "Je suis en haut des escaliers, devant la porte.",
                            hit: "Je prends mon élan depuis les marches et je fonce contre la porte. Elle ne bouge pas.",
                            inspect: "Sur la porte, un dessin à la peinture colorée, fait avec les doigts. Il représente un enfant qui joue dans l'herbe.",
                            wait: "J'attends devant la porte, au sommet de l'escalier. Je ne sais pas si ça me sert à quoi que ce soit."
                        },
                        opening: {
                            look: "J'ai la clef qui devrait ouvrir la porte. Pourtant, j'ai l'impression qu'il me manque quelque chose.",
                            use: `J'ai l'impression d'oublier quelque chose. Ce livre... "La Brume"... De quoi parle-t-il ?.`,
                            go: "Je suis en haut des escaliers, devant la porte.",
                            hit: "Je ne pense pas que ça me soit utile. J'ai déjà la clef pour l'ouvrir.",
                            inspect: "Malgré la clef que j'ai en main, mon esprit divague ailleurs, je ne peux me résoudre à ouvrir la porte.",
                            wait: `Mes pensées sont absorbées par le livre "La Brume". J'ai l'impression que je dois le livre avant de continuer.`
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [0] }],
                            look: "La clef que j'ai en main semble correspondre à la porte.",
                            use: "Je mets la clef dans la serrure et la tourne. La porte s'ouvre face à moi.",
                            go: "Je suis en haut des escaliers, devant la porte.",
                            hit: "Je ne pense pas que ça me soit utile. J'ai déjà la clef pour l'ouvrir.",
                            inspect: "La clef est encore une fois différente. Cette fois plus petite et moderne. La marque est KABA.",
                            wait: "La clef ne va pas se mettre dans la serrure toute seule en attendant..."
                        },
                        final: {
                            win: { command: "aller" },
                            look: "La porte est ouverte et donne sur une chambre à coucher à l'étage.",
                            use: "J'ai déjà ouvert la porte...",
                            go: "J'entre sous la lumière de la lune à l'étage, une fois encore...",
                            hit: "La porte est déjà ouverte, pas de raison de la frapper.",
                            inspect: `La porte a une affiche pour la série "Midnight Mass" collée de l'autre côté.`,
                            wait: "En attendant, la porte ouverte, l'air frais de l'extérieur carresse mes joues."
                        }
                    },
                    five: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "L'escalier est en bois sombre et massif. Il a l'air vieux, mais bien entretenu. D'époque, avec du cachet.",
                            use: "La porte est à nouveau fermée à clef. Je vais devoir trouver un moyen de l'ouvrir.",
                            go: "Je suis devant la porte, en haut des escaliers.",
                            hit: "Je n'ai pas envie de frapper la porte, ni l'escalier.",
                            inspect: "La porte est décorée d'un dessin enfantin, fait à la peinture. La chambre derrière est celle d'un enfant.",
                            wait: "Je réfélchis à comment ouvrir la porte. Pour le moment, rien ne me vient.",
                            accept: "Cette porte m'est familière, mais je ne saurais dire comment. Il y a peut-être des choses qui me rafraîront la mémoire dans le bureau."
                        },
                        opening: {
                            interaction: [{ command: "accepter", state: "open", target: [0] }],
                            look: "La porte est toujours fermée, mais je n'ai toujours pas de clef pour l'ouvrir.",
                            use: "La porte est toujours impossible à ouvrir...",
                            go: "Je suis devant la porte, en haut des escaliers.",
                            hit: "Je ne veux pas frapper la porte ou l'escalier.",
                            inspect: "Le dessin qui décore la porte représente un enfant qui joue sur une balançoire accrochée à un arbre.",
                            wait: "Je pense qu'il faut que j'accepte la situtation. Je connais cette porte, j'en suis sûr...!",
                            accept: "C'est la porte d'entrée de ma chambre quand j'étais enfant ! Elle n'avait pas à clef, elle devrait s'ouvrir sans ça."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [0] }],
                            look: "Je me revois enfant, montant les escaliers pour aller dans ma chambre. Celle-ci en est une exacte réplique.",
                            use: "Mes doigts se posent sur la poignée, et la porte s'ouvre. Était-elle ouverte tout ce temps ?",
                            go: "Je suis devant la porte, en haut des escaliers.",
                            hit: "Je ne veux pas frapper la porte ou l'escalier.",
                            inspect: "J'avais fait le dessin sur la porte avec de la peinture à doigts... Je devais avoir 4 ou 5 ans.",
                            wait: "Des souvenirs passent derrière mes paupières alors que je ferme les yeux quelques minutes. Je me sens reposé.",
                            accept: "C'est la porte d'entrée de ma chambre quand j'étais enfant."
                        },
                        final: {
                            win: { command: "aller" },
                            look: "La porte est ouverte. Derrière, la chambre à coucher. Est-ce que c'est la mienne ?",
                            use: "La porte est desormais ouverte.",
                            go: "J'entre une dernière fois dans la chambre à l'étage...",
                            hit: "Je ne veux pas frapper la porte ou l'escalier.",
                            inspect: `Le poster pour la série "Midnight Mass" n'est plus affiché au dos de la porte. Cette série n'existait pas quand j'étais enfant.`,
                            wait: "Des souvenirs passent derrière mes paupières alors que je ferme les yeux quelques minutes. Je me sens reposé.",
                            accept: "C'est la porte d'entrée de ma chambre quand j'étais enfant. Je ne crois pas que la chambre derrière soit la mienne cependant."
                        }
                    }
                }, {    // bureau
                    name: "bureau",
                    determinant: "le ",
                    isLocated: false,
                    two: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "frapper", state: "opening", target: [1] }],
                            look: "C'est un bureau en métal gris-vert aux coins et bords rouillés. Il y a un cabinet à sa droite.",
                            use: "Le bureau est froid et fragile sous mes mains. Le cabinet ne s'ouvre pas quand je tire dessus.",
                            go: "Je suis devant le bureau.",
                            hit: "Je frappe le cabinet d'un coup de pied sec. Un éclat métallique sourd m'indique que le tiroir devrait être débloqué."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "opening", target: [0] }, { command: "utiliser", state: "open", target: [1] }],
                            look: "Le bureau a l'air en piteux état. Le tiroir du cabinet est cassé et entrouvert.",
                            use: "Je tire sur le tiroir déboîté. À l'intérieur, une clef rouillée. Je la prends avec moi.",
                            go: "Je suis devant le bureau.",
                            hit: "Je donne un nouveau coup de pied au cabinet, sans effet."
                        },
                        open: {
                            look: "C'est un bureau en métal gris-vert aux coins et bords rouillés. Le cabinet à sa droite est cassé.",
                            use: "J'ai déjà récupéré la clef. Il n'y a plus rien à voir sur ce bureau.",
                            go: "Je suis devant le bureau.",
                            hit: "Je donne un nouveau coup de pied au cabinet, sans effet."
                        }
                    },
                    three: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "Le bureau est en métal vert-gris, et a des airs de cabinet militaire. Il a toujours un cabinet à droite, fermé.",
                            use: "Le cabinet est fermé à clef. Cette fois, il a l'air plus solide qu'avant. Il n'y a pas de serrure.",
                            go: "Je suis devant le bureau.",
                            hit: "Je frappe le cabinet comme je l'ai fait la dernière fois. Rien ne se passe.",
                            inspect: "Il y a un cadenas couvert de rouille sur le côté du cabinet. Je me demande comment l'ouvrir."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [1] }, { command: "inspecter", state: "open", target: [1] }],
                            look: "Le bureau est en métal vert-gris, et a des airs de cabinet militaire. Il a toujours un cabinet à droite, fermé.",
                            use: "Le cabinet est fermé à clef par un code. Je pourrais essayer d'y entrer la date de la carte postale.",
                            go: "Je suis devant le bureau.",
                            hit: "Je frappe le cabinet de toutes mes forces, mais il ne bouge pas. Ce bureau est solide.",
                            inspect: "Est-ce que je pourrais utiliser la date de la carte postale comme code pour le cadenas ?"
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [1] }, { command: "utiliser", state: "opening", target: [0] }],
                            look: "Le cadenas demande un nombre à 6 chiffres. Une date pourrait y être entré.",
                            use: "J'entre la date 21-06-14 comme code. Le cabinet s'ouvre, et je récupère la clef qu'il contient.", // année de ses 18 ans
                            go: "Je suis devant le bureau.",
                            hit: "Je n'ai pas de raison de le frapper, rien n'y fait cette fois-ci.",
                            inspect: "Le cadenas a déjà le nombre 14 entré à la fin, ce qui correspondrait à l'année dans la date que j'ai trouvée."
                        },
                        final: {
                            look: "Le bureau est en métal vert-gris, et a des airs de cabinet militaire. Il est vieux et de mauvais goût.",
                            use: "J'ai déjà ouvert le cabinet et récupéré la clef.",
                            go: "Je suis devant le bureau.",
                            hit: "Je n'ai pas de raison de le frapper.",
                            inspect: "Il y a moins de rouille qu'avant, mais j'en observe tout de même dans les coins du bureau."
                        }
                    },
                    four: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "Le bureau est maintenant en bois. Au premier coup d'oeil, on dirait du chêne, ou du pin.",
                            use: "Je passe mon doigt sur le bureau. Il est lisse. Je tente d'ouvrir son cabinet, mais il est fermé.",
                            go: "Je suis devant le bureau.",
                            hit: "Je ne pense pas que ce soit la solution à tous mes problèmes.",
                            inspect: "Le bureau est en bois de chêne laqué, nettement plus beau et raffiné qu'avant.",
                            wait: "J'attends devant le bureau. Comment ouvrir le cabinet cette fois-ci ? Je remarque qu'il faut un code."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "opening", target: [0] }, { command: "utiliser", state: "open", target: [1] }],
                            look: "Le cabinet est accompagné d'un système de blocage par un code, situé au-dessus de sa poignée.",
                            use: `J'entre le code 1667, l'année de publication du "Paradis Perdu" de Milton. Le tiroir s'ouvre et je récupère la clef qu'il contient.`,
                            go: "Je suis devant le bureau.",
                            hit: "J'ai le code à entrer, pas de raison de le frapper.",
                            inspect: "C'est un bureau sophistiqué. Ses mécanismes sont certes âgés, mais la façon dont son verrouillage est pensé est fascinante.",
                            wait: "J'ai réussi à me souvenir du code. Je n'ai pas besoin d'attendre plus longtemps."
                        },
                        open: {
                            look: "Le bureau est en bois de chêne poli et laqué. Une pièce qui a probablement dû coûter une fortune.",
                            use: "Je passe mon doigt sur le bureau. Il est lisse. C'est du bel ouvrage.",
                            go: "Je suis devant le bureau.",
                            hit: "Je n'ai pas envie de le frapper maintenant que j'ai ouvert le cabinet.",
                            inspect: "Ce bureau est magnigique, et très sophistiqué. Avec son bois, il a l'air ancien, mais de bon goût.",
                            wait: "J'ai pu ouvrir son cabinet. Je n'ai pas besoin d'attendre plus longtemps."
                        }
                    },
                    five: {
                        ifFinal: false,
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "accepter", state: "open", target: [4] }, { command: "accepter", state: "open", target: [1] }],
                            look: "Le bureau est un peu vieillot, mais magnifique et imposant au milieu de la pièce.",
                            use: "Le cabinet du bureau est à nouveau fermé, mais j'ai le code sur le bout des lèvres.",
                            go: "Je suis devant le bureau.",
                            hit: "Je ne vois pas l'utilité.",
                            inspect: "Le cabinet est encore fermé au profit d'une ouverture utilisant un code, mais je ne sais pas lequel.",
                            wait: "J'attends devant le bureau. Des souvenirs me reviennent. Mon père entrain de travailler ?",
                            accept: "C'était le bureau de mon père. Le code pour son cabinet était ma date de naissance, le 21 juin 1996."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [1] }],
                            look: "Le bureau est vieux, mais très bien entretenu. Il magnifique et imposant au milieu de la pièce.",
                            use: "J'entre ma date de naissance comme code ; le cabinet est ouvert, mais il ne contient pas de clef cette fois.",
                            go: "Je suis devant le bureau.",
                            hit: "Je ne vois pas l'utilité.",
                            inspect: "Je revois mon père, installé dans sa chaise de bureau, travailler minutieusement. Que faisait-il comme métier ?",
                            wait: "J'essaie de me souvenir de mon père, installé à ce bureau. Les images me sont floues.",
                            accept: "Mon père faisait un travail dans la fine mécanique. Est-ce que c'était de l'électronique, de l'horlogerie...?"
                        },
                        final: {
                            look: "Le bureau est une belle antiquité. Il magnifique et imposant au milieu de la pièce.",
                            use: "Je passe mes doigts sur le bureau pour m'imprégner de son histoire. Je revois mon père, penché dessus, un fer à soudure en main.",
                            go: "Je suis devant le bureau.",
                            hit: "Je ne vois pas l'utilité.",
                            inspect: "Je revois mon père, installé dans sa chaise de bureau, travailler minutieusement. Il travaillait sur des horloges je crois.",
                            wait: "J'essaie de me souvenir de mon père, installé à ce bureau. Je n'arrive pas à me rappeler son visage.",
                            accept: "Mon père était horloger. Il n'a pas arrêté de travailler même après sa retraite."
                        }
                    }
                }, {    // carte
                    name: "carte",
                    determinant: "la ",
                    isLocated: true,
                    three: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "open", target: [2] }],
                            look: "C'est une carte postale qui montre des montagnes eneigées avec un photo-montage de ski.",
                            use: "Je retourne la carte pour voir le dos.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je plie un coin de la carte. Pas sûr que ça me serve.",
                            inspect: "Il y a le lieu marqué en transparence en bas de la carte : Zermatt, CH."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "closed", target: [2] }, { command: "inspecter", state: "opening", target: [1], condition: "closed" }],
                            look: `"Souvenirs de vacances en Suisse ! Un petit voyage avant de ne plus pouvoir en faire !" est écrit au dos. La signature n'est pas lisible.`,
                            use: "Je retourne la carte pour voir l'image de l'autre côté.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je plie un coin de la carte. Pas sûr que ça me serve.",
                            inspect: "La carte est datée du 21-06-2014. Le jour de mes 18 ans."
                        }
                    },
                    four: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "open", target: [2] }],
                            look: "C'est une carte postale qui montre une silhouette de ville avec un lac en fond.",
                            use: "Je retourne la carte pour voir le dos.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je déchire un coin de la carte. Je ne vois pas à quoi ça m'a servi.",
                            inspect: "Il y a le lieu marqué en transparence en bas de la carte : Lausanne, CH.",
                            wait: "Je m'arrête devant la carte, à l'entrée. Je ne sais pas trop pourquoi j'attends."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "closed", target: [2] }],
                            look: `"Je me sens enfin en paix ici, mais qu'est-ce que tu me manques ! Fais un bec à [illisible]" est écrit au dos de la carte.`,
                            use: "Je retourne la carte pour voir l'image de l'autre côté.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je ne pense pas que ça soit nécessaire.",
                            inspect: "La carte est datée de l'année 2003. Une année quelconque.",
                            wait: "Je m'arrête devant la carte, à l'entrée. Je ne sais pas trop pourquoi j'attends."
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "open", target: [2] }],
                            look: "C'est une carte d'une autoroute. Drôle d'objet à mettre en avant sur une carte postale.",
                            use: "Je retourne la carte pour voir le dos.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je ne pense pas que cela me servira.",
                            inspect: "Il n'y a pas de lieu indiqué. L'autoroute est bouchonnée, mais on ne voit pas pourquoi.",
                            wait: "Je m'arrête devant la carte. Pourquoi montrer cela ? Elle me procure un profond malaise.",
                            accept: "J'ai l'impression de reconnaître l'autoroute, mais je ne saurais dire d'où. Étrange."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "closed", target: [2] }],
                            look: `"Nous restons immobiles dans le chemin du temps. Avant que tu partes, montre-moi ce que tu sais." est écrit au dos.`,
                            use: "Je retourne la carte pour voir l'image de l'autre côté.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je ne pense pas que cela me servira.",
                            inspect: "La carte est datée du " + today + ". C'est... aujourd'hui ?",
                            wait: "Je m'arrête devant la carte. Pourquoi ce texte ? Tout cela n'a pas l'air très net.",
                            accept: "Le texte ressemble à des paroles de chanson que je connais... Et la date est celle d'aujour'hui... Pourquoi ?"
                        }
                    }
                }, {    // bibliothèque
                    name: "bibliotheque",
                    determinant: "la ",
                    isLocated: false,
                    two: {
                        isOpened: false,
                        closed: {
                            look: "C'est une vieille bibliothèque en métal gris-vert, comme le bureau. Elle ne contient aucun livre.",
                            use: "Le métal est rugueux et rouillé par endroit, mieux vaut ne pas trop y toucher.",
                            go: "Je suis déjà devant la bibliothèque.",
                            hit: "Je frappe un des bords de la bibliothèque avec mon poing fermé. Un bruit métallique résonne. Rien ne se passe.",
                        }
                    },
                    three: {
                        isOpened: false,
                        closed: {
                            look: "La bibliothèque est maintenant en métal vers-gris, plus propre qu'avant, et contient quelques livres.",
                            use: "Même si elle est en meilleur état, elle a toujours des traces de rouilles çà et là...",
                            go: "Je suis déjà devant la bibliothèque.",
                            hit: "Je ne pense pas que ça me soit utile ici.",
                            inspect: "Les livres sont principalement des volumes désordonnés d'Encyclopédies et d'Atlas."
                        }
                    },
                    four: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "inspecter", state: "opening", target: [3] }],
                            look: "La bibliothèque est désormais en bois massif, de façon similaire au bureau. Elle est remplie de livres.",
                            use: "Le bois est lisse sous mes doigts. Ma main s'arrête sur un livre plus large que les autres. Je suis pris de curiosité.",
                            go: "Je suis déjà devant la bibliothèque.",
                            hit: "Je ne pense pas que cela soit nécessaire.",
                            inspect: `Un livre plus large que les autres attire mon attention. Il s'appelle "Vanités".`,
                            wait: "J'attends un moment devant la bibliothèque. J'ai envie de voir les livres de plus près."
                        },
                        opening: {
                            interaction: [{ command: "attendre", state: "open", target: [3] }],
                            look: `Le livre "Vanités" est un grand ouvrage à la reliure en cuir rouge, avec son titre gravé en doré.`,
                            use: `Au toucher, la tranche du livre "Vanités" est rugueuse, épaisse et resistante.`,
                            go: "Je suis déjà devant la bibliothèque.",
                            hit: "Je ne pense pas que cela soit nécessaire.",
                            inspect: `Il n'y a pas d'auteur mentionné sur la tranche de "Vanités", seulement son titre et une année, 1898.`,
                            wait: `J'attends un moment devant la bibliothèque. J'ai très envie de lire ce livre, "Vanités".`
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [3] }, { command: "utiliser", state: "opening", target: [4] }],
                            look: `"Vanités" est un livre de grande qualité. Il est immense, et semble avoir coûté cher. Son présence est étonnante.`,
                            use: `J'ouvre "Vanités". Un recueil de poème y est régulièrement cité : "La Brume". Serait-ce le livre posé à côté de la bilbiothèque ?`,
                            go: "Je suis déjà devant la bibliothèque.",
                            hit: "Je ne vois pas pourquoi je casserais des livres.",
                            inspect: "Pas d'auteur cité sur la couverture ou son quatrième. La couverture a une gravure de crâne en or et argent.",
                            wait: `"Vanités" m'attire énormément. Je devrais le saisir et l'ouvrir pour voir ce qu'il contient.`
                        },
                        open: {
                            look: `Le livre "Vanités" trône sur les autres ouvrages de son imposante tranche rouge.`,
                            use: `J'ai trouvé de nombreuses mentions de "La Brume" dans "Vanités". Je devrais me pencher sur "La Brume".`,
                            go: "Je suis déjà devant la bibliothèque.",
                            hit: "Je ne pense pas que cela soit nécessaire.",
                            inspect: `À y regarder de plus près, "Vanités" et "La Brume" partagent la même apparence, mais "Vanités" est bien plus grand.`,
                            wait: `Je devrais me pencher sur "La Brume" au lieu de rester devant la bibliothèque.`
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            look: "La bibliothèque est âgée mais en excellent état. Son bois, sombre et tacbeté, est magnifique. Elle regorge de livres.",
                            use: "Au toucher, aucun livre ne sort du lot. J'ai l'impression que la solution cette fois doit se trouver ailleurs.",
                            go: "Je suis déjà devant la bibliothèque.",
                            hit: "Je ne veux pas frapper la bibliothèque.",
                            inspect: `"Vanités" est toujours présent dans la bibliothèque. Il ne me semble pas utile de le relire cependant.`,
                            wait: `J'attends devant la bibliothèque. L'envie me prend de relire "La Brume".`,
                            accept: "C'est une bibliothèque que j'avais reprise de mes parents, lors de mon premier déménagement."
                        }
                    }
                }, {    // livre
                    name: "livre",
                    determinant: "le ",
                    isLocated: false,
                    four: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: `"La Brume" est un petit recueil de poèmes à la couverture rouge et aux lettres gravées en or.`,
                            use: "Il est léger, et sa couverture est légèrement rude au toucher.",
                            go: "Je suis devant le livre.",
                            hit: "Je n'ai pas envie de casser ce livre. D'une certaine façon, il a l'air précieux.",
                            inspect: `À y regarder de plus près, le sous-titre du livre est "Poèmes de la Colline aux Ronces".`,
                            wait: "J'attends devant le livre. Sa vue m'angoisse, et je n'ose pas le prendre pour le lire."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [4] }, { command: "inspecter", state: "opening", target: [1] }],
                            look: `À y regarder de plus près, il ressemble à une version plus petite de "Vanités".`,
                            use: "Je prends le livre en main, et l'ouvre. Je peux désormais en lire quelques passages.",
                            go: "Je suis devant le livre.",
                            hit: "Je n'ai pas envie de casser ce livre. Peut-être me sera-t-il utile pour ouvrir le cabinet.",
                            inspect: `Sur le quatrième de couverture, tout en bas, écrit en petit, "À la gloire d'un Paradis Perdu, 1667". Serait-ce le code du cabinet ?`,
                            wait: "J'aimerais lire ce que le livre a à m'offrir, m'imprégnier de ses vers."
                        },
                        open: {
                            interaction: [{ command: "voir", state: "final", target: [4], condition: 5 }],
                            look: [
                                `"Nous dansons comme des flammes, scintillant dans la nuit. Nous nous balançons au rythme du vent avant de fondre."`,
                                `"Tu parles d'un monde que j'ai connu, avant de perdre l'air. Nous connaissons tous le mensonge. Tu l'as laissé mourir."`,
                                `"Te laisser entrer c'est me laisser partir. Je m'en vais, pour que tu puisse grandir."`,
                                `"Les étés rêvent et la nuit s'arrête. J'attends patiemment sur la colline. Tous ces visages se transforment en sable"`,
                                `"Où vas-tu quand je ferme les yeux ? Que vois-tu en me regardant ?"`,
                            ],
                            use: "Mes mains tremblent en tenant le livre. C'est comme s'il me forçait à le lire.",
                            go: "Je suis devant le livre.",
                            hit: "Je n'ai pas envie de casser ce livre.",
                            inspect: "Le livre est finement illustré de petites enluminures dessinées à l'encre noire.",
                            wait: "J'essaie de comprendre ce livre, son sujet, ses thèmes..."
                        },
                        final: {
                            interaction: [{ command: "voir", state: "open", target: [0] }],
                            look: "Mes yeux clignent, et je sors de l'emprise du livre. Je me rends compte que je l'ai lâché, et qu'il est tombé à terre.",
                            use: "Je n'ose pas le ramasser. Je suis chamboulé par ce que j'ai lu...",
                            go: "Le livre est à mes pieds.",
                            hit: "Malgré mon malaise, je n'ai pas envie de casser ce livre.",
                            inspect: "Le livre repose face contre terre, sa couverture simple et raffinée pointant le plafond.",
                            wait: "Je préfère m'éloigner de ce livre, je crois avoir vu tout ce qu'il y avait à voir."
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "accepter", state: "open", target: [4] }],
                            look: `"La Brume" est un recueil de poème. Sa couverture est rouge, avec un lettrage doré.`,
                            use: "Le livre est léger, et agréable à prendre en main.",
                            go: "Je suis devant le livre.",
                            hit: "Je ne veux pas casser le livre.",
                            inspect: `Le sous-titre a changé, il est désormais "Remèdes contre la douleur de ceux qui restent".`,
                            wait: "Je reste bouche-bée devant le livre, me demandant pourquoi il m'affecte autant.",
                            accept: "Si je me souviens bien, ma mère possédait ce livre quand j'étais enfant. Elle le lisait sous le porche."
                        },
                        open: {
                            interaction: [{ command: "accepter", state: "opening", target: [0] }],
                            look: `J'ai l'impression de reconnaître cette copie de "La Brume". Serait-ce celle de ma mère ?`,
                            use: "Le livre est petit dans mes mains aujourd'hui, je me souviens qu'il me paraissait grand étant enfant.",
                            go: "Je suis devant le livre.",
                            hit: "Je ne veux pas casser le livre.",
                            inspect: `Il y a dans le livre un marque-page en plastique doré, que ma mère utilisait dans ses livres.`,
                            wait: "Je prends le temps d'observer le livre et les souvenirs qui y sont attachés. Je revois ma mère.",
                            accept: "Ma mère lisait ce livre quand elle avait appris le décès de mon grand-père. Elle sanglotait en le lisant."
                        }
                    }
                }, {    // leave
                    name: "leave",
                    two: { text: "Je sors de la maison. Me revoila dehors, devant la porte, cassée." },
                    three: { text: "Je sors de la maison en laissant la porte entrouverte. Je sais que mon éloignement n'est que temporaire." },
                    four: { text: "J'ai besoin de prendre du temps. Je reviens sur mes pas, et sort de la maison, laissant la porte ouverte." },
                    five: { text: "La porte d'entrée est fermée derrière moi. Je n'arrive pas à l'ouvrir. Je dois poursuivre mon chemin." }
                }
            ]
        }, {    // ETAGE
            name: "etage",
            texts: [
                {
                    text: "J'entre dans une chambre à coucher sombre.",
                    act: "regular",
                    active: false
                }, {
                    text: "Au milieu de la pièce repose un",
                    act: "bargain",
                    active: false
                }, {
                    text: "lit.",
                    act: "bargain",
                    active: true
                }, {
                    text: "À côté du lit, une",
                    act: "sad",
                    active: false
                }, {
                    text: "lampe,",
                    act: "sad",
                    active: true
                }, {
                    text: "éteinte.",
                    act: "sad",
                    active: false
                }, {
                    text: "À côté de l'entrée est posée une",
                    act: "regular",
                    active: false
                }, {
                    text: "peluche",
                    act: "regular",
                    active: true
                }, {
                    text: "en forme d'ourson. La seule source de lumière est la lune, qui berce la pièce de sa faible lumière depuis un trou dans le plafond à gauche.",
                    act: "regular",
                    active: false
                }, {
                    text: "Le",
                    act: "regular",
                    active: false
                }, {
                    text: "mur",
                    act: "regular",
                    active: true
                }, {
                    text: "à ma droite est couvert de papiers collés.",
                    act: "regular",
                    active: false
                }, {
                    text: "Il y a une",
                    act: "sad",
                    active: false
                }, {
                    text: "échelle",
                    act: "sad",
                    active: true
                }, {
                    text: "couchée à gauche, au fond de la pièce.",
                    act: "sad",
                    active: false
                }
            ],
            items: [
                {       // lit
                    name: "lit",
                    determinant: "le ",
                    isLocated: false,
                    three: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "inspecter", state: "opening", target: [0, 1] }],
                            look: "C'est un lit une place, défais, qui a l'air d'avoir été abandonné depuis des années...",
                            use: "Je presse ma main contre le lit. Il est humide et froid, probablement pourri à l'intérieur...",
                            go: "Je suis devant le lit, mais je n'ai pas envie d'aller dedans...",
                            hit: "Je donne un coup de pied au lit. Rien ne se passe.",
                            inspect: "Dans un des pieds du lit, il y a un compartiment caché avec une petite clef. Je la ramasse."
                        },
                        opening: {
                            look: "Le lit est sale, et ses draps sont défaits. Il y a tout de même une couverture et un oreiller.",
                            use: "Je passe ma main sur le duvet. Il est moite.",
                            go: "Je suis devant le lit, mais je n'ai pas vraiment envie d'aller dedans...",
                            hit: "Je donne un coup de poing dans l'oreiller. Un bruit épais et humide se produit à l'impact.",
                            inspect: "Je ne vois rien de spécial outre le compartement que j'ai trouvé précédemment."
                        },
                        open: {
                            interaction: [{ command: "voir", state: "final", target: [0] }],
                            look: "Je suis pris de fatigue, et malgré son apparence, le lit semble m'accueillir.",
                            use: "Je touche une fois encore le lit... Son humidité me repousse, mais je suis si fatigué...",
                            go: "Je suis devant le lit... Est-ce que j'ose aller dedans...?",
                            hit: "Je donne un coup à l'oreiller.",
                            inspect: "Le lit reste ferme et devrait supporter le poids d'une personne malgré son état."
                        },
                        final: {
                            newAct: { command: "utiliser" },
                            look: "Je devrais aller dans le lit, mes paupières se ferment sans que je le contrôle.",
                            use: "Je pose mes paumes contre le matelas... Il est humide, mais devrait pouvoir servir à dormir.",
                            go: "Je me couche dans le lit. Malgré le froid et l'humidité, je ferme mes paupières, et me laisse bercer par la lune.",
                            hit: "Je ne pense pas que le frapper soit nécessaire pour y dormir.",
                            inspect: "Le lit devrait supporter mon poids malgré son état."
                        },
                    },
                    four: {
                        isOpened: false,
                        closed: {
                            look: "Le lit est en nettement meilleur état. Il est toujours défait.",
                            use: "Je caresse le matelas, qui est désormais sec, mais qui reste froid.",
                            go: "Je ne suis pas fatigué, je ne vais pas aller dans le lit.",
                            hit: "Je ne pense pas que ça me soit utile de faire ça.",
                            inspect: "Je jette un regard plus attentif au lit. Pas de compartiment caché cette fois.",
                            wait: "Je ne sais pas trop ce que j'attends."
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "accepter", state: "opening", target: [4] }],
                            look: "C'est un lit nettement plus moderne qu'avant. D'un coup d'oeil, on dirait mon lit, celui de mon appartement.",
                            use: "Les draps sont faits, frais et changés. Ils sont propres et doux au toucher.",
                            go: "Je suis devant le lit. Je ne suis pas fatigué, donc je n'ai pas de raison d'aller dedans.",
                            hit: "Je ne veux pas le frapper.",
                            inspect: "À y regarder de plus près, il me semble reconnaître les draps...",
                            wait: "J'attends devant le lit, pour voir si j'ai sommeil... Je ne pense pas que ce soit le cas.",
                            accept: "C'est mon lit, celui de mon appartement. Comment est-il arrivé là ? Est-ce que c'est ma chambre ?"
                        }
                    }
                }, {    // peluche
                    name: "peluche",
                    determinant: "la ",
                    isLocated: false,
                    three: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "C'est un ourson en peluche qui porte un petit chapeau melon. Il est vieux et sale.",
                            use: "En prenant l'ours en peluche dans mes mains, il est plus lourd que ce que j'aurai pensé.",
                            go: "L'ours en peluche est à mes pieds.",
                            hit: "Je donne un coup de pied à la peluche. Elle fait un bruit métallique.",
                            inspect: "L'ourson est raffistolé de partout, il semble être passé entre les mains de plusieurs enfants."
                        },
                        opening: {
                            interaction: [{ command: "inspecter", state: "open", target: [1] }],
                            look: "C'est un ourson en peluche vieux et sale. Sa tête est à moitié détachée de son corps.",
                            use: "En portant l'ourson, il me paraît plus lours que ce qu'il devrait être. Est-ce qu'il cache quelque chose ?",
                            go: "L'ours en peluche est à mes pieds.",
                            hit: "Je lance l'ourson à mes pieds, en espérant qu'il se casse, mais rien n'y fait.",
                            inspect: "Je vois un petit compartiment caché dans la nuque de l'ourson. Il est fermé à clef pour le moment."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "open", target: [0] }, { command: "utiliser", state: "final", target: [1] }],
                            look: "La petite clef que j'ai récupérée dans le lit semble correspondre au compartiment dans la peluche.",
                            use: `J'ouvre le compartiment À l'intérieur, une note : "Ton chemin est long, prends le temps pour te reposer".`,
                            go: "L'ours en peluche est à mes pieds.",
                            hit: "Je frappe l'ourson en espérant ouvrir le compartiment. Rien n'y fait.",
                            inspect: "Le compartiment de l'ourson est bien caché sous sa nuque, mais je devrais pouvoir l'ouvrir facilement avec la clef."
                        },
                        final: {
                            look: "L'ourson repose contre le lit. On dirait presque qu'il dort, avec sa tête qui pend sur le côté.",
                            use: `Le message dans la peluche disait : "Ton chemin est long, prends le temps pour te reposer".`,
                            go: "L'ours en peluche est à mes pieds.",
                            hit: "Je ne pense pas que frapper la peluche me soit utile.",
                            inspect: "Je ne pense pas qu'il y ait quelque chose à voir en plus sur la peluche."
                        }
                    },
                    four: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "La peluche est en meilleur état, sa tête penche toujours sur le côté en revanche.",
                            use: "La peluche est à nouveau lourde. Cache-t-elle encore quelque chose ?",
                            go: "L'ours en peluche est à mes pieds.",
                            hit: "Je frappe l'ourson pour tenter de récupérer ce qu'il contient, mais rien n'y fait.",
                            inspect: "L'ours en peluche a à nouveau un compartiment derrière la nuque. À moi de trouver la clef pour l'ouvrir.",
                            wait: "J'attends et réfléchis... La dernière fois, c'était dans le lit que j'ai trouvé la clef."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [1, 4] }],
                            look: "La clef que j'ai récupérée derrière le poster correpond au compartiment dans l'ourson.",
                            use: `Je tourne la clef. Un autre message cette fois : "Rejoins les astres".`,
                            go: "L'ours en peluche est à mes pieds.",
                            hit: "Je ne pense pas que ça me soit utile.",
                            inspect: "La clef est petite et en métal. Elle est attachée à un porte-clef en forme de chapeau, le même que porte la peluche.",
                            wait: "Je ne pense pas que j'aies besoin d'attendre."
                        },
                        open: {
                            look: "La peluche est en meilleur état, même si sa tête penche toujours sur le côté.",
                            use: `Le message que contenait la peluche dit : "Rejoins les astres". Qu'est-ce que ça veut dire ?`,
                            go: "L'ours en peluche est à mes pieds.",
                            hit: "Je ne pense pas que ça me soit utile.",
                            inspect: "Je ne pense pas qu'il y ait quelque chose à voir en plus sur la peluche.",
                            wait: "Le message me dit de rejoindre les astres... Aller sur le toit m'en rapprocherait."
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "accepter", state: "opening", target: [4] }],
                            look: "La peluche est dans le même état qu'avant. Elle est vieille, mais bien entretenue, reprise de partout.",
                            use: "Je la porte. Cette fois, son poids semble normal. Il n'y a probablement pas de compartiment.",
                            go: "L'ours en peluche est à mes pieds.",
                            hit: "Elle est déjà assez abîmée comme ça.",
                            inspect: "Elle ne contient pas de compartiment derrière sa nuque. C'est une simple peluche.",
                            wait: "En attendant, je me rends compte que je connais cette peluche. C'était la mienne, étant enfant.",
                            accpet: "C'était la peluche de ma mère avant de devenir la mienne. Elle m'a accompagné jusqu'à mes 12 ans."
                        }
                    }
                }, {    // mur
                    name: "mur",
                    determinant: "le ",
                    isLocated: false,
                    three: {
                        isOpened: false,
                        closed: {
                            look: "Le mur est couvert de posters, d'articles de journaux et de lettres collées de manière éparse.",
                            use: "Je ne pense pas que le mur me soit d'une grande utilité.",
                            go: "Je suis devant le mur.",
                            hit: "Je donne un coup de poing au mur. J'ai juste réussi à me faire mal aux doigts.",
                            inspect: "Les journaux parlent de tout et de rien. Le plus récent date du " + today
                        }
                    },
                    four: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "Le mur est toujours recouvert de posters, d'articles de journaux et de lettres diverses.",
                            use: "Je ne sais pas trop ce que je peux faire de ce mur. Au toucher, certaines affiches sont collantes.",
                            go: "Je suis devant le mur.",
                            hit: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                            inspect: "Les journaux parlent de tout et de rien. Le plus récent date du " + today,
                            wait: "J'attends devant le mur. Je réfléchis. Est-ce qu'il y aurait un indice sur l'un de ces papiers collés ?"
                        },
                        opening: {
                            interaction: [{ command: "inspecter", state: "open", target: [2] }],
                            look: "La lumière de la lampe met en évidence un article qui parle d'un bouchon sur une autoroute.",
                            use: "L'article est mis en évidence par une peinture fluorescente verte, qui semble encore fraîche au toucher.",
                            go: "Je suis devant le mur.",
                            hit: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                            inspect: "C'est l'article le plus récent du mur. Il est bosselé en son centre, en forme de petite clef...",
                            wait: "Je prends le temps de lire l'article. Il mentionne un accident de voiture qui bloque la circulation."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "opening", target: [1] }, { command: "utiliser", state: "final", target: [2] }],
                            look: "Maintenant que j'ai remarqué la bosse en forme de clef, je ne vois plus que ça.",
                            use: "Je déchire la page de journal pour récupérer la clef derrière. Je garde avec moi.",
                            go: "Je suis devant le mur.",
                            hit: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                            inspect: "La clef détourée sous l'article est petite, comme celle trouvée la dernière fois dans le lit.",
                            wait: "Comment est-ce qu'un article de journal peut dater d'aujourd'hui ?"
                        },
                        final: {
                            look: "L'article déchiré fait un peu tache au milieu du méli-mélo de collages sur le mur.",
                            use: "Je ne pense pas qu'il y ait quelque chose d'autre à faire ici.",
                            go: "Je suis devant le mur.",
                            hit: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                            inspect: "La clef était sous la photo de l'article. Je n'ai pas pensé à la regarder avant de la déchirer.",
                            wait: `Il y a des posters de groupes de musique. Je reconnais certains, comme "Epoch" et "Spectral Wound".`
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            look: "Le mur est toujours recouvert. Je regarde si un article attire mon attention. Rien pour le moment.",
                            use: "Je ne pense pas que le mur me soit d'une grande utilité.",
                            go: "Je suis devant le mur.",
                            hit: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                            inspect: "Plusieurs articles parlent d'un accident sur une autoroute. J'ai mal à la tête quand je les lis.",
                            wait: "Je réfléchis aux articles qui concernent un accident sur l'autoroute. Pourquoi ce sujet spécifique ?",
                            accept: "J'ai la terrible impression d'être lié à ces articles de jounaux qui parle d'un accident. Pourtant, je vais bien, non ?."
                        }
                    }
                }, {    // lampe
                    name: "lampe",
                    determinant: "la ",
                    isLocated: false,
                    four: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "open", target: [3] }],
                            look: "C'est une lampe sur un long pied de bois. Elle pointe en direction du mur. Elle est éteinte.",
                            use: "Je tire sur la ficelle qui pend de la lampe. Elle s'allume.",
                            go: "Je suis devant la lampe.",
                            hit: "Je n'ai pas envie de casser cette potentielle source de lumière.",
                            inspect: "Il n'y a rien de particulier à cette lampe. Son chapeau est en tissu beige semi-transparent.",
                            wait: "J'attends un moment dans la pénombre de la lune. Je pourrai allumer la lumière pour y voir plus clair."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "closed", target: [3] }, { command: "utiliser", state: "closed", target: [2], condition: "opening" }, { command: "attendre", state: "opening", target: [2], condition: "closed" }],
                            look: "La lumière pointe en direction du mur. Elle éclaire les posters et articles de journaux qui y sont collés.",
                            use: "Je tire à nouveau sur le fil de la lampe. Elle s'éteint.",
                            go: "Je suis devant la lampe.",
                            hit: "Je n'ai pas envie de casser cette source de lumière.",
                            inspect: "Il n'y a rien de particulier à cette lampe. Son pied est en bois clair, peut-être du bouleau.",
                            wait: "La lumière allumée, je remarque un article mis en évidence sur le mur par de la peinture verte, comme un marqueur."
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "open", target: [3] }],
                            look: "La lampe n'a pas changé depuis mon dernier passage.",
                            use: "Je tire sur le fil de la lampe. Elle s'allume.",
                            go: "Je suis devant la lampe.",
                            hit: "Je ne veux pas la casser.",
                            inspect: "Je ne vois rien de particulier à cette lampe.",
                            wait: "J'attends un moment dans la pénombre. Je pourrais allumer la lampe pour mieux voir.",
                            accept: "C'est la lampe que j'ai dans mon appartement à côté de ma bibliothèque. Pourquoi est-elle ici ?."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "closed", target: [3] }],
                            look: "La lampe n'a pas changé depuis mon dernier passage.",
                            use: "Je tire sur le fil de la lampe. Elle s'éteint.",
                            go: "Je suis devant la lampe.",
                            hit: "Je ne veux pas la casser.",
                            inspect: "Je ne vois rien de particulier à cette lampe.",
                            wait: "J'attends un moment. Je ne vois rien de particulier sur le mur cette fois.",
                            accept: "C'est la lampe que j'ai dans mon appartement à côté de ma bibliothèque. Pourquoi est-elle ici ?."
                        }
                    }
                }, {    // échelle
                    name: "echelle",
                    determinant: "l' ",
                    isLocated: false,
                    four: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "opening", target: [4] }],
                            look: "L'échelle est couchée au fond de la pièce. Elle est en bois mais paraît tout de même solide.",
                            use: "Je redresse l'échelle pour la poser contre le mur du fond.",
                            go: "Je suis vers l'échelle. Elle est à ma portée.",
                            hit: "Je ne vois pas l'intérêt de frapper une échelle...",
                            inspect: "C'est une échelle en bois tenue par quelques clous sur les côtés. Pas le plus rassurant si je dois grimper.",
                            wait: "J'attends devant l'échelle. Et si je la mettais contre le mur du fond ?"
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "closed", target: [4] }],
                            look: "L'échelle est placée contre le mur au fond de la pièce. Elle ne mène nulle part, posée ici.",
                            use: "Je reprends l'échelle et la repose là où je l'ai trouvée.",
                            go: "Je suis vers l'échelle. Elle est à ma portée.",
                            hit: "Je ne vois pas l'intérêt de frapper une échelle...",
                            inspect: "C'est une échelle en bois tenue par quelques clous sur les côtés. Pas le plus rassurant si je dois grimper.",
                            wait: "Après réflexion je ne pense pas que ce soit un bon endroit pour grimper où que ce soit."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [4] }],
                            look: "L'échelle n'est pas au bon endroit. Il faut que je la pose là où il y a un trou dans la toiture.",
                            use: "Je prends l'échelle et la déplace jusqu'au trou dans le plafond. Là, je la pose contre le mur, droite.",
                            go: "Je suis vers l'échelle. Elle est à ma portée.",
                            hit: "Je ne vois pas l'intérêt de frapper une échelle...",
                            inspect: "Malgré ses airs peu fiables, il me semble que l'échelle devrait tenir mon poids.",
                            wait: "J'attends devant l'échelle. Et si je la mettais contre le mur, sous le trou au plafond ?"
                        },
                        final: {
                            interaction: [{ command: "utiliser", state: "open", target: [4] }],
                            win: { command: "aller" },
                            look: "L'échelle est placée sous le trou qui mène au plafond. Comme ça, je peux accéder au toit.",
                            use: "Je me ravise et plie l'échelle, avant de la remettre où je l'avais prise.",
                            go: "L'échelle grince à chaque pas, tandis que je gravis les niveaux uns à uns jusqu'à arriver sur le toit.",
                            hit: "Je ne vois pas l'intérêt de frapper une échelle...",
                            inspect: "Malgré ses airs peu fiables, il me semble que l'échelle devrait tenir mon poids.",
                            wait: "Je peux aisément monter sur le toit maintenant que l'échelle est posée ici."
                        }
                    },
                    five: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "opening", target: [4] }],
                            look: "L'échelle est couchée au fond de la pièce. Elle est en métal et paraît solide.",
                            use: "Je redresse l'échelle pour la poser contre le mur du fond.",
                            go: "Je suis vers l'échelle. Elle est à ma portée.",
                            hit: "L'échelle me permet d'avancer, pourquoi essayer de la casser ?",
                            inspect: "C'est une échelle, je ne sais pas quoi observer d'autre.",
                            wait: "Je peux poser l'échelle où je veux. Je devrais réfléchir à où avant.",
                            accept: "C'est une échelle comme une autre, je ne pense pas qu'elle me soit importante outre mesure."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "closed", target: [4] }],
                            look: "L'échelle est placée contre le mur au fond de la pièce. Elle ne mène nulle part, posée ici.",
                            use: "Je reprends l'échelle et la repose là où je l'ai trouvée.",
                            go: "Je suis vers l'échelle. Elle est à ma portée.",
                            hit: "L'échelle me permet d'avancer, pourquoi essayer de la casser ?",
                            inspect: "C'est une échelle, je ne sais pas quoi observer d'autre.",
                            wait: "L'échelle n'est pas placée au bon en droit et m'est inutile. Je devrais la reposer.",
                            accept: "C'est une échelle comme une autre, je ne pense pas qu'elle me soit importante outre mesure."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [4] }],
                            look: "L'échelle n'est pas au bon endroit. Il faut que je la pose là où il y a un trou dans la toiture.",
                            use: "Je prends l'échelle et la déplace jusqu'au trou dans le plafond. Là, je la pose contre le mur, droite.",
                            go: "Je suis vers l'échelle. Elle est à ma portée.",
                            hit: "L'échelle me permet d'avancer, pourquoi essayer de la casser ?",
                            inspect: "Cette échelle est un élément-clef pour continuer mon chemin.",
                            wait: "Je peux poser l'échelle où je veux. Je devrais la mettre sous le trou dans le toit.",
                            accept: "C'est un outil important pour la suite, finalement, la fin de mon aventure. Je suis content qu'elle m'ait facilité le trajet."
                        },
                        final: {
                            interaction: [{ command: "utiliser", state: "open", target: [4] }],
                            win: { command: "aller" },
                            look: "L'échelle est placée sous le trou qui mène au plafond. Comme ça, je peux accéder au toit.",
                            use: "Je me ravise et plie l'échelle, avant de la remettre où je l'avais prise.",
                            go: "Je suis vers l'échelle. Elle est à ma portée.",
                            hit: "L'échelle me permet d'avancer, pourquoi essayer de la casser ?",
                            inspect: "Cette échelle est un élément-clef pour continuer mon chemin.",
                            wait: "Je peux aisément monter sur le toit maintenant que l'échelle est posée ici.",
                            accept: "C'est un outil important pour la suite, finalement, la fin de mon aventure. Je suis content qu'elle m'ait facilité le trajet."
                        }
                    }
                }, {    // leave
                    name: "leave",
                    three: { text: "Je redescends au bureau. Je reviendrai dans la chambre plus tard..." },
                    four: { text: "J'ai besoin de prendre du recul. Je descends au bureau afin de changer d'air." },
                    five: { text: "La porte de l'escalier est fermée derrière moi. Je n'ai pas la possibilité de revenir en arrière." }
                }
            ]
        }, {    // TOIT
            name: "toit",
            texts: [
                {
                    text: "Je suis sur le toit de la maison. Un vent frais me parcourt la nuque.",
                    act: "regular",
                    active: false
                }, {
                    text: "La",
                    act: "sad",
                    active: false
                }, {
                    text: "lune",
                    act: "sad",
                    active: true
                }, {
                    text: "éclaire ce qui m'entoure.",
                    act: "sad",
                    active: false
                }, {
                    text: "Un grand autel est disposé sur le toit. Il y a un",
                    act: "regular",
                    active: false
                }, {
                    text: "bassin",
                    act: "regular",
                    active: true
                }, {
                    text: "rempli d'eau claire en son centre. À ses côtés, une",
                    act: "regular",
                    active: false
                }, {
                    text: "cierge",
                    act: "regular",
                    active: true
                }, {
                    text: "et un briquet à droite, et une",
                    act: "regular",
                    active: false
                }, {
                    text: "figurine",
                    act: "regular",
                    active: true
                }, {
                    text: "en forme de voiture à gauche.",
                    act: "regular",
                    active: false
                }, {
                    text: "Juste derrière moi, la",
                    act: "sad",
                    active: false
                }, {
                    text: "cheminée.",
                    act: "sad",
                    active: true
                }, {
                    text: "Il fait étonnemment chaud ici, comme lors d'un soir d'été. Une torpeur naît en moi.",
                    act: "accept",
                    active: false
                }
            ],
            items: [
                {       // lune
                    name: "lune",
                    determinant: "la ",
                    isLocated: true,
                    four: {
                        isOpened: false,
                        closed: {
                            look: "La lune brille de sa pâle lumière. Elle éclaire les alentours. Je me rends compte qu'il y a que cette maison en vue.",
                            use: "Toucher la lune... J'aurais voulu être un astronaute.",
                            go: "Impossible, c'est la lune.",
                            hit: "Elle est peut-être un peu trop loin pour pouvoir le faire...",
                            inspect: "Les cratères de la lune sont visibles d'ici. La lune a l'air paisible malgré ses marques.",
                            wait: "J'observe la lune. En la fixant, je me sens plus léger."
                        }
                    },
                    five: {
                        isOpened: false,
                        closed: {
                            interaction: [{ commande: "attendre", state: "open", target: [0], condition: true }],
                            look: "La lune trône au milieu du ciel, sa beauté n'a d'égal que sa taille.",
                            use: "Toucher la lune... Je ne suis malheureusement pas un astronaute.",
                            go: "Impossible, c'est la lune.",
                            hit: "Je n'en ressens pas le besoin.",
                            inspect: "La lune est un astre souvent considéré comme sacré. En la voyant seule dans le ciel, je comprends pourquoi.",
                            wait: ["En l'observant, je me dis que j'ai probablement encore des choses à faire ici avant de continuer.", "Je sens que la lune m'appelle. Je dois la fixer encore plus longtemps..."],
                            accept: "La lune est triste. Elle a un air grave. Ses teintes bleutées sont mélancoliques."
                        },
                        open: {
                            win: { command: "attendre" },
                            look: "La lumière de la lune éclaire les alentours. Il n'y a rien à part cette maison.",
                            use: "Toucher la lune... C'était un de mes rêves étant enfant. Mais j'ai fini par travailler dans la finance.",
                            go: "Impossible, c'est la lune.",
                            hit: "Je n'en ressens pas le besoin.",
                            inspect: "La lune est porteuse d'espoir, une promesse d'un lendemain. Mais cette fois elle ne me semble pas de bonne augure...",
                            wait: "En la fixant, elle s'empare de mon champ de vision. Je finis par être aveuglé par sa lumière. La torpeur me saisit pleinement.",
                            accept: "La lune est symbole de changement cyclique. Elle est plein, ce soir. Est-ce que cela veut dire quelque chose ?"
                        }
                    }
                }, {    // bassin
                    name: "bassin",
                    determinant: "le ",
                    isLocated: false,
                    four: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "C'est un bassin creusé dans la pierre de l'espèce d'autel qui trône sur le toit. Il y a de l'eau claire.",
                            use: "L'eau est froide. Elle ondule gentillement en suivant les mouvements de ma main.",
                            go: "Je suis devant le bassin.",
                            hit: "J'écrase ma paume contre l'eau du bassin. Elle m'éclabousse un peu.",
                            inspect: "Je ne vois rien de spécial dans l'eau du bassin.",
                            wait: "Qu'est-ce que ce bassin et cet autel font ici ? Sur un toit ? C'est absurde."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [1] }],
                            look: "Le bassin est rempli d'eau. Je pourrais me laver les mains à l'intérieur.",
                            use: "Je plonge mes mains couvertes de suie dans le bassin. Son eau se trouble et sa couleur se rapproche de l'antracite.",
                            go: "Je suis devant le bassin.",
                            hit: "Je ne pense pas que ce soit le moment de m'éclabousser d'eau froide.",
                            inspect: "L'eau devrait être suffisemment propre pour pouvoir essuyer la suie de mes mains.",
                            wait: "Je pourrais me laver les mains dans le bassin. Ce n'est pas comme si quelqu'un allait l'utiliser pour autre chose."
                        },
                        open: {
                            newAct: { command: "utiliser" },
                            look: "L'eau ondule toute seule à présent, comme si elle prenait vie dans le bassin, malgré sa couleur noire.",
                            use: "Je plonge mon visage à l'intérieur du bassin. Me voila plongé dans l'obscurité. J'ai l'impression que le monde autour de moi se meut. J'ouvre les yeux sous l'eau, quand soudain...",
                            go: "Je suis devant le bassin.",
                            hit: "Et me salire en m'éclaboussant de suie ? Je ne pense pas.",
                            inspect: "L'eau est devenue noire de suie. Elle est presque opaque désormais.",
                            wait: "Les ondes de l'eau sont hypnotisantes. J'aurais presque envie de m'y plonger."
                        }
                    },
                    five: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "accepter", state: "opening", target: [1] }],
                            look: "Le bassin contient toujours de l'eau. Elle est à nouveau claire, plus une trace de suie de mon dernier passage.",
                            use: "L'eau est froide au toucher. Elle n'a pas l'air différente d'avant.",
                            go: "Je suis devant le bassin.",
                            hit: "Je n'ai pas envie de mettre de l'eau partout en la frappant.",
                            inspect: "Il y a de légères gravures au fond de l'eau. Elles représentent le ciel de nuit, avec la lune.",
                            wait: "Qu'est-ce que ce bassin et cet autel font ici ? Sur un toit ? C'est absurde.",
                            accept: "Je me penche vers le bassin. L'air est plus chaud que d'habitude. L'eau m'attire. Ma gorge est sèche."
                        },
                        opening: {
                            collectible: { command: "utiliser", coll: "drankWater" },
                            interaction: [{ command: "utiliser", state: "open", target: [1] }],
                            look: "L'eau est parfaitement transparente. Elle reflète légèrement la lune.",
                            use: "J'y plonge mes mains en cuillère, et les ramène à moi, pleine d'eau fraîche, que je bois. Ça fait du bien.",
                            go: "Je suis devant le bassin.",
                            hit: "Je n'ai pas envie de mettre de l'eau partout en la frappant.",
                            inspect: "L'eau est claire et a l'air pure. Elle semble fraîche, comme de l'eau de source.",
                            wait: "Il doit y avoir une raison pour cet autel ici. Jusque-là, les objets ont généralement du sens.",
                            accept: "Je me penche vers le bassin. Ma gorge est sèche. Tellement sèche..."
                        },
                        open: {
                            look: "L'eau que j'ai bue est parfaitement transparente. Elle reflète légèrement la lune.",
                            use: "J'ai pu boire une fois déjà. Pas besoin de boire trop non plus.",
                            go: "Je suis devant le bassin.",
                            hit: "Je n'ai pas envie de mettre de l'eau partout en la frappant.",
                            inspect: "L'eau que j'ai bue est claire et a l'air pure. Elle semble fraîche, comme de l'eau de source.",
                            wait: "Je ne pense pas que je trouverai un sens à ce bassin, ni à cet autel.",
                            accept: "Je ne sais pas pourquoi ce bassin est ici, mais il m'a apporté de l'eau quand j'avais soif. Ça me suffit."
                        }
                    }
                }, {    // cierge
                    name: "cierge",
                    determinant: "la ",
                    isLocated: false,
                    four: {
                        isFinale: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "opening", target: [2] }],
                            look: "C'est une cierge éteinte. Elle est blanche est longue. Il y a un briquet à côté d'elle.",
                            use: "Je saisis le briquet et le prends avec moi.",
                            go: "Je suis devant la cierge et le briquet.",
                            hit: "Je ne vois pas ce que cela m'apporterait...",
                            inspect: "La cire est blanche-beige, légèrement translucide. On peut voire le fil à travers, si on se concentre.",
                            wait: "Je réfléchis un moment. Le briquet traîne juste à côté. Je pourrais le prendre."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [2] }, { command: "utiliser", state: "opening", target: [4] }],
                            look: "C'est une cierge éteinte. Elle est blanche est longue. J'ai le briquet en main, je pourrais l'allumer.",
                            use: "Je prends briquet et l'enclenche. J'allume la cierge et la prends en main. Je peux éclairer des objets avec elle.",
                            go: "Je suis devant la cierge, le briquet est dans ma poche.",
                            hit: "Je ne vois pas ce que cela m'apporterait...",
                            inspect: "La cire est blanche-beige, légèrement translucide. On peut voire le fil à travers, si on se concentre.",
                            wait: "Je me pose deux minutes pour réfléchir. Si j'allumais la bougie, je pourrais éclairer l'intérieur de la cheminée."
                        },
                        open: {
                            look: "La cierge brûle d'une flamme virevoltant au gré des courants d'air.",
                            use: "Je me suis déjà saisis de la cierge. Je peux l'utiliser pour éclairer des objets.",
                            go: "Je suis devant la cierge, le briquet est dans ma poche.",
                            hit: "Je ne vois pas ce que cela m'apporterait... et je préfère ne pas prendre de risque avec du feu...",
                            inspect: "La flamme est bleutée en sa base, et devient blanche, puis passe au rouge-orange.",
                            wait: "Que faire avec cette bougie allumée ? Après réflexion, je pourrais éclairer la cheminée, voir si elle contient quelque chose."
                        },
                        final: {
                            look: "La cierge brûle d'une flamme virevoltant au gré des courants d'air.",
                            use: "Je me suis déjà saisis de la cierge.",
                            go: "Je suis devant la cierge, le briquet est dans ma poche.",
                            hit: "Je ne vois pas ce que cela m'apporterait... et je préfère ne pas prendre de risque avec du feu...",
                            inspect: "La flamme est bleutée en sa base, et devient blanche, puis passe au rouge-orange.",
                            wait: "Je m'arrête pour réfléchir. J'ai déjà éclairé la cheminée avec. Je ne pense pas que la cierge me soit utile outre-mesure."
                        }
                    },
                    five: {
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "opening", target: [2] }],
                            look: "La cierge est éteinte, et neuve, comme si je ne l'avais pas allumée à mon passage précédent.",
                            use: "Je saisis le briquet et le prends avec moi.",
                            go: "Je suis devant la cierge et le briquet.",
                            hit: "Je ne pense pas que ça me soit utile.",
                            inspect: "La cire est légèrement translucide. Une croix chrétienne est gravée à la base de la cierge.",
                            wait: "Je réfléchis un moment. Le briquet traîne juste à côté. Je pourrais le prendre.",
                            accept: "C'est une cierge, qu'on trouverait typiquement dans une église, pour faire un vœux ou une prière."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", state: "open", target: [2] }],
                            collectible: { command: "utiliser", coll: "litCandle" },
                            look: "La cierge est éteinte, et neuve, comme si je ne l'avais pas allumée à mon passage précédent.",
                            use: "Je me saisis du briquet, et d'un coup sec du pouce, une flamme en jaillit. J'allume la cierge.",
                            go: "Je suis devant la cierge, le briquet est dans ma poche.",
                            hit: "Je ne pense pas que ça me soit utile.",
                            inspect: "La cire est légèrement translucide. Une croix chrétienne est gravée à la base de la cierge.",
                            wait: "En réfléchissant, je me demande : est-ce que ça vaut la peine d'allumer la cierge encore une fois ?",
                            accept: "Un objet de prière... que fait-il ici ? Je suis baptisé, mais pas croyant pour autant. Si ce lieu est lié à moi, je ne sais pas ce que ça fait là."
                        },
                        open: {
                            look: "La cierge brûle d'une flamme virevoltant au gré des courants d'air",
                            use: "Je ne pense pas que j'aies besoin d'éclairer quoi que ce soit cette fois.",
                            go: "Je suis devant la cierge, le briquet est dans ma poche.",
                            hit: "Je ne pense pas que ça me soit utile. Et puis, je n'aimerais pas prendre de risque avec du feu.",
                            inspect: "Sur la croix chrétienne gravée à la base de la cierge, une lettre : ",
                            wait: "J'attends devant la cierge allumée, sa flamme consumme 1cm de cire. Je ne vais pas attendre jusqu'à ce qu'elle soit consummée.",
                            accept: "Une cierge allumée sur un autel, éclairée par la lumière de la lune... quelle image funeste."
                        },
                    }
                }, {    // figurine
                    name: "figurine",
                    determinant: "la ",
                    isLocated: false,
                    four: {
                        isOpened: false,
                        close: {
                            interaction: [{ command: "frapper", state: "open", target: [3] }],
                            look: "C'est une figurine en forme de voiture de couleur verte. Un vert bouteille quelque peu daté.",
                            use: "La voiture fait quelques 20 centimètres, et pèse probablement 1kg. La figurine est assez lourde.",
                            go: "Je suis devant la figurine. Elle est à ma portée.",
                            hit: "Et si je...? Je me saisis de la voiture et la frappe contre l'autel. Elle est à présent toute cabossée.",
                            inspect: "C'est une Renault Clio des années 1990. Elle ressemble à la voiture que j'avais quand j'ai commencé à conduire.",
                            wait: "C'est une figurine de voiture... je ne vois pas ce qu'il y a à faire avec elle."
                        },
                        open: {
                            look: "La voiture est cassée comme si un véhicule lui était rentré dans le côté. Elle est pliée sur la longueur.",
                            use: "Je prends la voiture cabossée en main. Elle semble nettement plus fragile, malgré son poids.",
                            go: "Je suis devant la figurine. Elle est à ma portée.",
                            hit: "Elle est déjà cassée... je ne vois pas l'intérêt de la détruire plus que ça.",
                            inspect: "La portière passager est enfoncée à cause du choc, et le pare-brise est en miettes. Ça fait froid dans le dos.",
                            wait: "J'ai déjà cassé cette figurine... je ne vois pas ce qu'il y a à faire avec elle."
                        }
                    },
                    five: {
                        isFinal: false,
                        isOpened: false,
                        close: {
                            interaction: [{ command: "frapper", state: "open", target: [3], condition: 3 }],
                            look: "La figurine est un modèle plus moderne, une Toyota Yaris grise.",
                            use: "La figurine fait entre 15-20 centimètres, et pèse probablement 1-1,5kg. Elle est étonnament lourde.",
                            go: "Je suis devant la figurine. Elle est à ma portée.",
                            hit: [
                                "Je prends la figurine et la frappe capot en premier contre l'autel. Le pare-choc s'arrache, le capot se tord. Je suis tenté de le refaire.",
                                "Je lance la voiture contre l'autel une nouvelle fois. Son pare-brise vole en éclat. Je suis poussé de la casser encore plus. Une colère me prend.",
                                "Je ramasse la carcasse qu'est la figurine, et je l'écrase contre le sol. Une des roues avant se déboîte, tandis que la plaque avant se décroche. Encore."
                            ],
                            inspect: "C'est le modèle de voiture que je conduis aujourd'hui. La figurine a la même couleur que ma voiture. C'est un peu perturbant.",
                            wait: "En voulant attendre et réfléchir, une envie me prend de saisir cette voiture et de la réduire en miettes.",
                            accept: "C'est la même voiture que je conduis habituellement. Je l'ai achetée il y a quelques années d'occasion, c'est un bon modèle."
                        },
                        open: {
                            interaction: [{ command: "frapper", state: "final", target: [3] }],
                            collectible: { command: "frapper", coll: "brokenCar" },
                            look: "La voiture est dans un sale état. Mais je peux encore lui donner le coup de grâce.",
                            use: "Je prends la voiture cassée en main. Des miettes s'en détachent quand je la soulève. Ma colère est toujours là. Je veux la jeter une dernière fois.",
                            go: "Je suis devant la figurine. Elle est à ma portée.",
                            hit: "Je m'en saisis une dernière fois et la lance de toutes mes forces. Elle s'écrase à mes pieds avec violence. Elle n'est plus qu'une ruine.",
                            inspect: "Tout l'avant de la voiture est enfoncé vers l'arrière. S'il y avait un pilote, il n'aurait pratiquement aucune chance de survie.",
                            wait: "Je n'arrive pas à penser à autre chose qu'à donner le coup de grâce à cette figurine. La détruire.",
                            accept: "Pourquoi suis-je poussé à la détruire peu à peu ? Une colère bouillonne en moi."
                        },
                        final: {
                            look: "La voiture est une ruine. Il n'y a plus rien à détruire. Elle n'est plus. On dirait qu'elle a été écrasée par un camion.",
                            use: "Je prends la carcasse en main. Des miettes s'en détachent quand je la soulève.",
                            go: "Je suis devant la figurine. Elle est à ma portée.",
                            hit: "Je ne suis plus en colère.",
                            inspect: "La figurine n'est plus celle d'une voiture, mais d'un amas difforme de carrosserie avec deux roues à l'arrière...",
                            wait: "Je... je ne sais pas quoi en penser, même en prenant le temps d'attendre et de réfléchir.",
                            accept: "Pourquoi ce sentiment de profond malaise après ma colère noire ? J'ai comme un mauvais présentiment maintenant."
                        }
                    }
                }, {    // cheminée
                    name: "cheminée",
                    determinant: "la ",
                    isLocated: false,
                    four: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            look: "C'est une cheminée en brique rouge. Il n'y a rien de spécial.",
                            use: "Je touche l'extérieur de la cheminée. Les briques sont rugueuses sous mes doigts.",
                            go: "Je suis devant la cheminée.",
                            hit: "... je ne pense pas que ça soit utile de faire ça.",
                            inspect: "Il fait trop sombre pour voir quoi que ce soit à part sa surface.",
                            wait: "Je réfléchis 5 minutes. Il me faudrait une source de lumière pour pouvoir mieux l'observer."
                        },
                        opening: {
                            interaction: [{ command: "attendre", state: "open", target: [4] }],
                            look: "En pointant la bougie allumée vers l'intérieur de la cheminée, je remarque qu'il y a énormément de suie.",
                            use: "Je ne vois pas pourquoi je me salirais les mains à toucher de la suie.",
                            go: "Je suis devant la cheminée.",
                            hit: "... je ne pense pas que ça soit utile de faire ça.",
                            inspect: "Plus bas dans la cheminée, je remarque que la suie bouche le conduit. Elle n'a pas dû être nettoyée depuis des lustres.",
                            wait: "Comme un appel du vide, je suis pris de l'envie d'imprégner mes doigts de la suie."
                        },
                        open: {
                            interaction: [{ command: "utiliser", state: "final", target: [2, 4] }, { command: "utiliser", state: "opening", target: [1] }],
                            look: "Avec la bougie allumée à l'intérieur de la cheminée, je vois la suie, épaisse et grasse, qui recouvre ses murs.",
                            use: "Une à une, je frotte mes mains contre les parois grasses de la cheminée, les recouvrant d'une couche épaisse de suie.",
                            go: "Je suis devant la cheminée.",
                            hit: "... je ne pense pas que ça soit utile de faire ça.",
                            inspect: "La suie est antracite, et de la poussière s'y est collée. Elle semble inflammable, je ferais mieux de faire attention avec la bougie.",
                            wait: "Je suis pris de l'envie de frotter mes mains dans la cheminée pour m'imprégner de la suie."
                        },
                        final: {
                            look: "La cheminée n'est particulièrement notable en-dehors de son intérieur très sale.",
                            use: "Je me suis enduit les mains de suie déjà une fois, je ne pense pas que ça me serve d'en rajouter une couche.",
                            go: "Je suis devant la cheminée.",
                            hit: "... je ne pense pas que ça soit utile de faire ça.",
                            inspect: "Il n'y a rien de plus à observer. C'est une cheminée sale. Fin de l'histoire.",
                            wait: "Je ne pense pas que cette cheminée m'apportera quoi que ce soit."
                        }
                    },
                    five: {
                        isOpened: true,
                        open: {
                            look: "C'est la même cheminée que la dernière fois, quoi que légèrement plus propre d'apparence, et peinte en gris.",
                            use: "Les briques rouges sont recouvertes d'une fine couche de béton, ou peut-être de peinture grise.",
                            go: "Je suis devant la cheminée.",
                            hit: "... je ne pense pas que ça soit utile de faire ça.",
                            inspect: "C'est une cheminée. Elle ne semble rien avoir de spécial, et je n'ai pas envie de me salir une nouvelle fois les mains",
                            wait: "Je ne pense pas que cette cheminée m'apportera quoi que ce soit.",
                            accept: "Je ne vois pas ce que cette cheminée a de spécial."
                        }
                    }
                }, {    // leave
                    name: "leave",
                    four: { text: "Je descends l'échelle et reviens dans la chambre. Est-ce que j'ai oublié quelque chose en bas ?" },
                    five: { text: "En me retournant, le trou dans le toit par lequel je suis monté est fermé, et l'échelle n'est plus là. Pourquoi donc ? Je suis coincé là-haut." }
                }
            ]
        }, {    // JARDIN/CIEL/ETHERAL REALM
            name: "jardin",
            texts: [
                {
                    text: "La lumière m'aveugle avant de s'estomper. Une chaleur m'envahit, contrastant avec la fraîcheur de la maison jusqu'à maintenant. Où suis-je ?",
                    act: "regular",
                    active: false
                }, {
                    text: "On dirait un",
                    act: "regular",
                    active: false
                }, {
                    text: "jardin,",
                    act: "regular",
                    active: true
                }, {
                    text: "mais pas celui de la maison. Derrière moi, cette dernière a d'ailleurs disparu.",
                    act: "regular",
                    active: false
                }, {
                    text: "Sur une petite table en bois est posée une",
                    act: "accept",
                    active: false
                }, {
                    text: "lettre,",
                    act: "accept",
                    active: true
                }, {
                    text: "pliée en deux.",
                    act: "accept",
                    active: false
                }, {
                    text: "Au fond du jardin, sous un saule pleureur, se trouve un",
                    act: "regular",
                    active: false
                }, {
                    text: "écran",
                    act: "regular",
                    active: true
                }, {
                    text: "de télévision assez ancien, mais en état de marche.",
                    act: "regular",
                    active: false
                }, {
                    text: "Je me sens étrangement calme, en paix avec moi-même et le monde qui m'entoure.",
                    act: "accept",
                    active: false
                }
            ],
            items: [
                {       // jardin
                    name: "jardin",
                    determinant: "le ",
                    isLocated: true,
                    five: {
                        isOpened: false,
                        closed: {
                            look: "C'est un jardin paisible. Le sol est recouvert d'herbe et de paquerettes. Quelques jonquilles sont éparpillées çà et là.",
                            use: "Je touche le sol du jardin. Il est légèrement humide, comme si la rosée du matin était encore présente.",
                            go: "Je suis déjà dans le jardin.",
                            hit: "Je n'ai rien à frapper ou casser ici. La nature, au contraire, m'appaise.",
                            inspect: "Au fond, un très grand saule pleureur domine le reste du jardin. Ses branches se balancent lentement au gré de la brise.",
                            wait: "Je prends le temps de respirer. Le jardin est magnifique. Je me sens bien quand je suis à l'intérieur.",
                            accept: "Ce jardin me rappelle celui de mes parents, en campagne. Il y avait un cours d'eau pas loin au Sud."
                        },
                        open: {
                            collectible: { command: "accepter", coll: "acceptedGarden" },
                            look: "Après avoir lu la lettre, le jardin semble rappetisser petit à petit. Il se referme sur moi.",
                            use: "Je caresse le saule pleureur. Son écorce rugueuse me calme, après le choc de la lettre.",
                            go: "Je suis déjà dans le jardin.",
                            hit: "Je ne cherche pas à casser quoi que ce soit.",
                            inspect: "Le saule pleureur est très vieux. Ses branches touchent presque le sol. Il est majestueux, et trône sur le reste du jardin.",
                            wait: "Je prends quelques minutes posé contre le gigantesque arbre. Il me calme.",
                            accept: "Le jardin autour de moi disparaît peu à peu. Il devient de plus en plus étriqué. Cela doit être ma conscience qui s'envole. Ma fin est-elle proche ?"
                        }
                    }
                }, {    // lettre
                    name: "lettre",
                    determinant: "la ",
                    isLocated: false,
                    five: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "utiliser", state: "opening", target: [1] }],
                            look: "C'est une lettre pliée, estampillée à la cire rouge d'un écusson.",
                            use: "J'ouvre délicatement la lettre en déchirant la cire.",
                            go: "Je suis devant la lettre.",
                            hit: "Je ne vois pas l'intérêt. Je ne veux pas chiffoner ou déchirer la lettre.",
                            inspect: "L'écusson est divisé en quatre avec un animal en son centre brandissant une marteau.",
                            wait: "En prenant quelques instants pour réfléchir, je me demande ce que la lettre contient.",
                            accept: "C'est l'écusson de ma famille, il représente un ours avec un marteau car mes ancêtres étaient des forgerons."
                        },
                        opening: {
                            interaction: [{ command: "voir", state: "open", target: [0, 1] }],
                            triggerEvent: { command: "voir", name: "readingLetter" },
                            collectible: { command: "voir", coll: "readLetter" },
                            look: [
                                "Cher moi,",
                                "Tu dois avoir de nombreuses questions. Laisse-moi y répondre ici.",
                                "Tout d'abord, tu l'auras probablement compris, la maison que tu visites depuis tout ce temps est bel et bien la tienne. Enfin, la nôtre. Celle dans laquelle on a grandi, ensemble.",
                                "Son état de ruine est dû au fait qu'on ait cessé d'y penser durant notre vie d'adulte. Nous vivions notre vie, nous n'avions pas besoin de nous souvenir. Nous avions plein de préoccupations ; le travail, l'amour, nos amies et amis, notre famille...",
                                "C'est quelque chose de regrettable, l'oubli. L'absence de pensée envers ce qu'on a vécu, ce qui nous a construit. Nos préoccupations sont maintenant derrière nous, et nous avons enfin pu nous souvenir. Nous n'avons plus à nous préoccuper de ce qui nous distrayait.",
                                "J'ai une nouvelle importante et déchirante à t'annoncer. Tu ne respires plus, l'air t'as été dérobé. Tu es en train de mourir.",
                                "Enfin, nous le sommes, tous les deux, en même temps. Tu as eu un accident de voiture. Les médecins et la polices diront que tu es mort sur le coup.",
                                "Mais en ce moment, tu n'es pas encore mort. Alors que le monde autour de toi disparaît et se contorsionne, tes neurones s'activent une dernière fois dans une explosion d'endorphines, de souvenirs, de regrets, de pensées, qui s'entrechoquent et se mêlent les unes aux autres.",
                                "Les électrons de ton corps se mettent à danser avec ceux du sol sous nos pieds et du ciel au-dessus de nous. On pourrait penser que c'est le fin de tout.",
                                "Mais il n'y a aucun moment où nous commençons et nous finissons. Nous sommes de l'énergie, pas juste un souvenir. Nos choix, notre nom, notre personnalité, tout ça est venu après nous. Nous étions là avant tout ça, et nous continuerons d'exister après.",
                                "L'oubli est regrettable, mais n'est pas la fin de nous, de notre existence, de notre présence.",
                                "Il n'y a pas de temps. Il n'y a pas de mort non plus, du moins, pas comme on l'entend. La vie est un rêve. C'est un voeu. Réalisé encore et encore, et encore, et encore, et ainsi de suite, pour l'éternité.",
                                "Nous sommes tous ce souhait. Nous sommes toutes choses. Nous sommes tous les éléments. Il n'y a donc pas de peur à avoir.",
                                "Nos atomes sont partout. Malgré notre mort, nous sommes d'une certaine façon encore remplis de vie. Nous avons rejoint les étoiles, et le reste de l'univers.",
                                "Je serai toujours à tes côtés, "
                            ],
                            use: "J'ai déjà ouvert la lettre. En la prenant en main, elle est légère.",
                            go: "Je suis devant la lettre.",
                            hit: "Je ne vois pas l'intérêt. Je ne veux pas chiffoner ou déchirer la lettre.",
                            inspect: "L'écriture est la mienne. La lettre est également signé par moi.",
                            wait: "Je prends quelques minutes devant la lettre, ouverte. Elle m'invite à la lire.",
                            accept: "C'est une lettre que j'ai apparemment écrite. Comment et quand, je ne sais pas."
                        },
                        open: {
                            interaction: [{ command: "attendre", state: "final", target: [1] }],
                            look: "La lettre est par-terre. Je l'ai lâchée après l'avoir lue. J'ai pris peur de ce qu'elle contenait.",
                            use: "Je n'ose pas la toucher après ce qu'elle m'annonce. Ma respiration est haletante.",
                            go: "La lettre est à mes pieds.",
                            hit: "Je ne vois pas l'intérêt. Je ne suis pas en colère, je suis sous le choc.",
                            inspect: "La lettre gît au milieu de l'herbe et des paquerettes. Elle semble si... paisible, au milieu du jardin.",
                            wait: "Je reprends mon souffle. Je suis mourrant, mais je suis encore en vie en ce moment. Je n'ai pas d'autre choix que d'accepter mon destin.",
                            accept: "Je serais... mort ? Ou en tout cas mourrant ? Mais pourquoi... et comment ? Une larme coule le long de ma joue droite."
                        },
                        final: {
                            collectible: { command: "accepter", coll: "acceptedLetter" },
                            look: "La lettre est toujours au sol. Je regarde mes deux mains. Deviennent-elles... transparente ?",
                            use: "J'essuie mes larmes, face à cette lettre qui m'a tant chamboulé.",
                            go: "Je suis devant la lettre.",
                            hit: "Je ne vois pas l'intérêt. Je ne veux pas chiffoner ou déchirer la lettre.",
                            inspect: "Je ressens mon corps devenir plus léger. Je n'en n'ai plus pour longtemps. Le bout de mes doigts est légèrement translucide.",
                            wait: "J'attends quelques minutes, reprends mon souffle. Une fatigue me parcourt.",
                            accept: "Ça doit être mon inconscient qui me parle dans cette lettre. Je vais mourir. C'est absurde, et pourtant une quiétude me prends peu à peu."
                        }
                    }
                }, {    // ecran
                    name: "ecran",
                    determinant: "l' ",
                    isLocated: true,
                    five: {
                        isFinal: false,
                        isOpened: false,
                        isOpening: false,
                        closed: {
                            interaction: [{ command: "voir", state: "opening", target: [2], condition: 5 }],
                            look: [
                                "L'écran est allumé, et montre des images à un rythme effreiné. En me concentrant, j'arrive à en voir quelques-unes.",
                                "Je me vois enfant, assis à l'école, levant la main pour répondre à une question. Le professeur se retourne au moment où je cligne des yeux, et le moment est déjà passé.",
                                "Je me vois vers 13 ans. Mon premier amour, la personne qui m'a marqué quand j'étais en fin de scolarité. L'image change presque immédiatement.",
                                "Je me vois à l'anniversaire de mes 18 ans. La vie d'adulte, enfin ! Je distingue à peine les visages de mes amies et mes amis. L'écran passe à autre chose.",
                                "Je me vois au travail. Ça devait être mon premier jour, j'avais mis de beaux vêtement par excès de zèle. L'image zappe encore une fois"
                            ],
                            use: ".Il n'y a pas de bouton pour l'éteindre ou changer la source des images. Il n'y a rien qui m'indique d'où elles viennent non plus.",
                            go: "Je fais face à l'écran de télévision.",
                            hit: "Je n'ai pas envie de casser l'écran.",
                            inspect: "L'écran n'a pas de marque. Il n'a pas un design particulier qui pourrait m'indiquer ses origines.",
                            wait: "J'attends devant l'écran, alors que des images flashent à toutes vitesses. Des moments d'une vie. De la mienne.",
                            accept: "L'écran montre mes souvenirs, la vie que j'ai vécue. Il commence depuis le tout début, et passe tout en revue."
                        },
                        opening: {
                            interaction: [{ command: "voir", state: "open", target: [2] }],
                            collectible: { command: "voir", coll: "lookedScreen" },
                            look: "Je me vois au volant d'une voiture, sur l'autoroute. Il pleut, la route est mouillée. Un virage. Un aquaplanning. Et l'écran s'éteint.",
                            use: "Il n'y a pas de bouton pour l'éteindre ou changer la source des images. Il n'y a rien qui m'indique d'où elles viennent non plus..",
                            go: "Je fais face à l'écran de télévision.",
                            hit: "Je n'ai pas envie de casser l'écran.",
                            inspect: "L'écran n'a pas de marque. Il n'a pas un design particulier qui pourrait m'indiquer ses origines.",
                            wait: "J'attends devant l'écran, alors que des images flashent à toutes vitesses. Des moments d'une vie. De la mienne.",
                            accept: "L'écran montre mes souvenirs, la vie que j'ai vécue. Il commence depuis le tout début, et passe tout en revue."
                        },
                        open: {
                            interaction: [{ command: "attendre", state: "final", target: [2], condition: true }],
                            look: "L'écran est éteint. Il n'affiche plus aucune image.",
                            use: "Je touche l'écran. Tape une petit coup dessus, comme si ça allait faire revenir l'image... Rien.",
                            go: "Je fais face à l'écran de télévision.",
                            hit: "Je n'ai pas envie de casser l'écran.",
                            inspect: "Je n'arrive pas à déterminer pourquoi il s'est éteint, ni comment le rallumer.",
                            wait: [
                                "J'attends devant l'écran éteint. Rien ne se passe. J'ai le sentiment d'avoir manqué quelque chose dans le jardin, ou dans la lettre.",
                                "J'attends 15, 30, 60 minutes. L'écran se rallume soudain, et me montre, moi, comme un miroir, entrain de le regarder. Puis mon reflet disparaît peu à peu."
                            ],
                            accept: "L'écran montrait mes souvenirs, la vie que j'ai vécue. Il s'est arrêté. Comme si ma vie, une fois passées devant mes yeux, s'arrêtait."
                        },
                        final: {
                            triggerEvent: { command: "accepter", name: "endGame" },
                            look: "En regardant mes mains, elles disparaissent toujours plus vite. Au rythme de mon reflet dans l'écran.",
                            use: "J'essaie de m'appuyer contre l'écran, l'arrêter, mais mes mains passent à travers.",
                            go: "Je fais face à l'écran de télévision.",
                            hit: "Même si je le voulais, je ne peux plus casser l'écran. Mon corps le traverse.",
                            inspect: "Mes mains s'effritent et partent en un million de petites particules. Je me défais comme un gaz.",
                            wait: "Plus j'attends, plus je disparais.",
                            accept: [
                                [
                                    "Je disaparaît et rejoins le reste de l'univers. Je ne suis plus. Ma conscience est partout.",
                                    "Me voila, à la fin de mon voyage.",
                                    "Cette maison, d'abord étrangère, m'est maintenant familière.",
                                    "Je l'accepte à bras ouvert.",
                                    "Soudain, tout devient noir.",
                                    "Je flotte au milieu des éléments",
                                    "Je fais maintenant partie du reste de ce qui existe.",
                                    "J'ai arrêté de rêver.",
                                    "Vivant..."
                                ],
                                [
                                    "Je peux à présent me reposer",
                                    "Je suis à la maison",
                                    "Je suis chez moi",
                                    "Je rejoins mes souvenirs",
                                    "Je rejoins le reste de l'univers",
                                    "Je ne suis qu'atomes",
                                    "Je suis entier",
                                    "Je suis vivant",
                                    "Je plonge dans l'horizon"
                                ]
                            ]
                        }
                    }
                }, {    // leave
                    name: "leave",
                    five: { text: "Je n'ai nulle part où aller. Mon voyage prend fin ici." }
                }
            ]
        }
    ],
    currentScene: 0,
    isSilent: false,
    previousInput: [],
    player: {
        collectibles: {
            toit: {
                drankWater: false,
                litCandle: false,
                brokenCar: false
            },
            jardin: {
                readLetter: true,
                acceptedLetter: true,
                acceptedGarden: true,
                lookedScreen: true
            }
        },
        username: "default",
        shortName: "ef",
        currentAct: 0,
        count: 0,
    }
}

const monBody = document.body,
    gameContainer = document.getElementById("gameContainer"),
    title = document.getElementById('titleGame'),
    gameDiv = document.getElementById("gameScreen"),
    bottomScreen = document.getElementById("screenBottom"),
    monInput = document.getElementById("commandInput"),
    mesCommandes = document.querySelectorAll(".command"),
    monAlert = document.getElementById("boxAlert"),
    monStyle = document.getElementById("monStyle");

let mesMots = [],
    titleText = title.textContent,
    counterCommands = 0,
    clearInt = false,
    isDefault = true,
    getDefault = isDefault;

// OBTENIR LA DATE ACTUELLE
function getToday() {
    const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        today = new Date(),
        day = today.getDate(),
        monthIndex = today.getMonth(),
        year = today.getFullYear(),
        month = months[monthIndex];

    return `${day} ${month} ${year}`;
}

function printTxt() {
    let txt = "";
    MYGAME.scenes.forEach((scn, idx) => {
        if (idx == 0) {
            scn.texts.forEach((txts) => {
                txts.text.forEach((t) => {
                    txt += t[0] + " "
                });
            });
        }
        if (idx > 1) {
            scn.texts.forEach((txts) => {
                txt += txts.text + " "
            });
            scn.items.forEach((itms) => {
                if (itms.name == "leave") {
                    if (itms.one != undefined) txt += itms.one.text + " ";
                    if (itms.two != undefined) txt += itms.two.text + " ";
                    if (itms.three != undefined) txt += itms.three.text + " ";
                    if (itms.four != undefined) txt += itms.four.text + " ";
                    if (itms.five != undefined) txt += itms.five.text + " ";
                }
                else {
                    if (itms.zero != undefined) {
                        if (itms.zero.closed != undefined) txt += itms.zero.closed.look + " " + itms.zero.closed.use + " " + itms.zero.closed.go + " ";
                        if (itms.zero.opening != undefined) txt += itms.zero.opening.look + " " + itms.zero.opening.use + " " + itms.zero.opening.go + " ";
                        if (itms.zero.open != undefined) txt += itms.zero.open.look + " " + itms.zero.open.use + " " + itms.zero.open.go + " ";
                        if (itms.zero.final != undefined) txt += itms.zero.final.look + " " + itms.zero.final.use + " " + itms.zero.final.go + " ";
                    }
                    if (itms.one != undefined) {
                        if (itms.one.closed != undefined) txt += itms.one.closed.look + " " + itms.one.closed.use + " " + itms.one.closed.go + " ";
                        if (itms.one.opening != undefined) txt += itms.one.opening.look + " " + itms.one.opening.use + " " + itms.one.opening.go + " ";
                        if (itms.one.open != undefined) txt += itms.one.open.look + " " + itms.one.open.use + " " + itms.one.open.go + " ";
                        if (itms.one.final != undefined) txt += itms.one.final.look + " " + itms.one.final.use + " " + itms.one.final.go + " ";
                    }
                    if (itms.two != undefined) {
                        if (itms.two.closed != undefined) txt += itms.two.closed.look + " " + itms.two.closed.use + " " + itms.two.closed.go + " " + itms.two.closed.hit + " ";
                        if (itms.two.opening != undefined) txt += itms.two.opening.look + " " + itms.two.opening.use + " " + itms.two.opening.go + " " + itms.two.opening.hit + " ";
                        if (itms.two.open != undefined) txt += itms.two.open.look + " " + itms.two.open.use + " " + itms.two.open.go + " " + itms.two.open.hit + " ";
                        if (itms.two.final != undefined) txt += itms.two.final.look + " " + itms.two.final.use + " " + itms.two.final.go + " " + itms.two.final.hit + " ";
                    }
                    if (itms.three != undefined) {
                        if (itms.three.closed != undefined) txt += itms.three.closed.look + " " + itms.three.closed.use + " " + itms.three.closed.go + " " + itms.three.closed.hit + " " + itms.three.closed.inspect + " ";
                        if (itms.three.opening != undefined) txt += itms.three.opening.look + " " + itms.three.opening.use + " " + itms.three.opening.go + " " + itms.three.opening.hit + " " + itms.three.opening.inspect + " ";
                        if (itms.three.open != undefined) txt += itms.three.open.look + " " + itms.three.open.use + " " + itms.three.open.go + " " + itms.three.open.hit + " " + itms.three.open.inspect + " ";
                        if (itms.three.final != undefined) txt += itms.three.final.look + " " + itms.three.final.use + " " + itms.three.final.go + " " + itms.three.final.hit + " " + itms.three.final.inspect + " ";
                    }
                    if (itms.four != undefined) {
                        if (itms.four.closed != undefined) txt += itms.four.closed.look + " " + itms.four.closed.use + " " + itms.four.closed.go + " " + itms.four.closed.hit + " " + itms.four.closed.inspect + " " + itms.four.closed.wait + " ";
                        if (itms.four.opening != undefined) txt += itms.four.opening.look + " " + itms.four.opening.use + " " + itms.four.opening.go + " " + itms.four.opening.hit + " " + itms.four.opening.inspect + " " + itms.four.opening.wait + " ";
                        if (itms.four.open != undefined) txt += itms.four.open.look + " " + itms.four.open.use + " " + itms.four.open.go + " " + itms.four.open.hit + " " + itms.four.open.inspect + " " + itms.four.open.wait + " ";
                        if (itms.four.final != undefined) txt += itms.four.final.look + " " + itms.four.final.use + " " + itms.four.final.go + " " + itms.four.final.hit + " " + itms.four.final.inspect + " " + itms.four.final.wait + " ";
                    }
                    if (itms.five != undefined) {
                        if (itms.five.closed != undefined) txt += itms.five.closed.look + " " + itms.five.closed.use + " " + itms.five.closed.go + " " + itms.five.closed.hit + " " + itms.five.closed.inspect + " " + itms.five.closed.wait + " " + itms.five.closed.accept + " ";
                        if (itms.five.opening != undefined) txt += itms.five.opening.look + " " + itms.five.opening.use + " " + itms.five.opening.go + " " + itms.five.opening.hit + " " + itms.five.opening.inspect + " " + itms.five.opening.wait + " " + itms.five.opening.accept + " ";
                        if (itms.five.open != undefined) txt += itms.five.open.look + " " + itms.five.open.use + " " + itms.five.open.go + " " + itms.five.open.hit + " " + itms.five.open.inspect + " " + itms.five.open.wait + " " + itms.five.open.accept + " ";
                        if (itms.five.final != undefined) txt += itms.five.final.look + " " + itms.five.final.use + " " + itms.five.final.go + " " + itms.five.final.hit + " " + itms.five.final.inspect + " " + itms.five.final.wait + " " + itms.five.final.accept + " ";
                    }
                }
            });
        }
    });
    return txt;
}

setTimeout(() => console.log(printTxt()), 20000);