let LANG = "ENG",
    today = getToday();

const UITXT = {
    FR: {
        buttons: {
            confirm: "confirmer",
            next: "suivant",
            back: "retour",
            menu: "retour au menu",
            continue: "continuer",
            save: "sauvegarder et continuer",
            del: "écraser et continuer",
            play: "jouer",
            end: "FIN ?",
            letter: "Fermer la lettre"
        },
        home: {
            title: "Cette Maison",
            paragraph1: "est une aventure textuelle traitant du deuil et de la mort. Même si le jeu contient des thèmes sérieux et difficiles, il est accessible à tous les âges.",
            paragraph2: "Ce jeu est une oeuvre de fiction. Toute ressemblance avec des événements ou des personnes réelles est fortuite."
        },
        menu: {
            new: "Nouvelle partie",
            cont: "Continuer",
            info: "Informations"
        },
        credits: {
            dev: "Développeur : Joël Rimaz",
            others: "Musique, visuels, écriture : Joël Rimaz",
            context: "Développé à l'Université de Lausanne",
            git: "GitHub : AnteJR"
        },
        newGame: {
            saveExists: "Il existe déjà une sauvegarde :",
            deleteContinue: "Voulez-vous l'écraser et créer une nouvelle partie ?",
            act: "Acte",
            name: "Nom :"
        },
        HTMLUI: {
            visuals: "Visuels",
            titleGame: "CETTE MAISON",
            titlePage: "Cette Maison",
            input: "~ entrer commandes ici ~",
            commandList: "~~~ LISTE DES COMMANDES ~~~",
            commands: {
                look: "VOIR",
                use: "UTILISER",
                go: "ALLER",
                leave: "QUITTER",
                hit: "FRAPPER",
                inspect: "INSPECTER",
                wait: "ATTENDRE",
                accept: "ACCEPTER"
            },
            datasets: {
                look: "voir",
                use: "utiliser",
                go: "aller",
                leave: "quitter",
                hit: "frapper",
                inspect: "inspecter",
                wait: "attendre",
                accept: "accepter"
            }
        },
        game: {
            goTo: "Je dois me rapprocher pour",
            dunno: "Je ne comprends pas ce que je suis censé faire.",
            dunnoPrecise1: "Qu'est-ce que",
            dunnoPrecise2: "veut dire ?"
        }
    },
    ENG: {
        buttons: {
            confirm: "confirm",
            next: "next",
            back: "back",
            menu: "back to menu",
            continue: "continue",
            save: "save and continue",
            del: "delete and continue",
            play: "play",
            end: "THE END?",
            letter: "Close the letter"
        },
        home: {
            title: "That House",
            paragraph1: "is a text-based adventure dealing with grief and death. Although the game contains serious and challenging themes, it is suitable for all ages.",
            paragraph2: "This game is a work of fiction. Any resemblance to real events or persons is purely coincidental."

        },
        menu: {
            new: "New game",
            cont: "Continue",
            info: "Credits"
        },
        credits: {
            dev: "Developer — Joël Rimaz",
            others: "Music, visuals, writting — Joël Rimaz",
            context: "Developped at the University of Lausanne",
            git: "GitHub — AnteJR"
        },
        newGame: {
            saveExists: "The following save already exists:",
            deleteContinue: "Do you wish to erase the existing save and continue?",
            act: "Act",
            name: "Name:"
        },
        HTMLUI: {
            visuals: "Graphics",
            titleGame: "THAT HOUSE",
            titlePage: "That House",
            input: "~ enter commands here ~",
            commandList: "~~~ COMMAND LIST ~~~",
            commands: {
                look: "LOOK",
                use: "USE",
                go: "GO",
                leave: "LEAVE",
                hit: "HIT",
                inspect: "INSPECT",
                wait: "WAIT",
                accept: "ACCEPT"
            },
            datasets: {
                look: "look",
                use: "use",
                go: "go",
                leave: "leave",
                hit: "hit",
                inspect: "inspect",
                wait: "wait",
                accept: "accept"
            }
        },
        game: {
            goTo: "I must get closer to",
            dunno: "I don't get what I'm supposed to do.",
            dunnoPrecise1: "What does",
            dunnoPrecise2: "mean?"
        }
    }
}

