const MYGAME = {
    scenes: [
        {       // ACTES
            name: "Actes",
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
                        ["Au clair de lune", false]
                    ]
                },
                {
                    id: 4,
                    text: [
                        ["Acte 5", true],
                        ["Révélations", false]
                    ]
                }
            ],
        }, {    // PRENOM
            name: "Nommez-vous.",
            title: "Quel est votre prénom ?",
            text1: "S'il-vous-plaît entrez un prénom.",
            text2: "Utiliser votre vrai prénom fonctionne mieux pour le jeu."
        }, {    // PORTAIL
            name: "Portail",
            texts: [
                {
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
                            interaction: [{ command: "frapper", etat: "open", cible: [0, 1, 2] }],
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
                            interaction: [{ command: "frapper", etat: "open", cible: [1, 2] }],
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
                            interaction: [{ command: "frapper", etat: "open", cible: [1, 2] }],
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
                            goWin: true,
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
                            goWin: true,
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
                            goWin: true,
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
                            goWin: true,
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
                            goWin: true,
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
                            goWin: true,
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
                            goWin: true,
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
                            goWin: true,
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
                            goWin: true,
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
                    name: "boîte",
                    isLocated: true,
                    determinant: "la ",
                    three: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "frapper", etat: "open", cible: [3] }],
                            look: "La boîte est toute cabossée et tient à peine debout.",
                            use: "La boîte est fermée, et un pli du métal la coince dans cette position.",
                            go: "La boîte est déjà devant moi.",
                            hit: "Je frappe la boîte. Celle-ci se débloque à cause du choc.",
                            inspect: "Il n'y a rien à voir de spécial sur cette boîte, la plaquette du nom n'est plus là.",
                        },
                        open: {
                            interaction: [{ command: "inspecter", etat: "opening", cible: [0] }],
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
                            interaction: [{ command: "attendre", etat: "opening", cible: [5] }],
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
                            interaction: [{ command: "utiliser", etat: "opening", cible: [0] }, { command: "utiliser", etat: "open", cible: [5] }],
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
                            interaction: [{ command: "accepter", etat: "open", cible: [2] }],
                            look: "Ma maison est assez modeste, de par ses deux étages et sa peinture beige très sobre.",
                            use: "Je devrais me rapprocher de ma maison pour la toucher.",
                            go: "Je préfère prendre mon temps et ne pas me presser. J'observe ma maison un moment.",
                            hit: "Je n'ai pas envie de frapper ma maison.",
                            inspect: "De là, je ne vois pas beaucoup de détails.",
                            wait: "L'air doux d'une nuit d'été est agréable. Il manque tout de même le bruit des criquets.",
                            accept: "C'est donc ma maison. Je suis prêt à y entrer une dernière fois.",
                        }
                    }
                }, {    // leave
                    name: "leave",
                    one: { text: "Cette maison m'attire. En plus, j'ai marché trop longtemps, je ne vais pas partir maintenant." },
                    two: { text: "Je suis à nouveau devant cette maison. Pourquoi ? Je ne peux pas partir maintenant." },
                    three: { text: "Je ne comprends pas pourquoi je suis à nouveau devant cette maison, mais je compte le découvrir. Je reste." },
                    four: { text: "Je veux savoir ce qui se cache derrière cette maison. Je ne vais pas partir." },
                    five: { text: "Cette maison est mienne. Je ne vais pas partir. Je dois y entrer une dernière fois..." }
                }
            ]
        }, {    // PORCHE
            name: "Porche",
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
                            interaction: [{ command: "utiliser", etat: "open", cible: [0] }],
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
                            interaction: [{ command: "frapper", etat: "open", cible: [0] }],
                            look: "La porte est toujours en mauvais état, mais cette fois a en son centre un carreau de verre opaque.",
                            use: "La porte est fermée à clef, impossible de l'ouvrir.",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je prends un peu d'élan pour donner un violent coup d'épaule à la porte, qui casse sous mon poids."
                        },
                        open: {
                            goWin: true,
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
                            interaction: [{ command: "utiliser", etat: "open", cible: [0] }],
                            look: "La clef que j'ai en main semble correspondre à la serrure.",
                            use: "En un mouvement sec de la clef dans la serrure, la porte se déverouille.",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je me suis déjà fait mal à l'épaule en fonçant contre la porte la dernière fois. De plus, j'ai la clef en main.",
                            inspect: "La clef est lourde dans ma main. Elle est un peu rouillée."
                        },
                        open: {
                            goWin: true,
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
                            interaction: [{ command: "attendre", etat: "opening", cible: [3] }],
                            look: "La porte est fermée. Ses teintes rouges me barrent une nouvelle fois l'entrée.",
                            use: "À nouveau fermée à clef. À ce stade, cela ne me surprent guère.",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je risque de me faire mal à chercher à défoncer la porte.",
                            inspect: "La peinture est lisse et appliquée avec soin. On voit cependant qu'il s'agit d'un travail d'amateur.",
                            wait: "Je réfléchis à comment l'ouvrir... Est-ce que la boîte à code serait la solution cette fois-ci ?"
                        },
                        opening: {
                            interaction: [{ command: "utiliser", etat: "open", cible: [0] }],
                            look: "La clef que j'ai en main correspond à la serrure.",
                            use: "La porte était fermée à double tour. Je tourne la clef plusieurs fois, et la porte est ouverte.",
                            go: "Je suis déjà devant la porte.",
                            hit: "J'ai la clef en main, je ne vais pas chercher à enfoncer la porte.",
                            inspect: "La clef est nettement plus légère que les précédentes. Plus moderne également.",
                            wait: "J'ai la clef, je n'ai plus besoin d'attendre ou de réfléchir."
                        },
                        open: {
                            goWin: true,
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
                            interaction: [{ command: "accepter", etat: "opening", cible: [4] }],
                            look: "La porte est encore une fois fermée. Elle est en bois peint, visiblement à la main.",
                            use: "À nouveau fermée à clef. Aucune surprise. Où est-ce que la clef se trouve cette fois ?",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je n'ai pas envie de la frapper.",
                            inspect: "La vitre centrale de la porte donne sur le bureau à l'intérieur.",
                            wait: "Je réfléchis. Comment l'ouvrir cette fois-ci ?",
                            accepter: "Peut-être que la clef est sous le paillasson, comme au début ?"
                        },
                        opening: {
                            interaction: [{ command: "accepter", etat: "open", cible: [0] }],
                            look: "La clef que j'ai en main semble correspondre à la serrure de la porte.",
                            use: "J'essaie de mettre la clef dans la porte, mais un sentiment de peur m'envahit. Je me ravise.",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je n'ai pas envie de la frapper.",
                            inspect: "La clef me parait si lourde en main, elle me met mal à l'aise... Comment cela se fait-il ?",
                            wait: "Est-ce que je pense trop ? De quoi ai-je peur ?",
                            accept: "Ce sera la dernière fois que j'entrerai dans la maison. Je dois accepter cela."
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "final", cible: [0] }],
                            look: "La clef que j'ai en main correspond à la serrure de la porte.",
                            use: "J'essaie de mettre la clef dans la porte, malgré mon malaise. Je tourne la clef dans la serrure...",
                            go: "Je suis déjà devant la porte.",
                            hit: "Je n'ai pas envie de la frapper.",
                            inspect: "Ma main tremble en tenant la clef. Je dois affronter ma peur que mon aventure se termine.",
                            wait: "J'essaie de me calmer. Est-ce que c'est vraiment la fin ?",
                            accept: "Pourquoi cela serait la fin ? C'est peut-être un commencement."
                        },
                        final: {
                            goWin: true,
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
                    name: "fenêtre",
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
                            interaction: [{ command: "frapper", etat: "open", cible: [1] }],
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
                            interaction: [{ command: "inspecter", etat: "opening", cible: [1] }],
                            look: "La vitre est moins sale, mais la buée épaisse n'aide pas à voir à travers.",
                            use: "Je ne peux pas ouvrir la fenêtre de l'extérieur.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "Je n'ai pas de raison de casser la fenêtre pour le moment.",
                            inspect: "De l'autre côté, pendant à un fil, la clef de la maison. Je dois ouvrir cette fenêtre."
                        },
                        opening: {
                            interaction: [{ command: "frapper", etat: "open", cible: [1] }],
                            look: "La clef est derrière la fenêtre, mais je ne vois pas de poignée pour l'ouvrir.",
                            use: "Je ne peux pas l'ouvrir depuis l'extérieur.",
                            go: "Je suis déjà devant la fenêtre.",
                            hit: "Je donne un coup sec avec mon coude, le verre se brise sous le choc.",
                            inspect: "La clef est clairement celle de la maison, c'est la même qu'à mon premier passage."
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "final", cible: [1] }, { command: "utiliser", etat: "opening", cible: [0] }],
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
                            interaction: [{ command: "inspecter", etat: "open", cible: [1] }],
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
                            interaction: [{ command: "utiliser", etat: "open", cible: [2] }],
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
                    name: "boîte",
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
                            interaction: [{ command: "attendre", etat: "open", cible: [3] }],
                            look: "Plus je la regarde, plus je me dis qu'elle doit être la solution.",
                            use: "Je dois être patient et réfléchir à un code. Cette boîte m'est familière.",
                            go: "La boîte est déjà à ma portée.",
                            hit: "Ce n'est pas la solution à tout.",
                            inspect: "Le pavé numérique a les numéros 1, 9 et 6 plus usés que le reste.",
                            wait: "Elle ressemble à un coffre que je possède, dont le code est mon année de naissance, 1996. Je l'entre. La boîte s'ouvre..."
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "final", cible: [3] }, { command: "utiliser", etat: "opening", cible: [0] }],
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
                            interaction: [{ command: "utiliser", etat: "open", cible: [3] }],
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
                            interaction: [{ command: "utiliser", etat: "opening", cible: [4] }],
                            look: "Le paillasson à mes pieds est sale et répugnant.",
                            use: "Je retire le paillasson. Une vieille clef métallique se trouve dessous.",
                            go: "Le paillasson est à mes pieds."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", etat: "opening", cible: [0] }, { command: "utiliser", etat: "open", cible: [4] }],
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
                            interaction: [{ command: "utiliser", etat: "open", cible: [4] }],
                            look: "Le paillasson à mes pieds est toujours aussi sale.",
                            use: "Je retourne le paillasson. Pas de clef dessous cette fois-ci.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je donne un coup de talon au paillasson. Un peu de poussière s'en dégage."
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "closed", cible: [4] }],
                            look: "Le paillasson est moins sale dessous. Son message est caché maintenant par contre.",
                            use: "Je retourne le paillasson pour le remettre à l'endroit.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je donne un coup de talon au paillasson. Un insecte s'en échappe, paniqué."
                        }
                    },
                    three: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", etat: "open", cible: [4] }],
                            look: "Le paillasson est relativement propre, mais a tout de même vécu.",
                            use: "Je retourne le paillasson. Il n'y a pas de clef dessous.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je ne vois pas en quoi cela va m'aider.",
                            inspect: `Le "bienvenue" est écrit en noir dans une police sans-serif facile à lire.`
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "closed", cible: [4] }],
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
                            interaction: [{ command: "accepter", etat: "opening", cible: [4] }],
                            look: "C'est un joli paillasson presque neuf. Il me souhaite la bienvenue.",
                            use: "Je ne pense pas que la clef sera dessous cette fois, c'était différent à chaque passage.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je ne veux pas le frapper...",
                            inspect: "La police d'écriture utilisée est probablement Helvetica, ou Frutiger. Difficile à dire comme ça.",
                            wait: "Je réfléchis à où la clef pourrait se situer. Sous le paillasson semble trop évident.",
                            accept: "Mes parents cachaient un double des clefs sous le paillasson. Peut-être que ça vaut la peine que je le retourne."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", etat: "open", cible: [4] }],
                            look: "C'est un joli paillasson presque neuf. Il me souhaite la bienvenue.",
                            use: "Je retourne le paillasson. Pas de clef dessous cette fois.",
                            go: "Le paillasson est à mes pieds.",
                            hit: "Je ne veux pas le frapper...",
                            inspect: "Aucun indice ni particularité à souligner.",
                            wait: "Si la clef n'est pas dessous, où aller chercher ?",
                            accept: "Est-ce que mon intuition sera correcte ?"
                        },
                        open: {
                            interaction: [{ command: "accepter", etat: "opening", cible: [0] }],
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
            name: "Bureau",
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
                            interaction: [{ command: "utiliser", etat: "open", cible: [0] }],
                            look: "La clef que j'ai en main semble correspondre à la porte en haut des escaliers.",
                            use: "J'insère la clef dans la serrure. Après un tour, la porte est ouverte.",
                            go: "Je suis déjà en haut des escaliers.",
                            hit: "Malgré que j'ais la clef, je donne un autre coup d'épaule à la porte. Toujours rien."
                        },
                        open: {
                            goWin: true,
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
                            interaction: [{ command: "utiliser", etat: "open", cible: [0] }],
                            look: "J'ai enfin récupéré une clef. Elle semble correspondre à la porte, heureusement.",
                            use: "J'insère la clef dans la serrure. Après deux tours cette fois, la porte s'ouvre.",
                            go: "Je suis en haut des escaliers.",
                            hit: "J'ai déjà la clef, je ne vais pas m'acharner sur la porte en haut des escaliers.",
                            inspect: "La clef est similaire à celle de l'entrée. Elle est lourde et légèrement rouillée."
                        },
                        open: {
                            goWin: true,
                            look: "La porte donne sur une chambre à coucher éclairée par la lune.",
                            use: "J'ai déjà ouvert la porte.",
                            go: "J'entre dans la pièce à l'étage, baignée dans la lueur lunaire...",
                            hit: "J'ai déjà ouvert la porte, je n'ai pas de raison de la casser.",
                            inspect: "La porte est en bois massif, et se pare d'une affiche pour un film, ou une exposition, je ne suis pas sûr."
                        }
                    },
                    four: {
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
                            interaction: [{ command: "utiliser", etat: "open", cible: [0] }],
                            look: "La clef que j'ai en main semble correspondre à la porte.",
                            use: "Je mets la clef dans la serrure et la tourne. La porte s'ouvre face à moi.",
                            go: "Je suis en haut des escaliers, devant la porte.",
                            hit: "Je ne pense pas que ça me soit utile. J'ai déjà la clef pour l'ouvrir.",
                            inspect: "La clef est encore une fois différente. Cette fois plus petite et moderne. La marque est KABA.",
                            wait: "La clef ne va pas se mettre dans la serrure toute seule en attendant..."
                        },
                        open: {
                            goWin: true,
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
                            interaction: [{ command: "accepter", etat: "open", cible: [0] }],
                            look: "La porte est toujours fermée, mais je n'ai toujours pas de clef pour l'ouvrir.",
                            use: "La porte est toujours impossible à ouvrir...",
                            go: "Je suis devant la porte, en haut des escaliers.",
                            hit: "Je ne veux pas frapper la porte ou l'escalier.",
                            inspect: "Le dessin qui décore la porte représente un enfant qui joue sur une balançoire accrochée à un arbre.",
                            wait: "Je pense qu'il faut que j'accepte la situtation. Je connais cette porte, j'en suis sûr...!",
                            accept: "C'est la porte d'entrée de ma chambre quand j'étais enfant ! Elle n'avait pas à clef, elle devrait s'ouvrir sans ça."
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "final", cible: [0] }],
                            look: "Je me revois enfant, montant les escaliers pour aller dans ma chambre. Celle-ci en est une exacte réplique.",
                            use: "Mes doigts se posent sur la poignée, et la porte s'ouvre. Était-elle ouverte tout ce temps ?",
                            go: "Je suis devant la porte, en haut des escaliers.",
                            hit: "Je ne veux pas frapper la porte ou l'escalier.",
                            inspect: "J'avais fait le dessin sur la porte avec de la peinture à doigts... Je devais avoir 4 ou 5 ans.",
                            wait: "Des souvenirs passent derrière mes paupières alors que je ferme les yeux quelques minutes. Je me sens reposé.",
                            accept: "C'est la porte d'entrée de ma chambre quand j'étais enfant."
                        },
                        final: {
                            goWin: true,
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
                            interaction: [{ command: "frapper", etat: "opening", cible: [1] }],
                            look: "C'est un bureau en métal gris-vert aux coins et bords rouillés. Il y a un cabinet à sa droite.",
                            use: "Le bureau est froid et fragile sous mes mains. Le cabinet ne s'ouvre pas quand je tire dessus.",
                            go: "Je suis devant le bureau.",
                            hit: "Je frappe le cabinet d'un coup de pied sec. Un éclat métallique sourd m'indique que le tiroir devrait être débloqué."
                        },
                        opening: {
                            interaction: [{ command: "utiliser", etat: "opening", cible: [0] }, { command: "utiliser", etat: "open", cible: [1] }],
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
                            use: "Le cabinet est fermé à clef. Cette fois, il a l'air plus solide qu'avant.",
                            go: "Je suis devant le bureau.",
                            hit: "Je frappe le cabinet comme je l'ai fait la dernière fois. Rien ne se passe.",
                            inspect: "Il y a un cadenas couvert de rouille sur le côté du cabinet. Je me demande comment l'ouvrir."
                        },
                        opening: {
                            interaction: [{ command: "inspecter", etat: "open", cible: [1] }],
                            look: "Le bureau est en métal vert-gris, et a des airs de cabinet militaire. Il a toujours un cabinet à droite, fermé.",
                            use: "Le cabinet est fermé à clef. Cette fois, il a l'air plus solide qu'avant. Il n'y a pas de serrure en revanche.",
                            go: "Je suis devant le bureau.",
                            hit: "Je frappe le cabinet de toutes mes forces, mais il ne bouge pas. Ce bureau est solide.",
                            inspect: "Est-ce que je pourrais utiliser la date de la carte postale comme code pour le cadenas ?"
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "final", cible: [1] }, { command: "utiliser", etat: "opening", cible: [0] }],
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
                            interaction: [{ command: "utiliser", etat: "opening", cible: [0] }, { command: "utiliser", etat: "open", cible: [1] }],
                            look: "Le cabinet est accompagné d'un système de blocage par un code, situé au-dessus de sa poignée.",
                            use: "J'entre le code 21-06-21, le jour de mes 25 ans. Le tiroir s'ouvre et je récupère la clef qu'il contient.",
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
                            interaction: [{ command: "accepter", etat: "opening", cible: [4] }, { command: "accepter", etat: "open", cible: [1] }],
                            look: "Le bureau est un peu vieillot, mais magnifique et imposant au milieu de la pièce.",
                            use: "Le cabinet du bureau est à nouveau fermé, mais j'ai le code sur le bout des lèvres.",
                            go: "Je suis devant le bureau.",
                            hit: "Je ne suis plus en colère.",
                            inspect: "Le cabinet est encore fermé au profit d'une ouverture utilisant un code, mais je ne sais pas lequel.",
                            wait: "J'attends devant le bureau. Des souvenirs me reviennent. Mon père entrain de travailler ?",
                            accept: "C'était le bureau de mon père. Le code pour son cabinet était ma date de naissance, le 21 juin 1996."
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "final", cible: [1] }],
                            look: "Le bureau est vieux, mais très bien entretenu. Il magnifique et imposant au milieu de la pièce.",
                            use: "J'entre ma date de naissance comme code ; le cabinet est ouvert, mais il ne contient pas de clef cette fois.",
                            go: "Je suis devant le bureau.",
                            hit: "Je ne suis plus en colère.",
                            inspect: "Je revois mon père, installé dans sa chaise de bureau, travailler minutieusement. Que faisait-il comme métier ?",
                            wait: "J'essaie de me souvenir de mon père, installé à ce bureau. Les images me sont floues.",
                            accept: "Mon père faisait un travail dans la fine mécanique. Est-ce que c'était de l'électronique, de l'horlogerie...?"
                        },
                        final: {
                            look: "Le bureau est une belle antiquité. Il magnifique et imposant au milieu de la pièce.",
                            use: "Je passe mes doigts sur le bureau pour m'imprégner de son histoire. Je revois mon père, penché dessus, un fer à soudure en main.",
                            go: "Je suis devant le bureau.",
                            hit: "Je ne suis plus en colère.",
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
                            interaction: [{ command: "utiliser", etat: "open", cible: [2] }],
                            look: "C'est une carte postale qui montre des montagnes eneigées avec un photo-montage de ski.",
                            use: "Je retourne la carte pour voir le dos.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je plie un coin de la carte. Pas sûr que ça me serve.",
                            inspect: "Il y a le lieu marqué en transparence en bas de la carte : Zermatt, CH."
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "closed", cible: [2] }, { command: "inspecter", etat: "opening", cible: [1], condition: "closed" }],
                            look: `Il y est écrit "Souvenirs de vacances en Suisse ! Un petit voyage avant de ne plus pouvoir en faire !". La signature n'est pas lisible.`,
                            use: "Je retourne la carte pour voir l'image de l'autre côté.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je plie un coin de la carte. Pas sûr que ça me serve.",
                            inspect: "La carte est datée de l'année 1996. Mon année de naissance."
                        }
                    },
                    four: {
                        isOpened: false,
                        closed: {
                            interaction: [{ command: "utiliser", etat: "open", cible: [2] }],
                            look: "C'est une carte postale qui montre une silhouette de ville avec en .",
                            use: "Je retourne la carte pour voir le dos.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je plie un coin de la carte. Pas sûr que ça me serve.",
                            inspect: "."
                        },
                        open: {
                            interaction: [{ command: "utiliser", etat: "closed", cible: [2] }],
                            look: `Il y est écrit "Souvenirs de vacances en Suisse ! Un petit voyage avant de ne plus pouvoir en faire !". La signature n'est pas lisible.`,
                            use: "Je retourne la carte pour voir l'image de l'autre côté.",
                            go: "La carte est déjà à ma portée.",
                            hit: "Je plie un coin de la carte. Pas sûr que ça me serve.",
                            inspect: "La carte est datée de l'année 1996. Mon année de naissance."
                        }
                    }
                }, {    // bibliothèque
                    name: "bibliothèque",
                    determinant: "la ",
                    isLocated: false,
                }, {    // livre
                    name: "livre",
                    determinant: "le ",
                    isLocated: false,
                }, {    // leave
                    name: "leave",
                    one: { text: "Je traverse le jardin triste pour revenir vers le portail. Cette maison me fait froid dans le dos." },
                    two: { text: "Je reviens au portail, toujours en colère de me retrouver devant cette maison. Pourquoi elle ? Pourquoi moi ?" },
                    three: { text: "Je marche le long du chemin traversant le jardin, la nature semble figée autour de moi. Je suis devant le portail." },
                    four: { text: "J'ai besoin de prendre du temps. Je reviens sur mes pas, et attends devant le portail, ouvert." },
                    five: { text: "Je suis de retour chez moi, mais un sentiment étouffant se saisit de moi. Je recule vers le portail." }
                }
            ]
        }
    ],
    currentScene: 0,
    isFinished: false,
    previousInput: [],
    player: {
        username: "default",
        shortName: "ef",
        currentAct: 0,
        winConditions: {
            hasReadBook: false,
            hasSeenCard: false,
            hasInspectedCar: false,
            hasLitCandles: false,
        },
        readLetter: false,
        canWin: false
    }
}

const title = document.getElementById('titleGame'),
    gameDiv = document.getElementById("gameScreen"),
    bottomScreen = document.getElementById("screenBottom"),
    monInput = document.getElementById("commandInput"),
    mesCommandes = document.querySelectorAll(".command"),
    monAlert = document.getElementById("boxAlert");

let mesMots = [],
    titleText = title.textContent,
    counterCommands = 0,
    clearInt = false,
    isDefault = true,
    getDefault = isDefault;