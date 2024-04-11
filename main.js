

const fynderBox = document.querySelector('.fynder');

// incomingText = document.createElement('div');
// incomingText.innerHTML = 'jobs';
// incomingText.style.position = 'absolute';
// incomingText.style.top = '-100px';
// fynderBox.appendChild(incomingText)

// Add one letter onto a word, once per second.
function addFynderWord(e, word) {
    return new Promise((resolve, reject) => {
        let currentWord = '';
        e.innerHTML = currentWord;
        const addOneLetter = setInterval(() => {
            if (currentWord.length < word.length) {
                currentWord = word.slice(0, currentWord.length + 1);
            } else {
                clearInterval(addOneLetter);
                resolve();
            }
            e.innerHTML = currentWord;
        }, 100);
    });
}


// Delete one letter off the end of the word, once per second.
function deleteFynderWord(e) {
    return new Promise((resolve, reject) => {
        let currentWord = e.innerHTML;
        const deleteOneLetter = setInterval(() => {
            if (e.innerHTML.length > 0) {
                currentWord = currentWord.slice(0, -1);
            } else {
                clearInterval(deleteOneLetter);
                resolve();
            }
            e.innerHTML = currentWord;
        }, 150);
    });
}

// Wait the specified amount of time.
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

thingsYouCanFynd = [
    'jobs',
    'careers',
    'talent',
    'training',
    'experts'
]

async function runAll() {
    // Build hype at the start.
    await sleep(500);

    // Loop forever.
    while (true) {
        // Slowly display each thing you can fynd.
        for (let thingYouCanFynd of thingsYouCanFynd) {
            await addFynderWord(fynderBox, thingYouCanFynd);
            await sleep(1500);
            await deleteFynderWord(fynderBox);
        }
    }
}

runAll();


// deleteFynderWord(addFynderWord)

// // setTimeout(incomingText, 1000);


// logo = document.querySelector('.logo')
// logo.addEventListener('click', () => {
//     triggerAnimation(incomingText)
// })

