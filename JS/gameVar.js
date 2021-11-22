var myGameTxt = {
    name: "Act 1",
    actNumber: 1,
	scenes: [
        {
            name: "Scene1",
            sceneNumber: 1,
            texts: [
                ["This wasn’t my house. I wandered in the streets for some times. Here I stood, at the gate. There was a ", "regular", false],
                ["road", "regular", true],
                [" that lead to a ", "regular", false],
                ["door.", "regular", true],
                [" I may have been too far away from home now. ", "regular", false],
                ["I hated to see that house again.", "angry", false]
            ],
            items: [
                {
                    name: "road",
                    isOpened: true,
                    lookWin: false,
                    lookTxt: "The road was short. It was mainly made of dirt. It had not been maintained in a while.",
                    useWin: true,
                    useTxt: "I might as well.",
                    goWin: true,
                    goTxtOpen: "I might as well.",
                    hitWin: false,
                    hitTxt: "Why would I hit dirt?",
                    inspectWin: false,
                    inspectTxt: "It was dirt, what do you want me to say?",
                    waitWin: false,
                    waitTxt: "I waited for a bit. A bird flew by. Time to move",
                    acceptWin: true,
                    acceptTxt: "I hoped this was the last time I had to go in that house."
                },
                {
                    name: "door",
                    isOpened: true,
                    lookWin: false,
                    lookTxt: "The door looked closed from up here. I could try to open it. Needed to go to it though.",
                    useWin: false,
                    useTxt: "I needed to get closer to it.",
                    goWin: true,
                    goTxtOpen: "I might as well.",
                    hitWin: false,
                    hitTxt: "I mean, I could. Needed to get closer though.",
                    inspectWin: false,
                    inspectTxt: "I was too far away to see anything.",
                    waitWin: false,
                    waitTxt: "I waited for a bit. The door kept shut. Time to move.",
                    acceptWin: false,
                    acceptTxt: "What do you mean?"
                },
                {
                    name: "leave",
                    leftWin: true,
                    leftTrue: "I decided to go. There was nothing for me there.",
                    leftFalse: "I felt drawn to the house. I couldn't leave just yet."
                }
            ],
        },
		{
            name: "Scene2",
            sceneNumber: 2,
			texts: [
                ["There I was. The ", "regular", false],
				["door.", "regular", true],
				[" was right there. ", "regular", false],
                ["The air outside was cold and wet. I'd rather go inside again... ", "sad", false],
                ["There also was a ", "regular", false],
				["window", "regular", true],
                [", next to it, on the left. Everything looked frozen in time. I didn’t know what to think about it. There was a ", "regular", false],
				["doorbell.", "regular", true],
				[" I could just… ring it. ", "regular", false],
			],
			items: [
                {
                    name: "window",
                    isOpened: false,
                    lookWin: false,
                    lookTxt: "The curtains were drawn. Hard to say if anyone was here.",
                    lookTxtOpen: "The window was now broken. Wouldn't try and touch it.",
                    useWin: false,
                    useTxt: "It’s closed shut. Can’t open it from this side.",
                    useTxtOpen: "I cut my finger on the glass. Stung a bit.",
                    goWin: false,
                    goTxt: "Yeaaah. No. It was closed, and I could not see the other side.",
                    hitWin: false,
                    hitTxt: "The glash shattered. It was sharp. I wouldn't want to go in from here.",
                    inspectWin: false,
                    inspectTxt: "The curtains reminded me of my parents'. Weird.",
                    waitWin: false,
                    waitTxt: "I stood in the reflection. Pale as a ghost. I looked tired.",
                    acceptWin: true,
                    acceptTxt: "I pushed the window, and it opened? Might as well go through it."
				},
                {
                    name: "door",
                    useOpens: true,
                    isOpened: false,
                    lookWin: false,
                    lookTxt: "A bit too frail if you ask me. I didn't know if it was unlocked or not.",
                    useWin: false,
                    useTxt: "Huh. It was unlocked. Who the Hell would leave it like that?",
                    goWin: false,
                    goTxt: "I didn't even know if it was opened.",
                    goTxtOpen: "Here goes nothing.",
                    hitWin: true,
                    hitTxt: "I smashed the door. Fuck that door. I was happy it glad it broke.",
                    inspectWin: false,
                    inspectTxt: "The handle was heavy, probably lead. The door must've been decades old.",
                    waitWin: false,
                    waitTxt: "As if the door would magically disappear. Time to move.",
                    acceptWin: true,
                    acceptTxt: "I accepted going into that house again. It felt like it was for the last time."
				},
                {
                    name: "doorbell",
                    lookWin: false,
                    lookTxt: "It looked broken. I’d been surprised if it rang.",
                    useWin: false,
                    useTxt: "Not a sound. Didn’t know what I was expecting.",
                    goWin: false,
                    goTxt: "The doorbell is right there.",
                    hitWin: false,
                    hitTxt: "The bell rang after being hit. Not a sound came from inside.",
                    inspectWin: false,
                    inspectTxt: "The name on it was scratched off. The first letter was the same as mine.",
                    waitWin: false,
                    waitTxt: "Didn't konw what I was waiting for. It was broken.",
                    acceptWin: false,
                    acceptTxt: "What do you mean?"
				},
                {
                    name: "leave",
                    leftWin: false,
                    leftTrue: "I backed off. The air around me was cold.",
                }
			],
		},
		{
            name: "Scene3",
            sceneNumber: 3,
			texts: [
                ["Scene 3 is the ground floor", "regular", false]
			],
			items: [
                {
                    name: "window",
                    isOpened: false,
                    lookWin: false,
                    lookTxt: "The curtains were drawn. Hard to say if anyone was here.",
                    lookTxtOpen: "The window was now broken. Wouldn't try and touch it.",
                    useWin: false,
                    useTxt: "It’s closed shut. Can’t open it from this side.",
                    useTxtOpen: "I cut my finger on the glass. Stung a bit.",
                    goWin: false,
                    goTxt: "Yeaaah. No. It was closed, and I could not see the other side.",
                    hitWin: false,
                    hitTxt: "The glash shattered. It was sharp. I wouldn't want to go in from here.",
                    inspectWin: false,
                    inspectTxt: "The curtains reminded me of my parents'. Weird.",
                    waitWin: false,
                    waitTxt: "I stood in the reflection. Pale as a ghost. I looked tired.",
                    acceptWin: true,
                    acceptTxt: "I pushed the window, and it opened? Might as well go through it."
				},
                {
                    name: "door",
                    useOpens: true,
                    isOpened: false,
                    lookWin: false,
                    lookTxt: "A bit too frail if you ask me. I didn't know if it was unlocked or not.",
                    useWin: false,
                    useTxt: "Huh. It was unlocked. Who the Hell would leave it like that?",
                    goWin: false,
                    goTxt: "I didn't even know if it was opened.",
                    goTxtOpen: "Here goes nothing.",
                    hitWin: true,
                    hitTxt: "I smashed the door. Fuck that door. I was happy it glad it broke.",
                    inspectWin: false,
                    inspectTxt: "The handle was heavy, probably lead. The door must've been decades old.",
                    waitWin: false,
                    waitTxt: "As if the door would magically disappear. Time to move.",
                    acceptWin: true,
                    acceptTxt: "I accepted going into that house again. It felt like it was for the last time."
				},
                {
                    name: "doorbell",
                    lookWin: false,
                    lookTxt: "It looked broken. I’d been surprised if it rang.",
                    useWin: false,
                    useTxt: "Not a sound. Didn’t know what I was expecting.",
                    goWin: false,
                    goTxt: "The doorbell is right there.",
                    hitWin: false,
                    hitTxt: "The bell rang after being hit. Not a sound came from inside.",
                    inspectWin: false,
                    inspectTxt: "The name on it was scratched off. The first letter was the same as mine.",
                    waitWin: false,
                    waitTxt: "Didn't konw what I was waiting for. It was broken.",
                    acceptWin: false,
                    acceptTxt: "What do you mean?"
				},
                {
                    name: "leave",
                    leftWin: false,
                    leftTrue: "I backed off. The air around me was cold.",
                }
			],
		},
	],
	complete: false,
    currentScene:0,
    currentAct:0
};