const MYGAME = {
    FR: {
        scenes: [
            {       // ACTES
                name: "acts",
                texts: [
                    {       // prologue
                        id: 0,
                        text: [
                            ["Prologue", true],
                            ["Dans les rues sinueuses.", false]
                        ]
                    }, {    // act 1
                        id: 1,
                        text: [
                            ["Acte 1", true],
                            ["La maison dans la rue.", false]
                        ]
                    }, {    // act 2
                        id: 2,
                        text: [
                            ["Acte 2", true],
                            ["Entrée fracassante.", false]
                        ]
                    }, {    // act 3
                        id: 3,
                        text: [
                            ["Acte 3", true],
                            ["L'ascension.", false]
                        ]
                    }, {    // act 4
                        id: 4,
                        text: [
                            ["Acte 4", true],
                            ["Au clair de lune.", false]
                        ]
                    }, {    // act 5
                        id: 5,
                        text: [
                            ["Acte 5", true],
                            ["Par-delà cette maison.", false]
                        ]
                    }, {    // epilogue
                        id: 6,
                        text: [
                            ["Épilogue", true],
                            ["L'horizon.", false]
                        ]
                    }
                ],
            }, {    // PRENOM
                name: "name",
                title: "Quel est votre prénom ?",
                text1: "S'il-vous-plaît entrez un prénom.",
                text2: "Utiliser votre vrai prénom fonctionne mieux pour le jeu.",
                text3: "entrez votre nom ici"
            }, {    // PORTAIL
                name: "entrance",
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
                        text: "lune",
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
                                voir: "Le portail est entrouvert. Je peux aisément prendre le chemin.",
                                utiliser: "La peinture s'effrite sous mes doigts. Le bois dessous est un légèrement humide.",
                                aller: "Je suis déjà devant le portail."
                            }
                        },
                        two: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "frapper", state: "open", target: [0, 1, 2] }],
                                voir: "Le portail est différent. Il est maintenant en métal. Il est aussi fermé à clef et l'accès m'est bloqué.",
                                utiliser: "Le métal est froid sous mes doigts. La serrure est rouillée, et s'effrite par endroit.",
                                aller: "Je suis déjà devant le portail.",
                                frapper: "Je donne un coup de pied au portail. J'entends au bruit sourd, et la poignée est cassée."
                            },
                            open: {
                                voir: "Le portail est maintenant entrouvert. Je peux aisément prendre le chemin.",
                                utiliser: "La serrure est fendue en deux morceaux tranchants. Je n'ose pas la toucher de peur de me couper.",
                                aller: "Je suis déjà devant le portail.",
                                frapper: "Le portail est cassé et ouvert, pas besoin de le frapper encore."
                            }
                        },
                        three: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "Le portail est encore différent. Il est en métal, mais en bien meilleur état. Il est à nouveau fermé à clef.",
                                utiliser: "Le métal est froid sous mes doigts. Il est légèrement mouillé et semble solide.",
                                aller: "Je suis déjà devant le portail.",
                                frapper: "Je donne un coup de pied au portail. Rien ne semble se passer.",
                                inspecter: "Il y a un nom sur le portail, mais il est illisible, à l'exception de deux lettres : ",

                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [0, 1, 2] }],
                                voir: "J'ai maintenant la clef, je peux ouvrir le portail.",
                                utiliser: "J'ouvre le portail avec la clef de la boîte aux lettres.",
                                aller: "Je suis déjà devant le portail.",
                                frapper: "Le frapper ne va pas m'aider ; j'ai la clef, je peux l'utiliser.",
                                inspecter: `La serrure correpond à la clef que j'ai récupérée.`
                            },
                            open: {
                                voir: "Le portail est maintenant ouvert. Je peux aisément prendre le chemin.",
                                utiliser: "La poignée m'est familière, une fois en main. Je me demande pourquoi.",
                                aller: "Je suis déjà devant le portail.",
                                frapper: "Le portail est déjà ouvert, je ne vois pas pourquoi je le frapperais.",
                                inspecter: `J'ai comme un sentiment de déjà vu sur cette "version" du portail.`
                            }
                        },
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "Cette fois, le portail est le même que mon dernier passage. Il est en métal, en bon état, et fermé à clef.",
                                utiliser: "Le métal est froid sous mes doigts. Cette fois, une fine couche de peinture blanche rugueuse le recouvre.",
                                aller: "Je suis déjà devant le portail.",
                                frapper: "Je donne un coup de pied au portail. Mon pied droit commence à me faire mal.",
                                inspecter: "Le nom n'a pas changé. Il est toujours illisible à l'exception de deux lettres : ",
                                attendre: "Attendre devant le portail me rend inconfortable. Il fait froid à l'extérieur.",
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [1, 2] }],
                                voir: "J'ai maintenant la clef, je peux ouvrir le portail.",
                                utiliser: "J'ouvre le portail avec la clef récupérée dans le buisson.",
                                aller: "Je suis déjà devant le portail.",
                                frapper: "Le frapper ne va pas m'aider ; j'ai la clef, je peux l'utiliser.",
                                inspecter: `La serrure correpond à la clef que j'ai récupérée dans le buisson.`,
                                attendre: "À quoi bon attendre ? J'ai la clef en main."
                            },
                            open: {
                                voir: "Le portail est maintenant ouvert. Je peux aisément prendre le chemin.",
                                utiliser: "Je pousse le portail gentiment, son ressort le ramène à moi. Il est toujours ouvert.",
                                aller: "Je suis déjà devant le portail.",
                                frapper: "Le portail est déjà ouvert et mon pied me fait mal, je ne vais pas le frapper.",
                                inspecter: `Malgré mes efforts, impossible de reconnaître le nom inscrit sur le portail.`,
                                attendre: "Il fait trop froid pour attendre, j'ai besoin de bouger."
                            }
                        },
                        five: {
                            isOpened: true,
                            open: {
                                voir: "C'est un portail en métal peint en blanc. Il ne nécessite pas de clef pour entrer.",
                                utiliser: "Si le métal est froid sous mes doigts encore une fois, la sensation est moins désagréable qu'avant.",
                                aller: "Je suis déjà devant le portail.",
                                frapper: "Je n'ai pas envie de frapper le portail.",
                                inspecter: "Le nom sur le portail est mon nom de famille. Il est lisible cette fois.",
                                attendre: "L'air est plus doux cette fois. Une odeur familière me parvient du jardin.",
                                accepter: "C'est le portail de la maison de mes parents. Je le reconnais maintenant."
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
                                voir: "C'est un court chemin de terre mal entretenu à travers un jardin qui mène à un porche.",
                                utiliser: "Je me baisse et touche le sol. La terre est humide et froide.",
                                aller: "Je prends le chemin en direction du porche.",
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                voir: "Le chemin me paraît plus long cette fois. Il zig-zag un peu.",
                                utiliser: "Le chemin est derrière le portail qui est fermé à clef, je ne peux pas le toucher pour le moment.",
                                aller: "Il me faut d'abord ouvrir le portail.",
                                frapper: "Il me faut d'abord ouvrir le portail pour atteindre le chemin.",
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "Le chemin me paraît plus long cette fois. Il zig-zag un peu.",
                                utiliser: "Le sol est moins en terre qu'en gravier. Il est plus dur et rugueux sous ma paume.",
                                aller: "Je prends le chemin en direction du porche.",
                                frapper: "Je frappe le chemin de mon talon. Rien ne se passe. Ma colère ne passe pas non plus."
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                voir: "Le chemin s'étend dans un vaste jardin à la nature dormante.",
                                utiliser: "Le chemin est derrière le portail qui est fermé à clef, je ne peux pas le toucher pour le moment.",
                                aller: "Il me faut d'abord ouvrir le portail.",
                                frapper: "Il me faut d'abord ouvrir le portail pour atteindre le chemin.",
                                inspecter: "Je ne peux pas me rapprocher du chemin pour le moment. Le portail est fermé.",
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "Le chemin s'étend dans un vaste jardin à la nature dormante.",
                                utiliser: "Le sol de gravier est rassurant sous mes pieds. Il est ferme et solide.",
                                aller: "Je prends le chemin en direction du porche.",
                                frapper: "Je frappe le chemin de mon talon. Rien ne se passe. Cela ne sert à rien",
                                inspecter: "Le chemin est composé d'une fine couche de gravillons gris et beige."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                voir: "Le chemin est plus terne, cette fois. Il semble plus... propre, plus travaillé.",
                                utiliser: "Il me faut ouvrir le portail avant de pouvoir faire ça.",
                                aller: "Je dois d'abord ouvrir le portail.",
                                frapper: "Il me faut ouvrir le portail en premier.",
                                inspecter: "Je ne peux pas le faire pour le moment. Le portail est fermé.",
                                attendre: "Attendre ne va pas me permettre d'atteindre le chemin. L'air est frais, j'aimerais rentrer chez moi.",
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "Le chemin est plus terne, cette fois. Il semble plus... propre, plus travaillé.",
                                utiliser: "Le gravier est coulé avec du ciment, je ne peux plus le prendre dans ma main.",
                                aller: "Je prends le chemin en direction du porche.",
                                frapper: "Je ne vois pas l'intérêt de frapper le chemin, cela ne me mènera à rien.",
                                inspecter: "Il y a çà et là de petites mauvaises herbes qui poussent dans les fissures du béton.",
                                attendre: "Un vent froid me passe dans la nuque. Je n'aime pas rester là-dehors."
                            }
                        },
                        five: {
                            isOpened: true,
                            open: {
                                voir: "Le chemin est clair, net et défini. Il sillonne le jardin jusqu'à la maison.",
                                utiliser: "Le chemin est ferme, le béton qui le compose est doux et apaisant.",
                                aller: "Je vais prendre ce chemin une dernière fois...",
                                frapper: "Je n'ai pas envie de frapper le chemin.",
                                inspecter: "Je me rappelle chaque creux, chaque crevasse, chaque mauvaise herbe qui parcourent le chemin.",
                                attendre: "Je suis fatigué. J'ai envie de rentrer, me reposer, enfin.",
                                accepter: "Je retourne à la maison. Je rentre chez moi. Où j'ai vécu, où j'ai... existé."
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
                                voir: "C'est une porte de bois. Je suis trop loin pour la voir précisément.",
                                utiliser: "Il me faut me rapprocher pour pouvoir faire ça.",
                                aller: "Je me rends vers la porte, vers cette maison..."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                voir: "La porte a maintenant une petite vitre en son centre, sur sa moitié supérieure.",
                                utiliser: "Je ne peux pas tenter de l'ouvrir sans m'en rapprocher.",
                                aller: "Le portail est fermé, la maison m'est pour le moment inaccessible...",
                                frapper: "J'aimerais bien, mais je suis trop loin, et le portail m'empêche d'avancer.",
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "La porte a maintenant une petite vitre en son centre, sur sa moitié supérieure.",
                                utiliser: "Je ne peux pas tenter de l'ouvrir sans m'en rapprocher.",
                                aller: "Je me rends vers la porte, sous le porche.",
                                frapper: "J'aimerais bien, mais je suis trop loin. Je devrais me rapprocher."
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                voir: "La porte semble avoir une fine couche de peinture.",
                                utiliser: "Je ne peux rien faire sans m'en rapprocher.",
                                aller: "Le portail est fermé, je ne peux pas m'y rendre...",
                                frapper: "À quoi bon ? Le portail est fermé de toute façon.",
                                inspecter: "Il vaudrait mieux m'en rapprocher pour inspecter quoi que ce soit.",
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "La porte semble avoir une fine couche de peinture.",
                                utiliser: "Je ne peux rien faire sans m'en rapprocher.",
                                aller: "Je me dirige vers le porche pour atteindre la porte.",
                                frapper: "Je peux le faire, si je m'en approche. Ça avait marché la dernière fois.",
                                inspecter: "Il vaudrait mieux m'en rapprocher pour inspecter quoi que ce soit."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                voir: "La porte m'a l'air plus précise, mais elle est trop loin pour voir les détails.",
                                utiliser: "Il faut s'en rapprocher, je le sais...",
                                aller: "Je ne peux pas y aller avant d'ouvrir le portail.",
                                frapper: "Je ne vois pas l'intérêt. De toute façon elle est trop loin.",
                                inspecter: "Il vaudrait mieux m'en rapprocher.",
                                attendre: "Attendre ne va pas la faire s'ouvrir, ni ouvrir le portail.",
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "La porte m'a l'air plus précise, mais elle est trop loin pour voir les détails.",
                                utiliser: "Il faut s'en rapprocher, je le sais...",
                                aller: "Je me dirige vers la porte, à-travers le chemin.",
                                frapper: "Je suis trop loin. Et ça n'avait pas marché la dernière fois.",
                                inspecter: "Il vaudrait mieux m'en rapprocher.",
                                attendre: "La porte semble m'inviter avec ce froid. Mieux vaut que je rentre.",
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                voir: "La porte a l'air accueillante d'ici.",
                                utiliser: "Je vais l'ouvrir une dernière fois, mais pas tout de suite.",
                                aller: "J'ai l'impression d'oublier quelque chose.",
                                frapper: "Je ne peux pas la frapper d'ici.",
                                inspecter: "Je pourrai l'admirer de plus près.",
                                attendre: "L'air est plus sec, et plus chaud qu'avant. Une brise légère frôle mes joues.",
                                accepter: "C'est la porte de la maison de mes parents. Une nostalgie m'envahit.",
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "La porte m'accueillit.",
                                utiliser: "Je devrais m'en rapprocher pour l'ouvrir.",
                                aller: "Je me dirige une dernière fois vers la porte de ma maison.",
                                frapper: "Je ne veux plus la frapper.",
                                inspecter: "Je pourrai l'admirer de plus près quand je m'en serai approché.",
                                attendre: "J'inspire un grand coup, apprécie ce moment devant ma maison.",
                                accepter: "Ce sera la dernière fois que je l'ouvre...",
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
                                voir: "La boîte est toute cabossée et tient à peine debout.",
                                utiliser: "La boîte est fermée, et un pli du métal la coince dans cette position.",
                                aller: "La boîte est déjà devant moi.",
                                frapper: "Je frappe la boîte. Celle-ci se débloque à cause du choc.",
                                inspecter: "Il n'y a rien à voir de spécial sur cette boîte, la plaquette du nom n'est plus là.",
                            },
                            open: {
                                interaction: [{ command: "inspecter", state: "opening", target: [0] }],
                                voir: "Suite à mon coup de poing, la boîte est encore plus difforme.",
                                utiliser: "Je peux ouvrir la porte de la boîte aux lettres, mais elle ne se ferme plus.",
                                aller: "La boîte est déjà devant moi.",
                                frapper: "Je l'ai déjà cassée, je ne vais pas en remettre une couche.",
                                inspecter: `À l'intérieur se trouve une petite clef ronde. Il y est écrit "portail". Je la prends.`
                            }
                        },
                        four: {
                            isOpened: true,
                            open: {
                                voir: "La boîte au lettre est réparée. Elle n'est plus cabossée comme avant.",
                                utiliser: "En posant ma main sur elle, son métal est froid et lisse. Elle semble robuste.",
                                aller: "La boîte aux lettres est déjà devant moi.",
                                frapper: "Elle est déjà ouverte, pas besoin de la casser cette fois.",
                                inspecter: "Pas de clef à l'intérieur. Je vais devoir chercher ailleurs.",
                                attendre: "Je ne vois pas sur quoi je dois attendre... c'est une boîte aux lettres vide."
                            }
                        },
                        five: {
                            isOpened: true,
                            open: {
                                voir: "La boîte m'est familière. Elle est en métal poli mat.",
                                utiliser: "Au toucher, des souvenirs me reviennent. Je connais cette boîte aux lettre.",
                                aller: "La boîte aux lettres est déjà devant moi.",
                                frapper: "Je n'ai plus envie de frapper la boîte aux lettres.",
                                inspecter: "La boîte est vide, et la plaquette toujours perdue.",
                                attendre: "La lune se reflète de manière hypnotique sur le métal de la boîte.",
                                accepter: "Même sans mon nom, je la reconnais comme étant la boîte aux lettres de mon appartement."
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
                                voir: "La lune brille dans le ciel d'une pâle lueur. Elle est presque pleine.",
                                utiliser: "Je ne peux pas toucher la lune. Même si l'idée me plairait.",
                                aller: "Impossible, c'est la lune...",
                                frapper: "Ça s'annonce compliqué.",
                                inspecter: "Les cratères sont visibles d'ici. Ils rajoutent de la rudesse à l'astre.",
                                attendre: "En regardant la lune, je remarque un reflet de sa lumière dans le buisson à ma gauche. Une clef ?"
                            }
                        },
                        five: {
                            isOpened: true,
                            open: {
                                voir: "La lune éclaircit la nuit de sa douce blancheur.",
                                utiliser: "Pourquoi toucher la lune ? J'ai tout un monde et une vie ici.",
                                aller: "Ça ne va malheureusement pas être possible, mais un jour peut-être.",
                                frapper: "Je ne vois pas l'intérêt. La lune est si belle.",
                                inspecter: "La rudesse de sa surface m'apaise. J'aime me perdre dans ses cratères.",
                                attendre: "Pas de clef dans un buisson cette fois, juste un sentiment de plénitude.",
                                accepter: "La lune est magnifique. Elle m'apaise. J'ai toujours aimé cet astre."
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
                                voir: "Le buisson est touffu, mais ses feuilles sont mortes.",
                                utiliser: "Ses branches se brisent sans effort sous mes doigts tellement il est sec.",
                                aller: "Je suis déjà devant le buisson.",
                                frapper: "Donner même un léger coup de pied transforme les feuilles en poussière.",
                                inspecter: "Le buisson est similaire à du gui, ses feuilles ont comme des piques.",
                                attendre: "Le vent fait frémir les branches mortes, virvoleter les feuilles déséchées."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "opening", target: [0] }, { command: "utiliser", state: "open", target: [5] }],
                                voir: "La lune reflète une clef, coincée entre les brindilles déséchées.",
                                utiliser: "Je ramasse la clef. L'arbuste craque quand je la retire. Je la glisse dans une poche.",
                                aller: "Je suis déjà devant le buisson.",
                                frapper: "Je ne vois pas en quoi ça m'aiderait à récupérer la clef.",
                                inspecter: "La clef est la même que j'ai récupérée toute à l'heure dans la boîte aux lettres.",
                                attendre: "Je ne vais pas attendre de récupérer la clef, il fait assez froid comme ça."
                            },
                            open: {
                                voir: "Le buisson est touffu, mais ses feuilles sont mortes.",
                                utiliser: "Ses branches se brisent sans effort sous mes doigts tellement il est sec.",
                                aller: "Je suis déjà devant le buisson.",
                                frapper: "Donner même un léger coup de pied transforme les feuilles en poussière.",
                                inspecter: "Le buisson est similaire à du gui, ses feuilles ont comme des piques.",
                                attendre: "Le vent fait frémir les branches mortes, virvoleter les feuilles déséchées."
                            }
                        },
                        five: {
                            isOpened: true,
                            open: {
                                voir: "Le buisson a retrouvé la vie. Ses feuilles sont plus vertes, il est plus vigoureux.",
                                utiliser: "Ses branches sont fraîches, et sont flexibles. Il est agréable au toucher.",
                                aller: "Je suis déjà devant le buisson.",
                                frapper: "Je ne vois pas pourquoi je ferais ça.",
                                inspecter: "Le buisson est un chèvrefeuille arbustif.",
                                attendre: "La légère brise du soir berce les branches du buisson.",
                                accepter: "J'avais un arbrisseau de ce genre chez moi, il y a quelques années."
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
                                voir: "Ma maison est assez modeste, de par ses deux étages et sa peinture beige très sobre.",
                                utiliser: "Je devrais me rapprocher de ma maison pour la toucher.",
                                aller: "Je préfère prendre mon temps et ne pas me presser. J'observe ma maison un moment.",
                                frapper: "Je n'ai pas envie de frapper ma maison.",
                                inspecter: "De là, je ne vois pas beaucoup de détails.",
                                attendre: "L'air doux d'une nuit d'été est agréable. Il manque tout de même le bruit des criquets.",
                                accepter: "C'est donc ma maison. Je suis prêt à y entrer une dernière fois.",
                            }
                        },
                        six: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accepter", state: "open", target: [6] }],
                                accepter: "Cette maison qui est la mienne est maintenant lointaine. Un souvenir. Elle est aussi omniprésente. Une énergie"
                            },
                            open: {
                                triggerEvent: { command: "accepter", name: "theEnd" },
                                accepter: "Je (ne) suis (plus)."
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
                                voir: [
                                    "Pourquoi cette route ? Qu'est-ce que je fais là ? Elle ne m'a pas l'air familière. Je n'ai pas envie de la prendre.",
                                    "La route est comme un gouffre qui s'enfonce dans un quartier que je ne connais pas. Est-ce que je me suis perdu ?",
                                    "Je ne sais pas si je veux continuer. Mon estomac se tord. Mes tempes transpirent. Mes joues se crispent.",
                                    "La brume derrière moi m'empêche de revenir en arrière. Est-ce que je devrais juste prendre la route ? Continuer d'avancer ?"
                                ],
                                utiliser: "Mon corps est paralysé pour le moment. J'ai de la peine à respirer. Oh mon Dieu, qu'est-ce qui se passe ?",
                                aller: "Mes jambes ne me répondent pas. Pourquoi cette route ? Pourquoi ce quartier ? Je ne comprends pas.",
                            },
                            open: {
                                newAct: { command: "aller" },
                                voir: "Je ne vois qu'une façon de sortir d'ici : voir où cette route me mène.",
                                utiliser: "Je sens peu à peu mes jambes à nouveau. Je devrais pouvoir marcher un moment.",
                                aller: "Hésitants, mes pas se font l'un après l'autre, lentement... J'avance dans la rue, la nuit m'enlace. Le silence m'entoure, alors que je m'enfonce sur le route goudronnée.",
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
                name: "porch",
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
                                voir: "La porte est fermée, et en mauvais état. La maison tombe en ruine.",
                                utiliser: "La porte est fermée. La poignée se bloque immédiatement.",
                                aller: "Je suis déjà devant la porte."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [0] }],
                                voir: "La clef que j'ai en main semble correspondre à la serrure.",
                                utiliser: "Je tourne la clef dans la porte, et un bruit sourd m'indique qu'elle est déverouillée.",
                                aller: "Je suis déjà devant la porte."
                            },
                            open: {
                                newAct: { command: "aller" },
                                voir: "La porte est déverouillée, je peux y aller.",
                                utiliser: "Je pousse la porte, qui s'ouvre sur une pièce sombre. Je me prépare à aller à l'intérieur.",
                                aller: "J'entre dans la maison pour la première fois..."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "frapper", state: "open", target: [0], condition: 2 }],
                                voir: "La porte est toujours en mauvais état, mais cette fois a en son centre un carreau de verre opaque.",
                                utiliser: "La porte est fermée à clef, impossible de l'ouvrir.",
                                aller: "Je suis déjà devant la porte.",
                                frapper: ["Je prends un peu d'élan pour donner un coup d'épaule à la porte. Je sens que je dois le répéter pour qu'elle s'ouvre.",
                                    "Je prends un peu plus d'élan pour donner un violent coup d'épaule à la porte. Elle cède sous mon poids et est ouverte."
                                ]
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "La porte est cassée, je peux donc entrer.",
                                utiliser: "Le bois est fin et fragile. Pas surprenant que la porte ait cassé quand je l'ai frappée.",
                                aller: "J'entre à nouveau dans la maison...",
                                frapper: "Je donne un petit coup de pied à ce qui reste de la porte. Rien de change, elle est déjà cassée."
                            }
                        },
                        three: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "La porte est fermée, et son carreau de verre est plus large. Elle est peinte ocre rouge.",
                                utiliser: "La porte est encore une fois fermée à clef. Cette fois elle a l'air plus solide.",
                                aller: "Je suis déjà devant la porte.",
                                frapper: "Je prends un peu d'élan pour donner un violent coup d'épaule à la porte, ce qui me fait mal à l'épaule.",
                                inspecter: "La peinture est argileuse, comme si on avait jeté de la terre sur la porte."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [0] }],
                                voir: "La clef que j'ai en main semble correspondre à la serrure.",
                                utiliser: "En un mouvement sec de la clef dans la serrure, la porte se déverouille.",
                                aller: "Je suis déjà devant la porte.",
                                frapper: "Je me suis déjà fait mal à l'épaule en fonçant contre la porte la dernière fois. De plus, j'ai la clef en main.",
                                inspecter: "La clef est lourde dans ma main. Elle est un peu rouillée."
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "La porte est déverouillée, je peux y aller.",
                                utiliser: "Je pousse la porte, qui s'ouvre sur la pièce du rez-de-chaussée.",
                                aller: "J'entre une fois de plus dans la maison...",
                                frapper: "La porte est déjà ouverte. Et puis, je me suis déjà fait mal à l'épaule.",
                                inspecter: "La porte entrouverte m'accueille d'un air mélancolique."
                            }
                        },
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "attendre", state: "opening", target: [3] }],
                                voir: "La porte est fermée. Ses teintes rouges me barrent une nouvelle fois l'entrée.",
                                utiliser: "À nouveau fermée à clef. À ce stade, cela ne me surprent guère.",
                                aller: "Je suis déjà devant la porte.",
                                frapper: "Je risque de me faire mal à chercher à défoncer la porte.",
                                inspecter: "La peinture est lisse et appliquée avec soin. On voit cependant qu'il s'agit d'un travail d'amateur.",
                                attendre: "Je réfléchis à comment l'ouvrir... Est-ce que la boîte à code serait la solution cette fois-ci ?"
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [0] }],
                                voir: "La clef que j'ai en main correspond à la serrure.",
                                utiliser: "La porte était fermée à double tour. Je tourne la clef plusieurs fois, et la porte est ouverte.",
                                aller: "Je suis déjà devant la porte.",
                                frapper: "J'ai la clef en main, je ne vais pas chercher à enfoncer la porte.",
                                inspecter: "La clef est nettement plus légère que les précédentes. Plus moderne également.",
                                attendre: "J'ai la clef, je n'ai plus besoin d'attendre ou de réfléchir."
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "La porte est déverouillée, je peux y aller.",
                                utiliser: "Je pousse la porte, qui donne sur le bureau et la bibliothèque.",
                                aller: "J'entre dans la maison...",
                                frapper: "La porte est déjà ouverte, je n'ai pas de raison de la casser.",
                                inspecter: "La porte est comme la bouche de cette maison, qui s'apprête encore une fois à m'engloutir.",
                                attendre: "L'air épais et moite de la maison m'arrive en plein visage maintenant que la porte est ouverte."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "accepter", state: "opening", target: [4] }],
                                voir: "La porte est encore une fois fermée. Elle est en bois peint, visiblement à la main.",
                                utiliser: "À nouveau fermée à clef. Aucune surprise. Où est-ce que la clef se trouve cette fois ?",
                                aller: "Je suis déjà devant la porte.",
                                frapper: "Je n'ai pas envie de la frapper.",
                                inspecter: "La vitre centrale de la porte donne sur le bureau à l'intérieur.",
                                attendre: "Je réfléchis. Comment l'ouvrir cette fois-ci ?",
                                accepter: "Peut-être que la clef est sous le paillasson, comme au début ?"
                            },
                            opening: {
                                interaction: [{ command: "accepter", state: "open", target: [0] }],
                                voir: "La clef que j'ai en main semble correspondre à la serrure de la porte.",
                                utiliser: "J'essaie de mettre la clef dans la porte, mais un sentiment de peur m'envahit. Je me ravise.",
                                aller: "Je suis déjà devant la porte.",
                                frapper: "Je n'ai pas envie de la frapper.",
                                inspecter: "La clef me parait si lourde en main, elle me met mal à l'aise... Comment cela se fait-il ?",
                                attendre: "Est-ce que je pense trop ? De quoi ai-je peur ?",
                                accepter: "Ce sera la dernière fois que j'entrerai dans la maison. Je dois accepter cela."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [0] }],
                                voir: "La clef que j'ai en main correspond à la serrure de la porte.",
                                utiliser: "J'essaie de mettre la clef dans la porte, malgré mon malaise. Je tourne la clef dans la serrure...",
                                aller: "Je suis déjà devant la porte.",
                                frapper: "Je n'ai pas envie de la frapper.",
                                inspecter: "Ma main tremble en tenant la clef. Je dois affronter ma peur que mon aventure se termine.",
                                attendre: "J'essaie de me calmer. Est-ce que c'est vraiment la fin ?",
                                accepter: "Pourquoi cela serait la fin ? C'est peut-être un commencement."
                            },
                            final: {
                                win: { command: "aller" },
                                voir: "La porte est déverouillée, je peux y aller.",
                                utiliser: "Je pousse la porte, qui s'ouvre sur le bureau et la bibliothèque.",
                                aller: "J'entre dans la maison une dernière fois. La porte se referme derrière moi.",
                                frapper: "Je ne veux pas frapper la porte, cela ne me servira à rien.",
                                inspecter: "La maison va m'engloutir encore une fois. Est-ce que j'en sortirai ?",
                                attendre: "L'air de la maison m'arrive en plein visage maintenant que la porte est ouverte. Il est plus léger qu'avant.",
                                accepter: "Pas de retour en arrière possible. Je dois continuer. Je n'ai pas le choix."
                            }
                        }
                    }, {    // fenêtre
                        name: "fenetre",
                        determinant: "la ",
                        isLocated: true,
                        one: {
                            isOpened: false,
                            closed: {
                                voir: "La fenêtre est fermée. Son verre est sale et opaque.",
                                utiliser: "Ma main est accueillie par une surface froide et lisse, humide à cause de la buée.",
                                aller: "Je suis déjà devant la fenêtre."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "frapper", state: "open", target: [1] }],
                                voir: "Impossible de voir à travers cette vitre, elle est toujours aussi sale.",
                                utiliser: "Il n'y a pas de poignée à l'extérieur, je peux seulement toucher le verre opaque.",
                                aller: "Je suis déjà devant la fenêtre.",
                                frapper: "Je donne un coup de coude dans la vitre, qui se brise en plusieurs morceaux."
                            },
                            open: {
                                voir: "La fenêtre est cassée. Il fait sombre dans la maison, je n'y distingue rien.",
                                utiliser: "Je ne vais pas toucher du verre tranchant.",
                                aller: "Je suis déjà devant la fenêtre.",
                                frapper: "J'ai déjà cassé la fenêtre, pas la peine de faire plus de débris."
                            }
                        },
                        three: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "inspecter", state: "opening", target: [1] }],
                                voir: "La vitre est moins sale, mais la buée épaisse n'aide pas à voir à travers.",
                                utiliser: "Je ne peux pas ouvrir la fenêtre de l'extérieur.",
                                aller: "Je suis déjà devant la fenêtre.",
                                frapper: "Je n'ai pas de raison de casser la fenêtre pour le moment.",
                                inspecter: "De l'autre côté, pendant à un fil, la clef de la maison. Je dois ouvrir cette fenêtre."
                            },
                            opening: {
                                interaction: [{ command: "frapper", state: "open", target: [1] }],
                                voir: "La clef est derrière la fenêtre, mais je ne vois pas de poignée pour l'ouvrir.",
                                utiliser: "Je ne peux pas l'ouvrir depuis l'extérieur.",
                                aller: "Je suis déjà devant la fenêtre.",
                                frapper: "Je donne un coup sec avec mon coude, le verre se brise sous le choc.",
                                inspecter: "La clef est clairement celle de la maison, c'est la même qu'à mon premier passage."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [1] }, { command: "utiliser", state: "opening", target: [0] }],
                                voir: "La vitre est cassée en son centre. De là, je peux aisément saisir la clef.",
                                utiliser: "Je tends mon bras en faisant attention à ne pas me couper. Je prends la clef de la maison.",
                                aller: "Je suis déjà devant la fenêtre.",
                                frapper: "J'ai déjà cassé la fenêtre, pas la peine de faire plus de casse.",
                                inspecter: "C'est une fenêtre à un seul vitrage. Heureusement, sinon la casser aurait été compliqué."
                            },
                            final: {
                                voir: "La fenêtre est cassée. Il fait trop sombre pour voir dans la maison.",
                                utiliser: "J'ai déjà récupéré la clef, je n'ai plus rien à prendre ici.",
                                aller: "Je suis déjà devant la fenêtre.",
                                frapper: "J'ai déjà cassé la fenêtre, pas la peine de faire plus de casse.",
                                inspecter: "Il n'y a rien à observer de plus."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "inspecter", state: "open", target: [1] }],
                                voir: "Toujours couverte de buée, la fenêtre a un triste air d'abandon.",
                                utiliser: "Je ne peux toujours pas ouvrir la fenêtre de l'extérieur.",
                                aller: "Je suis déjà devant la fenêtre.",
                                frapper: "Je n'ai pas de raison de casser la fenêtre pour le moment.",
                                inspecter: "Il n'y a pas de clef de l'autre côté cette fois. Je dois chercher ailleurs.",
                                attendre: "Malgré mon attente, la buée ne se dissipe pas."
                            },
                            open: {
                                voir: "Toujours couverte de buée, la fenêtre a un triste air d'abandon.",
                                utiliser: "Je ne peux toujours pas ouvrir la fenêtre de l'extérieur.",
                                aller: "Je suis déjà devant la fenêtre.",
                                frapper: "Sans une clef à récupérer, je ne vais pas m'amuser à casser cette vitre une énième fois.",
                                inspecter: "Il n'y a pas de clef de l'autre côté cette fois. Je dois chercher ailleurs.",
                                attendre: "Malgré mon attente, la buée ne se dissipe pas."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                voir: "La fenêtre n'est plus enbuée. Je peux voir l'intérieur sans trop de problème.",
                                utiliser: "La fenêtre s'ouvre uniquement de l'intérieur.",
                                aller: "Je suis déjà devant la fenêtre.",
                                frapper: "Je n'ai aucune raison de casser la fenêtre.",
                                inspecter: "Il n'y a pas de clef de l'autre côté. Je dois chercher ailleurs.",
                                attendre: "Cette fenêtre donne sur le bureau. Elle agit comme un puit de lumière sur ce dernier.",
                                accepter: "De l'autre côté de cette fenêtre la fin de mon aventure m'attend."
                            }
                        }
                    }, {    // sonnette
                        name: "sonnette",
                        determinant: "la ",
                        isLocated: true,
                        one: {
                            isOpened: false,
                            closed: {
                                voir: "La sonnette est en piteux état. Je doute qu'elle fonctionne.",
                                utiliser: "J'appuie sur la sonnette... Pas un bruit. Je ne suis pas surpris.",
                                aller: "La sonnette est déjà à ma portée."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                voir: "La sonnette semble toujours cassée, je ne pense pas qu'elle fonctionnera cette fois.",
                                utiliser: "J'appuie à nouveau sur la sonnette... Toujours rien. Je ne suis pas surpris.",
                                aller: "La sonnette est déjà à ma portée.",
                                frapper: "Je donne un coup sur la sonnette. Rien ne se passe."
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                voir: "La sonnette est en meilleur état, son plastique blanc n'est plus fendu.",
                                utiliser: "J'appuie encore une fois sur la sonnette... Rien. Encore une fois.",
                                aller: "La sonnette est déjà à ma portée.",
                                frapper: "J'essaie de tirer sur le boîtier pour l'enlever mais n'y parviens pas. Je la frappe, rien ne se passe.",
                                inspecter: "Il y a un nom arraché sur la sonnette. Je ne sais pas à qui elle appartient."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                voir: "La sonnette a meilleure mine, mais je parie qu'elle ne fonctionnera pas.",
                                utiliser: "Rien. Encore une fois. C'est à se demander si elle sert à quelque chose.",
                                aller: "La sonnette est déjà à ma portée.",
                                frapper: "Je ne veux pas m'acharner dessus.",
                                inspecter: "Aucun nom n'est présent sur la sonnette. Étrange.",
                                attendre: "Attendre ne va pas magiquement la réparer..."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "utiliser", state: "open", target: [2] }],
                                voir: "La sonnette est nettement plus moderne. Va-t-elle fonctionner cette fois ?",
                                utiliser: "Elle sonne ! Pas sûr que cela serve à quelque chose, cependant.",
                                aller: "La sonnette est déjà à ma portée.",
                                frapper: "Je ne veux plus frapper tout ce qui m'entoure inutilement.",
                                inspecter: "Toujours aucun nom, ni de signe qu'elle m'est utile pour entrer.",
                                attendre: "J'attends un moment devant. Fonctionnera-t-elle ? Je me le demande...",
                                accepter: "Elle va fonctionner, j'en suis sûr."
                            },
                            open: {
                                voir: "La sonnette est en état de marche. Pas sûr qu'elle me serve, cela dit.",
                                utiliser: "Je rappuie sur la sonnette. Elle sonne. Personne ne vient.",
                                aller: "La sonnette est déjà à ma portée.",
                                frapper: "Je ne vais pas la frapper si elle fonctionne.",
                                inspecter: "Peut-être que l'absence de nom s'explique car il n'y avait personne à l'intérieur lors de mes précédents passages.",
                                attendre: "J'attends un moment devant. Personne ne vient m'ouvrir.",
                                accepter: "Elle a fonctionné. Elle ne va par contre pas m'aider à avancer."
                            }
                        }
                    }, {    // boite
                        name: "boite",
                        determinant: "la ",
                        isLocated: true,
                        two: {
                            isOpened: false,
                            closed: {
                                voir: "C'est une petite boîte à clef. Elle s'ouvre avec un code. Aucune idée de ce qu'il pourrait être.",
                                utiliser: "Je tente des codes aux hasards. Rien n'y fait.",
                                aller: "La boîte est déjà à ma portée.",
                                frapper: "Je frappe la boîte. Rien ne se passe, elle est solide."
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                voir: "Je ne vois pas comment l'ouvrir sans code. Son clapet en métal semble solide.",
                                utiliser: "Je tente d'entrer des codes aux hasards. Je ne trouve pas le bon.",
                                aller: "La boîte est déjà à ma portée.",
                                frapper: "Elle m'a l'air trop solide. Je risque de me faire mal inutilement.",
                                inspecter: "Le pavé numérique ne me permet pas de déterminer si des chiffres sont plus utilisés que d'autres."
                            }
                        },
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "Je n'ai toujours aucune idée du code à utiliser. Je dois y réfléchir.",
                                utiliser: "Entrer des codes au hasard ne me mène à rien.",
                                aller: "La boîte est déjà à ma portée.",
                                frapper: "Je ne pense pas que c'est la solution.",
                                inspecter: "Le code s'entre sur un pavé numérique.",
                                attendre: "J'essaie de réfléchir à un code, mais je ne suis pas sûr que la clef soit à l'intérieur."
                            },
                            opening: {
                                interaction: [{ command: "attendre", state: "open", target: [3] }],
                                voir: "Plus je la regarde, plus je me dis qu'elle doit être la solution.",
                                utiliser: "Je dois être patient et réfléchir à un code. Cette boîte m'est familière.",
                                aller: "La boîte est déjà à ma portée.",
                                frapper: "Ce n'est pas la solution à tout.",
                                inspecter: "Le pavé numérique a les numéros 1, 9 et 6 plus usés que le reste.",
                                attendre: "Elle ressemble à un coffre que je possède, dont le code est mon année de naissance, 1996. Je l'entre. La boîte s'ouvre..."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [3] }, { command: "utiliser", state: "opening", target: [0] }],
                                voir: "À l'intérieur, une clef en metal est accrochée à un petit porte-clef rouge.",
                                utiliser: "Je saisis la clef, qui devrait me permettre d'ouvrir la porte.",
                                aller: "La boîte est déjà à ma portée.",
                                frapper: "J'ai réussi à ouvrir la boîte sans m'énerver.",
                                inspecter: "La clef à l'intérieur est accrochée à un porte-clef géométrique en cuir rouge.",
                                attendre: "J'ai trouvé le code, pas besoin de réfléchir plus longtemps."
                            },
                            final: {
                                voir: "La boîte reste entrouverte.",
                                utiliser: "Je n'arrive pas à refermer la boîte, je vais la laisser entrouverte.",
                                aller: "La boîte est déjà à ma portée.",
                                frapper: "À quoi bon ?",
                                inspecter: "La boîte était vide en-dehors de la clef.",
                                attendre: "J'ai récupéré la clef, je n'ai plus à attendre."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "utiliser", state: "open", target: [3] }],
                                voir: "La boîte a plus des airs de coffre-fort. Je me demande si elle contient la clef.",
                                utiliser: "J'entre 1996. La boîte s'ouvre, mais pas de clef à l'intérieur.",
                                aller: "La boîte est déjà à ma portée.",
                                frapper: "Je ne pense pas que la frapper soit utile.",
                                inspecter: "Je ne vois rien de spécial sur la boîte à code.",
                                attendre: "Je ne pense pas qu'il y ait quelque chose à attendre. Je connais le code, déjà.",
                                accepter: "J'ai le sentiment qu'elle ne contiendra pas ce que je cherche."
                            },
                            open: {
                                voir: "La boîte est vide. Pas de clef à l'intérieur cette fois.",
                                utiliser: "Je laisse la boîte entrouverte. Elle ne me sert à rien.",
                                aller: "La boîte est déjà à ma portée.",
                                frapper: "Même si je suis frustré, ça ne me sert à rien de la frapper.",
                                inspecter: "Je ne vois rien de spécial à l'intérieur.",
                                attendre: "Il n'y a rien à attendre.",
                                accepter: "Mon présentiment était correct. Mon propre coffre-fort ne contient d'ailleurs pas mes clefs."
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
                                voir: "Le paillasson à mes pieds est sale et répugnant.",
                                utiliser: "Je retire le paillasson. Une vieille clef métallique se trouve dessous.",
                                aller: "Le paillasson est à mes pieds."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "opening", target: [0] }, { command: "utiliser", state: "open", target: [4] }],
                                voir: "La clef est rouillée et sale. Elle est assez grosse et semble correspondre à la porte.",
                                utiliser: "Je ramasse la clef et la met dans ma poche.",
                                aller: "Le paillasson est à mes pieds."
                            },
                            open: {
                                voir: "Le paillasson est moins sale maintenant qu'il est retourné.",
                                utiliser: "Je n'ai plus envie de toucher ce paillasson.",
                                aller: "Le paillasson est à mes pieds."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "utiliser", state: "open", target: [4] }],
                                voir: "Le paillasson à mes pieds est toujours aussi sale.",
                                utiliser: "Je retourne le paillasson. Pas de clef dessous cette fois-ci.",
                                aller: "Le paillasson est à mes pieds.",
                                frapper: "Je donne un coup de talon au paillasson. Un peu de poussière s'en dégage."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "closed", target: [4] }],
                                voir: "Le paillasson est moins sale dessous. Son message est caché maintenant par contre.",
                                utiliser: "Je retourne le paillasson pour le remettre à l'endroit.",
                                aller: "Le paillasson est à mes pieds.",
                                frapper: "Je donne un coup de talon au paillasson. Un insecte s'en échappe, paniqué."
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "utiliser", state: "open", target: [4] }],
                                voir: "Le paillasson est relativement propre, mais a tout de même vécu.",
                                utiliser: "Je retourne le paillasson. Il n'y a pas de clef dessous.",
                                aller: "Le paillasson est à mes pieds.",
                                frapper: "Je ne vois pas en quoi cela va m'aider.",
                                inspecter: `Le "bienvenue" est écrit en noir dans une police sans-serif facile à lire.`
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "closed", target: [4] }],
                                voir: "C'est un paillasson retourné, il n'y a rien à voir.",
                                utiliser: "Je retourne le paillasson pour le remettre à l'endroit.",
                                aller: "Le paillasson est à mes pieds.",
                                frapper: "Je ne vois pas en quoi cela va m'aider.",
                                inspecter: "Il n'y a rien à inspecter."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                voir: "Le paillasson est pratiquement comme neuf. Il n'est plus moisi comme avant, ni aussi sale.",
                                utiliser: "Je ne pense pas que retourner le paillasson soit la solution cette fois.",
                                aller: "Le paillasson est à mes pieds.",
                                frapper: "Je donne un petit coup de pied au paillasson. Rien. Quelle surprise...",
                                inspecter: `Je pense avoir vu ce qu'il y avait à voir sur ce paillasson.`,
                                attendre: "Je perds mon temps. Je ferais mieux de m'activer."
                            }
                        },
                        five: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "accepter", state: "opening", target: [4] }],
                                voir: "C'est un joli paillasson presque neuf. Il me souhaite la bienvenue.",
                                utiliser: "Je ne pense pas que la clef sera dessous cette fois, c'était différent à chaque passage.",
                                aller: "Le paillasson est à mes pieds.",
                                frapper: "Je ne veux pas le frapper...",
                                inspecter: "La police d'écriture utilisée est probablement Helvetica, ou Frutiger. Difficile à dire comme ça.",
                                attendre: "Je réfléchis à où la clef pourrait se situer. Sous le paillasson semble trop évident.",
                                accepter: "Mes parents cachaient un double des clefs sous le paillasson. Peut-être que ça vaut la peine que je le retourne."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [4] }],
                                voir: "C'est un joli paillasson presque neuf. Il me souhaite la bienvenue.",
                                utiliser: "Je retourne le paillasson. Pas de clef dessous cette fois.",
                                aller: "Le paillasson est à mes pieds.",
                                frapper: "Je ne veux pas le frapper...",
                                inspecter: "Aucun indice ni particularité à souligner.",
                                attendre: "Si la clef n'est pas dessous, où aller chercher ?",
                                accepter: "Est-ce que mon intuition sera correcte ?"
                            },
                            open: {
                                interaction: [{ command: "accepter", state: "opening", target: [0] }],
                                voir: "Rien sous le paillasson. Je dois chercher ailleurs.",
                                utiliser: "Je ne vais pas remettre le paillasson en place, pas besoin de m'y attarder plus que ça.",
                                aller: "Le paillasson est à mes pieds.",
                                frapper: "Je ne veux pas le frapper...",
                                inspecter: "Je ne vois rien d'intéressant.",
                                attendre: "Si la clef n'est pas dessous, où est-ce qu'elle peut bien se cacher ?",
                                accepter: "Soudain, je sens quelque chose de dur dans ma poche. En y passant ma main, je sens... une clef ? Je la prends en main."
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
                name: "desk",
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
                                voir: "C'est un escalier en bois nu et craquelé. Il n'a pas l'air sûr à monter.",
                                utiliser: "Je reste bloqué face à la porte fermée.",
                                aller: "Je suis devant la porte, en haut de l'escalier.",
                                frapper: "Je donne un coup d'épaule à la porte, comme je l'ai fait à l'entrée. Rien ne se passe."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [0] }],
                                voir: "La clef que j'ai en main semble correspondre à la porte en haut des escaliers.",
                                utiliser: "J'insère la clef dans la serrure. Après un tour, la porte est ouverte.",
                                aller: "Je suis déjà en haut des escaliers.",
                                frapper: "Malgré que j'ais la clef, je donne un autre coup d'épaule à la porte. Toujours rien."
                            },
                            open: {
                                newAct: { command: "aller" },
                                voir: "La porte, entrouverte, semble donner sur une chambre à coucher.",
                                utiliser: "J'ai déjà utilisé la clef pour ouvrir la porte, je peux entrer.",
                                aller: "J'entre dans la pièce à l'étage, plongée dans la pénombre...",
                                frapper: "J'ai pu ouvrir la porte, pas besoin d'essayer de la casser une nouvelle fois."
                            }
                        },
                        three: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "L'escalier est cette fois-ci en bois plus solide et foncé. Il a meilleure mine.",
                                utiliser: "La porte en haut des escaliers est à nouveau fermée à clef, impossible de l'ouvrir.",
                                aller: "Je suis en haut des escaliers.",
                                frapper: "Je donne un coup de talon dans la porte. Elle ne bouge pas d'une pouce.",
                                inspecter: "Je remarque quelques gravures aux motifs animaliers dans la rampe de l'escalier."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [0] }],
                                voir: "J'ai enfin récupéré une clef. Elle semble correspondre à la porte, heureusement.",
                                utiliser: "J'insère la clef dans la serrure. Après deux tours cette fois, la porte s'ouvre.",
                                aller: "Je suis en haut des escaliers.",
                                frapper: "J'ai déjà la clef, je ne vais pas m'acharner sur la porte en haut des escaliers.",
                                inspecter: "La clef est similaire à celle de l'entrée. Elle est lourde et légèrement rouillée."
                            },
                            open: {
                                win: { command: "aller" },
                                voir: "La porte donne sur une chambre à coucher éclairée par la lune.",
                                utiliser: "J'ai déjà ouvert la porte.",
                                aller: "J'entre dans la pièce à l'étage, baignée dans la lueur lunaire...",
                                frapper: "J'ai déjà ouvert la porte, je n'ai pas de raison de la casser.",
                                inspecter: "La porte est en bois massif, et se pare d'une affiche pour un film, ou une exposition, je ne suis pas sûr."
                            }
                        },
                        four: {
                            isFinal: false,
                            isOpened: false,
                            closed: {
                                voir: "L'escalier est nettement mieux défini, en un bois sombre et massif. Il a l'air solide. La porte en haut également.",
                                utiliser: "J'appuie sur la poignée. Rien. La porte est fermée à clef encore une fois...",
                                aller: "Je suis en haut des escaliers, devant la porte.",
                                frapper: "Je prends mon élan depuis les marches et je fonce contre la porte. Elle ne bouge pas.",
                                inspecter: "Sur la porte, un dessin à la peinture colorée, fait avec les doigts. Il représente un enfant qui joue dans l'herbe.",
                                attendre: "J'attends devant la porte, au sommet de l'escalier. La clef est-elle une nouvelle fois dans le tiroir du bureau ?"
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [0], condition: true }],
                                voir: "La clef que j'ai en main semble correspondre à la porte.",
                                utiliser: [
                                    `Avant d'insérer la clef, je me pose soudain la question : ai-je bien lu le livre`,
                                    "Je mets la clef dans la serrure et la tourne. La porte s'ouvre face à moi."
                                ],
                                aller: "Je suis en haut des escaliers, devant la porte.",
                                frapper: "Je ne pense pas que ça me soit utile. J'ai déjà la clef pour l'ouvrir.",
                                inspecter: "La clef est encore une fois différente. Cette fois plus petite et moderne. La marque est KABA.",
                                attendre: `Mes pensées sont absorbées par le livre "La Brume". J'ai l'impression que je dois le livre avant de continuer.`
                            },
                            final: {
                                win: { command: "aller" },
                                voir: "La porte est ouverte et donne sur une chambre à coucher à l'étage.",
                                utiliser: "J'ai déjà ouvert la porte...",
                                aller: "J'entre sous la lumière de la lune à l'étage, une fois encore...",
                                frapper: "La porte est déjà ouverte, pas de raison de la frapper.",
                                inspecter: `La porte a une affiche pour la série "Midnight Mass" collée de l'autre côté.`,
                                attendre: "En attendant, la porte ouverte, l'air frais de l'extérieur carresse mes joues."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "L'escalier est en bois sombre et massif. Il a l'air vieux, mais bien entretenu. D'époque, avec du cachet.",
                                utiliser: "La porte est à nouveau fermée à clef. Je vais devoir trouver un moyen de l'ouvrir.",
                                aller: "Je suis devant la porte, en haut des escaliers.",
                                frapper: "Je n'ai pas envie de frapper la porte, ni l'escalier.",
                                inspecter: "La porte est décorée d'un dessin enfantin, fait à la peinture. La chambre derrière est celle d'un enfant.",
                                attendre: "Je réfélchis à comment ouvrir la porte. Pour le moment, rien ne me vient.",
                                accepter: "Cette porte m'est familière, mais je ne saurais dire comment. Il y a peut-être des choses qui me rafraîront la mémoire dans le bureau."
                            },
                            opening: {
                                interaction: [{ command: "accepter", state: "open", target: [0] }],
                                voir: "La porte est toujours fermée, mais je n'ai toujours pas de clef pour l'ouvrir.",
                                utiliser: "La porte est toujours impossible à ouvrir...",
                                aller: "Je suis devant la porte, en haut des escaliers.",
                                frapper: "Je ne veux pas frapper la porte ou l'escalier.",
                                inspecter: "Le dessin qui décore la porte représente un enfant qui joue sur une balançoire accrochée à un arbre.",
                                attendre: "Je pense qu'il faut que j'accepte la situtation. Je connais cette porte, j'en suis sûr...!",
                                accepter: "C'est la porte d'entrée de ma chambre quand j'étais enfant ! Elle n'avait pas à clef, elle devrait s'ouvrir sans ça."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [0] }],
                                voir: "Je me revois enfant, montant les escaliers pour aller dans ma chambre. Celle-ci en est une exacte réplique.",
                                utiliser: "Mes doigts se posent sur la poignée, et la porte s'ouvre. Était-elle ouverte tout ce temps ?",
                                aller: "Je suis devant la porte, en haut des escaliers.",
                                frapper: "Je ne veux pas frapper la porte ou l'escalier.",
                                inspecter: "J'avais fait le dessin sur la porte avec de la peinture à doigts... Je devais avoir 4 ou 5 ans.",
                                attendre: "Des souvenirs passent derrière mes paupières alors que je ferme les yeux quelques minutes. Je me sens reposé.",
                                accepter: "C'est la porte d'entrée de ma chambre quand j'étais enfant."
                            },
                            final: {
                                win: { command: "aller" },
                                voir: "La porte est ouverte. Derrière, la chambre à coucher. Est-ce que c'est la mienne ?",
                                utiliser: "La porte est desormais ouverte.",
                                aller: "J'entre une dernière fois dans la chambre à l'étage...",
                                frapper: "Je ne veux pas frapper la porte ou l'escalier.",
                                inspecter: `Le poster pour la série "Midnight Mass" n'est plus affiché au dos de la porte. Cette série n'existait pas quand j'étais enfant.`,
                                attendre: "Des souvenirs passent derrière mes paupières alors que je ferme les yeux quelques minutes. Je me sens reposé.",
                                accepter: "C'est la porte d'entrée de ma chambre quand j'étais enfant. Je ne crois pas que la chambre derrière soit la mienne cependant."
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
                                voir: "C'est un bureau en métal gris-vert aux coins et bords rouillés. Il y a un cabinet à sa droite.",
                                utiliser: "Le bureau est froid et fragile sous mes mains. Le cabinet ne s'ouvre pas quand je tire dessus.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je frappe le cabinet d'un coup de pied sec. Un éclat métallique sourd m'indique que le tiroir devrait être débloqué."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "opening", target: [0] }, { command: "utiliser", state: "open", target: [1] }],
                                voir: "Le bureau a l'air en piteux état. Le tiroir du cabinet est cassé et entrouvert.",
                                utiliser: "Je tire sur le tiroir déboîté. À l'intérieur, une clef rouillée. Je la prends avec moi.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je donne un nouveau coup de pied au cabinet, sans effet."
                            },
                            open: {
                                voir: "C'est un bureau en métal gris-vert aux coins et bords rouillés. Le cabinet à sa droite est cassé.",
                                utiliser: "J'ai déjà récupéré la clef. Il n'y a plus rien à voir sur ce bureau.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je donne un nouveau coup de pied au cabinet, sans effet."
                            }
                        },
                        three: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "Le bureau est en métal vert-gris, et a des airs de cabinet militaire. Il a toujours un cabinet à droite, fermé.",
                                utiliser: "Le cabinet est fermé à clef. Cette fois, il a l'air plus solide qu'avant. Il n'y a pas de serrure.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je frappe le cabinet comme je l'ai fait la dernière fois. Rien ne se passe.",
                                inspecter: "Il y a un cadenas couvert de rouille sur le côté du cabinet. Je me demande comment l'ouvrir."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [1] }, { command: "inspecter", state: "open", target: [1] }],
                                voir: "Le bureau est en métal vert-gris, et a des airs de cabinet militaire. Il a toujours un cabinet à droite, fermé.",
                                utiliser: "Le cabinet est fermé à clef par un code. Je pourrais essayer d'y entrer la date de la carte postale.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je frappe le cabinet de toutes mes forces, mais il ne bouge pas. Ce bureau est solide.",
                                inspecter: "Est-ce que je pourrais utiliser la date de la carte postale comme code pour le cadenas ?"
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [1] }, { command: "utiliser", state: "opening", target: [0] }],
                                voir: "Le cadenas demande un nombre à 6 chiffres. Une date pourrait y être entré.",
                                utiliser: "J'entre la date 21-06-14 comme code. Le cabinet s'ouvre, et je récupère la clef qu'il contient.", // année de ses 18 ans
                                aller: "Je suis devant le bureau.",
                                frapper: "Je n'ai pas de raison de le frapper, rien n'y fait cette fois-ci.",
                                inspecter: "Le cadenas a déjà le nombre 14 entré à la fin, ce qui correspondrait à l'année dans la date que j'ai trouvée."
                            },
                            final: {
                                voir: "Le bureau est en métal vert-gris, et a des airs de cabinet militaire. Il est vieux et de mauvais goût.",
                                utiliser: "J'ai déjà ouvert le cabinet et récupéré la clef.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je n'ai pas de raison de le frapper.",
                                inspecter: "Il y a moins de rouille qu'avant, mais j'en observe tout de même dans les coins du bureau."
                            }
                        },
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "Le bureau est maintenant en bois. Au premier coup d'oeil, on dirait du chêne, ou du pin.",
                                utiliser: "Je passe mon doigt sur le bureau. Il est lisse. Je tente d'ouvrir son cabinet, mais il est fermé.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je ne pense pas que ce soit la solution à tous mes problèmes.",
                                inspecter: "Le bureau est en bois de chêne laqué, nettement plus beau et raffiné qu'avant.",
                                attendre: "J'attends devant le bureau. Comment ouvrir le cabinet cette fois-ci ? Je remarque qu'il faut un code."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [0, 1] }],
                                voir: "Le cabinet est accompagné d'un système de blocage par un code, situé au-dessus de sa poignée.",
                                utiliser: `J'entre le code 1667, l'année de publication du "Paradis Perdu" de Milton. Le tiroir s'ouvre et je récupère la clef qu'il contient.`,
                                aller: "Je suis devant le bureau.",
                                frapper: "J'ai le code à entrer, pas de raison de le frapper.",
                                inspecter: "C'est un bureau sophistiqué. Ses mécanismes sont certes âgés, mais la façon dont son verrouillage est pensé est fascinante.",
                                attendre: "J'ai réussi à me souvenir du code. Je n'ai pas besoin d'attendre plus longtemps."
                            },
                            open: {
                                voir: "Le bureau est en bois de chêne poli et laqué. Une pièce qui a probablement dû coûter une fortune.",
                                utiliser: "Je passe mon doigt sur le bureau. Il est lisse. C'est du bel ouvrage.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je n'ai pas envie de le frapper maintenant que j'ai ouvert le cabinet.",
                                inspecter: "Ce bureau est magnigique, et très sophistiqué. Avec son bois, il a l'air ancien, mais de bon goût.",
                                attendre: "J'ai pu ouvrir son cabinet. Je n'ai pas besoin d'attendre plus longtemps."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accepter", state: "open", target: [1, 4] }],
                                voir: "Le bureau est un peu vieillot, mais magnifique et imposant au milieu de la pièce.",
                                utiliser: "Le cabinet du bureau est à nouveau fermé, mais j'ai le code sur le bout des lèvres.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je ne vois pas l'utilité.",
                                inspecter: "Le cabinet est encore fermé au profit d'une ouverture utilisant un code, mais je ne sais pas lequel.",
                                attendre: "J'attends devant le bureau. Des souvenirs me reviennent. Mon père entrain de travailler ?",
                                accepter: "C'était le bureau de mon père. Le code pour son cabinet était ma date de naissance, le 21 juin 1996."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [1] }],
                                voir: "Le bureau est vieux, mais très bien entretenu. Il magnifique et imposant au milieu de la pièce.",
                                utiliser: "J'entre ma date de naissance comme code ; le cabinet est ouvert, mais il ne contient pas de clef cette fois.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je ne vois pas l'utilité.",
                                inspecter: "Je revois mon père, installé dans sa chaise de bureau, travailler minutieusement. Que faisait-il comme métier ?",
                                attendre: "J'essaie de me souvenir de mon père, installé à ce bureau. Les images me sont floues.",
                                accepter: "Mon père faisait un travail dans la fine mécanique. Est-ce que c'était de l'électronique, de l'horlogerie...?"
                            },
                            final: {
                                voir: "Le bureau est une belle antiquité. Il magnifique et imposant au milieu de la pièce.",
                                utiliser: "Je passe mes doigts sur le bureau pour m'imprégner de son histoire. Je revois mon père, penché dessus, un fer à soudure en main.",
                                aller: "Je suis devant le bureau.",
                                frapper: "Je ne vois pas l'utilité.",
                                inspecter: "Je revois mon père, installé dans sa chaise de bureau, travailler minutieusement. Il travaillait sur des horloges je crois.",
                                attendre: "J'essaie de me souvenir de mon père, installé à ce bureau. Je n'arrive pas à me rappeler son visage.",
                                accepter: "Mon père était horloger. Il n'a pas arrêté de travailler même après sa retraite."
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
                                voir: "C'est une carte postale qui montre des montagnes eneigées avec un photo-montage de ski.",
                                utiliser: "Je retourne la carte pour voir le dos.",
                                aller: "La carte est déjà à ma portée.",
                                frapper: "Je plie un coin de la carte. Pas sûr que ça me serve.",
                                inspecter: "Il y a le lieu marqué en transparence en bas de la carte : Zermatt, CH."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "closed", target: [2] }, { command: "inspecter", state: "opening", target: [1], condition: "closed" }],
                                voir: `"Souvenirs de vacances en Suisse ! Un petit voyage avant de ne plus pouvoir en faire !" est écrit au dos. La signature n'est pas lisible.`,
                                utiliser: "Je retourne la carte pour voir l'image de l'autre côté.",
                                aller: "La carte est déjà à ma portée.",
                                frapper: "Je plie un coin de la carte. Pas sûr que ça me serve.",
                                inspecter: "La carte est datée du 21-06-2014. Le jour de mes 18 ans."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "utiliser", state: "open", target: [2] }],
                                voir: "C'est une carte postale qui montre une silhouette de ville avec un lac en fond.",
                                utiliser: "Je retourne la carte pour voir le dos.",
                                aller: "La carte est déjà à ma portée.",
                                frapper: "Je déchire un coin de la carte. Je ne vois pas à quoi ça m'a servi.",
                                inspecter: "Il y a le lieu marqué en transparence en bas de la carte : Lausanne, CH.",
                                attendre: "Je m'arrête devant la carte, à l'entrée. Je ne sais pas trop pourquoi j'attends."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "closed", target: [2] }],
                                voir: `"Je me sens enfin en paix ici, mais qu'est-ce que tu me manques ! Fais un bec à [illisible]" est écrit au dos de la carte.`,
                                utiliser: "Je retourne la carte pour voir l'image de l'autre côté.",
                                aller: "La carte est déjà à ma portée.",
                                frapper: "Je ne pense pas que ça soit nécessaire.",
                                inspecter: "La carte est datée de l'année 2003. Une année quelconque.",
                                attendre: "Je m'arrête devant la carte, à l'entrée. Je ne sais pas trop pourquoi j'attends."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "utiliser", state: "open", target: [2] }],
                                voir: "C'est une carte d'une autoroute. Drôle d'objet à mettre en avant sur une carte postale.",
                                utiliser: "Je retourne la carte pour voir le dos.",
                                aller: "La carte est déjà à ma portée.",
                                frapper: "Je ne pense pas que cela me servira.",
                                inspecter: "Il n'y a pas de lieu indiqué. L'autoroute est bouchonnée, mais on ne voit pas pourquoi.",
                                attendre: "Je m'arrête devant la carte. Pourquoi montrer cela ? Elle me procure un profond malaise.",
                                accepter: "J'ai l'impression de reconnaître l'autoroute, mais je ne saurais dire d'où. Étrange."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "closed", target: [2] }],
                                voir: `"Nous restons immobiles dans le chemin du temps. Avant que tu partes, montre-moi ce que tu sais." est écrit au dos.`,
                                utiliser: "Je retourne la carte pour voir l'image de l'autre côté.",
                                aller: "La carte est déjà à ma portée.",
                                frapper: "Je ne pense pas que cela me servira.",
                                inspecter: "La carte est datée du " + today + ". C'est... aujourd'hui ?",
                                attendre: "Je m'arrête devant la carte. Pourquoi ce texte ? Tout cela n'a pas l'air très net.",
                                accepter: "Le texte ressemble à des paroles de chanson que je connais... Et la date est celle d'aujour'hui... Pourquoi ?"
                            }
                        }
                    }, {    // bibliothèque
                        name: "bibliotheque",
                        determinant: "la ",
                        isLocated: false,
                        two: {
                            isOpened: false,
                            closed: {
                                voir: "C'est une vieille bibliothèque en métal gris-vert, comme le bureau. Elle ne contient aucun livre.",
                                utiliser: "Le métal est rugueux et rouillé par endroit, mieux vaut ne pas trop y toucher.",
                                aller: "Je suis déjà devant la bibliothèque.",
                                frapper: "Je frappe un des bords de la bibliothèque avec mon poing fermé. Un bruit métallique résonne. Rien ne se passe.",
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                voir: "La bibliothèque est maintenant en métal vers-gris, plus propre qu'avant, et contient quelques livres.",
                                utiliser: "Même si elle est en meilleur état, elle a toujours des traces de rouilles çà et là...",
                                aller: "Je suis déjà devant la bibliothèque.",
                                frapper: "Je ne pense pas que ça me soit utile ici.",
                                inspecter: "Les livres sont principalement des volumes désordonnés d'Encyclopédies et d'Atlas."
                            }
                        },
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "inspecter", state: "opening", target: [3] }],
                                voir: "La bibliothèque est désormais en bois massif, de façon similaire au bureau. Elle est remplie de livres.",
                                utiliser: "Le bois est lisse sous mes doigts. Ma main s'arrête sur un livre plus large que les autres. Je suis pris de curiosité.",
                                aller: "Je suis déjà devant la bibliothèque.",
                                frapper: "Je ne pense pas que cela soit nécessaire.",
                                inspecter: `Un livre plus large que les autres attire mon attention. Il s'appelle "Vanités".`,
                                attendre: "J'attends un moment devant la bibliothèque. J'ai envie de voir les livres de plus près."
                            },
                            opening: {
                                interaction: [{ command: "attendre", state: "open", target: [3] }],
                                voir: `Le livre "Vanités" est un grand ouvrage à la reliure en cuir rouge, avec son titre gravé en doré.`,
                                utiliser: `Au toucher, la tranche du livre "Vanités" est rugueuse, épaisse et resistante.`,
                                aller: "Je suis déjà devant la bibliothèque.",
                                frapper: "Je ne pense pas que cela soit nécessaire.",
                                inspecter: `Il n'y a pas d'auteur mentionné sur la tranche de "Vanités", seulement son titre et une année, 1898.`,
                                attendre: `J'attends un moment devant la bibliothèque. J'ai très envie de lire ce livre, "Vanités".`
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [3] }, { command: "utiliser", state: "opening", target: [4] }],
                                voir: `"Vanités" est un livre de grande qualité. Il est immense, et semble avoir coûté cher. Son présence est étonnante.`,
                                utiliser: `J'ouvre "Vanités". Un recueil de poème y est régulièrement cité : "La Brume". Serait-ce le livre posé à côté de la bilbiothèque ?`,
                                aller: "Je suis déjà devant la bibliothèque.",
                                frapper: "Je ne vois pas pourquoi je casserais des livres.",
                                inspecter: "Pas d'auteur cité sur la couverture ou son quatrième. La couverture a une gravure de crâne en or et argent.",
                                attendre: `"Vanités" m'attire énormément. Je devrais le saisir et l'ouvrir pour voir ce qu'il contient.`
                            },
                            final: {
                                voir: `Le livre "Vanités" trône sur les autres ouvrages de son imposante tranche rouge.`,
                                utiliser: `J'ai trouvé de nombreuses mentions de "La Brume" dans "Vanités". Je devrais me pencher sur "La Brume".`,
                                aller: "Je suis déjà devant la bibliothèque.",
                                frapper: "Je ne pense pas que cela soit nécessaire.",
                                inspecter: `À y regarder de plus près, "Vanités" et "La Brume" partagent la même apparence, mais "Vanités" est bien plus grand.`,
                                attendre: `Je devrais me pencher sur "La Brume" au lieu de rester devant la bibliothèque.`
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                voir: "La bibliothèque est âgée mais en excellent état. Son bois, sombre et tacbeté, est magnifique. Elle regorge de livres.",
                                utiliser: "Au toucher, aucun livre ne sort du lot. J'ai l'impression que la solution cette fois doit se trouver ailleurs.",
                                aller: "Je suis déjà devant la bibliothèque.",
                                frapper: "Je ne veux pas frapper la bibliothèque.",
                                inspecter: `"Vanités" est toujours présent dans la bibliothèque. Il ne me semble pas utile de le relire cependant.`,
                                attendre: `J'attends devant la bibliothèque. L'envie me prend de relire "La Brume".`,
                                accepter: "C'est une bibliothèque que j'avais reprise de mes parents, lors de mon premier déménagement."
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
                                voir: `"La Brume" est un petit recueil de poèmes à la couverture rouge et aux lettres gravées en or.`,
                                utiliser: "Il est léger, et sa couverture est légèrement rude au toucher.",
                                aller: "Je suis devant le livre.",
                                frapper: "Je n'ai pas envie de casser ce livre. D'une certaine façon, il a l'air précieux.",
                                inspecter: `À y regarder de plus près, le sous-titre du livre est "Poèmes de la Colline aux Ronces".`,
                                attendre: "J'attends devant le livre. Sa vue m'angoisse, et je n'ose pas le prendre pour le lire."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [4] }, { command: "inspecter", state: "opening", target: [1], condition: "closed" }],
                                voir: `À y regarder de plus près, il ressemble à une version plus petite de "Vanités".`,
                                utiliser: "Je prends le livre en main, et l'ouvre. Je peux désormais en lire quelques passages.",
                                aller: "Je suis devant le livre.",
                                frapper: "Je n'ai pas envie de casser ce livre. Peut-être me sera-t-il utile pour ouvrir le cabinet.",
                                inspecter: `Sur le quatrième de couverture, tout en bas, écrit en petit, "À la gloire d'un Paradis Perdu, 1667". Serait-ce le code du cabinet ?`,
                                attendre: "J'aimerais lire ce que le livre a à m'offrir, m'imprégnier de ses vers."
                            },
                            open: {
                                interaction: [{ command: "voir", state: "final", target: [4], condition: 5 }, { command: "inspecter", state: "opening", target: [1], condition: "closed" }],
                                voir: [
                                    `"Nous dansons comme des flammes, scintillant dans la nuit. Nous nous balançons au rythme du vent avant de fondre."`,
                                    `"Tu parles d'un monde que j'ai connu, avant de perdre l'air. Nous connaissons tous le mensonge. Tu l'as laissé mourir."`,
                                    `"Te laisser entrer c'est me laisser partir. Je m'en vais, pour que tu puisse grandir."`,
                                    `"Les étés rêvent et la nuit s'arrête. J'attends patiemment sur la colline. Tous ces visages se transforment en sable"`,
                                    `"Où vas-tu quand je ferme les yeux ? Que vois-tu en me regardant ?"`,
                                ],
                                utiliser: "Mes mains tremblent en tenant le livre. C'est comme s'il me forçait à le lire.",
                                aller: "Je suis devant le livre.",
                                frapper: "Je n'ai pas envie de casser ce livre.",
                                inspecter: `Sur le quatrième de couverture, tout en bas, écrit en petit, "À la gloire d'un Paradis Perdu, 1667". Serait-ce le code du cabinet ?`,
                                attendre: "J'essaie de comprendre ce livre, son sujet, ses thèmes..."
                            },
                            final: {
                                interaction: [{ command: "inspecter", state: "opening", target: [1], condition: "closed" }],
                                collectible: { command: "voir", coll: "readBook" },
                                voir: "Mes yeux clignent, et je sors de l'emprise du livre. Je me rends compte que je l'ai lâché, et qu'il est tombé à terre.",
                                utiliser: "Je n'ose pas le ramasser. Je suis chamboulé par ce que j'ai lu...",
                                aller: "Le livre est à mes pieds.",
                                frapper: "Malgré mon malaise, je n'ai pas envie de casser ce livre.",
                                inspecter: `Sur le quatrième de couverture, tout en bas, écrit en petit, "À la gloire d'un Paradis Perdu, 1667". Serait-ce le code du cabinet ?`,
                                attendre: "Je préfère m'éloigner de ce livre, je crois avoir vu tout ce qu'il y avait à voir."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accepter", state: "open", target: [4] }],
                                voir: `"La Brume" est un recueil de poème. Sa couverture est rouge, avec un lettrage doré.`,
                                utiliser: "Le livre est léger, et agréable à prendre en main.",
                                aller: "Je suis devant le livre.",
                                frapper: "Je ne veux pas casser le livre.",
                                inspecter: `Le sous-titre a changé, il est désormais "Remèdes contre la douleur de ceux qui restent".`,
                                attendre: "Je reste bouche-bée devant le livre, me demandant pourquoi il m'affecte autant.",
                                accepter: "Si je me souviens bien, ma mère possédait ce livre quand j'étais enfant. Elle le lisait sous le porche."
                            },
                            open: {
                                interaction: [{ command: "accepter", state: "opening", target: [0] }],
                                voir: `J'ai l'impression de reconnaître cette copie de "La Brume". Serait-ce celle de ma mère ?`,
                                utiliser: "Le livre est petit dans mes mains aujourd'hui, je me souviens qu'il me paraissait grand étant enfant.",
                                aller: "Je suis devant le livre.",
                                frapper: "Je ne veux pas casser le livre.",
                                inspecter: `Il y a dans le livre un marque-page en plastique doré, que ma mère utilisait dans ses livres.`,
                                attendre: "Je prends le temps d'observer le livre et les souvenirs qui y sont attachés. Je revois ma mère.",
                                accepter: "Ma mère lisait ce livre quand elle avait appris le décès de mon grand-père. Elle sanglotait en le lisant."
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
                name: "upstairs",
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
                                voir: "C'est un lit une place, défais, qui a l'air d'avoir été abandonné depuis des années...",
                                utiliser: "Je presse ma main contre le lit. Il est humide et froid, probablement pourri à l'intérieur...",
                                aller: "Je suis devant le lit, mais je n'ai pas envie d'aller dedans...",
                                frapper: "Je donne un coup de pied au lit. Rien ne se passe.",
                                inspecter: "Dans un des pieds du lit, il y a un compartiment caché avec une petite clef. Je la ramasse."
                            },
                            opening: {
                                voir: "Le lit est sale, et ses draps sont défaits. Il y a tout de même une couverture et un oreiller.",
                                utiliser: "Je passe ma main sur le duvet. Il est moite.",
                                aller: "Je suis devant le lit, mais je n'ai pas vraiment envie d'aller dedans...",
                                frapper: "Je donne un coup de poing dans l'oreiller. Un bruit épais et humide se produit à l'impact.",
                                inspecter: "Je ne vois rien de spécial outre le compartement que j'ai trouvé précédemment."
                            },
                            open: {
                                interaction: [{ command: "voir", state: "final", target: [0] }],
                                voir: "Je suis pris de fatigue, et malgré son apparence, le lit semble m'accueillir.",
                                utiliser: "Je touche une fois encore le lit... Son humidité me repousse, mais je suis si fatigué...",
                                aller: "Je suis devant le lit... Est-ce que j'ose aller dedans...?",
                                frapper: "Je donne un coup à l'oreiller.",
                                inspecter: "Le lit reste ferme et devrait supporter le poids d'une personne malgré son état."
                            },
                            final: {
                                newAct: { command: "aller" },
                                voir: "Je devrais aller dans le lit, mes paupières se ferment sans que je le contrôle.",
                                utiliser: "Je pose mes paumes contre le matelas... Il est humide, mais devrait pouvoir servir à dormir.",
                                aller: "Je me couche dans le lit. Malgré le froid et l'humidité, je ferme mes paupières, et me laisse bercer par la lune.",
                                frapper: "Je ne pense pas que le frapper soit nécessaire pour y dormir.",
                                inspecter: "Le lit devrait supporter mon poids malgré son état."
                            },
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                voir: "Le lit est en nettement meilleur état. Il est toujours défait.",
                                utiliser: "Je caresse le matelas, qui est désormais sec, mais qui reste froid.",
                                aller: "Je ne suis pas fatigué, je ne vais pas aller dans le lit.",
                                frapper: "Je ne pense pas que ça me soit utile de faire ça.",
                                inspecter: "Je jette un regard plus attentif au lit. Pas de compartiment caché cette fois.",
                                attendre: "Je ne sais pas trop ce que j'attends."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accepter", state: "open", target: [4] }],
                                voir: "C'est un lit nettement plus moderne qu'avant. D'un coup d'oeil, on dirait mon lit, celui de mon appartement.",
                                utiliser: "Les draps sont faits, frais et changés. Ils sont propres et doux au toucher.",
                                aller: "Je suis devant le lit. Je ne suis pas fatigué, donc je n'ai pas de raison d'aller dedans.",
                                frapper: "Je ne veux pas le frapper.",
                                inspecter: "À y regarder de plus près, il me semble reconnaître les draps...",
                                attendre: "J'attends devant le lit, pour voir si j'ai sommeil... Je ne pense pas que ce soit le cas.",
                                accepter: "C'est mon lit, celui de mon appartement. Comment est-il arrivé là ? Est-ce que c'est ma chambre ?"
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
                                voir: "C'est un ourson en peluche qui porte un petit chapeau melon. Il est vieux et sale.",
                                utiliser: "En prenant l'ours en peluche dans mes mains, il est plus lourd que ce que j'aurai pensé.",
                                aller: "L'ours en peluche est à mes pieds.",
                                frapper: "Je donne un coup de pied à la peluche. Elle fait un bruit métallique.",
                                inspecter: "L'ourson est raffistolé de partout, il semble être passé entre les mains de plusieurs enfants."
                            },
                            opening: {
                                interaction: [{ command: "inspecter", state: "open", target: [1] }],
                                voir: "C'est un ourson en peluche vieux et sale. Sa tête est à moitié détachée de son corps.",
                                utiliser: "En portant l'ourson, il me paraît plus lours que ce qu'il devrait être. Est-ce qu'il cache quelque chose ?",
                                aller: "L'ours en peluche est à mes pieds.",
                                frapper: "Je lance l'ourson à mes pieds, en espérant qu'il se casse, mais rien n'y fait.",
                                inspecter: "Je vois un petit compartiment caché dans la nuque de l'ourson. Il est fermé à clef pour le moment."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "open", target: [0] }, { command: "utiliser", state: "final", target: [1] }],
                                voir: "La petite clef que j'ai récupérée dans le lit semble correspondre au compartiment dans la peluche.",
                                utiliser: `J'ouvre le compartiment À l'intérieur, une note : "Ton chemin est long, prends le temps pour te reposer".`,
                                aller: "L'ours en peluche est à mes pieds.",
                                frapper: "Je frappe l'ourson en espérant ouvrir le compartiment. Rien n'y fait.",
                                inspecter: "Le compartiment de l'ourson est bien caché sous sa nuque, mais je devrais pouvoir l'ouvrir facilement avec la clef."
                            },
                            final: {
                                voir: "L'ourson repose contre le lit. On dirait presque qu'il dort, avec sa tête qui pend sur le côté.",
                                utiliser: `Le message dans la peluche disait : "Ton chemin est long, prends le temps pour te reposer".`,
                                aller: "L'ours en peluche est à mes pieds.",
                                frapper: "Je ne pense pas que frapper la peluche me soit utile.",
                                inspecter: "Je ne pense pas qu'il y ait quelque chose à voir en plus sur la peluche."
                            }
                        },
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "La peluche est en meilleur état, sa tête penche toujours sur le côté en revanche.",
                                utiliser: "La peluche est à nouveau lourde. Cache-t-elle encore quelque chose ?",
                                aller: "L'ours en peluche est à mes pieds.",
                                frapper: "Je frappe l'ourson pour tenter de récupérer ce qu'il contient, mais rien n'y fait.",
                                inspecter: "L'ours en peluche a à nouveau un compartiment derrière la nuque. À moi de trouver la clef pour l'ouvrir.",
                                attendre: "J'attends et réfléchis... La dernière fois, c'était dans le lit que j'ai trouvé la clef."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [1, 4] }],
                                voir: "La clef que j'ai récupérée derrière le poster correpond au compartiment dans l'ourson.",
                                utiliser: `Je tourne la clef. Un autre message cette fois : "Rejoins les astres".`,
                                aller: "L'ours en peluche est à mes pieds.",
                                frapper: "Je ne pense pas que ça me soit utile.",
                                inspecter: "La clef est petite et en métal. Elle est attachée à un porte-clef en forme de chapeau, le même que porte la peluche.",
                                attendre: "Je ne pense pas que j'aies besoin d'attendre."
                            },
                            open: {
                                voir: "La peluche est en meilleur état, même si sa tête penche toujours sur le côté.",
                                utiliser: `Le message que contenait la peluche dit : "Rejoins les astres". Qu'est-ce que ça veut dire ?`,
                                aller: "L'ours en peluche est à mes pieds.",
                                frapper: "Je ne pense pas que ça me soit utile.",
                                inspecter: "Je ne pense pas qu'il y ait quelque chose à voir en plus sur la peluche.",
                                attendre: "Le message me dit de rejoindre les astres... Aller sur le toit m'en rapprocherait."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accepter", state: "opening", target: [4] }],
                                voir: "La peluche est dans le même état qu'avant. Elle est vieille, mais bien entretenue, reprise de partout.",
                                utiliser: "Je la porte. Cette fois, son poids semble normal. Il n'y a probablement pas de compartiment.",
                                aller: "L'ours en peluche est à mes pieds.",
                                frapper: "Elle est déjà assez abîmée comme ça.",
                                inspecter: "Elle ne contient pas de compartiment derrière sa nuque. C'est une simple peluche.",
                                attendre: "En attendant, je me rends compte que je connais cette peluche. C'était la mienne, étant enfant.",
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
                                voir: "Le mur est couvert de posters, d'articles de journaux et de lettres collées de manière éparse.",
                                utiliser: "Je ne pense pas que le mur me soit d'une grande utilité.",
                                aller: "Je suis devant le mur.",
                                frapper: "Je donne un coup de poing au mur. J'ai juste réussi à me faire mal aux doigts.",
                                inspecter: "Les journaux parlent de tout et de rien. Le plus récent date du " + today
                            }
                        },
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "Le mur est toujours recouvert de posters, d'articles de journaux et de lettres diverses.",
                                utiliser: "Je ne sais pas trop ce que je peux faire de ce mur. Au toucher, certaines affiches sont collantes.",
                                aller: "Je suis devant le mur.",
                                frapper: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                                inspecter: "Les journaux parlent de tout et de rien. Le plus récent date du " + today,
                                attendre: "J'attends devant le mur. Je réfléchis. Est-ce qu'il y aurait un indice sur l'un de ces papiers collés ?"
                            },
                            opening: {
                                interaction: [{ command: "inspecter", state: "open", target: [2] }],
                                voir: "La lumière de la lampe met en évidence un article qui parle d'un bouchon sur une autoroute.",
                                utiliser: "L'article est mis en évidence par une peinture fluorescente verte, qui semble encore fraîche au toucher.",
                                aller: "Je suis devant le mur.",
                                frapper: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                                inspecter: "C'est l'article le plus récent du mur. Il est bosselé en son centre, en forme de petite clef...",
                                attendre: "Je prends le temps de lire l'article. Il mentionne un accident de voiture qui bloque la circulation."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "opening", target: [1] }, { command: "utiliser", state: "final", target: [2] }],
                                voir: "Maintenant que j'ai remarqué la bosse en forme de clef, je ne vois plus que ça.",
                                utiliser: "Je déchire la page de journal pour récupérer la clef derrière. Je garde avec moi.",
                                aller: "Je suis devant le mur.",
                                frapper: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                                inspecter: "La clef détourée sous l'article est petite, comme celle trouvée la dernière fois dans le lit.",
                                attendre: "Comment est-ce qu'un article de journal peut dater d'aujourd'hui ?"
                            },
                            final: {
                                voir: "L'article déchiré fait un peu tache au milieu du méli-mélo de collages sur le mur.",
                                utiliser: "Je ne pense pas qu'il y ait quelque chose d'autre à faire ici.",
                                aller: "Je suis devant le mur.",
                                frapper: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                                inspecter: "La clef était sous la photo de l'article. Je n'ai pas pensé à la regarder avant de la déchirer.",
                                attendre: `Il y a des posters de groupes de musique. Je reconnais certains, comme "Epoch" et "Spectral Wound".`
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                voir: "Le mur est toujours recouvert. Je regarde si un article attire mon attention. Rien pour le moment.",
                                utiliser: "Je ne pense pas que le mur me soit d'une grande utilité.",
                                aller: "Je suis devant le mur.",
                                frapper: "Je ne pense pas que cela m'apportera quoi que ce soit, à part me faire mal à la main.",
                                inspecter: "Plusieurs articles parlent d'un accident sur une autoroute. J'ai mal à la tête quand je les lis.",
                                attendre: "Je réfléchis aux articles qui concernent un accident sur l'autoroute. Pourquoi ce sujet spécifique ?",
                                accepter: "J'ai la terrible impression d'être lié à ces articles de jounaux qui parle d'un accident. Pourtant, je vais bien, non ?."
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
                                voir: "C'est une lampe sur un long pied de bois. Elle pointe en direction du mur. Elle est éteinte.",
                                utiliser: "Je tire sur la ficelle qui pend de la lampe. Elle s'allume.",
                                aller: "Je suis devant la lampe.",
                                frapper: "Je n'ai pas envie de casser cette potentielle source de lumière.",
                                inspecter: "Il n'y a rien de particulier à cette lampe. Son chapeau est en tissu beige semi-transparent.",
                                attendre: "J'attends un moment dans la pénombre de la lune. Je pourrai allumer la lumière pour y voir plus clair."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "closed", target: [3] }, { command: "utiliser", state: "closed", target: [2], condition: "opening" }, { command: "attendre", state: "opening", target: [2], condition: "closed" }],
                                voir: "La lumière pointe en direction du mur. Elle éclaire les posters et articles de journaux qui y sont collés.",
                                utiliser: "Je tire à nouveau sur le fil de la lampe. Elle s'éteint.",
                                aller: "Je suis devant la lampe.",
                                frapper: "Je n'ai pas envie de casser cette source de lumière.",
                                inspecter: "Il n'y a rien de particulier à cette lampe. Son pied est en bois clair, peut-être du bouleau.",
                                attendre: "La lumière allumée, je remarque un article mis en évidence sur le mur par de la peinture verte, comme un marqueur."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "utiliser", state: "open", target: [3] }],
                                voir: "La lampe n'a pas changé depuis mon dernier passage.",
                                utiliser: "Je tire sur le fil de la lampe. Elle s'allume.",
                                aller: "Je suis devant la lampe.",
                                frapper: "Je ne veux pas la casser.",
                                inspecter: "Je ne vois rien de particulier à cette lampe.",
                                attendre: "J'attends un moment dans la pénombre. Je pourrais allumer la lampe pour mieux voir.",
                                accepter: "C'est la lampe que j'ai dans mon appartement à côté de ma bibliothèque. Pourquoi est-elle ici ?."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "closed", target: [3] }],
                                voir: "La lampe n'a pas changé depuis mon dernier passage.",
                                utiliser: "Je tire sur le fil de la lampe. Elle s'éteint.",
                                aller: "Je suis devant la lampe.",
                                frapper: "Je ne veux pas la casser.",
                                inspecter: "Je ne vois rien de particulier à cette lampe.",
                                attendre: "J'attends un moment. Je ne vois rien de particulier sur le mur cette fois.",
                                accepter: "C'est la lampe que j'ai dans mon appartement à côté de ma bibliothèque. Pourquoi est-elle ici ?."
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
                                voir: "L'échelle est couchée au fond de la pièce. Elle est en bois mais paraît tout de même solide.",
                                utiliser: "Je redresse l'échelle pour la poser contre le mur du fond.",
                                aller: "Je suis vers l'échelle. Elle est à ma portée.",
                                frapper: "Je ne vois pas l'intérêt de frapper une échelle...",
                                inspecter: "C'est une échelle en bois tenue par quelques clous sur les côtés. Pas le plus rassurant si je dois grimper.",
                                attendre: "J'attends devant l'échelle. Et si je la mettais contre le mur du fond ?"
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "closed", target: [4] }],
                                voir: "L'échelle est placée contre le mur au fond de la pièce. Elle ne mène nulle part, posée ici.",
                                utiliser: "Je reprends l'échelle et la repose là où je l'ai trouvée.",
                                aller: "Je suis vers l'échelle. Elle est à ma portée.",
                                frapper: "Je ne vois pas l'intérêt de frapper une échelle...",
                                inspecter: "C'est une échelle en bois tenue par quelques clous sur les côtés. Pas le plus rassurant si je dois grimper.",
                                attendre: "Après réflexion je ne pense pas que ce soit un bon endroit pour grimper où que ce soit."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [4] }],
                                voir: "L'échelle n'est pas au bon endroit. Il faut que je la pose là où il y a un trou dans la toiture.",
                                utiliser: "Je prends l'échelle et la déplace jusqu'au trou dans le plafond. Là, je la pose contre le mur, droite.",
                                aller: "Je suis vers l'échelle. Elle est à ma portée.",
                                frapper: "Je ne vois pas l'intérêt de frapper une échelle...",
                                inspecter: "Malgré ses airs peu fiables, il me semble que l'échelle devrait tenir mon poids.",
                                attendre: "J'attends devant l'échelle. Et si je la mettais contre le mur, sous le trou au plafond ?"
                            },
                            final: {
                                interaction: [{ command: "utiliser", state: "open", target: [4] }],
                                win: { command: "aller" },
                                voir: "L'échelle est placée sous le trou qui mène au plafond. Comme ça, je peux accéder au toit.",
                                utiliser: "Je me ravise et plie l'échelle, avant de la remettre où je l'avais prise.",
                                aller: "L'échelle grince à chaque pas, tandis que je gravis les niveaux uns à uns jusqu'à arriver sur le toit.",
                                frapper: "Je ne vois pas l'intérêt de frapper une échelle...",
                                inspecter: "Malgré ses airs peu fiables, il me semble que l'échelle devrait tenir mon poids.",
                                attendre: "Je peux aisément monter sur le toit maintenant que l'échelle est posée ici."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "utiliser", state: "opening", target: [4] }],
                                voir: "L'échelle est couchée au fond de la pièce. Elle est en métal et paraît solide.",
                                utiliser: "Je redresse l'échelle pour la poser contre le mur du fond.",
                                aller: "Je suis vers l'échelle. Elle est à ma portée.",
                                frapper: "L'échelle me permet d'avancer, pourquoi essayer de la casser ?",
                                inspecter: "C'est une échelle, je ne sais pas quoi observer d'autre.",
                                attendre: "Je peux poser l'échelle où je veux. Je devrais réfléchir à où avant.",
                                accepter: "C'est une échelle comme une autre, je ne pense pas qu'elle me soit importante outre mesure."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "closed", target: [4] }],
                                voir: "L'échelle est placée contre le mur au fond de la pièce. Elle ne mène nulle part, posée ici.",
                                utiliser: "Je reprends l'échelle et la repose là où je l'ai trouvée.",
                                aller: "Je suis vers l'échelle. Elle est à ma portée.",
                                frapper: "L'échelle me permet d'avancer, pourquoi essayer de la casser ?",
                                inspecter: "C'est une échelle, je ne sais pas quoi observer d'autre.",
                                attendre: "L'échelle n'est pas placée au bon en droit et m'est inutile. Je devrais la reposer.",
                                accepter: "C'est une échelle comme une autre, je ne pense pas qu'elle me soit importante outre mesure."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [4] }],
                                voir: "L'échelle n'est pas au bon endroit. Il faut que je la pose là où il y a un trou dans la toiture.",
                                utiliser: "Je prends l'échelle et la déplace jusqu'au trou dans le plafond. Là, je la pose contre le mur, droite.",
                                aller: "Je suis vers l'échelle. Elle est à ma portée.",
                                frapper: "L'échelle me permet d'avancer, pourquoi essayer de la casser ?",
                                inspecter: "Cette échelle est un élément-clef pour continuer mon chemin.",
                                attendre: "Je peux poser l'échelle où je veux. Je devrais la mettre sous le trou dans le toit.",
                                accepter: "C'est un outil important pour la suite, finalement, la fin de mon aventure. Je suis content qu'elle m'ait facilité le trajet."
                            },
                            final: {
                                interaction: [{ command: "utiliser", state: "open", target: [4] }],
                                win: { command: "aller" },
                                voir: "L'échelle est placée sous le trou qui mène au plafond. Comme ça, je peux accéder au toit.",
                                utiliser: "Je me ravise et plie l'échelle, avant de la remettre où je l'avais prise.",
                                aller: "Je suis vers l'échelle. Elle est à ma portée.",
                                frapper: "L'échelle me permet d'avancer, pourquoi essayer de la casser ?",
                                inspecter: "Cette échelle est un élément-clef pour continuer mon chemin.",
                                attendre: "Je peux aisément monter sur le toit maintenant que l'échelle est posée ici.",
                                accepter: "C'est un outil important pour la suite, finalement, la fin de mon aventure. Je suis content qu'elle m'ait facilité le trajet."
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
                name: "roof",
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
                                voir: "La lune brille de sa pâle lumière. Elle éclaire les alentours. Je me rends compte qu'il y a que cette maison en vue.",
                                utiliser: "Toucher la lune... J'aurais voulu être un astronaute.",
                                aller: "Impossible, c'est la lune.",
                                frapper: "Elle est peut-être un peu trop loin pour pouvoir le faire...",
                                inspecter: "Les cratères de la lune sont visibles d'ici. La lune a l'air paisible malgré ses marques.",
                                attendre: "J'observe la lune. En la fixant, je me sens plus léger."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "attendre", state: "open", target: [0], condition: true }],
                                voir: "La lune trône au milieu du ciel, sa beauté n'a d'égal que sa taille.",
                                utiliser: "Toucher la lune... Je ne suis malheureusement pas un astronaute.",
                                aller: "Impossible, c'est la lune.",
                                frapper: "Je n'en ressens pas le besoin.",
                                inspecter: "La lune est un astre souvent considéré comme sacré. En la voyant seule dans le ciel, je comprends pourquoi.",
                                attendre: ["En l'observant, je me dis que j'ai probablement encore des choses à faire ici avant de continuer.", "Je sens que la lune m'appelle. Je dois la fixer encore plus longtemps..."],
                                accepter: "La lune est triste. Elle a un air grave. Ses teintes bleutées sont mélancoliques."
                            },
                            open: {
                                win: { command: "attendre" },
                                voir: "La lumière de la lune éclaire les alentours. Il n'y a rien à part cette maison.",
                                utiliser: "Toucher la lune... C'était un de mes rêves étant enfant. Mais j'ai fini par travailler dans la finance.",
                                aller: "Impossible, c'est la lune.",
                                frapper: "Je n'en ressens pas le besoin.",
                                inspecter: "La lune est porteuse d'espoir, une promesse d'un lendemain. Mais cette fois elle ne me semble pas de bonne augure...",
                                attendre: "En la fixant, elle s'empare de mon champ de vision. Je finis par être aveuglé par sa lumière. La torpeur me saisit pleinement.",
                                accepter: "La lune est symbole de changement cyclique. Elle est plein, ce soir. Est-ce que cela veut dire quelque chose ?"
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
                                voir: "C'est un bassin creusé dans la pierre de l'espèce d'autel qui trône sur le toit. Il y a de l'eau claire.",
                                utiliser: "L'eau est froide. Elle ondule gentillement en suivant les mouvements de ma main.",
                                aller: "Je suis devant le bassin.",
                                frapper: "J'écrase ma paume contre l'eau du bassin. Elle m'éclabousse un peu.",
                                inspecter: "Je ne vois rien de spécial dans l'eau du bassin.",
                                attendre: "Qu'est-ce que ce bassin et cet autel font ici ? Sur un toit ? C'est absurde."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [1] }],
                                voir: "Le bassin est rempli d'eau. Je pourrais me laver les mains à l'intérieur.",
                                utiliser: "Je plonge mes mains couvertes de suie dans le bassin. Son eau se trouble et sa couleur se rapproche de l'antracite.",
                                aller: "Je suis devant le bassin.",
                                frapper: "Je ne pense pas que ce soit le moment de m'éclabousser d'eau froide.",
                                inspecter: "L'eau devrait être suffisemment propre pour pouvoir essuyer la suie de mes mains.",
                                attendre: "Je pourrais me laver les mains dans le bassin. Ce n'est pas comme si quelqu'un allait l'utiliser pour autre chose."
                            },
                            open: {
                                newAct: { command: "utiliser" },
                                voir: "L'eau ondule toute seule à présent, comme si elle prenait vie dans le bassin, malgré sa couleur noire.",
                                utiliser: "Je plonge mon visage à l'intérieur du bassin. Me voila plongé dans l'obscurité. J'ai l'impression que le monde autour de moi se meut. J'ouvre les yeux sous l'eau, quand soudain...",
                                aller: "Je suis devant le bassin.",
                                frapper: "Et me salire en m'éclaboussant de suie ? Je ne pense pas.",
                                inspecter: "L'eau est devenue noire de suie. Elle est presque opaque désormais.",
                                attendre: "Les ondes de l'eau sont hypnotisantes. J'aurais presque envie de m'y plonger."
                            }
                        },
                        five: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "accepter", state: "opening", target: [1] }],
                                voir: "Le bassin contient toujours de l'eau. Elle est à nouveau claire, plus une trace de suie de mon dernier passage.",
                                utiliser: "L'eau est froide au toucher. Elle n'a pas l'air différente d'avant.",
                                aller: "Je suis devant le bassin.",
                                frapper: "Je n'ai pas envie de mettre de l'eau partout en la frappant.",
                                inspecter: "Il y a de légères gravures au fond de l'eau. Elles représentent le ciel de nuit, avec la lune.",
                                attendre: "Qu'est-ce que ce bassin et cet autel font ici ? Sur un toit ? C'est absurde.",
                                accepter: "Je me penche vers le bassin. L'air est plus chaud que d'habitude. L'eau m'attire. Ma gorge est sèche."
                            },
                            opening: {
                                collectible: { command: "utiliser", coll: "drankWater" },
                                interaction: [{ command: "utiliser", state: "open", target: [1] }],
                                voir: "L'eau est parfaitement transparente. Elle reflète légèrement la lune.",
                                utiliser: "J'y plonge mes mains en cuillère, et les ramène à moi, pleine d'eau fraîche, que je bois. Ça fait du bien.",
                                aller: "Je suis devant le bassin.",
                                frapper: "Je n'ai pas envie de mettre de l'eau partout en la frappant.",
                                inspecter: "L'eau est claire et a l'air pure. Elle semble fraîche, comme de l'eau de source.",
                                attendre: "Il doit y avoir une raison pour cet autel ici. Jusque-là, les objets ont généralement du sens.",
                                accepter: "Je me penche vers le bassin. Ma gorge est sèche. Tellement sèche..."
                            },
                            open: {
                                voir: "L'eau que j'ai bue est parfaitement transparente. Elle reflète légèrement la lune.",
                                utiliser: "J'ai pu boire une fois déjà. Pas besoin de boire trop non plus.",
                                aller: "Je suis devant le bassin.",
                                frapper: "Je n'ai pas envie de mettre de l'eau partout en la frappant.",
                                inspecter: "L'eau que j'ai bue est claire et a l'air pure. Elle semble fraîche, comme de l'eau de source.",
                                attendre: "Je ne pense pas que je trouverai un sens à ce bassin, ni à cet autel.",
                                accepter: "Je ne sais pas pourquoi ce bassin est ici, mais il m'a apporté de l'eau quand j'avais soif. Ça me suffit."
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
                                voir: "C'est une cierge éteinte. Elle est blanche est longue. Il y a un briquet à côté d'elle.",
                                utiliser: "Je saisis le briquet et le prends avec moi.",
                                aller: "Je suis devant la cierge et le briquet.",
                                frapper: "Je ne vois pas ce que cela m'apporterait...",
                                inspecter: "La cire est blanche-beige, légèrement translucide. On peut voire le fil à travers, si on se concentre.",
                                attendre: "Je réfléchis un moment. Le briquet traîne juste à côté. Je pourrais le prendre."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [2] }, { command: "utiliser", state: "opening", target: [4] }],
                                voir: "C'est une cierge éteinte. Elle est blanche est longue. J'ai le briquet en main, je pourrais l'allumer.",
                                utiliser: "Je prends briquet et l'enclenche. J'allume la cierge et la prends en main. Je peux éclairer des objets avec elle.",
                                aller: "Je suis devant la cierge, le briquet est dans ma poche.",
                                frapper: "Je ne vois pas ce que cela m'apporterait...",
                                inspecter: "La cire est blanche-beige, légèrement translucide. On peut voire le fil à travers, si on se concentre.",
                                attendre: "Je me pose deux minutes pour réfléchir. Si j'allumais la bougie, je pourrais éclairer l'intérieur de la cheminée."
                            },
                            open: {
                                voir: "La cierge brûle d'une flamme virevoltant au gré des courants d'air.",
                                utiliser: "Je me suis déjà saisis de la cierge. Je peux l'utiliser pour éclairer des objets.",
                                aller: "Je suis devant la cierge, le briquet est dans ma poche.",
                                frapper: "Je ne vois pas ce que cela m'apporterait... et je préfère ne pas prendre de risque avec du feu...",
                                inspecter: "La flamme est bleutée en sa base, et devient blanche, puis passe au rouge-orange.",
                                attendre: "Que faire avec cette bougie allumée ? Après réflexion, je pourrais éclairer la cheminée, voir si elle contient quelque chose."
                            },
                            final: {
                                voir: "La cierge brûle d'une flamme virevoltant au gré des courants d'air.",
                                utiliser: "Je me suis déjà saisis de la cierge.",
                                aller: "Je suis devant la cierge, le briquet est dans ma poche.",
                                frapper: "Je ne vois pas ce que cela m'apporterait... et je préfère ne pas prendre de risque avec du feu...",
                                inspecter: "La flamme est bleutée en sa base, et devient blanche, puis passe au rouge-orange.",
                                attendre: "Je m'arrête pour réfléchir. J'ai déjà éclairé la cheminée avec. Je ne pense pas que la cierge me soit utile outre-mesure."
                            }
                        },
                        five: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "utiliser", state: "opening", target: [2] }],
                                voir: "La cierge est éteinte, et neuve, comme si je ne l'avais pas allumée à mon passage précédent.",
                                utiliser: "Je saisis le briquet et le prends avec moi.",
                                aller: "Je suis devant la cierge et le briquet.",
                                frapper: "Je ne pense pas que ça me soit utile.",
                                inspecter: "La cire est légèrement translucide. Une croix chrétienne est gravée à la base de la cierge.",
                                attendre: "Je réfléchis un moment. Le briquet traîne juste à côté. Je pourrais le prendre.",
                                accepter: "C'est une cierge, qu'on trouverait typiquement dans une église, pour faire un vœux ou une prière."
                            },
                            opening: {
                                interaction: [{ command: "utiliser", state: "open", target: [2] }],
                                collectible: { command: "utiliser", coll: "litCandle" },
                                voir: "La cierge est éteinte, et neuve, comme si je ne l'avais pas allumée à mon passage précédent.",
                                utiliser: "Je me saisis du briquet, et d'un coup sec du pouce, une flamme en jaillit. J'allume la cierge.",
                                aller: "Je suis devant la cierge, le briquet est dans ma poche.",
                                frapper: "Je ne pense pas que ça me soit utile.",
                                inspecter: "La cire est légèrement translucide. Une croix chrétienne est gravée à la base de la cierge.",
                                attendre: "En réfléchissant, je me demande : est-ce que ça vaut la peine d'allumer la cierge encore une fois ?",
                                accepter: "Un objet de prière... que fait-il ici ? Je suis baptisé, mais pas croyant pour autant. Si ce lieu est lié à moi, je ne sais pas ce que ça fait là."
                            },
                            open: {
                                voir: "La cierge brûle d'une flamme virevoltant au gré des courants d'air",
                                utiliser: "Je ne pense pas que j'aies besoin d'éclairer quoi que ce soit cette fois.",
                                aller: "Je suis devant la cierge, le briquet est dans ma poche.",
                                frapper: "Je ne pense pas que ça me soit utile. Et puis, je n'aimerais pas prendre de risque avec du feu.",
                                inspecter: "Sur la croix chrétienne gravée à la base de la cierge, une lettre : ",
                                attendre: "J'attends devant la cierge allumée, sa flamme consumme 1cm de cire. Je ne vais pas attendre jusqu'à ce qu'elle soit consummée.",
                                accepter: "Une cierge allumée sur un autel, éclairée par la lumière de la lune... quelle image funeste."
                            },
                        }
                    }, {    // figurine
                        name: "figurine",
                        determinant: "la ",
                        isLocated: false,
                        four: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "frapper", state: "open", target: [3] }],
                                voir: "C'est une figurine en forme de voiture de couleur verte. Un vert bouteille quelque peu daté.",
                                utiliser: "La voiture fait quelques 20 centimètres, et pèse probablement 1kg. La figurine est assez lourde.",
                                aller: "Je suis devant la figurine. Elle est à ma portée.",
                                frapper: "Et si je...? Je me saisis de la voiture et la frappe contre l'autel. Elle est à présent toute cabossée.",
                                inspecter: "C'est une Renault Clio des années 1990. Elle ressemble à la voiture que j'avais quand j'ai commencé à conduire.",
                                attendre: "C'est une figurine de voiture... je ne vois pas ce qu'il y a à faire avec elle."
                            },
                            open: {
                                voir: "La voiture est cassée comme si un véhicule lui était rentré dans le côté. Elle est pliée sur la longueur.",
                                utiliser: "Je prends la voiture cabossée en main. Elle semble nettement plus fragile, malgré son poids.",
                                aller: "Je suis devant la figurine. Elle est à ma portée.",
                                frapper: "Elle est déjà cassée... je ne vois pas l'intérêt de la détruire plus que ça.",
                                inspecter: "La portière passager est enfoncée à cause du choc, et le pare-brise est en miettes. Ça fait froid dans le dos.",
                                attendre: "J'ai déjà cassé cette figurine... je ne vois pas ce qu'il y a à faire avec elle."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "frapper", state: "open", target: [3], condition: 3 }],
                                voir: "La figurine est un modèle plus moderne, une Toyota Yaris grise.",
                                utiliser: "La figurine fait entre 15-20 centimètres, et pèse probablement 1-1,5kg. Elle est étonnament lourde.",
                                aller: "Je suis devant la figurine. Elle est à ma portée.",
                                frapper: [
                                    "Je prends la figurine et la frappe capot en premier contre l'autel. Le pare-choc s'arrache, le capot se tord. Je suis tenté de le refaire.",
                                    "Je lance la voiture contre l'autel une nouvelle fois. Son pare-brise vole en éclat. Je suis poussé de la casser encore plus. Une colère me prend.",
                                    "Je ramasse la carcasse qu'est la figurine, et je l'écrase contre le sol. Une des roues avant se déboîte, tandis que la plaque avant se décroche. Encore."
                                ],
                                inspecter: "C'est le modèle de voiture que je conduis aujourd'hui. La figurine a la même couleur que ma voiture. C'est un peu perturbant.",
                                attendre: "En voulant attendre et réfléchir, une envie me prend de saisir cette voiture et de la réduire en miettes.",
                                accepter: "C'est la même voiture que je conduis habituellement. Je l'ai achetée il y a quelques années d'occasion, c'est un bon modèle."
                            },
                            open: {
                                interaction: [{ command: "frapper", state: "final", target: [3] }],
                                collectible: { command: "frapper", coll: "brokenCar" },
                                voir: "La voiture est dans un sale état. Mais je peux encore lui donner le coup de grâce.",
                                utiliser: "Je prends la voiture cassée en main. Des miettes s'en détachent quand je la soulève. Ma colère est toujours là. Je veux la jeter une dernière fois.",
                                aller: "Je suis devant la figurine. Elle est à ma portée.",
                                frapper: "Je m'en saisis une dernière fois et la lance de toutes mes forces. Elle s'écrase à mes pieds avec violence. Elle n'est plus qu'une ruine.",
                                inspecter: "Tout l'avant de la voiture est enfoncé vers l'arrière. S'il y avait un pilote, il n'aurait pratiquement aucune chance de survie.",
                                attendre: "Je n'arrive pas à penser à autre chose qu'à donner le coup de grâce à cette figurine. La détruire.",
                                accepter: "Pourquoi suis-je poussé à la détruire peu à peu ? Une colère bouillonne en moi."
                            },
                            final: {
                                voir: "La voiture est une ruine. Il n'y a plus rien à détruire. Elle n'est plus. On dirait qu'elle a été écrasée par un camion.",
                                utiliser: "Je prends la carcasse en main. Des miettes s'en détachent quand je la soulève.",
                                aller: "Je suis devant la figurine. Elle est à ma portée.",
                                frapper: "Je ne suis plus en colère.",
                                inspecter: "La figurine n'est plus celle d'une voiture, mais d'un amas difforme de carrosserie avec deux roues à l'arrière...",
                                attendre: "Je... je ne sais pas quoi en penser, même en prenant le temps d'attendre et de réfléchir.",
                                accepter: "Pourquoi ce sentiment de profond malaise après ma colère noire ? J'ai comme un mauvais présentiment maintenant."
                            }
                        }
                    }, {    // cheminée
                        name: "cheminee",
                        determinant: "la ",
                        isLocated: false,
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                voir: "C'est une cheminée en brique rouge. Il n'y a rien de spécial.",
                                utiliser: "Je touche l'extérieur de la cheminée. Les briques sont rugueuses sous mes doigts.",
                                aller: "Je suis devant la cheminée.",
                                frapper: "... je ne pense pas que ça soit utile de faire ça.",
                                inspecter: "Il fait trop sombre pour voir quoi que ce soit à part sa surface.",
                                attendre: "Je réfléchis 5 minutes. Il me faudrait une source de lumière pour pouvoir mieux l'observer."
                            },
                            opening: {
                                interaction: [{ command: "attendre", state: "open", target: [4] }],
                                voir: "En pointant la bougie allumée vers l'intérieur de la cheminée, je remarque qu'il y a énormément de suie.",
                                utiliser: "Je ne vois pas pourquoi je me salirais les mains à toucher de la suie.",
                                aller: "Je suis devant la cheminée.",
                                frapper: "... je ne pense pas que ça soit utile de faire ça.",
                                inspecter: "Plus bas dans la cheminée, je remarque que la suie bouche le conduit. Elle n'a pas dû être nettoyée depuis des lustres.",
                                attendre: "Comme un appel du vide, je suis pris de l'envie d'imprégner mes doigts de la suie."
                            },
                            open: {
                                interaction: [{ command: "utiliser", state: "final", target: [2, 4] }, { command: "utiliser", state: "opening", target: [1] }],
                                voir: "Avec la bougie allumée à l'intérieur de la cheminée, je vois la suie, épaisse et grasse, qui recouvre ses murs.",
                                utiliser: "Une à une, je frotte mes mains contre les parois grasses de la cheminée, les recouvrant d'une couche épaisse de suie.",
                                aller: "Je suis devant la cheminée.",
                                frapper: "... je ne pense pas que ça soit utile de faire ça.",
                                inspecter: "La suie est antracite, et de la poussière s'y est collée. Elle semble inflammable, je ferais mieux de faire attention avec la bougie.",
                                attendre: "Je suis pris de l'envie de frotter mes mains dans la cheminée pour m'imprégner de la suie."
                            },
                            final: {
                                voir: "La cheminée n'est particulièrement notable en-dehors de son intérieur très sale.",
                                utiliser: "Je me suis enduit les mains de suie déjà une fois, je ne pense pas que ça me serve d'en rajouter une couche.",
                                aller: "Je suis devant la cheminée.",
                                frapper: "... je ne pense pas que ça soit utile de faire ça.",
                                inspecter: "Il n'y a rien de plus à observer. C'est une cheminée sale. Fin de l'histoire.",
                                attendre: "Je ne pense pas que cette cheminée m'apportera quoi que ce soit."
                            }
                        },
                        five: {
                            isOpened: true,
                            open: {
                                voir: "C'est la même cheminée que la dernière fois, quoi que légèrement plus propre d'apparence, et peinte en gris.",
                                utiliser: "Les briques rouges sont recouvertes d'une fine couche de béton, ou peut-être de peinture grise.",
                                aller: "Je suis devant la cheminée.",
                                frapper: "... je ne pense pas que ça soit utile de faire ça.",
                                inspecter: "C'est une cheminée. Elle ne semble rien avoir de spécial, et je n'ai pas envie de me salir une nouvelle fois les mains",
                                attendre: "Je ne pense pas que cette cheminée m'apportera quoi que ce soit.",
                                accepter: "Je ne vois pas ce que cette cheminée a de spécial."
                            }
                        }
                    }, {    // leave
                        name: "leave",
                        four: { text: "Je descends l'échelle et reviens dans la chambre. Est-ce que j'ai oublié quelque chose en bas ?" },
                        five: { text: "En me retournant, le trou dans le toit par lequel je suis monté est fermé, et l'échelle n'est plus là. Pourquoi donc ? Je suis coincé là-haut." }
                    }
                ]
            }, {    // JARDIN/CIEL/ETHERAL REALM
                name: "garden",
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
                                voir: "C'est un jardin paisible. Le sol est recouvert d'herbe et de paquerettes. Quelques jonquilles sont éparpillées çà et là.",
                                utiliser: "Je touche le sol du jardin. Il est légèrement humide, comme si la rosée du matin était encore présente.",
                                aller: "Je suis déjà dans le jardin.",
                                frapper: "Je n'ai rien à frapper ou casser ici. La nature, au contraire, m'appaise.",
                                inspecter: "Au fond, un très grand saule pleureur domine le reste du jardin. Ses branches se balancent lentement au gré de la brise.",
                                attendre: "Je prends le temps de respirer. Le jardin est magnifique. Je me sens bien quand je suis à l'intérieur.",
                                accepter: "Ce jardin me rappelle celui de mes parents, en campagne. Il y avait un cours d'eau pas loin au Sud."
                            },
                            open: {
                                collectible: { command: "accepter", coll: "acceptedGarden" },
                                voir: "Après avoir lu la lettre, le jardin semble rappetisser petit à petit. Il se referme sur moi.",
                                utiliser: "Je caresse le saule pleureur. Son écorce rugueuse me calme, après le choc de la lettre.",
                                aller: "Je suis déjà dans le jardin.",
                                frapper: "Je ne cherche pas à casser quoi que ce soit.",
                                inspecter: "Le saule pleureur est très vieux. Ses branches touchent presque le sol. Il est majestueux, et trône sur le reste du jardin.",
                                attendre: "Je prends quelques minutes posé contre le gigantesque arbre. Il me calme.",
                                accepter: "Le jardin autour de moi disparaît peu à peu. Il devient de plus en plus étriqué. Cela doit être ma conscience qui s'envole. Ma fin est-elle proche ?"
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
                                voir: "C'est une lettre pliée, estampillée à la cire rouge d'un écusson.",
                                utiliser: "J'ouvre délicatement la lettre en déchirant la cire.",
                                aller: "Je suis devant la lettre.",
                                frapper: "Je ne vois pas l'intérêt. Je ne veux pas chiffoner ou déchirer la lettre.",
                                inspecter: "L'écusson est divisé en quatre avec un animal en son centre brandissant une marteau.",
                                attendre: "En prenant quelques instants pour réfléchir, je me demande ce que la lettre contient.",
                                accepter: "C'est l'écusson de ma famille, il représente un ours avec un marteau car mes ancêtres étaient des forgerons."
                            },
                            opening: {
                                interaction: [{ command: "voir", state: "open", target: [0, 1] }],
                                triggerEvent: { command: "voir", name: "readingLetter" },
                                collectible: { command: "voir", coll: "readLetter" },
                                voir: [
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
                                utiliser: "J'ai déjà ouvert la lettre. En la prenant en main, elle est légère.",
                                aller: "Je suis devant la lettre.",
                                frapper: "Je ne vois pas l'intérêt. Je ne veux pas chiffoner ou déchirer la lettre.",
                                inspecter: "L'écriture est la mienne. La lettre est également signé par moi.",
                                attendre: "Je prends quelques minutes devant la lettre, ouverte. Elle m'invite à la lire.",
                                accepter: "C'est une lettre que j'ai apparemment écrite. Comment et quand, je ne sais pas."
                            },
                            open: {
                                interaction: [{ command: "attendre", state: "final", target: [1] }],
                                voir: "La lettre est par-terre. Je l'ai lâchée après l'avoir lue. J'ai pris peur de ce qu'elle contenait.",
                                utiliser: "Je n'ose pas la toucher après ce qu'elle m'annonce. Ma respiration est haletante.",
                                aller: "La lettre est à mes pieds.",
                                frapper: "Je ne vois pas l'intérêt. Je ne suis pas en colère, je suis sous le choc.",
                                inspecter: "La lettre gît au milieu de l'herbe et des paquerettes. Elle semble si... paisible, au milieu du jardin.",
                                attendre: "Je reprends mon souffle. Je suis mourrant, mais je suis encore en vie en ce moment. Je n'ai pas d'autre choix que d'accepter mon destin.",
                                accepter: "Je serais... mort ? Ou en tout cas mourrant ? Mais pourquoi... et comment ? Une larme coule le long de ma joue droite."
                            },
                            final: {
                                collectible: { command: "accepter", coll: "acceptedLetter" },
                                voir: "La lettre est toujours au sol. Je regarde mes deux mains. Deviennent-elles... transparente ?",
                                utiliser: "J'essuie mes larmes, face à cette lettre qui m'a tant chamboulé.",
                                aller: "Je suis devant la lettre.",
                                frapper: "Je ne vois pas l'intérêt. Je ne veux pas chiffoner ou déchirer la lettre.",
                                inspecter: "Je ressens mon corps devenir plus léger. Je n'en n'ai plus pour longtemps. Le bout de mes doigts est légèrement translucide.",
                                attendre: "J'attends quelques minutes, reprends mon souffle. Une fatigue me parcourt.",
                                accepter: "Ça doit être mon inconscient qui me parle dans cette lettre. Je vais mourir. C'est absurde, et pourtant une quiétude me prends peu à peu."
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
                                voir: [
                                    "L'écran est allumé, et montre des images à un rythme effreiné. En me concentrant, j'arrive à en voir quelques-unes.",
                                    "Je me vois enfant, assis à l'école, levant la main pour répondre à une question. Le professeur se retourne au moment où je cligne des yeux, et le moment est déjà passé.",
                                    "Je me vois vers 13 ans. Mon premier amour, la personne qui m'a marqué quand j'étais en fin de scolarité. L'image change presque immédiatement.",
                                    "Je me vois à l'anniversaire de mes 18 ans. La vie d'adulte, enfin ! Je distingue à peine les visages de mes amies et mes amis. L'écran passe à autre chose.",
                                    "Je me vois au travail. Ça devait être mon premier jour, j'avais mis de beaux vêtement par excès de zèle. L'image zappe encore une fois"
                                ],
                                utiliser: ".Il n'y a pas de bouton pour l'éteindre ou changer la source des images. Il n'y a rien qui m'indique d'où elles viennent non plus.",
                                aller: "Je fais face à l'écran de télévision.",
                                frapper: "Je n'ai pas envie de casser l'écran.",
                                inspecter: "L'écran n'a pas de marque. Il n'a pas un design particulier qui pourrait m'indiquer ses origines.",
                                attendre: "J'attends devant l'écran, alors que des images flashent à toutes vitesses. Des moments d'une vie. De la mienne.",
                                accepter: "L'écran montre mes souvenirs, la vie que j'ai vécue. Il commence depuis le tout début, et passe tout en revue."
                            },
                            opening: {
                                interaction: [{ command: "voir", state: "open", target: [2] }],
                                collectible: { command: "voir", coll: "lookedScreen" },
                                voir: "Je me vois au volant d'une voiture, sur l'autoroute. Il pleut, la route est mouillée. Un virage. Un aquaplanning. Et l'écran s'éteint.",
                                utiliser: "Il n'y a pas de bouton pour l'éteindre ou changer la source des images. Il n'y a rien qui m'indique d'où elles viennent non plus..",
                                aller: "Je fais face à l'écran de télévision.",
                                frapper: "Je n'ai pas envie de casser l'écran.",
                                inspecter: "L'écran n'a pas de marque. Il n'a pas un design particulier qui pourrait m'indiquer ses origines.",
                                attendre: "J'attends devant l'écran, alors que des images flashent à toutes vitesses. Des moments d'une vie. De la mienne.",
                                accepter: "L'écran montre mes souvenirs, la vie que j'ai vécue. Il commence depuis le tout début, et passe tout en revue."
                            },
                            open: {
                                interaction: [{ command: "attendre", state: "final", target: [2], condition: true }],
                                voir: "L'écran est éteint. Il n'affiche plus aucune image.",
                                utiliser: "Je touche l'écran. Tape une petit coup dessus, comme si ça allait faire revenir l'image... Rien.",
                                aller: "Je fais face à l'écran de télévision.",
                                frapper: "Je n'ai pas envie de casser l'écran.",
                                inspecter: "Je n'arrive pas à déterminer pourquoi il s'est éteint, ni comment le rallumer.",
                                attendre: [
                                    "J'attends devant l'écran éteint. Rien ne se passe. J'ai le sentiment d'avoir manqué quelque chose dans le jardin, ou dans la lettre.",
                                    "J'attends 15, 30, 60 minutes. L'écran se rallume soudain, et me montre, moi, comme un miroir, entrain de le regarder. Puis mon reflet disparaît peu à peu."
                                ],
                                accepter: "L'écran montrait mes souvenirs, la vie que j'ai vécue. Il s'est arrêté. Comme si ma vie, une fois passées devant mes yeux, s'arrêtait."
                            },
                            final: {
                                triggerEvent: { command: "accepter", name: "endGame" },
                                voir: "En regardant mes mains, elles disparaissent toujours plus vite. Au rythme de mon reflet dans l'écran.",
                                utiliser: "J'essaie de m'appuyer contre l'écran, l'arrêter, mais mes mains passent à travers.",
                                aller: "Je fais face à l'écran de télévision.",
                                frapper: "Même si je le voulais, je ne peux plus casser l'écran. Mon corps le traverse.",
                                inspecter: "Mes mains s'effritent et partent en un million de petites particules. Je me défais comme un gaz.",
                                attendre: "Plus j'attends, plus je disparais.",
                                accepter: [
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
    },
    ENG: {
        scenes: [
            {       // ACTS
                name: "acts",
                texts: [
                    {
                        id: 0,
                        text: [
                            ["Prologue", true],
                            ["In the winding streets.", false]
                        ]
                    },
                    {
                        id: 1,
                        text: [
                            ["Act 1", true],
                            ["The house in the street.", false]
                        ]
                    },
                    {
                        id: 2,
                        text: [
                            ["Act 2", true],
                            ["Dramatic entrance.", false]
                        ]
                    },
                    {
                        id: 3,
                        text: [
                            ["Act 3", true],
                            ["The ascent.", false]
                        ]
                    },
                    {
                        id: 4,
                        text: [
                            ["Act 4", true],
                            ["Under the moonlight.", false]
                        ]
                    },
                    {
                        id: 5,
                        text: [
                            ["Act 5", true],
                            ["Beyond that house.", false]
                        ]
                    },
                    {
                        id: 6,
                        text: [
                            ["Epilogue", true],
                            ["The horizon.", false]
                        ]
                    }
                ]
            }, {    // NAME
                name: "name",
                title: "What is your first name?",
                text1: "Please enter a first name.",
                text2: "Using your real first name works best for the game.",
                text3: "enter your name here"
            }, {    // GATE
                name: "entrance",
                texts: [
                    {
                        text: "My eyes open to a street. I don't know where I am. I don't recognize these houses.",
                        act: "shock",
                        active: false
                    }, {
                        text: "I wasn't here a second ago. I was somewhere else. But where? Where on earth...?",
                        act: "shock",
                        active: false
                    }, {
                        text: "I don't know anymore. Even if I try, I can't remember.",
                        act: "shock",
                        active: false
                    }, {
                        text: "My steps quicken as I pass by buildings, all uniform. The same, over and over again. And again.",
                        act: "shock",
                        active: false
                    }, {
                        text: "My breathing is erratic. Am I going insane? This can't be, I have to go back.",
                        act: "shock",
                        active: false
                    }, {
                        text: "But the",
                        act: "shock",
                        active: false
                    }, {
                        text: "road",
                        act: "shock",
                        active: true
                    }, {
                        text: "only allows me to move forward; behind me, a fog. A darkness. Nothingness. Landscapes, vanished, like my memories...",
                        act: "shock",
                        active: false
                    }, {
                        text: "Here I am again in front of that house...",
                        act: "angry",
                        active: false
                    }, {
                        text: "I've been lost in the streets for a while. A house intrigued me, and I stopped there. I stand in front of its garden. I am facing a",
                        act: "regular",
                        active: false
                    }, {
                        text: "gate.",
                        act: "regular",
                        active: true
                    }, {
                        text: "To my right, a",
                        act: "bargain",
                        active: false
                    }, {
                        text: "mailbox",
                        act: "bargain",
                        active: true
                    }, {
                        text: "weathered by time.",
                        act: "bargain",
                        active: false
                    }, {
                        text: "The",
                        act: "sad",
                        active: false
                    }, {
                        text: "moon",
                        act: "sad",
                        active: true
                    }, {
                        text: "shines with a gentle glow, revealing a",
                        act: "sad",
                        active: false
                    }, {
                        text: "bush",
                        act: "sad",
                        active: true
                    }, {
                        text: "on the left of the gate.",
                        act: "sad",
                        active: false
                    }, {
                        text: "From there, a",
                        act: "regular",
                        active: false
                    }, {
                        text: "path",
                        act: "regular",
                        active: true
                    }, {
                        text: "leads to the front",
                        act: "regular",
                        active: false
                    }, {
                        text: "door",
                        act: "regular",
                        active: true
                    }, {
                        text: ", under a porch. It's the",
                        act: "accept",
                        active: false
                    }, {
                        text: "house",
                        act: "accept",
                        active: true
                    }, {
                        text: "I grew up in.",
                        act: "accept",
                        active: false
                    }, {
                        text: `I am no longer alone. Even speaking in the first person is deceptive. My particles float with the rest of the world.`,
                        act: "end",
                        active: false
                    }, {
                        text: "Time collapses, and no longer flows as it did before. Has 10 seconds passed? Or could it be 10 years, or 10 centuries ?",
                        act: "end",
                        active: false
                    }, {
                        text: "Nothing is less certain. That",
                        act: "end",
                        active: false
                    }, {
                        text: "house,",
                        act: "end",
                        active: true
                    }, {
                        text: "the one I revisited, allowed me to understand what awaited me beyond what we call life.",
                        act: "end",
                        active: false
                    }, {
                        text: "The horizon is vast, so vast it's invisible. The universe is everywhere, just like my electrons and my atoms.",
                        act: "end",
                        active: false
                    }
                ],
                items: [
                    {       // gate
                        name: "gate",
                        determinant: "the ",
                        isLocated: true,
                        one: {
                            isOpened: true,
                            open: {
                                look: "The gate is slightly open. I can easily take the path.",
                                use: "The paint is crumbling under my fingers. The wood underneath is slightly damp.",
                                go: "I'm already in front of the gate."
                            }
                        },
                        two: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "hit", state: "open", target: [0, 1, 2] }],
                                look: "The gate is different. It is now made of metal. It is also locked, and the access to the garden is barred from me.",
                                use: "The metal gate is cold under my fingers. The lock is rusted and crumbling in places.",
                                go: "I'm already in front of the gate.",
                                hit: "I kick the gate. I hear a dull noise, and the handle is broken."
                            },
                            open: {
                                look: "The gate is now slightly open. I can easily take the path.",
                                use: "The lock is split into two sharp pieces. I wouldn't dare touch it for fear of cutting myself.",
                                go: "I'm already in front of the gate.",
                                hit: "The gate is broken and open. No need to hit it again."
                            }
                        },
                        three: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "The gate is once again different. It is made of metal, but is in much better condition. It is locked again.",
                                use: "The metal is cold under my fingers. It is slightly wet and seems solid.",
                                go: "I'm already in front of the gate.",
                                hit: "I kick the gate. Nothing seems to happen.",
                                inspect: "There is a name on the gate, but it is illegible except for two letters: "
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [0, 1, 2] }],
                                look: "I have the key now, I can open the gate.",
                                use: "I open the gate with the key from the mailbox.",
                                go: "I'm already in front of the gate.",
                                hit: "Hitting it won't help; I have the key, I can use it.",
                                inspect: "The lock corresponds to the key I retrieved."
                            },
                            open: {
                                look: "The gate is now open. I can easily take the path.",
                                use: "The handle feels familiar once in my hand. I wonder why.",
                                go: "I'm already in front of the gate.",
                                hit: "The gate is already open, I don't see why I would hit it.",
                                inspect: "I have a sense of déjà vu about this 'version' of the gate."
                            }
                        },
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "This time, the gate is the same as my last passage. It is made of metal, in good condition, and locked.",
                                use: "The metal is cold under my fingers. This time, a thin layer of rough white paint covers it.",
                                go: "I'm already in front of the gate.",
                                hit: "I kick the gate. My right foot starts to hurt.",
                                inspect: "The name hasn't changed. It is still illegible except for two letters: ",
                                wait: "Waiting in front of the gate makes me uncomfortable. It's cold outside.",
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [1, 2] }],
                                look: "Now I have the key, I can open the gate.",
                                use: "I open the gate with the key I retrieved from the bush.",
                                go: "I'm already in front of the gate.",
                                hit: "Hitting it won't help; I have the key, I can use it.",
                                inspect: "The lock corresponds to the key I retrieved from the bush.",
                                wait: "What's the point of waiting? I have the key in hand.",
                            },
                            open: {
                                look: "The gate is now open. I can easily take the path.",
                                use: "I gently push the gate, and its spring brings it back to me. It's still open.",
                                go: "I'm already in front of the gate.",
                                hit: "The gate is already open, and my foot hurts, I won't hit it.",
                                inspect: "Despite my efforts, I can't recognize the name written on the gate.",
                                wait: "It's too cold to wait, I need to move.",
                            },
                        },
                        five: {
                            isOpened: true,
                            open: {
                                look: "It's a white-painted metal gate. It doesn't require a key to enter.",
                                use: "If the metal is cold under my fingers once again, the sensation is less unpleasant than before.",
                                go: "I'm already in front of the gate.",
                                hit: "I don't feel like hitting the gate.",
                                inspect: "The name on the gate is my last name. It is readable this time.",
                                wait: "The air is gentler this time. A familiar scent reaches me from the garden.",
                                accept: "It's the gate to my parents' house. I recognize it now.",
                            },
                        }
                    }, {    // path
                        name: "path",
                        determinant: "the ",
                        isLocated: true,
                        one: {
                            isOpened: true,
                            open: {
                                win: { command: "go" },
                                look: "It's a short, poorly maintained dirt path through a garden that leads to a porch.",
                                use: "I bend down and touch the ground. The soil is damp and cold.",
                                go: "I take the path toward the porch.",
                            },
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                look: "The path seems longer this time. It zigzags a bit.",
                                use: "The path is behind the locked gate; I can't touch it at the moment.",
                                go: "I need to open the gate first.",
                                hit: "I need to open the gate first to reach the path.",
                            },
                            open: {
                                win: { command: "go" },
                                look: "The path seems longer this time. It zigzags a bit.",
                                use: "The ground is less soil and more gravel. It's harder and rougher under my palm.",
                                go: "I take the path toward the porch.",
                                hit: "I strike the path with my heel. Nothing happens. My anger doesn't dissipate either.",
                            },
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                look: "The path extends through a vast garden with dormant nature.",
                                use: "The path is behind the locked gate; I can't touch it at the moment.",
                                go: "I need to open the gate first.",
                                hit: "I need to open the gate first to reach the path.",
                                inspect: "I can't get closer to the path at the moment. The gate is closed.",
                            },
                            open: {
                                win: { command: "go" },
                                look: "The path extends through a vast garden with dormant nature.",
                                use: "The gravel ground is reassuring under my feet. It's firm and solid.",
                                go: "I take the path toward the porch.",
                                hit: "I strike the path with my heel. Nothing happens. It's pointless.",
                                inspect: "The path consists of a thin layer of gray and beige gravel.",
                            },
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                look: "The path is duller this time. It seems more... clean, more taken care of.",
                                use: "I need to open the gate before I can do that.",
                                go: "I have to open the gate first.",
                                hit: "I need to open the gate first.",
                                inspect: "I can't do that at the moment. The gate is closed.",
                                wait: "Waiting won't allow me to reach the path. The air is cool, I'd like to go inside.",
                            },
                            open: {
                                win: { command: "go" },
                                look: "The path is duller this time. It seems more... clean, more taken care of.",
                                use: "The gravel is mixed with cement; I can no longer pick it up with my hand.",
                                go: "I take the path toward the porch.",
                                hit: "I don't see the point in hitting the path; it won't lead me anywhere.",
                                inspect: "There are small weeds growing here and there in the cracks of the concrete.",
                                wait: "A cold wind brushes against my neck. I don't like staying outside.",
                            },
                        },
                        five: {
                            isOpened: true,
                            open: {
                                look: "The path is clear, clean, and well-defined. It meanders through the garden to the house.",
                                use: "The path is firm, and the concrete it's made of is soft and soothing.",
                                go: "I will take this path one last time...",
                                hit: "I don't feel like hitting the path.",
                                inspect: "I remember every hollow, every crevice, every weed that runs along the path.",
                                wait: "I'm tired. I want to go home, rest, finally.",
                                accept: "I'm returning home. I'm going back to where I lived, where I... existed."
                            }
                        }
                    }, {    // door
                        name: "door",
                        isLocated: true,
                        determinant: "the ",
                        one: {
                            isOpened: true,
                            open: {
                                win: { command: "go" },
                                look: "It's a wooden door. I'm too far to see it clearly.",
                                use: "I need to get closer to do that.",
                                go: "I'm heading towards the door, towards that house..."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                look: "The door now has a small window in its center, on its upper half.",
                                use: "I can't try to open it without getting closer.",
                                go: "The gate is closed, the house is currently inaccessible to me...",
                                hit: "I would like to, but I'm too far, and the gate prevents me from moving forward.",
                            },
                            open: {
                                win: { command: "go" },
                                look: "The door now has a small window in its center, on its upper half.",
                                use: "I can't even try to open it without getting closer.",
                                go: "I'm heading towards the door, under the porch.",
                                hit: "I would like to, but I'm too far. I should get closer."
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                look: "The door seems to have a thin layer of paint.",
                                use: "I can't do anything without getting closer.",
                                go: "The gate is closed, I can't go there...",
                                hit: "What's the point? The gate is closed anyway.",
                                inspect: "I should get closer to inspect anything.",
                            },
                            open: {
                                win: { command: "go" },
                                look: "The door seems to have a thin layer of paint.",
                                use: "I can't do anything without getting closer.",
                                go: "I'm heading towards the porch to reach the door.",
                                hit: "I can do it if I get closer. It worked last time.",
                                inspect: "I should get closer to inspect anything."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                look: "The door looks more distinct, but it's too far to see the details.",
                                use: "I have to get closer, I know it...",
                                go: "I can't go there before opening the gate.",
                                hit: "I don't see the point. Besides, it's too far.",
                                inspect: "I should get closer.",
                                wait: "Waiting won't make it open or open the gate.",
                            },
                            open: {
                                win: { command: "go" },
                                look: "The door looks more distinct, but it's too far to see the details.",
                                use: "I have to get closer, I know it...",
                                go: "I'm heading towards the door, through the path.",
                                hit: "I'm too far. And it didn't work last time.",
                                inspect: "I should get closer.",
                                wait: "The door seems to invite me with this cold. It's better if I go inside.",
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                look: "The door looks welcoming from here.",
                                use: "I will open it one last time, but not right now.",
                                go: "I feel like I'm forgetting something.",
                                hit: "I can't hit it from here.",
                                inspect: "I will be able to admire it up close.",
                                wait: "The air is drier and warmer than before. A gentle breeze brushes my cheeks.",
                                accept: "It's the door to my parents' house. Nostalgia overwhelms me.",
                            },
                            open: {
                                win: { command: "go" },
                                look: "The door welcomes me.",
                                use: "I should get closer to open it.",
                                go: "I'm heading towards the door of my house one last time.",
                                hit: "I don't want to hit it anymore.",
                                inspect: "I will be able to inspect it up close once I get closer.",
                                wait: "I take a deep breath, savoring this moment in front of my house.",
                                accept: "This will be the last time I open it...",
                            }
                        }

                    }, {    // mailbox
                        name: "mailbox",
                        isLocated: true,
                        determinant: "the ",
                        three: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "hit", state: "open", target: [3] }],
                                look: "The mailbox is all dented and barely standing.",
                                use: "The mailbox is closed, and a fold in the metal keeps it in this position.",
                                go: "The mailbox is already in front of me.",
                                hit: "I hit the mailbox. It unlocks due to the impact.",
                                inspect: "There's nothing special to see on this mailbox, the name plate is no longer there.",
                            },
                            open: {
                                interaction: [{ command: "inspect", state: "opening", target: [0] }],
                                look: "Following my punch, the mailbox is even more deformed.",
                                use: "I can open the mailbox door, but it no longer closes.",
                                go: "The mailbox is already in front of me.",
                                hit: "I've already broken it, I won't hit it again.",
                                inspect: "Inside is a small round key. It says 'gate' on it. I take it.",
                            },
                        },
                        four: {
                            isOpened: true,
                            open: {
                                look: "The mailbox is repaired. It's no longer dented like before.",
                                use: "As I touch it, the metal feels cold and smooth. It seems sturdy.",
                                go: "The mailbox is already in front of me.",
                                hit: "It's already open, no need to break it this time.",
                                inspect: "No keys inside. I'll have to look elsewhere.",
                                wait: "I don't see what I should wait for... it's an empty mailbox.",
                            },
                        },
                        five: {
                            isOpened: true,
                            open: {
                                look: "The mailbox is familiar to me. It's made of polished matte metal.",
                                use: "As I touch it, memories come back to me. I know this mailbox.",
                                go: "The mailbox is already in front of me.",
                                hit: "I don't feel like hitting the mailbox anymore.",
                                inspect: "The mailbox is empty, and the nameplate is still missing.",
                                wait: "The moon reflects hypnotically on the metal of the mailbox.",
                                accept: "Even without my name, I recognize it as the mailbox of my apartment.",
                            },
                        },
                    }, {    // moon
                        name: "moon",
                        determinant: "the ",
                        isLocated: true,
                        four: {
                            isOpened: true,
                            open: {
                                interaction: [{ command: "wait", state: "opening", target: [5] }],
                                look: "The moon shines in the sky with a pale glow. It's almost full.",
                                use: "I can't touch the moon. Even if I'd like to.",
                                go: "Impossible, it's the moon...",
                                hit: "That's... going to be complicated.",
                                inspect: "The craters are visible from here. They add a certain roughness to the celestial body.",
                                wait: "Looking at the moon, I notice a reflection of its light in the bush to my left. A key?",
                            }
                        },
                        five: {
                            isOpened: true,
                            open: {
                                look: "The moon illuminates the night with its gentle whiteness.",
                                use: "Why touch the moon? I have a whole world and a life here.",
                                go: "Unfortunately, it's not going to be possible, but maybe someday.",
                                hit: "I don't see the point. The moon is so beautiful.",
                                inspect: "The roughness of its surface soothes me. I love getting lost in its craters.",
                                wait: "No key in a bush this time, just a feeling of fulfillment.",
                                accept: "The moon is magnificent. It soothes me. I've always loved this celestial body.",
                            }
                        }
                    }, {    // bush
                        name: "bush",
                        determinant: "the ",
                        isLocated: true,
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "The bush is dense, but its leaves are dead.",
                                use: "Its branches break effortlessly under my fingers because it's so dry.",
                                go: "I'm already in front of the bush.",
                                hit: "Even a light kick turns the leaves into dust.",
                                inspect: "The bush is similar to mistletoe, its leaves have thorns.",
                                wait: "The wind makes the dead branches tremble, the dried leaves flutter.",
                            },
                            opening: {
                                interaction: [{ command: "use", state: "opening", target: [0] }, { command: "use", state: "open", target: [5] }],
                                look: "The moon reflects a key, wedged between the dried twigs.",
                                use: "I pick up the key. The shrub cracks as I remove it. I slip it into a pocket.",
                                go: "I'm already in front of the bush.",
                                hit: "I don't see how that would help me retrieve the key.",
                                inspect: "The key is the same as the one I retrieved earlier from the mailbox.",
                                wait: "I'm not going to wait to retrieve the key, it's already cold enough.",
                            },
                            open: {
                                look: "The bush is dense, but its leaves are dead.",
                                use: "Its branches break effortlessly under my fingers because it's so dry.",
                                go: "I'm already in front of the bush.",
                                hit: "Even a light kick turns the leaves into dust.",
                                inspect: "The bush is similar to mistletoe, its leaves have thorns.",
                                wait: "The wind makes the dead branches tremble, the dried leaves flutter.",
                            },
                        },
                        five: {
                            isOpened: true,
                            open: {
                                look: "The bush has come back to life. Its leaves are greener, it's more vigorous.",
                                use: "Its branches are fresh and flexible. It feels pleasant to touch.",
                                go: "I'm already in front of the bush.",
                                hit: "I don't see why I would do that.",
                                inspect: "The bush is a shrubby honeysuckle.",
                                wait: "The gentle evening breeze sways the branches of the bush.",
                                accept: "I had a shrub like this at home a few years ago.",
                            },
                        },
                    }, {    // house
                        name: "house",
                        isLocated: true,
                        determinant: "the ",
                        five: {
                            isOpened: true,
                            open: {
                                interaction: [{ command: "accept", state: "open", target: [2] }],
                                look: "My house is quite modest, with its two floors and very plain beige paint.",
                                use: "I should get closer to my house to touch it.",
                                go: "I prefer to take my time and not rush. I observe my house for a moment.",
                                hit: "I don't feel like hitting my house.",
                                inspect: "From here, I don't see many details.",
                                wait: "The gentle air of a summer night is pleasant. However, the sound of crickets is missing.",
                                accept: "So this is my house. I am ready to enter it one last time.",
                            },
                        },
                        six: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accept", state: "open", target: [6] }],
                                accept: "This house, which is mine, is now distant. A memory. It is also ever-present. An energy.",
                            },
                            open: {
                                triggerEvent: { command: "accept", name: "theEnd" },
                                accept: "I am (no) more.",
                            },
                        },
                    }, {    // road
                        name: "road",
                        isLocated: true,
                        determinant: "the ",
                        zero: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "look", state: "open", target: [7], condition: 3 }],
                                look: [
                                    "Why this road? What am I doing here? It doesn't look familiar to me. I don't want to take it.",
                                    "The road is like an abyss that plunges into a neighborhood I don't know. Have I gotten lost?",
                                    "The fog behind me prevents me from going back. Should I just take the road? Keep moving forward?",
                                ],
                                use: "My body is paralyzed for the moment. I have difficulty breathing. Oh my God, what's happening?",
                                go: "My legs won't respond to me. Why this road? Why this neighborhood? I don't understand.",
                            },
                            open: {
                                newAct: { command: "go" },
                                look: "I see only one way to get out of here: to see where this road leads me.",
                                use: "I gradually feel my legs again. I should be able to walk for a while.",
                                go: "Hesitant, my steps follow one after another, slowly... I walk along the street, embraced by the night. Silence surrounds me as I venture further on the paved road.",
                            },
                        },
                    }, {    // leave
                        name: "leave",
                        zero: { text: "The road behind me is engulfed in mist. I better keep moving forward." },
                        one: { text: "This house is enticing. Besides, I've walked too long to leave now." },
                        two: { text: "I'm in front of this house again. Why? I can't leave now." },
                        three: { text: "I don't understand why I'm in front of this house again, but I intend to find out. I'm staying." },
                        four: { text: "I want to know what lies behind this house. I'm not going to leave." },
                        five: { text: "This house is mine. I'm not leaving. I have to enter it one last time..." }
                    }
                ]
            }, {    // PORCH
                name: "porch",
                texts: [
                    {
                        text: "Here I am in front of the house. The",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "door",
                        act: "regular",
                        active: true
                    },
                    {
                        text: "is right in front of me, closed.",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "The air is damp and cold, I would really like to be able to enter quickly...",
                        act: "sad",
                        active: false
                    },
                    {
                        text: "There's also a",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "window,",
                        act: "regular",
                        active: true
                    },
                    {
                        text: "to the left of the door. The house seems frozen in time. There's a",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "doorbell.",
                        act: "regular",
                        active: true
                    },
                    {
                        text: "Next to it, a small",
                        act: "angry",
                        active: false
                    },
                    {
                        text: "box",
                        act: "angry",
                        active: true
                    },
                    {
                        text: "to open with a code.",
                        act: "angry",
                        active: false
                    },
                    {
                        text: "The",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "doormat",
                        act: "regular",
                        active: true
                    },
                    {
                        text: `is gray, and the word "welcome" is barely distinguishable. It's very dirty.`,
                        act: "regular",
                        active: false
                    }
                ],
                items: [
                    {       // door
                        name: "door",
                        determinant: "the ",
                        isLocated: true,
                        one: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "The door is closed and in bad condition. The house is falling apart.",
                                use: "The door is closed. The handle immediately gets stuck.",
                                go: "I'm already in front of the door."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [0] }],
                                look: "The key I have in my hand seems to match the lock.",
                                use: "I turn the key in the door, and a dull sound indicates that it's unlocked.",
                                go: "I'm already in front of the door."
                            },
                            open: {
                                newAct: { command: "go" },
                                look: "The door is unlocked, I can go through.",
                                use: "I push the door, which opens to a dark room. I prepare to go inside.",
                                go: "I enter the house for the first time..."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "hit", state: "open", target: [0], condition: 2 }],
                                look: "The door is still in bad condition, but this time it has an opaque glass panel in the center.",
                                use: "The door is locked, impossible to open.",
                                go: "I'm already in front of the door.",
                                hit: [
                                    "I take a little momentum to shoulder the door. I feel like I need to repeat it to open it.",
                                    "I take a bit more momentum to forcefully shoulder the door. It gives way under my weight and opens."
                                ]
                            },
                            open: {
                                win: { command: "go" },
                                look: "The door is broken, so I can enter.",
                                use: "The wood is thin and fragile. Not surprising that the door broke when I hit it.",
                                go: "I enter the house once again...",
                                hit: "I give a small kick to what remains of the door. Nothing changes, it's already broken."
                            }
                        },
                        three: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "The door is closed, and its glass panel is larger. It's painted red ochre.",
                                use: "The door is once again locked. This time it looks more solid.",
                                go: "I'm already in front of the door.",
                                hit: "I take a bit of momentum to shoulder the door forcefully, which hurts my shoulder.",
                                inspect: "The paint is clay-like, as if someone threw dirt on the door."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [0] }],
                                look: "The key I have in my hand seems to match the lock.",
                                use: "With a quick motion of the key in the lock, the door unlocks.",
                                go: "I'm already in front of the door.",
                                hit: "I already hurt my shoulder last time. Besides, I have the key in hand.",
                                inspect: "The key is heavy in my hand. It's slightly rusty."
                            },
                            open: {
                                win: { command: "go" },
                                look: "The door is unlocked, I can go through.",
                                use: "I push the door, which leads to the ground floor room.",
                                go: "I enter the house once more...",
                                hit: "The door is already open. Besides, I already hurt my shoulder.",
                                inspect: "The partially open door greets me with a melancholic air."
                            }
                        },
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "wait", state: "opening", target: [3] }],
                                look: "The door is closed. Its red shades once again bar my entry.",
                                use: "Locked again. At this point, it doesn't surprise me.",
                                go: "I'm already in front of the door.",
                                hit: "I might hurt myself trying to break down the door.",
                                inspect: "The paint is smooth and carefully applied. However, it's clear that it's an amateur's work.",
                                wait: "I think about how to open it... Could the keypad be the solution this time?"
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [0] }],
                                look: "The key I have in my hand matches the lock.",
                                use: "The door was double-locked. I turn the key several times, and the door opens.",
                                go: "I'm already in front of the door.",
                                hit: "I have the key in hand, I won't try to break down the door.",
                                inspect: "The key is noticeably lighter than the previous ones. More modern as well.",
                                wait: "I have the key, I no longer need to wait or think."
                            },
                            open: {
                                win: { command: "go" },
                                look: "The door is unlocked, I can go through.",
                                use: "I push the door, which opens to the office and the library.",
                                go: "I enter the house...",
                                hit: "The door is already open, I have no reason to break it.",
                                inspect: "The door is like the mouth of this house, ready to swallow me once again."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "accept", state: "opening", target: [4] }],
                                look: "The door is closed again. It's wooden and hand-painted.",
                                use: "Locked again. No surprise. Where could the key be this time?",
                                go: "I'm already in front of the door.",
                                hit: "I don't feel like hitting it.",
                                inspect: "The central glass pane of the door overlooks the office inside.",
                                wait: "I'm thinking. How can I open it this time?",
                                accept: "Maybe the key is under the doormat, like at the beginning?"
                            },
                            opening: {
                                interaction: [{ command: "accept", state: "open", target: [0] }],
                                look: "The key I have in my hand seems to match the lock of the door.",
                                use: "I try to put the key in the door, but a sense of fear overwhelms me. I reconsider.",
                                go: "I'm already in front of the door.",
                                hit: "I don't feel like hitting it.",
                                inspect: "The key feels so heavy in my hand, it makes me uncomfortable... Why is that?",
                                wait: "Am I overthinking? What am I afraid of?",
                                accept: "This will be the last time I enter the house. I have to accept that."
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [0] }],
                                look: "The key I have in my hand matches the lock of the door.",
                                use: "I try to put the key in the door, despite my unease. I turn the key in the lock...",
                                go: "I'm already in front of the door.",
                                hit: "I don't feel like hitting it.",
                                inspect: "My hand trembles as I hold the key. I must face my fear that my adventure is ending.",
                                wait: "I try to calm down. Is this really the end?",
                                accept: "Why should it be the end? It might be a beginning."
                            },
                            final: {
                                win: { command: "go" },
                                look: "The door is unlocked, I can go through.",
                                use: "I push the door, which opens to the office and the library.",
                                go: "I enter the house one last time. The door closes behind me.",
                                hit: "I don't want to hit the door, it won't serve me any purpose.",
                                inspect: "The house will swallow me up once again. Will I come out of it?",
                                wait: "The thick, humid air of the house hits me in the face now that the door is open. It's lighter than before.",
                                accept: "No turning back. I must continue. I have no choice."
                            }
                        }
                    }, {    // window
                        name: "window",
                        determinant: "the ",
                        isLocated: true,
                        one: {
                            isOpened: false,
                            closed: {
                                look: "The window is closed. Its glass is dirty and opaque.",
                                use: "My hand is greeted by a cold, smooth surface, damp from condensation.",
                                go: "I'm already in front of the window."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "hit", state: "open", target: [1] }],
                                look: "It's impossible to see through this window; it's still dirty.",
                                use: "There's no handle on the outside, I can only touch the opaque glass.",
                                go: "I'm already in front of the window.",
                                hit: "I elbow the window, and it shatters into pieces."
                            },
                            open: {
                                look: "The window is broken. It's dark inside the house; I can't make out anything.",
                                use: "I will not touch sharp glass, I don't want to risk hurting myself.",
                                go: "I'm already in front of the window.",
                                hit: "I've already broken the window; no need to create more debris."
                            }
                        },
                        three: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "inspect", state: "opening", target: [1] }],
                                look: "The glass is less dirty, but the thick condensation makes it hard to see through.",
                                use: "I can't open the window from the outside.",
                                go: "I'm already in front of the window.",
                                hit: "I have no reason to break the window at the moment.",
                                inspect: "On the other side, hanging from a string, is the key to the house. I need to open this window."
                            },
                            opening: {
                                interaction: [{ command: "hit", state: "open", target: [1] }],
                                look: "The key is behind the window, but I don't see a handle to open it.",
                                use: "I can't open it from the outside.",
                                go: "I'm already in front of the window.",
                                hit: "I elbow the glass with force, and it shatters upon impact.",
                                inspect: "The key is clearly the one for the house; it's the same as during my first visit."
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [1] }, { command: "use", state: "opening", target: [0] }],
                                look: "The glass is broken in the center. From there, I can easily reach for the key.",
                                use: "I stretch my arm, being careful not to cut myself. I take the key to the house.",
                                go: "I'm already in front of the window.",
                                hit: "I've already broken the window; no need to create more damage.",
                                inspect: "It's a single-pane window. Fortunately, breaking it would have been complicated."
                            },
                            final: {
                                look: "The window is broken. It's too dark to see inside the house.",
                                use: "I've already retrieved the key; there's nothing more to take here.",
                                go: "I'm already in front of the window.",
                                hit: "I've already broken the window; no need to create more damage.",
                                inspect: "There's nothing more to observe."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "inspect", state: "open", target: [1] }],
                                look: "Still covered in condensation, the window has a sad, abandoned look.",
                                use: "I still can't open the window from the outside.",
                                go: "I'm already in front of the window.",
                                hit: "I have no reason to break the window at the moment.",
                                inspect: "There's no key on the other side this time. I have to search elsewhere.",
                                wait: "Despite my wait, the condensation doesn't dissipate."
                            },
                            open: {
                                look: "Still covered in condensation, the window has a sad, abandoned look.",
                                use: "I still can't open the window from the outside.",
                                go: "I'm already in front of the window.",
                                hit: "Without a key to retrieve, I won't bother breaking this glass once again.",
                                inspect: "There's no key on the other side this time. I have to search elsewhere.",
                                wait: "Despite my wait, the condensation doesn't dissipate."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                look: "The window is no longer fogged up. I can see the inside without much difficulty.",
                                use: "The window can only be opened from the inside.",
                                go: "I'm already in front of the window.",
                                hit: "I have no reason to break the window.",
                                inspect: "There's no key on the other side. I have to search elsewhere.",
                                wait: "This window overlooks the office. It acts as a skylight for it.",
                                accept: "On the other side of this window, the end of my adventure awaits."
                            }
                        }
                    }, {    // doorbell
                        name: "doorbell",
                        determinant: "the ",
                        isLocated: true,
                        one: {
                            isOpened: false,
                            closed: {
                                look: "The doorbell is in poor condition. I doubt it works.",
                                use: "I press the doorbell... No sound. I'm not surprised.",
                                go: "The doorbell is already within my reach."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                look: "The doorbell still appears broken. I don't think it will work this time.",
                                use: "I press the doorbell again... Still nothing. I'm not surprised.",
                                go: "The doorbell is already within my reach.",
                                hit: "I give the doorbell a hit. Nothing happens."
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                look: "The doorbell is in better condition; its white plastic is no longer cracked.",
                                use: "I press the doorbell once more... Nothing. Again.",
                                go: "The doorbell is already within my reach.",
                                hit: "I try to pull the casing off but fail. I hit it, and nothing happens.",
                                inspect: "There is a torn-off name on the doorbell. I don't know who it belongs to."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                look: "The doorbell looks better, but I bet it won't work.",
                                use: "Nothing. Again. It makes you wonder if it serves any purpose.",
                                go: "The doorbell is already within my reach.",
                                hit: "I don't want to keep banging on it.",
                                inspect: "There is no name on the doorbell. Strange.",
                                wait: "Waiting won't magically fix it..."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "open", target: [2] }],
                                look: "The doorbell is noticeably more modern. Will it work this time?",
                                use: "It rings! Not sure if it serves any purpose, though.",
                                go: "The doorbell is already within my reach.",
                                hit: "I don't want to needlessly hit everything around me anymore.",
                                inspect: "Still no name or any sign that it will help me get in.",
                                wait: "I wait for a moment. Will it work? I wonder...",
                                accept: "It will work, I'm sure of it."
                            },
                            open: {
                                look: "The doorbell is in working condition. Not sure if it will help me, though.",
                                use: "I press the doorbell again. It rings. No one comes.",
                                go: "The doorbell is already within my reach.",
                                hit: "I won't hit it if it's working.",
                                inspect: "Perhaps the absence of a name is because there was no one inside during my previous visits.",
                                wait: "I wait for a moment. No one comes to open the door.",
                                accept: "It worked. However, it won't help me progress."
                            }
                        }
                    }, {    // box
                        name: "box",
                        determinant: "the ",
                        isLocated: true,
                        two: {
                            isOpened: false,
                            closed: {
                                look: "It's a small key box. It opens with a code. No idea what it could be.",
                                use: "I try random passcodes. Nothing works.",
                                go: "The box is already within my reach.",
                                hit: "I hit the box. Nothing happens; it's sturdy."
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                look: "I don't see how to open it without a code. Its metal sides seem solid.",
                                use: "I try entering random passcodes. I can't find the right one.",
                                go: "The box is already within my reach.",
                                hit: "It looks too solid. I might hurt myself unnecessarily.",
                                inspect: "The numeric keypad doesn't give me any clues about which numbers are more commonly used."
                            }
                        },
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "I still have no idea what code to use. I need to think about it.",
                                use: "Entering random codes leads me nowhere.",
                                go: "The box is already within my reach.",
                                hit: "I don't think that's the solution.",
                                inspect: "The code is entered on a numeric keypad.",
                                wait: "I try to think of a code, but I'm not sure the key is inside."
                            },
                            opening: {
                                interaction: [{ command: "wait", state: "open", target: [3] }],
                                look: "The more I look at it, the more I think it must be the solution.",
                                use: "I need to be patient and think of a code. This box feels familiar to me.",
                                go: "The box is already within my reach.",
                                hit: "That's not the solution to everything.",
                                inspect: "The numeric keypad shows that the numbers 1, 9, and 6 are more worn than the others.",
                                wait: "It looks like a safe I own, whose code is my birth year, 1996. I enter that and... the box opens!"
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [3] }, { command: "use", state: "opening", target: [0] }],
                                look: "Inside, there's a metal key attached to a small red keychain.",
                                use: "I take the key, which should allow me to open the door.",
                                go: "The box is already within my reach.",
                                hit: "I managed to open the box without getting angry.",
                                inspect: "The key inside is attached to a geometric red leather keychain.",
                                wait: "I found the code; no need to think any longer."
                            },
                            final: {
                                look: "The box remains partially open.",
                                use: "I can't manage to close the box; I'll leave it partially open.",
                                go: "The box is already within my reach.",
                                hit: "What's the point?",
                                inspect: "The box was empty except for the key.",
                                wait: "I've retrieved the key; no need to wait any more."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "open", target: [3] }],
                                look: "The box has more of a safe-like appearance. I wonder if it contains the key.",
                                use: "I enter 1996. The box opens, but there's no key inside.",
                                go: "The box is already within my reach.",
                                hit: "I don't think hitting it would be useful.",
                                inspect: "I don't see anything special about the code box.",
                                wait: "I don't think there's anything to wait for. I already know the code.",
                                accept: "I have a feeling it won't contain what I'm looking for."
                            },
                            open: {
                                look: "The box is empty. No key inside this time.",
                                use: "I'll leave the box partially open. It's useless to me.",
                                go: "The box is already within my reach.",
                                hit: "Even if I'm frustrated, hitting it won't do me any good.",
                                inspect: "I don't see anything special inside.",
                                wait: "There's nothing to wait for.",
                                accept: "My intuition was correct. My own safe doesn't contain my keys either."
                            }
                        }
                    }, {    // doormat
                        name: "doormat",
                        determinant: "the ",
                        isLocated: true,
                        one: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "opening", target: [4] }],
                                look: "The doormat at my feet is dirty and disgusting.",
                                use: "I lift the doormat. An old metal key is underneath.",
                                go: "The doormat is at my feet."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "opening", target: [0] }, { command: "use", state: "open", target: [4] }],
                                look: "The key is rusty and dirty. It's quite big and seems to match the door.",
                                use: "I pick up the key and put it in my pocket.",
                                go: "The doormat is at my feet."
                            },
                            open: {
                                look: "The doormat is less dirty now that it's flipped over.",
                                use: "I don't want to touch this doormat anymore.",
                                go: "The doormat is at my feet."
                            }
                        },
                        two: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "open", target: [4] }],
                                look: "The doormat at my feet is still dirty.",
                                use: "I flip over the doormat. No key underneath this time.",
                                go: "The doormat is at my feet.",
                                hit: "I kick the doormat with my heel. Some dust comes off."
                            },
                            open: {
                                interaction: [{ command: "use", state: "closed", target: [4] }],
                                look: "The doormat is less dirty underneath. Its message is hidden now, though.",
                                use: "I flip over the doormat to put it back in place.",
                                go: "The doormat is at my feet.",
                                hit: "I kick the doormat with my heel. An insect escapes, panicking."
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "open", target: [4] }],
                                look: "The doormat is relatively clean but has seen better days.",
                                use: "I flip over the doormat. There's no key underneath.",
                                go: "The doormat is at my feet.",
                                hit: "I don't see how that will help me.",
                                inspect: `"Welcome" is written in black in an easy-to-read sans-serif font.`
                            },
                            open: {
                                interaction: [{ command: "use", state: "closed", target: [4] }],
                                look: "It's a flipped-over doormat. There's nothing to see.",
                                use: "I flip over the doormat to put it back in place.",
                                go: "The doormat is at my feet.",
                                hit: "I don't see how that will help me.",
                                inspect: "There's nothing to inspect."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                look: "The doormat is practically new. It's no longer moldy or as dirty.",
                                use: "I don't think flipping the doormat is the solution this time.",
                                go: "The doormat is at my feet.",
                                hit: "I kick the doormat lightly. Nothing. What a surprise...",
                                inspect: "I think I've seen everything there is to see on this doormat.",
                                wait: "I'm wasting my time. I'd better get moving."
                            }
                        },
                        five: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "accept", state: "opening", target: [4] }],
                                look: "It's a nice almost-new doormat. It welcomes me.",
                                use: "I don't think the key will be underneath this time. It was different each time.",
                                go: "The doormat is at my feet.",
                                hit: "I don't want to hit it...",
                                inspect: "The typeface used is probably Helvetica or Frutiger. Hard to tell just like that.",
                                wait: "I'm thinking about where the key could be. Under the doormat seems too obvious.",
                                accept: "Come to think of it, my parents used to hide a spare key under the doormat. Maybe it's worth flipping it over."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [4] }],
                                look: "It's a nice almost-new doormat. It welcomes me.",
                                use: "I flip over the doormat. No key underneath this time...",
                                go: "The doormat is at my feet.",
                                hit: "I don't want to hit it...",
                                inspect: "No clues or special features to note.",
                                wait: "If the key isn't underneath, where else should I look?",
                                accept: "Will my intuition be correct?"
                            },
                            open: {
                                interaction: [{ command: "accept", state: "opening", target: [0] }],
                                look: "Nothing under the doormat. I need to look elsewhere.",
                                use: "I'm not going to put the doormat back in place. No need to dwell on it.",
                                go: "The doormat is at my feet.",
                                hit: "I don't want to hit it...",
                                inspect: "I don't see anything interesting.",
                                wait: "If the key isn't underneath, where could it be hiding?",
                                accept: "Suddenly, I feel something hard in my pocket. As I reach into it, I feel... a key? I hold it in my hand."
                            }
                        }
                    }, {    // leave
                        name: "leave",
                        one: { text: "I cross the sad garden to return to the gate. This house gives me chills." },
                        two: { text: "I return to the gate, still angry to find myself in front of this house. Why her? Why me?" },
                        three: { text: "I walk along the path through the garden, nature seems frozen around me. I am in front of the gate." },
                        four: { text: "I need some time. I retrace my steps and wait in front of the open gate." },
                        five: { text: "I am back home, but a suffocating feeling grabs hold of me. I step back towards the gate." }
                    }
                ],
            }, {    // DESK
                name: "desk",
                texts: [{
                    text: "Here I am inside the house.",
                    act: "regular",
                    active: false
                }, {
                    text: "Once again...",
                    act: "sad",
                    active: false
                }, {
                    text: "It's dark. It looks like the place has been abandoned.",
                    act: "regular",
                    active: false
                }, {
                    text: "I don't notice any signs of recent life.",
                    act: "bargain",
                    active: false
                }, {
                    text: "There is only one room, and the only door on this floor is the entrance.",
                    act: "regular",
                    active: false
                }, {
                    text: "The front door is locked, I can't go back.",
                    act: "accept",
                    active: false
                }, {
                    text: "To my right, a",
                    act: "regular",
                    active: false
                }, {
                    text: "staircase",
                    act: "regular",
                    active: true
                }, {
                    text: "that leads to a closed door.",
                    act: "regular",
                    active: false
                }, {
                    text: "In the middle of the room, a",
                    act: "regular",
                    active: false
                }, {
                    text: "desk.",
                    act: "regular",
                    active: true
                }, {
                    text: "Right at the entrance, on a chair, a",
                    act: "bargain",
                    active: false
                }, {
                    text: "postcard",
                    act: "bargain",
                    active: true
                }, {
                    text: "is placed.",
                    act: "bargain",
                    active: false
                }, {
                    text: "There is an old",
                    act: "regular",
                    active: false
                }, {
                    text: "bookshelf",
                    act: "regular",
                    active: true
                }, {
                    text: "at the back of the room.",
                    act: "regular",
                    active: false
                }, {
                    text: "On a dresser to its left, a",
                    act: "sad",
                    active: false
                }, {
                    text: "book",
                    act: "sad",
                    active: true
                }, {
                    text: `"THE HAZE" catches my attention.`,
                    act: "sad",
                    active: false
                }
                ],
                items: [
                    {       // staircase
                        name: "staircase",
                        determinant: "the ",
                        isLocated: false,
                        two: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "It's a bare and cracked wooden staircase. It doesn't look safe to climb.",
                                use: "I'm stuck in front of the closed door at the top.",
                                go: "I'm in front of the door, at the top of the stairs.",
                                hit: "I shoulder the door, just like I did at the entrance. Nothing happens."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [0] }],
                                look: "The key in my hand seems to correspond to the door at the top of the stairs.",
                                use: "I insert the key into the lock. After a turn, the door opens.",
                                go: "I'm already at the top of the stairs.",
                                hit: "Even though I have the key, I give the door another shoulder bump. Still nothing."
                            },
                            open: {
                                newAct: { command: "go" },
                                look: "The partially open door seems to lead to a bedroom.",
                                use: "I've already used the key to open the door, so I can enter.",
                                go: "I enter the room upstairs, shrouded in darkness...",
                                hit: "I managed to open the door, no need to try to break it again."
                            }
                        },
                        three: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "This time, the staircase is made of sturdier and darker wood. It looks better.",
                                use: "The door at the top of the stairs is locked again, impossible to open.",
                                go: "I'm at the top of the stairs.",
                                hit: "I kick the door with my heel. It doesn't budge an inch.",
                                inspect: "I notice some animal-themed carvings on the staircase railing."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [0] }],
                                look: "I finally found a key. It seems to correspond to the door at the top of the stairs, fortunately.",
                                use: "I insert the key into the lock. This time, after two turns, the door opens.",
                                go: "I'm at the top of the stairs.",
                                hit: "I already have the key, I won't keep banging on the door at the top of the stairs.",
                                inspect: "The key is similar to the one at the entrance. It's heavy and slightly rusty."
                            },
                            open: {
                                win: { command: "go" },
                                look: "The door leads to an upstairs bedroom illuminated by the moonlight.",
                                use: "I've already opened the door.",
                                go: "I enter the room upstairs, bathed in moonlight...",
                                hit: "I've already opened the door, no reason to break it again.",
                                inspect: "The door is made of solid wood and has a poster for a movie or exhibition on it, I'm not sure."
                            }
                        },
                        four: {
                            isFinal: false,
                            isOpened: false,
                            closed: {
                                look: "The staircase is much more defined, made of dark and solid wood. It looks sturdy. The door at the top too.",
                                use: "I press the handle. Nothing. The door is locked again...",
                                go: "I'm at the top of the stairs, in front of the door.",
                                hit: "I gather momentum from the steps and charge at the door. It doesn't move.",
                                inspect: "On the door, there's a colorful finger-painted drawing. It depicts a child playing in the grass.",
                                wait: "I wait in front of the door, at the top of the staircase. I'm not sure if it serves any purpose."
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [0], condition: true }],
                                look: "The key in my hand seems to correspond to the door.",
                                use: [
                                    "I don't know why, but despite having the key, I feel like I should first read 'The Haze'",
                                    "I put the key in the lock and turn it. The door opens in front of me."
                                ],
                                go: "I'm at the top of the stairs, in front of the door.",
                                hit: "I don't think it's useful. I already have the key to open it.",
                                inspect: "Once again, the key is different. This time smaller and modern. The brand is KABA.",
                                wait: "My thoughts are consumed by the book 'The Haze'. I feel like I need to read it before continuing."
                            },
                            final: {
                                win: { command: "go" },
                                look: "The door is open and leads to an upstairs bedroom.",
                                use: "I've already opened the door...",
                                go: "I enter the upstairs room one last time...",
                                hit: "The door is already open, no reason to hit it.",
                                inspect: "The door has a poster for the series 'Midnight Mass' stuck on the other side.",
                                wait: "With the door open, the fresh air from outside caresses my cheeks."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "The staircase is made of dark and solid wood. It looks old but well-maintained. It has character.",
                                use: "The door is locked again. I'll have to find a way to open it.",
                                go: "I'm in front of the door, at the top of the stairs.",
                                hit: "I don't want to hit the door or the stairs.",
                                inspect: "The door is decorated with a childlike painting made with paint. The room behind it belongs to a child.",
                                wait: "I'm contemplating how to open the door. For now, nothing comes to mind.",
                                accept: "This door is familiar to me, but I can't say why. There may be things in the office that will refresh my memory."
                            },
                            opening: {
                                interaction: [{ command: "accept", state: "open", target: [0] }],
                                look: "The door is still closed, and I still don't have a key to open it.",
                                use: "The door is still impossible to open...",
                                go: "I'm in front of the door, at the top of the stairs.",
                                hit: "I don't want to hit the door or the stairs.",
                                inspect: "The drawing on the door depicts a child playing on a swing attached to a tree.",
                                wait: "I think I need to accept the situation. I know this door, I'm sure of it...!",
                                accept: "It's the entrance door to my childhood room! It didn't have a lock; it should open without a key."
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [0] }],
                                look: "I see myself as a child, climbing the stairs to go to my room. This is an exact replica of it.",
                                use: "My fingers touch the doorknob, and the door opens. Was it open all this time?",
                                go: "I'm in front of the door, at the top of the stairs.",
                                hit: "I don't want to hit the door or the stairs.",
                                inspect: "I made the drawing on the door with finger paint... I must have been 4 or 5 years old.",
                                wait: "Memories pass behind my eyelids as I close my eyes for a few minutes. I feel refreshed.",
                                accept: "It's the entrance door to my childhood room."
                            },
                            final: {
                                win: { command: "go" },
                                look: "The door is open. Behind it, the bedroom. Is it mine?",
                                use: "The door is now open.",
                                go: "I enter the upstairs bedroom one last time...",
                                hit: "I don't want to hit the door or the stairs.",
                                inspect: "The poster for the series 'Midnight Mass' is no longer displayed on the back of the door. This series didn't exist when I was a child.",
                                wait: "Memories pass behind my eyelids as I close my eyes for a few minutes. I feel refreshed.",
                                accept: "It's the entrance door to my childhood room. However, I don't think the room behind it is mine."
                            }
                        }
                    }, {    // desk
                        name: "desk",
                        determinant: "the ",
                        isLocated: false,
                        two: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "hit", state: "opening", target: [1] }],
                                look: "It's a gray-green metal desk with rusty corners and edges. There is a cabinet on its right.",
                                use: "The desk is cold and fragile under my hands. The cabinet doesn't open when I pull on it.",
                                go: "I'm in front of the desk.",
                                hit: "I kick the cabinet hard. A dull metallic sound indicates that the drawer should be unlocked."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "opening", target: [0] }, { command: "use", state: "open", target: [1] }],
                                look: "The desk looks in bad shape. The cabinet drawer is broken and slightly open.",
                                use: "I pull on the loose drawer. Inside, a rusty key. I take it with me.",
                                go: "I'm in front of the desk.",
                                hit: "I give the cabinet another kick, but it has no effect."
                            },
                            open: {
                                look: "It's a gray-green metal desk with rusty corners and edges. The cabinet on its right is broken.",
                                use: "I have already retrieved the key. There's nothing more to see on this desk.",
                                go: "I'm in front of the desk.",
                                hit: "I give the cabinet another kick, but it has no effect."
                            }
                        },
                        three: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "The desk is gray-green metal and has a military cabinet vibe. It still has a closed cabinet on the right.",
                                use: "The cabinet is locked. This time, it looks more solid than before. There is no lock.",
                                go: "I'm in front of the desk.",
                                hit: "I hit the cabinet like I did last time. Nothing happens.",
                                inspect: "There is a rust-covered padlock on the side of the cabinet. I wonder how to open it."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [1] }, { command: "inspect", state: "open", target: [1] }],
                                look: "The desk is gray-green metal and has a military cabinet vibe. It still has a closed cabinet on the right.",
                                use: "The cabinet is locked with a code. I could try entering the date from the postcard.",
                                go: "I'm in front of the desk.",
                                hit: "I hit the cabinet with all my strength, but it doesn't move. This desk is solid.",
                                inspect: "Could I use the date from the postcard as the code for the padlock?"
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [1] }, { command: "use", state: "opening", target: [0] }],
                                look: "The padlock requires a 6-digit number. A date could be entered there.",
                                use: "I enter the date 06/21/14 as the code. The cabinet opens, and I retrieve the key it contains.", // year of their 18th birthday
                                go: "I'm in front of the desk.",
                                hit: "I have no reason to hit it, nothing works this time.",
                                inspect: "The padlock already has the number 14 entered at the end, which corresponds to the year in the date I found."
                            },
                            final: {
                                look: "The desk is gray-green metal and has a military cabinet vibe. It's old and in poor taste.",
                                use: "I have already opened the cabinet and retrieved the key.",
                                go: "I'm in front of the desk.",
                                hit: "I have no reason to hit it.",
                                inspect: "There is less rust than before, but I can still see some in the corners of the desk."
                            }
                        },
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "The desk is now made of wood. At first glance, it looks like oak or pine.",
                                use: "I run my finger over the desk. It's smooth. I try to open its cabinet, but it's closed.",
                                go: "I'm in front of the desk.",
                                hit: "I don't think that's the solution to all my problems.",
                                inspect: "The desk is made of lacquered oak wood, much more beautiful and refined than before.",
                                wait: "I wait in front of the desk. How do I open the cabinet this time? I notice that a code is needed."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [0, 1] }],
                                look: "The cabinet is accompanied by a locking system with a code, located above its handle.",
                                use: "I enter the code 1667, the year of the publication of Milton's 'Paradise Lost.' The drawer opens, and I retrieve the key it contains.",
                                go: "I'm in front of the desk.",
                                hit: "I have the code to enter, no reason to hit it.",
                                inspect: "It's a sophisticated desk. Its mechanisms may be old, but the way its locking is designed is fascinating.",
                                wait: "I managed to remember the code. I don't need to wait any longer."
                            },
                            open: {
                                look: "The desk is made of polished and lacquered oak wood. It must have cost a fortune.",
                                use: "I run my finger over the desk. It's smooth. It's a fine piece of craftsmanship.",
                                go: "I'm in front of the desk.",
                                hit: "I don't feel like hitting it now that I've opened the cabinet.",
                                inspect: "This desk is magnificent and very sophisticated. With its wood, it looks ancient but tasteful.",
                                wait: "I was able to open its cabinet. I don't need to wait any longer."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accept", state: "open", target: [1, 4] }],
                                look: "The desk is a bit old-fashioned but magnificent and imposing in the middle of the room.",
                                use: "The desk's cabinet is closed again, but I have the code on the tip of my tongue.",
                                go: "I'm in front of the desk.",
                                hit: "I don't see the point.",
                                inspect: "The cabinet is still closed, requiring a code to open it, but I don't know which one.",
                                wait: "I wait in front of the desk. Memories come back to me. My father working?",
                                accept: "It was my father's desk. The code for his cabinet was my birth date, June 21, 1996."
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [1] }],
                                look: "The desk is old but very well maintained. It's magnificent and imposing in the middle of the room.",
                                use: "I enter my birth date as the code; the cabinet opens, but this time, it doesn't contain a key.",
                                go: "I'm in front of the desk.",
                                hit: "I don't see the point.",
                                inspect: "I see my father again, sitting in his desk chair, working meticulously. What was his profession?",
                                wait: "I try to remember my father, sitting at this desk. The images are blurry.",
                                accept: "My father worked in precision mechanics. Was it electronics, watchmaking...?"
                            },
                            final: {
                                look: "The desk is a beautiful antique. It's magnificent and imposing in the middle of the room.",
                                use: "I run my fingers over the desk to soak in its history. I see my father, leaning over it, soldering iron in hand.",
                                go: "I'm in front of the desk.",
                                hit: "I don't see the point.",
                                inspect: "I see my father again, sitting in his desk chair, working meticulously. I think he worked on clocks.",
                                wait: "I try to remember my father, sitting at this desk. I can't recall his face.",
                                accept: "My father was a clockmaker. He didn't stop working even after retiring."
                            }
                        }
                    }, {    // postcard
                        name: "postcard",
                        determinant: "the ",
                        isLocated: true,
                        three: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "open", target: [2] }],
                                look: "It's a postcard showing snowy mountains with a ski photo montage.",
                                use: "I flip the card to see the back.",
                                go: "The card is already within my reach.",
                                hit: "I fold a corner of the card. Not sure how that will help me.",
                                inspect: "There is a location marked in transparency at the bottom of the card: Zermatt, CH."
                            },
                            open: {
                                interaction: [{ command: "use", state: "closed", target: [2] }, { command: "inspect", state: "opening", target: [1], condition: "closed" }],
                                look: "\"Souvenirs of holidays in Switzerland! A little trip before I can't do it anymore!\" is written on the back. The signature is not legible.",
                                use: "I flip the card to see the image on the other side.",
                                go: "The card is already within my reach.",
                                hit: "I fold a corner of the card. Not sure how that will help me.",
                                inspect: "The card is dated 21-06-2014. My 18th birthday."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "open", target: [2] }],
                                look: "It's a postcard showing a city silhouette with a lake in the background.",
                                use: "I flip the card to see the back.",
                                go: "The card is already within my reach.",
                                hit: "I tear a corner of the card. I don't see how that helped me.",
                                inspect: "There is a location marked in transparency at the bottom of the card: Lausanne, CH.",
                                wait: "I stop in front of the card, at the entrance. I'm not sure why I'm waiting."
                            },
                            open: {
                                interaction: [{ command: "use", state: "closed", target: [2] }],
                                look: "\"I finally feel at peace here, but I miss you so much! Give a kiss to [illegible]\" is written on the back of the card.",
                                use: "I flip the card to see the image on the other side.",
                                go: "The card is already within my reach.",
                                hit: "I don't think that's necessary.",
                                inspect: "The card is dated 2003. Any random year.",
                                wait: "I stop in front of the card, at the entrance. I'm not sure why I'm waiting."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "open", target: [2] }],
                                look: "It's a card of a highway. Strange object to feature on a postcard.",
                                use: "I flip the card to see the back.",
                                go: "The card is already within my reach.",
                                hit: "I don't think that will help me.",
                                inspect: "There is no location indicated. The highway is congested, but the reason is not visible.",
                                wait: "I stop in front of the card. Why show this? It gives me a deep uneasiness.",
                                accept: "I feel like I recognize the highway, but I can't tell from where. Strange."
                            },
                            open: {
                                interaction: [{ command: "use", state: "closed", target: [2] }],
                                look: "\"We remain still in the path of time. Before you leave, show me what you know.\" is written on the back.",
                                use: "I flip the card to see the image on the other side.",
                                go: "The card is already within my reach.",
                                hit: "I don't think that will help me.",
                                inspect: "The card is dated " + today + ". Is it... today?",
                                wait: "I stop in front of the card. Why this text? None of this seems clear.",
                                accept: "The text resembles song lyrics that I know... And the date is today... Why?"
                            }
                        }
                    }, {    // bookshelf
                        name: "bookshelf",
                        determinant: "the ",
                        isLocated: false,
                        two: {
                            isOpened: false,
                            closed: {
                                look: "It's an old gray-green metal bookshelf, like the desk. It doesn't contain any books.",
                                use: "The metal is rough and rusted in places, better not touch it too much.",
                                go: "I'm already in front of the bookshelf.",
                                hit: "I hit one of the edges of the bookshelf with my clenched fist. A metallic sound resonates. Nothing happens.",
                            }
                        },
                        three: {
                            isOpened: false,
                            closed: {
                                look: "The bookshelf is now a gray-green metal, cleaner than before, and contains a few books.",
                                use: "Even though it's in better condition, it still has traces of rust here and there...",
                                go: "I'm already in front of the bookshelf.",
                                hit: "I don't think that will be useful to me here.",
                                inspect: "The books are mainly disorganized volumes of Encyclopedias and Atlases."
                            }
                        },
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "inspect", state: "opening", target: [3] }],
                                look: "The bookshelf is now made of solid wood, similar to the desk. It's filled with books.",
                                use: "The wood is smooth under my fingers. My hand stops on a book larger than the others. I'm curious.",
                                go: "I'm already in front of the bookshelf.",
                                hit: "I don't think that's necessary.",
                                inspect: `A book larger than the others catches my attention. Its title is "Vanités".`,
                                wait: "I wait for a moment in front of the bookshelf. I want to take a closer look at the books."
                            },
                            opening: {
                                interaction: [{ command: "wait", state: "open", target: [3] }],
                                look: `"Vanités" is a large book with a red leather binding, with its title engraved in gold.`,
                                use: `When touched, the edge of the "Vanités" book is rough, thick, and resistant.`,
                                go: "I'm already in front of the bookshelf.",
                                hit: "I don't think that's necessary.",
                                inspect: `There is no author mentioned on the spine of "Vanités", only its title and a year, 1898.`,
                                wait: `I wait for a moment in front of the bookshelf. I really want to read this book, "Vanités".`
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [3] }, { command: "use", state: "opening", target: [4] }],
                                look: `"Vanités" is a high-quality book. It is huge and seems to have been expensive. Its presence is surprising.`,
                                use: `I open "Vanités". A collection of poems is regularly mentioned: "The Haze". Could it be the book next to the bookshelf?`,
                                go: "I'm already in front of the bookshelf.",
                                hit: "I don't see why I would break books.",
                                inspect: "No author is mentioned on the cover or its back. The cover has an engraving of a skull in gold and silver.",
                                wait: `"Vanités" fascinates me. I should grab it and open it to see what it contains.`
                            },
                            final: {
                                look: `"Vanités" book stands out among the other books with its impressive red edge.`,
                                use: `I found many references to "The Haze" in "Vanités". I should look into "The Haze".`,
                                go: "I'm already in front of the bookshelf.",
                                hit: "I don't think that's necessary.",
                                inspect: `Upon closer inspection, "Vanités" and "The Haze" have the same appearance, but "Vanités" is much larger.`,
                                wait: `I should look into "The Haze" instead of standing in front of the bookshelf.`
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                look: "The bookshelf is old but in excellent condition. Its dark, battered wood is beautiful. It's filled with books.",
                                use: "When touched, no book stands out. I feel like the solution this time must be somewhere else.",
                                go: "I'm already in front of the bookshelf.",
                                hit: "I don't want to hit the bookshelf.",
                                inspect: `"Vanités" is still present on the bookshelf. It doesn't seem necessary to reread it though.`,
                                wait: `I wait in front of the bookshelf. I feel like rereading "La Brume" (The Mist).`,
                                accept: "It's a bookshelf I inherited from my parents during my first move."
                            }
                        }
                    }, {    // book
                        name: "book",
                        determinant: "the ",
                        isLocated: false,
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: `"The Haze" is a small collection of poems with a red cover and gold-engraved letters.`,
                                use: "It is light, and its cover feels slightly rough to the touch.",
                                go: "I am in front of the book.",
                                hit: "I don't feel like breaking this book. It somehow looks precious.",
                                inspect: `Upon closer inspection, the subtitle of the book is "Poems from the Bramble Hill."`,
                                wait: "I wait in front of the book. Its sight makes me anxious, and I dare not take it to read."
                            },
                            opening: {
                                interaction: [
                                    { command: "use", state: "open", target: [4] },
                                    { command: "inspect", state: "opening", target: [1], condition: "closed" }
                                ],
                                look: `Upon closer inspection, it resembles a smaller version of "Vanités".`,
                                use: "I pick up the book and open it. I can now read a few passages.",
                                go: "I am in front of the book.",
                                hit: "I don't feel like breaking this book. Perhaps it will be useful to open the cabinet.",
                                inspect: `On the back cover, at the very bottom, written in small letters, is "In honor of a Lost Paradise, 1667". Could this be the cabinet's code?`,
                                wait: "I would like to read what the book has to offer, immerse myself in its verses."
                            },
                            open: {
                                interaction: [
                                    { command: "look", state: "final", target: [4], condition: 5 },
                                    { command: "inspect", state: "opening", target: [1], condition: "closed" }
                                ],
                                look: [
                                    `"We're dancing like flames, flickering in the night. We sway in time with the wind before melting away."`,
                                    `"You speak of a world I knew, before we lost the air. We all know the lie. You let it die."`,
                                    `"To let you in's to let me go, I walk away so you can grow."`,
                                    `"Summers dream and the night stands still, waiting patiently on the hill. Just take my hand. All these faces turn into sand."`,
                                    `"Where do you go when I close my eyes? What do you see looking back at me?"`
                                ],
                                use: "My hands tremble as I hold the book. It's as if it's forcing me to read it.",
                                go: "I am in front of the book.",
                                hit: "I don't feel like breaking this book.",
                                inspect: `On the back cover, at the very bottom, written in small letters, is "In honor of a Lost Paradise, 1667". Could this be the cabinet's code?`,
                                wait: "I try to understand this book, its subject, its themes..."
                            },
                            final: {
                                interaction: [{ command: "inspect", state: "opening", target: [1], condition: "closed" }],
                                collectible: { command: "look", coll: "readBook" },
                                look: "My eyes blink, and I snap out of the book's grip. I realize that I've let go of it, and it has fallen to the ground.",
                                use: "I dare not pick it up. I am disturbed by what I read...",
                                go: "The book is at my feet.",
                                hit: "Despite my unease, I don't feel like breaking this book.",
                                inspect: `On the back cover, at the very bottom, written in small letters, is "In honor of a Lost Paradise, 1667". Could this be the cabinet's code?`,
                                wait: "I prefer to move away from this book; I think I have seen everything there is to see."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accept", state: "open", target: [4] }],
                                look: `"The Haze" is a collection of poems. Its cover is red, with golden lettering.`,
                                use: "The book is light and pleasant to hold.",
                                go: "I am in front of the book.",
                                hit: "I don't want to break the book.",
                                inspect: `The subtitle has changed; it is now "Remedies for the pain of those who remain."`,
                                wait: "I stand speechless in front of the book, wondering why it affects me so much.",
                                accept: "If I remember correctly, my mother owned this book when I was a child. She would read it on the porch."
                            },
                            open: {
                                interaction: [
                                    { command: "accept", state: "opening", target: [0] },
                                    { command: "inspect", state: "opening", target: [1], condition: "closed" }
                                ],
                                look: `I feel like I recognize this copy of "The Haze." Could it be my mother's?`,
                                use: "The book feels small in my hands today; I remember it seemed big when I was a child.",
                                go: "I am in front of the book.",
                                hit: "I don't want to break the book.",
                                inspect: `There is a golden plastic bookmark in the book, which my mother used in her books.`,
                                wait: "I take the time to observe the book and the memories attached to it. I see my mother again.",
                                accept: "My mother read this book when she learned about my grandfather's passing. She sobbed as she read it."
                            }
                        }
                    }, {    // leave
                        name: "leave",
                        two: { text: "I leave the house. Here I am outside, in front of the broken door." },
                        three: { text: "I leave the house, leaving the door slightly ajar. I know my departure is only temporary." },
                        four: { text: "I need some time. I retrace my steps, and leave the house, leaving the door open." },
                        five: { text: "The front door is closed behind me. I can't open it. I have to continue my way." }
                    }
                ]
            }, {    // UPSTAIRS
                nane: "upstairs",
                texts: [
                    {
                        text: "I enter a dark bedroom.",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "In the middle of the room, there is a",
                        act: "bargain",
                        active: false
                    },
                    {
                        text: "bed.",
                        act: "bargain",
                        active: true
                    },
                    {
                        text: "Next to the bed, there is a",
                        act: "sad",
                        active: false
                    },
                    {
                        text: "lamp,",
                        act: "sad",
                        active: true
                    },
                    {
                        text: "turned off.",
                        act: "sad",
                        active: false
                    },
                    {
                        text: "Next to the entrance, there is a teddy bear",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "plush",
                        act: "regular",
                        active: true
                    },
                    {
                        text: "toy. The only source of light is the moon, which casts its weak light into the room through a hole in the ceiling on the left.",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "The",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "wall",
                        act: "regular",
                        active: true
                    },
                    {
                        text: "to my right is covered in various pasted papers.",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "There is a",
                        act: "sad",
                        active: false
                    },
                    {
                        text: "ladder",
                        act: "sad",
                        active: true
                    },
                    {
                        text: "lying down on the left, at the back of the room.",
                        act: "sad",
                        active: false
                    }
                ],
                items: [
                    {       // bed
                        name: "bed",
                        determinant: "the ",
                        isLocated: false,
                        three: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "inspect", state: "opening", target: [0, 1] }],
                                look: "It's a single bed, undone, that seems to have been abandoned for years...",
                                use: "I press my hand against the bed. It's damp and cold, probably rotten inside...",
                                go: "I'm in front of the bed, but I don't feel like getting in...",
                                hit: "I kick the bed. Nothing happens.",
                                inspect: "In one of the bed's legs, there's a hidden compartment with a small key. I pick it up."
                            },
                            opening: {
                                look: "The bed is dirty, and its sheets are undone. There's still a blanket and a pillow.",
                                use: "I run my hand over the duvet. It's moist.",
                                go: "I'm in front of the bed, but I don't really feel like getting in...",
                                hit: "I punch the pillow. A thick, damp sound occurs upon impact.",
                                inspect: "I don't see anything special apart from the compartment I found previously."
                            },
                            open: {
                                interaction: [{ command: "look", state: "final", target: [0] }],
                                look: "I'm overwhelmed by fatigue, and despite its appearance, the bed seems to welcome me.",
                                use: "I touch the bed once more... Its dampness repels me, but I'm so tired...",
                                go: "I'm in front of the bed... Do I dare to get in...?",
                                hit: "I hit the pillow.",
                                inspect: "The bed remains firm and should support the weight of a person despite its condition."
                            },
                            final: {
                                newAct: { command: "go" },
                                look: "I should get into bed; my eyelids are closing uncontrollably.",
                                use: "I place my palms against the mattress... It's damp but should be usable for sleeping.",
                                go: "I lie down in bed. Despite the cold and dampness, I close my eyelids and let the moon lull me.",
                                hit: "I don't think hitting it is necessary to sleep in it.",
                                inspect: "The bed should support my weight despite its condition."
                            }
                        },
                        four: {
                            isOpened: false,
                            closed: {
                                look: "The bed is in much better condition. It's still undone.",
                                use: "I stroke the mattress, which is now dry but still cold.",
                                go: "I'm not tired, so I won't get into bed.",
                                hit: "I don't think it would be useful for me to do that.",
                                inspect: "I take a closer look at the bed. No hidden compartment this time.",
                                wait: "I'm not sure what I'm waiting for."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accept", state: "open", target: [4] }],
                                look: "It's a much more modern-looking bed than before. At first glance, it looks like my bed, the one in my apartment.",
                                use: "The sheets are made, fresh, and changed. They are clean and soft to the touch.",
                                go: "I'm in front of the bed. I'm not tired, so I have no reason to get in.",
                                hit: "I don't want to hit it.",
                                inspect: "Upon closer inspection, I think I recognize the sheets...",
                                wait: "I'm waiting in front of the bed to see if I feel sleepy... I don't think I am.",
                                accept: "It's my bed, the one from my apartment. How did it end up here? Is this my room?"
                            }
                        }
                    }, {    // plush
                        name: "plush",
                        determinant: "the ",
                        isLocated: false,
                        three: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "It's a teddy bear wearing a small bowler hat. It's old and dirty.",
                                use: "When I take the teddy bear in my hands, it feels heavier than I expected.",
                                go: "The teddy bear is at my feet.",
                                hit: "I kick the teddy bear. It makes a metallic sound.",
                                inspect: "The teddy bear is patched up everywhere. It seems to have been through the hands of several children."
                            },
                            opening: {
                                interaction: [{ command: "inspect", state: "open", target: [1] }],
                                look: "It's an old and dirty teddy bear. Its head is partially detached from its body.",
                                use: "When I hold the teddy bear, it feels heavier than it should be. Does it hide something?",
                                go: "The teddy bear is at my feet.",
                                hit: "I throw the teddy bear at my feet, hoping it will break, but nothing happens.",
                                inspect: "I see a small compartment hidden in the teddy bear's neck. It is currently locked."
                            },
                            open: {
                                interaction: [{ command: "use", state: "open", target: [0] }, { command: "use", state: "final", target: [1] }],
                                look: "The small key I found in the bed seems to fit the compartment in the teddy bear.",
                                use: "I open the compartment. Inside, there's a note: 'Your journey is long, take time to rest.'",
                                go: "The teddy bear is at my feet.",
                                hit: "I hit the teddy bear, hoping to open the compartment. Nothing happens.",
                                inspect: "The compartment of the teddy bear is well-hidden under its neck, but I should be able to open it easily with the key."
                            },
                            final: {
                                look: "The teddy bear is resting against the bed. It almost looks like it's sleeping, with its head hanging to the side.",
                                use: "The message in the teddy bear said, 'Your journey is long, take time to rest.'",
                                go: "The teddy bear is at my feet.",
                                hit: "I don't think hitting the teddy bear would be useful.",
                                inspect: "I don't think there's anything else to see on the teddy bear."
                            }
                        },
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "The teddy bear is in better condition, but its head still tilts to the side.",
                                use: "The teddy bear is heavy again. Does it still hide something?",
                                go: "The teddy bear is at my feet.",
                                hit: "I hit the teddy bear, trying to retrieve what's inside, but nothing happens.",
                                inspect: "The teddy bear has another compartment behind its neck. I need to find the key to open it.",
                                wait: "I wait and think... Last time, I found the key in the bed."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [1, 4] }],
                                look: "The key I found behind the poster corresponds to the compartment in the teddy bear.",
                                use: "I turn the key. Another message this time: 'Join the stars.'",
                                go: "The teddy bear is at my feet.",
                                hit: "I don't think that would be useful.",
                                inspect: "The key is small and made of metal. It's attached to a keychain in the shape of a hat, just like the teddy bear wears.",
                                wait: "I don't think I need to wait."
                            },
                            open: {
                                look: "The teddy bear is in better condition, although its head still tilts to the side.",
                                use: "The message inside the teddy bear says, 'Join the stars.' What does that mean?",
                                go: "The teddy bear is at my feet.",
                                hit: "I don't think that would be useful.",
                                inspect: "I don't think there's anything else to see on the teddy bear.",
                                wait: "The message tells me to join the stars... Going to the roof would bring me closer to them."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "accept", state: "opening", target: [4] }],
                                look: "The teddy bear is in the same condition as before. It's old but well-maintained, with patches all over.",
                                use: "I hold it. This time, its weight feels normal. There's probably no compartment.",
                                go: "The teddy bear is at my feet.",
                                hit: "It's already damaged enough.",
                                inspect: "It doesn't have a compartment behind its neck. It's just a simple teddy bear.",
                                wait: "While waiting, I realize that I know this teddy bear. It used to be mine when I was a child.",
                                accept: "It was my mother's teddy bear before it became mine. It accompanied me until I was 12 years old."
                            }
                        }
                    }, {    // wall
                        name: "wall",
                        determinant: "the ",
                        isLocated: false,
                        three: {
                            isOpened: false,
                            closed: {
                                look: "The wall is covered with posters, newspaper articles, and scattered letters.",
                                use: "I don't think the wall is of much use to me.",
                                go: "I'm in front of the wall.",
                                hit: "I punch the wall. I just managed to hurt my fingers.",
                                inspect: "The newspapers talk about everything and nothing. The most recent one is dated from " + today + "."
                            }
                        },
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "The wall is still covered with posters, newspaper articles, and various letters.",
                                use: "I'm not sure what I can do with this wall. Some of the posters feel sticky to the touch.",
                                go: "I'm in front of the wall.",
                                hit: "I don't think that will bring me anything except a sore hand.",
                                inspect: "The newspapers talk about everything and nothing. The most recent one is dated from " + today + ".",
                                wait: "I wait in front of the wall. I think. Could there be a clue on one of these stuck papers?"
                            },
                            opening: {
                                interaction: [{ command: "inspect", state: "open", target: [2] }],
                                look: "The lamp's light highlights an article about a traffic jam on a highway.",
                                use: "The article is highlighted with green fluorescent paint, which still feels fresh to the touch.",
                                go: "I'm in front of the wall.",
                                hit: "I don't think that will bring me anything except a sore hand.",
                                inspect: "It's the most recent article on the wall. It's dented in the center, in the shape of a small key...",
                                wait: "I take the time to read the article. It mentions a car accident causing a traffic jam."
                            },
                            open: {
                                interaction: [{ command: "use", state: "opening", target: [1] }, { command: "use", state: "final", target: [2] }],
                                look: "Now that I've noticed the key-shaped dent, I can't see anything else.",
                                use: "I tear the newspaper page to retrieve the key behind it. I keep it with me.",
                                go: "I'm in front of the wall.",
                                hit: "I don't think that will bring me anything except a sore hand.",
                                inspect: "The key cut out under the article is small, just like the one I found last time in the bed.",
                                wait: "How can a newspaper article be dated today?"
                            },
                            final: {
                                look: "The torn article stands out in the midst of the collage mess on the wall.",
                                use: "I don't think there's anything else to do here.",
                                go: "I'm in front of the wall.",
                                hit: "I don't think that will bring me anything except a sore hand.",
                                inspect: "The key was under the photo in the article. I didn't think to look at it before tearing it.",
                                wait: `There are posters of music bands. I recognize some of them, like "Epoch" and "Spectral Wound".`
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                look: "The wall is still covered. I look to see if any article catches my attention. Nothing for now.",
                                use: "I don't think the wall is of much use to me.",
                                go: "I'm in front of the wall.",
                                hit: "I don't think that will bring me anything except a sore hand.",
                                inspect: "Several articles talk about an accident on a highway. I get a headache when I read them.",
                                wait: "I reflect on the articles about an accident on the highway. Why this specific topic?",
                                accept: "I have the terrible feeling of being connected to these newspaper articles about an accident. Yet, I'm fine, right?"
                            }
                        }
                    }, {    // lamp
                        name: "lamp",
                        determinant: "the ",
                        isLocated: false,
                        four: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "open", target: [3] }],
                                look: "It's a lamp on a tall wooden stand. It points towards the wall. It's turned off.",
                                use: "I pull the string hanging from the lamp. It turns on.",
                                go: "I'm in front of the lamp.",
                                hit: "I don't want to break this potential light source.",
                                inspect: "There's nothing special about this lamp. Its shade is made of semi-transparent beige fabric.",
                                wait: "I wait for a moment in the moon's dim light. I can turn on the lamp to see more clearly."
                            },
                            open: {
                                interaction: [
                                    { command: "use", state: "closed", target: [3] },
                                    { command: "use", state: "closed", target: [2], condition: "opening" },
                                    { command: "wait", state: "opening", target: [2], condition: "closed" }
                                ],
                                look: "The light points towards the wall. It illuminates the posters and newspaper articles attached to it.",
                                use: "I pull the lamp's string again. It turns off.",
                                go: "I'm in front of the lamp.",
                                hit: "I don't want to break this light source.",
                                inspect: "There's nothing special about this lamp. Its stand is made of light wood, maybe birch.",
                                wait: "With the light on, I notice an article highlighted on the wall with green paint, like a marker."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "use", state: "open", target: [3] }],
                                look: "The lamp hasn't changed since my last visit.",
                                use: "I pull the lamp's string. It turns on.",
                                go: "I'm in front of the lamp.",
                                hit: "I don't want to break it.",
                                inspect: "I don't see anything special about this lamp.",
                                wait: "I wait for a moment in the dim light. I could turn on the lamp to see better.",
                                accept: "It's the lamp I have in my apartment next to my bookshelf. Why is it here?"
                            },
                            open: {
                                interaction: [{ command: "use", state: "closed", target: [3] }],
                                look: "The lamp hasn't changed since my last visit.",
                                use: "I pull the lamp's string. It turns off.",
                                go: "I'm in front of the lamp.",
                                hit: "I don't want to break it.",
                                inspect: "I don't see anything special about this lamp.",
                                wait: "I wait for a moment. I don't see anything special on the wall this time.",
                                accept: "It's the lamp I have in my apartment next to my bookshelf. Why is it here?"
                            }
                        }
                    }, {    // ladder
                        name: "ladder",
                        determinant: "the ",
                        isLocated: false,
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "use", state: "opening", target: [4] }],
                                look: "The ladder is lying at the back of the room. It's made of wood but still looks sturdy.",
                                use: "I straighten the ladder and lean it against the back wall.",
                                go: "I'm near the ladder. It's within my reach.",
                                hit: "I don't see the point in hitting a ladder...",
                                inspect: "It's a wooden ladder held together by a few nails on the sides. Not the most reassuring if I have to climb.",
                                wait: "I wait in front of the ladder. What if I put it against the back wall?"
                            },
                            opening: {
                                interaction: [{ command: "use", state: "closed", target: [4] }],
                                look: "The ladder is placed against the back wall of the room. It doesn't lead anywhere, just placed here.",
                                use: "I take the ladder again and put it back where I found it.",
                                go: "I'm near the ladder. It's within my reach.",
                                hit: "I don't see the point in hitting a ladder...",
                                inspect: "It's a wooden ladder held together by a few nails on the sides. Not the most reassuring if I have to climb.",
                                wait: "After giving it some thought, I don't think this is a good place to climb anywhere."
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [4] }],
                                look: "The ladder is not in the right place. I need to put it where there's a hole in the roof.",
                                use: "I take the ladder and move it to the hole in the ceiling. There, I lean it against the wall, straight.",
                                go: "I'm near the ladder. It's within my reach.",
                                hit: "I don't see the point in hitting a ladder...",
                                inspect: "Despite its unreliable appearance, I think the ladder should hold my weight.",
                                wait: "I wait in front of the ladder. What if I put it against the wall, under the hole in the ceiling?"
                            },
                            final: {
                                interaction: [{ command: "use", state: "open", target: [4] }],
                                win: { command: "go" },
                                look: "The ladder is placed under the hole that leads to the ceiling. That way, I can access the roof.",
                                use: "I reconsider and fold the ladder before putting it back where I took it from.",
                                go: "The ladder creaks with each step as I climb the levels one by one until I reach the roof.",
                                hit: "I don't see the point in hitting a ladder...",
                                inspect: "Despite its unreliable appearance, I think the ladder should hold my weight.",
                                wait: "I can easily climb onto the roof now that the ladder is placed here."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "use", state: "opening", target: [4] }],
                                look: "The ladder is lying at the back of the room. It's made of metal and looks solid.",
                                use: "I straighten the ladder and lean it against the back wall.",
                                go: "I'm near the ladder. It's within my reach.",
                                hit: "The ladder allows me to progress, why try to break it?",
                                inspect: "It's a ladder, I don't know what else to observe.",
                                wait: "I can place the ladder wherever I want. I should think about where before doing so.",
                                accept: "It's just a ladder like any other, I don't think it's particularly important to me."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "closed", target: [4] }],
                                look: "The ladder is placed against the back wall of the room. It doesn't lead anywhere, just placed here.",
                                use: "I take the ladder again and put it back where I found it.",
                                go: "I'm near the ladder. It's within my reach.",
                                hit: "The ladder allows me to progress, why try to break it?",
                                inspect: "It's a ladder, I don't know what else to observe.",
                                wait: "The ladder is not placed correctly and is useless to me. I should put it back.",
                                accept: "It's just a ladder like any other, I don't think it's particularly important to me."
                            },
                            open: {
                                interaction: [{ command: "use", state: "final", target: [4] }],
                                look: "The ladder is not in the right place. I need to put it where there's a hole in the roof.",
                                use: "I take the ladder and move it to the hole in the ceiling. There, I lean it against the wall, straight.",
                                go: "I'm near the ladder. It's within my reach.",
                                hit: "The ladder allows me to progress, why try to break it?",
                                inspect: "This ladder is a key element to continue my path.",
                                wait: "I can place the ladder wherever I want. I should put it under the hole in the roof.",
                                accept: "It's an important tool for the next step, ultimately the end of my adventure. I'm glad it made my journey easier."
                            },
                            final: {
                                interaction: [{ command: "use", state: "open", target: [4] }],
                                win: { command: "go" },
                                look: "The ladder is placed under the hole that leads to the ceiling. That way, I can access the roof.",
                                use: "I reconsider and fold the ladder before putting it back where I took it from.",
                                go: "I'm near the ladder. It's within my reach.",
                                hit: "The ladder allows me to progress, why try to break it?",
                                inspect: "This ladder is a key element to continue my path.",
                                wait: "I can easily climb onto the roof now that the ladder is placed here.",
                                accept: "It's an important tool for the next step, ultimately the end of my adventure. I'm glad it made my journey easier."
                            }
                        }
                    }, {    // leave
                        name: "leave",
                        three: { text: "I go back down to the office. I'll come back to the room later..." },
                        four: { text: "I need to take a step back. I go down to the office to get some fresh air." },
                        five: { text: "The stairway door is closed behind me. I don't have the possibility to go back." }
                    }
                ]
            }, {    // ROOF
                name: "roof",
                texts: [
                    {
                        text: "I am on the roof of the house. A cool breeze runs down my neck.",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "The",
                        act: "sad",
                        active: false
                    },
                    {
                        text: "moon",
                        act: "sad",
                        active: true
                    },
                    {
                        text: "illuminates what surrounds me.",
                        act: "sad",
                        active: false
                    },
                    {
                        text: "A large altar is arranged on the roof. There is a",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "basin",
                        act: "regular",
                        active: true
                    },
                    {
                        text: "filled with clear water in its center. Beside it, a",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "candle",
                        act: "regular",
                        active: true
                    },
                    {
                        text: "and a lighter on the right, and a car-shaped",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "figurine",
                        act: "regular",
                        active: true
                    },
                    {
                        text: "on the left.",
                        act: "regular",
                        active: false
                    },
                    {
                        text: "Just behind me, the house's",
                        act: "sad",
                        active: false
                    },
                    {
                        text: "chimney.",
                        act: "sad",
                        active: true
                    },
                    {
                        text: "It is surprisingly warm here, like on a summer evening. Lethargy arises within me.",
                        act: "accept",
                        active: false
                    }
                ],
                items: [
                    {       // moon
                        name: "moon",
                        determinant: "the ",
                        isLocated: true,
                        four: {
                            isOpened: false,
                            closed: {
                                look: "The moon shines with its pale light. It illuminates the surroundings. I realize that only this house is in sight.",
                                use: "Touching the moon... I wish I could have been an astronaut.",
                                go: "Impossible, it's the moon.",
                                hit: "It may be a little too far to do that...",
                                inspect: "The moon's craters are visible from here. The moon looks peaceful despite its marks.",
                                wait: "I observe the moon. By staring at it, I feel lighter."
                            }
                        },
                        five: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "wait", state: "open", target: [0], condition: true }],
                                look: "The moon reigns in the middle of the sky, its beauty is matched only by its size.",
                                use: "Touching the moon... Unfortunately, I'm not an astronaut.",
                                go: "Impossible, it's the moon.",
                                hit: "I don't feel the need to do that.",
                                inspect: "The moon is a celestial body often considered sacred. Seeing it alone in the sky, I understand why.",
                                wait: ["Observing it, I realize that I probably still have things to do here before moving on.", "I feel like the moon is calling me. I must gaze at it for even longer..."],
                                accept: "The moon is sad. It has a serious look. Its bluish hues are melancholic."
                            },
                            open: {
                                win: { command: "wait" },
                                look: "The moonlight illuminates the surroundings. There is nothing here except this house.",
                                use: "Touching the moon... It was one of my dreams as a child. But I ended up working in finance.",
                                go: "Impossible, it's the moon.",
                                hit: "I don't feel the need to do that.",
                                inspect: "The moon carries hope, a promise of tomorrow. But this time it doesn't seem auspicious to me...",
                                wait: "By gazing at it, it fills my field of vision. I end up being blinded by its light. Lethargy takes hold of me completely.",
                                accept: "The moon is a symbol of cyclical change. It is full tonight. Does that mean something?"
                            }
                        }
                    }, {    // basin
                        name: "basin",
                        determinant: "the ",
                        isLocated: false,
                        four: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "It's a basin carved into the stone of the altar-like structure on the roof. There is clear water in it.",
                                use: "The water is cold. It ripples gently as I move my hand.",
                                go: "I'm in front of the basin.",
                                hit: "I press my palm against the water in the basin. It splashes me a little.",
                                inspect: "I don't see anything special in the water of the basin.",
                                wait: "What are this basin and altar doing here? On a roof? It's absurd."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [1] }],
                                look: "The basin is filled with water. I could wash my hands inside it.",
                                use: "I dip my soot-covered hands into the basin. Its water becomes cloudy, and its color turns closer to anthracite.",
                                go: "I'm in front of the basin.",
                                hit: "I don't think it's the right time to splash myself with cold water.",
                                inspect: "The water should be clean enough to wipe the soot off my hands.",
                                wait: "I could wash my hands in the basin. It's not like anyone else will use it for something else."
                            },
                            open: {
                                newAct: { command: "use" },
                                look: "The water now ripples on its own, as if it comes to life in the basin, despite its black color.",
                                use: "I plunge my face into the basin. I find myself submerged in darkness. I feel like the world around me is moving. I open my eyes underwater, and suddenly...",
                                go: "I'm in front of the basin.",
                                hit: "And get dirty by splashing myself with soot? I don't think so.",
                                inspect: "The water has turned black with soot. It's almost opaque now.",
                                wait: "The ripples of the water are mesmerizing. I almost feel like diving into it."
                            }
                        },
                        five: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "accept", state: "opening", target: [1] }],
                                look: "The basin still contains water. It's clear again, with no trace of the soot from my last visit.",
                                use: "The water is cold to the touch. It doesn't seem different from before.",
                                go: "I'm in front of the basin.",
                                hit: "I don't feel like making a mess by splashing water around.",
                                inspect: "There are faint engravings on the bottom of the water. They depict the night sky with the moon.",
                                wait: "What are this basin and altar doing here? On a roof? It's absurd.",
                                accept: "I lean towards the basin. The air feels warmer than usual. The water attracts me. My throat is dry."
                            },
                            opening: {
                                collectible: { command: "use", coll: "drankWater" },
                                interaction: [{ command: "use", state: "open", target: [1] }],
                                look: "The water is perfectly transparent. It slightly reflects the moon.",
                                use: "I cup my hands and scoop up fresh water, which I drink. It feels refreshing.",
                                go: "I'm in front of the basin.",
                                hit: "I don't feel like making a mess by splashing water around.",
                                inspect: "The water is clear and looks pure. It seems fresh, like spring water.",
                                wait: "There must be a reason for this altar here. So far, the objects have generally made sense.",
                                accept: "I lean towards the basin. My throat is dry. So dry..."
                            },
                            open: {
                                look: "The water I drank is perfectly transparent. It slightly reflects the moon.",
                                use: "I have already had a drink. No need to drink too much.",
                                go: "I'm in front of the basin.",
                                hit: "I don't feel like making a mess by splashing water around.",
                                inspect: "The water I drank is clear and looks pure. It seems fresh, like spring water.",
                                wait: "I don't think I will find any meaning in this basin or altar.",
                                accept: "I don't know why this basin is here, but it provided water when I was thirsty. That's enough for me."
                            }
                        }
                    }, {    // candle
                        name: "candle",
                        determinant: "the ",
                        isLocated: false,
                        four: {
                            isFinale: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "use", state: "opening", target: [2] }],
                                look: "It's an extinguished candle. It's white and long. There is a lighter next to it.",
                                use: "I grab the lighter and take it with me.",
                                go: "I'm in front of the candle and the lighter.",
                                hit: "I don't see what that would bring me...",
                                inspect: "The wax is off-white, slightly translucent. You can see the wick through it if you concentrate.",
                                wait: "I think for a moment. The lighter is right there. I could take it."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [2] }, { command: "use", state: "opening", target: [4] }],
                                look: "It's an extinguished candle. It's white and long. I have the lighter in hand, I could light it.",
                                use: "I take the lighter and flick it. I light the candle and hold it in my hand. I can illuminate objects with it.",
                                go: "I'm in front of the candle, the lighter is in my pocket.",
                                hit: "I don't see what that would bring me...",
                                inspect: "The wax is off-white, slightly translucent. You can see the wick through it if you concentrate.",
                                wait: "I take a couple of minutes to think. If I lit the candle, I could illuminate the inside of the fireplace."
                            },
                            open: {
                                look: "The candle burns with a flickering flame, swaying with the air currents.",
                                use: "I already took the candle. I can use it to illuminate objects.",
                                go: "I'm in front of the candle, the lighter is in my pocket.",
                                hit: "I don't see what that would bring me... and I prefer not to take any risks with fire...",
                                inspect: "The flame is bluish at its base, then becomes white and transitions to orange-red.",
                                wait: "What to do with this lit candle? After some thought, I could illuminate the fireplace and see if it contains something."
                            },
                            final: {
                                look: "The candle burns with a flickering flame, swaying with the air currents.",
                                use: "I already took the candle.",
                                go: "I'm in front of the candle, the lighter is in my pocket.",
                                hit: "I don't see what that would bring me... and I prefer not to take any risks with fire...",
                                inspect: "The flame is bluish at its base, then becomes white and transitions to orange-red.",
                                wait: "I stop to think. I already illuminated the fireplace with it. I don't think the candle is of much use to me beyond that."
                            }
                        },
                        five: {
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "use", state: "opening", target: [2] }],
                                look: "The candle is extinguished and brand new, as if I hadn't lit it during my previous visit.",
                                use: "I grab the lighter and take it with me.",
                                go: "I'm in front of the candle and the lighter.",
                                hit: "I don't think it would be useful to me.",
                                inspect: "The wax is slightly translucent. A Christian cross is engraved at the base of the candle.",
                                wait: "I think for a moment. The lighter is right there. I could take it.",
                                accept: "It's a candle that you would typically find in a church, used to make a wish or say a prayer."
                            },
                            opening: {
                                interaction: [{ command: "use", state: "open", target: [2] }],
                                collectible: { command: "use", coll: "litCandle" },
                                look: "The candle is extinguished and brand new, as if I hadn't lit it during my previous visit.",
                                use: "I grab the lighter and with a quick flick of my thumb, a flame emerges. I light the candle.",
                                go: "I'm in front of the candle, the lighter is in my pocket.",
                                hit: "I don't think it would be useful to me.",
                                inspect: "The wax is slightly translucent. A Christian cross is engraved at the base of the candle.",
                                wait: "As I reflect, I wonder: is it worth lighting the candle again?",
                                accept: "An object of prayer... what is it doing here? I'm baptized, but not necessarily religious. If this place is connected to me, I don't know why it's here."
                            },
                            open: {
                                look: "The candle burns with a flickering flame, swaying with the air currents.",
                                use: "I don't think I need to illuminate anything this time.",
                                go: "I'm in front of the candle, the lighter is in my pocket.",
                                hit: "I don't think it would be useful to me. Besides, I wouldn't want to take any risks with fire.",
                                inspect: "On the Christian cross engraved at the base of the candle, there is a letter:",
                                wait: "I wait in front of the lit candle, its flame consuming 1cm of wax. I won't wait until it's completely consumed.",
                                accept: "A lit candle on an altar, illuminated by moonlight... what a gloomy image."
                            }
                        }
                    }, {    // figurine
                        name: "figurine",
                        determinant: "the ",
                        isLocated: false,
                        four: {
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "hit", state: "open", target: [3] }],
                                look: "It's a green car-shaped figurine. A somewhat dated bottle green.",
                                use: "The car is about 20 centimeters long and weighs around 1kg. The figurine is quite heavy.",
                                go: "I'm in front of the figurine. It's within my reach.",
                                hit: "What if I...? I grab the car and hit it against the altar. It's now all dented.",
                                inspect: "It's a Renault Clio from the 1990s. It looks like the car I had when I started driving.",
                                wait: "It's a car figurine... I don't see what to do with it."
                            },
                            open: {
                                look: "The car is broken as if another vehicle crashed into its side. It's bent along its length.",
                                use: "I pick up the dented car in my hand. It seems much more fragile despite its weight.",
                                go: "I'm in front of the figurine. It's within my reach.",
                                hit: "It's already broken... I don't see the point of destroying it further.",
                                inspect: "The passenger door is dented from the impact, and the windshield is shattered. It's chilling.",
                                wait: "I've already broken this figurine... I don't see what to do with it."
                            }
                        },
                        five: {
                            isFinal: false,
                            isOpened: false,
                            closed: {
                                interaction: [{ command: "hit", state: "open", target: [3], condition: 3 }],
                                look: "The figurine is a more modern model, a gray Toyota Yaris.",
                                use: "The figurine is about 15-20 centimeters long and weighs around 1-1.5kg. It's surprisingly heavy.",
                                go: "I'm in front of the figurine. It's within my reach.",
                                hit: [
                                    "I take the figurine and hit the hood first against the altar. The bumper comes off, the hood bends. I'm tempted to do it again.",
                                    "I throw the car against the altar once more. Its windshield shatters. I'm compelled to break it even more. Anger takes over me.",
                                    "I pick up the wreck that's the figurine and smash it against the ground. One of the front wheels dislocates, while the front license plate comes off. Again."
                                ],
                                inspect: "It's the model of car I drive today. The figurine has the same color as my car. It's a bit unsettling.",
                                wait: "As I try to wait and reflect, I have the urge to seize this car and crush it to pieces.",
                                accept: "It's the same car that I usually drive. I bought it used a few years ago. It's a good model."
                            },
                            open: {
                                interaction: [{ command: "hit", state: "final", target: [3] }],
                                collectible: { command: "hit", coll: "brokenCar" },
                                look: "The car is in a terrible condition. But I can still give it the finishing blow.",
                                use: "I pick up the broken car in my hand. Crumbs fall off as I lift it. My anger is still there. I want to throw it one last time.",
                                go: "I'm in front of the figurine. It's within my reach.",
                                hit: "I grab it one last time and throw it with all my might. It crashes violently at my feet. It's nothing but ruins now.",
                                inspect: "The front of the car is pushed backward. If there were a driver, they would have almost no chance of survival.",
                                wait: "I can't think of anything else but giving the finishing blow to this figurine. Destroying it.",
                                accept: "Why am I compelled to gradually destroy it? Anger boils within me."
                            },
                            final: {
                                look: "The car is a wreck. There's nothing left to destroy. It's gone. It looks like it was crushed by a truck.",
                                use: "I pick up the wreckage in my hand. Crumbs fall off as I lift it.",
                                go: "I'm in front of the figurine. It's within my reach.",
                                hit: "I'm no longer angry.",
                                inspect: "The figurine is no longer a car but a deformed mass of bodywork with two rear wheels...",
                                wait: "I... I don't know what to think, even when taking the time to wait and reflect.",
                                accept: "Why do I have this profound uneasiness after my black anger? I have a bad feeling now."
                            }
                        }
                    }, {    // chimney
                        name: "chimney",
                        determinant: "the ",
                        isLocated: false,
                        four: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                look: "It's a red brick chimney. There's nothing special about it.",
                                use: "I touch the outside of the chimney. The bricks are rough under my fingers.",
                                go: "I'm in front of the chimney.",
                                hit: "... I don't think it's useful to do that.",
                                inspect: "It's too dark to see anything except its surface.",
                                wait: "I think for 5 minutes. I would need a source of light to observe it better."
                            },
                            opening: {
                                interaction: [{ command: "wait", state: "open", target: [4] }],
                                look: "By pointing the lit candle inside the chimney, I notice that there's a lot of soot.",
                                use: "I don't see why I would dirty my hands by touching the soot.",
                                go: "I'm in front of the chimney.",
                                hit: "... I don't think it's useful to do that.",
                                inspect: "Lower down in the chimney, I notice that the soot is clogging the flue. It must not have been cleaned in ages.",
                                wait: "Like a void calling me, I'm tempted to immerse my fingers in the soot."
                            },
                            open: {
                                interaction: [
                                    { command: "use", state: "final", target: [2, 4] },
                                    { command: "use", state: "opening", target: [1] }
                                ],
                                look: "With the lit candle inside the chimney, I see the thick, greasy soot covering its walls.",
                                use: "One by one, I rub my hands against the greasy walls of the chimney, covering them with a thick layer of soot.",
                                go: "I'm in front of the chimney.",
                                hit: "... I don't think it's useful to do that.",
                                inspect: "The soot is anthracite, and dust has stuck to it. It seems flammable, so I should be careful with the candle.",
                                wait: "I'm tempted to rub my hands in the chimney to immerse them in the soot."
                            },
                            final: {
                                look: "The chimney is not particularly notable except for its very dirty interior.",
                                use: "I've already coated my hands in soot once, I don't think adding another layer will benefit me.",
                                go: "I'm in front of the chimney.",
                                hit: "... I don't think it's useful to do that.",
                                inspect: "There's nothing more to observe. It's a dirty chimney. End of the story.",
                                wait: "I don't think this chimney will bring me anything."
                            }
                        },
                        five: {
                            isOpened: true,
                            open: {
                                look: "It's the same chimney as last time, although slightly cleaner in appearance and painted gray.",
                                use: "The red bricks are covered with a thin layer of concrete or maybe gray paint.",
                                go: "I'm in front of the chimney.",
                                hit: "... I don't think it's useful to do that.",
                                inspect: "It's a chimney. It doesn't seem to have anything special, and I don't want to dirty my hands again.",
                                wait: "I don't think this chimney will bring me anything.",
                                accept: "I don't see anything special about this chimney."
                            }
                        }
                    }, {    // leave
                        name: "leave",
                        four: { text: "I climb down the ladder and return to the room. Did I forget something down there?" },
                        five: { text: "As I turn around, the hole in the roof through which I climbed is closed, and the ladder is no longer there. Why? I'm stuck up here." }
                    }
                ]
            }, {    // GARDEN
                name: "garden",
                texts: [
                    {
                        text: "The light blinds me before fading away. A warmth envelops me, contrasting with the coolness of the house until now. Where am I?",
                        act: "regular",
                        active: false
                    }, {
                        text: "It looks like a",
                        act: "regular",
                        active: false
                    }, {
                        text: "garden,",
                        act: "regular",
                        active: true
                    }, {
                        text: "but not the one from the house. Behind me, the house has actually disappeared.",
                        act: "regular",
                        active: false
                    }, {
                        text: "On a small wooden table, there is a",
                        act: "accept",
                        active: false
                    }, {
                        text: "letter,",
                        act: "accept",
                        active: true
                    }, {
                        text: "folded in half.",
                        act: "accept",
                        active: false
                    }, {
                        text: "At the back of the garden, under a weeping willow tree, there is a television",
                        act: "regular",
                        active: false
                    }, {
                        text: "screen,",
                        act: "regular",
                        active: true
                    }, {
                        text: "quite old but still functioning.",
                        act: "regular",
                        active: false
                    }, {
                        text: "I feel strangely calm, at peace with myself and the world around me.",
                        act: "accept",
                        active: false
                    }
                ],
                items: [
                    {       // garden
                        name: "garden",
                        determinant: "the ",
                        isLocated: true,
                        five: {
                            isOpened: false,
                            closed: {
                                look: "It's a peaceful garden. The ground is covered with grass and daisies. A few daffodils are scattered here and there.",
                                use: "I touch the ground of the garden. It's slightly damp, as if the morning dew is still present.",
                                go: "I'm already in the garden.",
                                hit: "I have nothing to hit or break here. Nature, on the contrary, soothes me.",
                                inspect: "At the back, a very large weeping willow tree dominates the rest of the garden. Its branches sway slowly with the breeze.",
                                wait: "I take the time to breathe. The garden is beautiful. I feel good when I'm inside.",
                                accept: "This garden reminds me of my parents' garden in the countryside. There was a nearby stream to the south."
                            },
                            open: {
                                collectible: { command: "accept", coll: "acceptedGarden" },
                                look: "After reading the letter, the garden seems to shrink little by little. It closes in on me.",
                                use: "I stroke the weeping willow tree. Its rough bark calms me after the shock of the letter.",
                                go: "I'm already in the garden.",
                                hit: "I have no intention of breaking anything.",
                                inspect: "The weeping willow tree is very old. Its branches almost touch the ground. It is majestic and reigns over the rest of the garden.",
                                wait: "I spend a few minutes leaning against the gigantic tree. It calms me.",
                                accept: "The garden around me gradually disappears. It becomes more and more constricted. Perhaps it's my consciousness drifting away. Is my end near?"
                            }
                        }
                    }, {    // letter
                        name: "letter",
                        determinant: "the ",
                        isLocated: false,
                        five: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "use", state: "opening", target: [1] }],
                                look: "It's a folded letter, sealed with a red wax stamp.",
                                use: "I delicately open the letter by tearing the wax.",
                                go: "I'm in front of the letter.",
                                hit: "I don't see the point. I don't want to crumple or tear the letter.",
                                inspect: "The crest is divided into four with an animal in the center brandishing a hammer.",
                                wait: "Taking a few moments to think, I wonder what the letter contains.",
                                accept: "It's the crest of my family, representing a bear with a hammer because my ancestors were blacksmiths."
                            },
                            opening: {
                                interaction: [{ command: "look", state: "open", target: [0, 1] }],
                                triggerEvent: { command: "look", name: "readingLetter" },
                                collectible: { command: "look", coll: "readLetter" },
                                look: [
                                    "Dear me,",
                                    "You must have many questions. Let me answer them here.",
                                    "First of all, you've probably realized that the house you've been visiting all this time is indeed yours. Well, ours. The one we grew up in, together.",
                                    "Its state of ruin is due to the fact that we stopped thinking about it during our adult life. We were living our lives, we didn't need to remember. We had plenty of concerns; work, love, our friends, our family...",
                                    "Forgetting is regrettable. The absence of thoughts about what we've experienced, what has shaped us. Our concerns are now behind us, and we've finally been able to remember. We no longer have to worry about what distracted us.",
                                    "I have important and heartbreaking news to tell you. You're no longer breathing, the air has been stolen from you. You are dying.",
                                    "Well, we are, both of us, at the same time. You had a car accident. The doctors and the police will say that you died on the spot.",
                                    "But right now, you're not dead yet. As the world around you disappears and contorts, your neurons fire one last time in an explosion of endorphins, memories, regrets, thoughts, colliding and merging with each other.",
                                    "The electrons in your body start to dance with those in the ground beneath our feet and the sky above us. One might think it's the end of everything.",
                                    "But there's no moment when we begin and end. We are energy, not just a memory. Our choices, our name, our personality, all of that came after us. We were there before all of that, and we will continue to exist after.",
                                    "Forgetting is regrettable, but it's not the end of us, of our existence, of our presence.",
                                    "There is no time. There is no death either, at least not as we understand it. Life is a dream. It's a wish. Fulfilled again and again, and again, and again, and so on, for eternity.",
                                    "We are all that wish. We are all things. We are all elements. So, there is no need to be afraid.",
                                    "Our atoms are everywhere. Despite our death, we are still somehow filled with life. We have joined the stars and the rest of the universe.",
                                    "I will always be by your side, "
                                ],
                                use: "I have already opened the letter. As I hold it in my hand, it feels light.",
                                go: "I'm in front of the letter.",
                                hit: "I don't see the point. I'm not angry, I'm in shock.",
                                inspect: "The handwriting is mine. The letter is also signed by me.",
                                wait: "I take a few minutes in front of the open letter. It invites me to read it.",
                                accept: "It's a letter that I apparently wrote. How and when, I don't know."
                            },
                            open: {
                                interaction: [{ command: "wait", state: "final", target: [1] }],
                                look: "The letter is on the ground. I dropped it after reading it. I got scared of what it contained.",
                                use: "I dare not touch it after what it announces. My breathing is erratic.",
                                go: "The letter is at my feet.",
                                hit: "I don't see the point. I don't want to crumple or tear the letter.",
                                inspect: "The letter lies amidst the grass and daisies. It looks so... peaceful, amidst the garden.",
                                wait: "I catch my breath. I'm dying, but I'm still alive in this moment. I have no choice but to accept my fate.",
                                accept: "I will be... dead? Or at least dying? But why... and how? A tear rolls down my right cheek."
                            },
                            final: {
                                collectible: { command: "accept", coll: "acceptedLetter" },
                                look: "The letter is still on the ground. I look at my two hands. Are they... becoming transparent?",
                                use: "I wipe my tears, facing this letter that has shaken me so much.",
                                go: "I'm in front of the letter.",
                                hit: "I don't see the point. I don't want to crumple or tear the letter.",
                                inspect: "I feel my body becoming lighter. I don't have much time left. The tips of my fingers are slightly translucent.",
                                wait: "I wait a few minutes, catch my breath. Fatigue runs through me.",
                                accept: "It must be my subconscious speaking to me in this letter. I'm going to die. It's absurd, yet a sense of tranquility gradually takes over me."
                            }
                        }
                    }, {    // screen
                        name: "screen",
                        determinant: "the ",
                        isLocated: true,
                        five: {
                            isFinal: false,
                            isOpened: false,
                            isOpening: false,
                            closed: {
                                interaction: [{ command: "look", state: "opening", target: [2], condition: 5 }],
                                look: [
                                    "The screen is on and showing images at a frantic pace. By focusing, I manage to see a few of them.",
                                    "I see myself as a child, sitting at school, raising my hand to answer a question. The teacher turns around as I blink, and the moment has already passed.",
                                    "I see myself around the age of 13. My first love, the person who left a mark on me towards the end of my schooling. The image changes almost immediately.",
                                    "I see myself at my 18th birthday party. Adulthood at last! I can barely make out the faces of my friends. The screen moves on to something else.",
                                    "I see myself at work. It must have been my first day, I dressed up nicely out of enthusiasm. The image skips again."
                                ],
                                use: "There's no button to turn it off or change the source of the images. There's nothing indicating where they come from either.",
                                go: "I'm facing the TV screen.",
                                hit: "I don't feel like breaking the screen.",
                                inspect: "The screen has no branding. It doesn't have a particular design that could indicate its origins.",
                                wait: "I wait in front of the screen as images flash at high speed. Moments from a life. My life.",
                                accept: "The screen shows my memories, the life I've lived. It starts from the very beginning and goes through everything."
                            },
                            opening: {
                                interaction: [{ command: "look", state: "open", target: [2] }],
                                collectible: { command: "look", coll: "lookedScreen" },
                                look: "I see myself driving a car on the highway. It's raining, the road is wet. A turn. Aquaplaning. And the screen turns off.",
                                use: "There's no button to turn it off or change the source of the images. There's nothing indicating where they come from either.",
                                go: "I'm facing the TV screen.",
                                hit: "I don't feel like breaking the screen.",
                                inspect: "The screen has no branding. It doesn't have a particular design that could indicate its origins.",
                                wait: "I wait in front of the screen as images flash at high speed. Moments from a life. My life.",
                                accept: "The screen shows my memories, the life I've lived. It starts from the very beginning and goes through everything."
                            },
                            open: {
                                interaction: [{ command: "wait", state: "final", target: [2], condition: true }],
                                look: "The screen is off. It no longer displays any image.",
                                use: "I touch the screen. Tap it lightly as if it would bring back the image... Nothing.",
                                go: "I'm facing the TV screen.",
                                hit: "I don't feel like breaking the screen.",
                                inspect: "I can't figure out why it turned off or how to turn it back on.",
                                wait: [
                                    "I wait in front of the turned-off screen. Nothing happens. I feel like I missed something in the garden or in the letter.",
                                    "I wait for 15, 30, 60 minutes. Suddenly, the screen turns back on and shows me, like a mirror, looking at it. Then my reflection gradually disappears."
                                ],
                                accept: "The screen showed my memories, the life I've lived. It stopped. As if my life, once passed before my eyes, came to an end."
                            },
                            final: {
                                triggerEvent: { command: "accept", name: "endGame" },
                                look: "As I look at my hands, they disappear faster and faster. In sync with my reflection in the screen.",
                                use: "I try to lean against the screen, stop it, but my hands go through it.",
                                go: "I'm facing the TV screen.",
                                hit: "Even if I wanted to, I can't break the screen anymore. My body passes through it.",
                                inspect: "My hands crumble and disintegrate into a million tiny particles. I dissipate like gas.",
                                wait: "The longer I wait, the more I disappear.",
                                accept: [
                                    [
                                        "I vanish and join the rest of the universe. I am no more. My consciousness is everywhere.",
                                        "Here I am, at the end of my journey.",
                                        "This house, once foreign, is now familiar to me.",
                                        "I embrace it wholeheartedly.",
                                        "Suddenly, everything turns black.",
                                        "I float amidst the elements.",
                                        "Now I am part of the rest of existence.",
                                        "I have stopped dreaming.",
                                        "Alive..."
                                    ], [
                                        "I can now rest.",
                                        "I am home.",
                                        "I am at my place.",
                                        "I reunite with my memories.",
                                        "I join the rest of the universe.",
                                        "I am nothing but atoms.",
                                        "I am complete.",
                                        "I am alive.",
                                        "I dive into the horizon."
                                    ]
                                ]
                            }
                        }
                    }, {    // leave
                        name: "leave",
                        five: { text: "I have nowhere else to go. My journey ends here." }
                    }
                ]
            }
        ]
    },
    currentScene: 0,
    isSilent: false,
    previousInput: [],
    player: {
        collectibles: {
            desk: {
                readBook: false,
            },
            roof: {
                drankWater: false,
                litCandle: false,
                brokenCar: false
            },
            garden: {
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
    },
    state: "default"
}

const monBody = document.body,
    gameContainer = document.getElementById("gameContainer"),
    title = document.getElementById('titleGame'),
    gameDiv = document.getElementById("gameScreen"),
    bottomScreen = document.getElementById("screenBottom"),
    monInput = document.getElementById("commandInput"),
    mesCommandes = document.querySelectorAll(".command"),
    monAlert = document.getElementById("boxAlert"),
    monStyle = document.getElementById("monStyle"),
    mesFlags = document.getElementById("mesFlags");

let mesMots = [],
    titleText = title.textContent,
    counterCommands = 0,
    clearInt = false,
    styleOn = true,
    getDefault = styleOn;

// OBTENIR LA DATE ACTUELLE
function getToday() {
    const months = {
        FR: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        ENG: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    },
        today = new Date(),
        day = today.getDate(),
        monthIndex = today.getMonth(),
        year = today.getFullYear(),
        month = months[LANG][monthIndex];

    return `${day} ${month} ${year}`;
}

function printTxt() {
    let txt = "";
    MYGAME.FR.scenes.forEach((scn, idx) => {
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
                    if (itms.six != undefined) {
                        if (itms.six.closed != undefined) txt += itms.six.closed.look + " " + itms.six.closed.use + " " + itms.six.closed.go + " " + itms.six.closed.hit + " " + itms.six.closed.inspect + " " + itms.six.closed.wait + " " + itms.six.closed.accept + " ";
                        if (itms.six.opening != undefined) txt += itms.six.opening.look + " " + itms.six.opening.use + " " + itms.six.opening.go + " " + itms.six.opening.hit + " " + itms.six.opening.inspect + " " + itms.six.opening.wait + " " + itms.six.opening.accept + " ";
                        if (itms.six.open != undefined) txt += itms.six.open.look + " " + itms.six.open.use + " " + itms.six.open.go + " " + itms.six.open.hit + " " + itms.six.open.inspect + " " + itms.six.open.wait + " " + itms.six.open.accept + " ";
                        if (itms.six.final != undefined) txt += itms.six.final.look + " " + itms.six.final.use + " " + itms.six.final.go + " " + itms.six.final.hit + " " + itms.six.final.inspect + " " + itms.six.final.wait + " " + itms.six.final.accept + " ";
                    }
                }
            });
        }
    });
    MYGAME.ENG.scenes.forEach((scn, idx) => {
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
                    if (itms.six != undefined) {
                        if (itms.six.closed != undefined) txt += itms.six.closed.look + " " + itms.six.closed.use + " " + itms.six.closed.go + " " + itms.six.closed.hit + " " + itms.six.closed.inspect + " " + itms.six.closed.wait + " " + itms.six.closed.accept + " ";
                        if (itms.six.opening != undefined) txt += itms.six.opening.look + " " + itms.six.opening.use + " " + itms.six.opening.go + " " + itms.six.opening.hit + " " + itms.six.opening.inspect + " " + itms.six.opening.wait + " " + itms.six.opening.accept + " ";
                        if (itms.six.open != undefined) txt += itms.six.open.look + " " + itms.six.open.use + " " + itms.six.open.go + " " + itms.six.open.hit + " " + itms.six.open.inspect + " " + itms.six.open.wait + " " + itms.six.open.accept + " ";
                        if (itms.six.final != undefined) txt += itms.six.final.look + " " + itms.six.final.use + " " + itms.six.final.go + " " + itms.six.final.hit + " " + itms.six.final.inspect + " " + itms.six.final.wait + " " + itms.six.final.accept + " ";
                    }
                }
            });
        }
    });
    return txt;
}

setTimeout(() => console.log(printTxt()), 30000);