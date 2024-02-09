const audioAlwaysEnabled = false; // If user has audio set to Allow instead of Automatic
if (audioAlwaysEnabled === false) {
    document.getElementById("score").innerHTML = "Click to begin!";
    window.addEventListener('click', main); // Wait for a click event
}
else {
    main(); // Fire away
}



let feesh = {
    playNote: ()=>{console.log("cannot play, no audio")}, // will be monkey-patched to play an actual note once audio is allowed
    currentTime: 0,
    addNote: function(key, note, restLength) {
        this.melody[key].push({time: this.currentTime, note: note});
        this.currentTime += restLength; // Add rest length to current time
    },
    melody: {
        j: [],
        k: [],
        l: [],
        ";": []
    },
    sortMelody: function() {
        this.melody.j.sort((a, b) => a.time - b.time);
        this.melody.k.sort((a, b) => a.time - b.time);
        this.melody.l.sort((a, b) => a.time - b.time);
        this.melody[";"].sort((a, b) => a.time - b.time);
    }
};
let fisg = {
    playNote: ()=>{console.log("cannot play, no audio")}, // same as feesh.playNote
    currentTime: 0,
    addNote: function(key, note, restLength) {
        this.melody[key].push({time: this.currentTime, note: note});
        this.currentTime += restLength; // Add rest length to current time
    },
    melody: {
        a: [],
        s: [],
        d: [],
        f: []
    },
    sortMelody: function() {
        this.melody.a.sort((a, b) => a.time - b.time);
        this.melody.s.sort((a, b) => a.time - b.time);
        this.melody.d.sort((a, b) => a.time - b.time);
        this.melody.f.sort((a, b) => a.time - b.time);
    }
};
let drums = {
    times: [],
    currentTime: 0,
    addHit: function(restLength) {
        this.times.push(this.currentTime);
        this.currentTime += restLength;
    },
    snare: new Tone.Player("snare.mp3").toDestination()
};

function reusedBeat() {
    drums.addHit(12); drums.addHit(12); drums.addHit(12); drums.addHit(4); drums.addHit(4); drums.addHit(4); drums.addHit(12); drums.addHit(12); drums.addHit(12); drums.addHit(4); drums.addHit(4); drums.addHit(4);

    drums.addHit(12); drums.addHit(6); drums.addHit(6); drums.addHit(6); drums.addHit(6); drums.addHit(6); drums.addHit(6);
}

function intro() {
    feesh.currentTime += 204;

    feesh.addNote("j", "G5", 4); feesh.addNote("k", "A5", 4); feesh.addNote("l", "B5", 4);

    fisg.currentTime += 216;

    drums.currentTime += 12;

    drums.addHit(6); drums.addHit(6);
    
    reusedBeat();
    
    drums.addHit(36); drums.addHit(4); drums.addHit(4); drums.addHit(4);
}

function wiiTanks() { // enemy name: Green Tank
    feesh.addNote("l", "C6", 6); feesh.addNote("k", "B5", 6); feesh.addNote("l", "C6", 12); feesh.addNote(";", "G6", 12); feesh.addNote("j", "G4", 12); feesh.addNote("l", "C6", 6); feesh.addNote("k", "B5", 6); feesh.addNote("l", "C6", 12); feesh.addNote(";", "G6", 12); feesh.addNote("j", "G4", 12);

    feesh.addNote("l", "C6", 6); feesh.addNote("k", "B5", 6); feesh.addNote("l", "C6", 12); feesh.addNote("j", "F5", 12); feesh.addNote("l", "C6", 12); feesh.addNote("k", "E5", 6); feesh.addNote("j", "D#5", 6); feesh.addNote("k", "E5", 12); feesh.addNote("l", "G5", 12); feesh.addNote("j", "D5", 12);

    feesh.addNote("l", "C#5", 12); feesh.addNote("j", "A4", 4); feesh.addNote("k", "B4", 4); feesh.addNote("l", "C#5", 4); feesh.addNote(";", "D5", 12); feesh.addNote("j", "A4", 12); feesh.addNote("l", "B4", 12); feesh.addNote("j", "G4", 4); feesh.addNote("k", "A4", 4); feesh.addNote("l", "B4", 4); feesh.addNote(";", "C5", 12); feesh.addNote("j", "G4", 12);

    feesh.addNote("l", "A4", 12); feesh.addNote("j", "F#4", 4); feesh.addNote("k", "G4", 4); feesh.addNote("l", "A4", 4); feesh.addNote(";", "B4", 12); feesh.addNote("j", "F#4", 12); feesh.addNote("l", "A4", 12); feesh.addNote("j", "F#4", 6); feesh.addNote("k", "G4", 6); feesh.addNote("l", "A4", 6); feesh.addNote("k", "G4", 6); feesh.addNote("l", "A4", 6); feesh.addNote(";", "B4", 6);

    
    fisg.addNote("d", "E6", 24); fisg.addNote("s", "D6", 24); fisg.addNote("d", "E6", 24); fisg.addNote("f", "F6", 24);
    
    fisg.addNote("f", "E6", 24); fisg.addNote("d", "D6", 24); fisg.addNote("s", "C6", 36); fisg.addNote("a", "B5", 12);
    
    fisg.addNote("f", "A5", 12); fisg.addNote("d", "G5", 12); fisg.addNote("s", "F#5", 24); fisg.addNote("d", "G5", 12); fisg.addNote("s", "F5", 12); fisg.addNote("a", "E5", 24);
    
    fisg.addNote("f", "F#5", 12); fisg.addNote("d", "E5", 12); fisg.addNote("s", "D#5", 12); fisg.addNote("a", "B4", 12); fisg.addNote("d", "E5", 24); fisg.addNote("f", "F5", 24);


    reusedBeat();

    drums.addHit(12); drums.addHit(12); drums.addHit(4); drums.addHit(4); drums.addHit(4); drums.addHit(3); drums.addHit(3); drums.addHit(3); drums.addHit(3);

    reusedBeat();

    drums.addHit(12); drums.addHit(12); drums.addHit(12); drums.addHit(4); drums.addHit(4); drums.addHit(4);
}

intro();
wiiTanks();
wiiTanks();
wiiTanks();
console.log(fisg.currentTime);

// sort the melodies numerically (so that, in case of a complicated sequence of loops, you don't have negative numbers screwing over the linear reading of the game)
feesh.sortMelody();
fisg.sortMelody();
drums.times.sort((a, b) => a - b);

async function main() {
    if (audioAlwaysEnabled === false) {
        window.removeEventListener("click", main);
        document.getElementById("score").innerHTML = "50";
    }
    
    await Tone.start();

    Tone.loaded().then(() => {
        const feeshSynth = new Tone.PolySynth(Tone.Synth).toDestination(); // IMPORTANT NOTE: TONE.SAMPLER IS ALREADY POLYPHONIC
        const fisgSynth = new Tone.PolySynth(Tone.AMSynth).toDestination();
        feeshSynth.volume.value = -6;
    
        feesh.playNote = function(note) {
            feeshSynth.triggerAttackRelease(note, "8n");
        }
    
        fisg.playNote = function(note) {
            fisgSynth.triggerAttackRelease(note, "8n");
        }

        const mainScript = document.createElement("script");
        mainScript.src = "script.js";
        document.body.appendChild(mainScript);
    });
}