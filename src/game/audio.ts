let actx: AudioContext | null = null;
let muted = false;
let musicTimer: number | undefined;
let step = 0;

function ac(): AudioContext | null {
  try {
    if (!actx) {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      actx = new Ctor();
    }
    if (actx.state === "suspended") void actx.resume();
    return actx;
  } catch {
    return null;
  }
}

function tone(freq: number, dur: number, type: OscillatorType = "square", vol = 0.05, delay = 0, slideTo?: number) {
  if (muted) return;
  const a = ac();
  if (!a) return;
  const t0 = a.currentTime + delay;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g);
  g.connect(a.destination);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

export type Sfx = "jump" | "coin" | "hit" | "stomp" | "throw" | "good" | "bad" | "block" | "win" | "talk" | "boss" | "open";

export function sfx(n: Sfx) {
  switch (n) {
    case "jump":
      tone(300, 0.18, "square", 0.04, 0, 700);
      break;
    case "coin":
      tone(988, 0.07, "square", 0.04);
      tone(1319, 0.14, "square", 0.04, 0.07);
      break;
    case "hit":
      tone(200, 0.3, "sawtooth", 0.06, 0, 60);
      break;
    case "stomp":
      tone(180, 0.12, "square", 0.06, 0, 90);
      break;
    case "throw":
      tone(600, 0.08, "triangle", 0.04, 0, 300);
      break;
    case "block":
      tone(220, 0.1, "square", 0.05, 0, 440);
      break;
    case "talk":
      tone(520, 0.05, "triangle", 0.03);
      break;
    case "open":
      [392, 523, 659, 784].forEach((f, i) => tone(f, 0.12, "square", 0.04, i * 0.08));
      break;
    case "good":
      [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.14, "square", 0.045, i * 0.09));
      break;
    case "bad":
      tone(220, 0.2, "sawtooth", 0.05);
      tone(155, 0.35, "sawtooth", 0.05, 0.18);
      break;
    case "boss":
      [110, 110, 98, 87].forEach((f, i) => tone(f, 0.25, "sawtooth", 0.06, i * 0.22));
      break;
    case "win":
      [523, 523, 523, 659, 784, 659, 784, 1047].forEach((f, i) => tone(f, 0.16, "square", 0.05, i * 0.13));
      break;
  }
}

const SCALES = [
  { root: 261.6, steps: [0, 2, 4, 7, 9, 12], tempo: 190 }, // pentatónica mayor
  { root: 293.7, steps: [0, 2, 4, 7, 9, 11], tempo: 170 },
  { root: 329.6, steps: [0, 2, 4, 5, 7, 9], tempo: 200 },
  { root: 220, steps: [0, 3, 5, 7, 10, 12], tempo: 210 },
  { root: 261.6, steps: [0, 4, 7, 9, 12, 14], tempo: 160 },
  { root: 196, steps: [0, 3, 5, 6, 7, 10], tempo: 180 },
];
const PATTERN = [0, 2, 4, 2, 5, 4, 2, 1, 0, 3, 4, 3, 5, 4, 3, 2];

export function startMusic(world: number) {
  stopMusic();
  const sc = SCALES[world % SCALES.length];
  step = 0;
  musicTimer = window.setInterval(() => {
    if (muted) return;
    const i = PATTERN[step % PATTERN.length];
    const f = sc.root * Math.pow(2, sc.steps[i % sc.steps.length] / 12);
    if (step % 2 === 0 || step % 8 === 5) tone(f, 0.16, "triangle", 0.03);
    if (step % 4 === 0) tone(sc.root / 2, 0.3, "square", 0.015);
    step++;
  }, sc.tempo);
}

export function stopMusic() {
  if (musicTimer !== undefined) window.clearInterval(musicTimer);
  musicTimer = undefined;
}

export function setMuted(m: boolean) {
  muted = m;
}
export function isMuted() {
  return muted;
}
export function unlockAudio() {
  ac();
}
