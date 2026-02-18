/**
 * Streetscape-to-Soundscape User Study Data
 *
 * Each trial shows one ground-truth streetscape image.
 * The user hears three audio clips (A, B, C) and picks the best match.
 * One of the three is the true matching audio; the other two are distractors
 * drawn from different scenes so the task is meaningful/straightforward.
 *
 * "answer" records which option letter is the correct match (for scoring).
 * Paths are relative to the HTML file (repo root).
 */
const S2S_CONFIG = {
  // Trial 1 - scene 157
  sub_1: {
    image:  "static/user_study/Q2/ground_truth/157.jpg",
    audios: {
      A: "static/user_study/Q2/audio/157.wav",        // correct
      B: "static/user_study/Q2/audio/268504.wav",
      C: "static/user_study/Q2/audio/62750.wav"
    },
    answer: "A"
  },
  // Trial 2 - scene 158639
  sub_2: {
    image:  "static/user_study/Q2/ground_truth/158639.jpg",
    audios: {
      A: "static/user_study/Q2/audio/283426.wav",
      B: "static/user_study/Q2/audio/158639.wav",     // correct
      C: "static/user_study/Q2/audio/4733.wav"
    },
    answer: "B"
  },
  // Trial 3 - scene 172440
  sub_3: {
    image:  "static/user_study/Q2/ground_truth/172440.jpg",
    audios: {
      A: "static/user_study/Q2/audio/70746.wav",
      B: "static/user_study/Q2/audio/186158.wav",
      C: "static/user_study/Q2/audio/172440.wav"      // correct
    },
    answer: "C"
  },
  // Trial 4 - scene 181017
  sub_4: {
    image:  "static/user_study/Q2/ground_truth/181017.jpg",
    audios: {
      A: "static/user_study/Q2/audio/181017.wav",     // correct
      B: "static/user_study/Q2/audio/2294.wav",
      C: "static/user_study/Q2/audio/243449.wav"
    },
    answer: "A"
  },
  // Trial 5 - scene 186158
  sub_5: {
    image:  "static/user_study/Q2/ground_truth/186158.jpg",
    audios: {
      A: "static/user_study/Q2/audio/296357.wav",
      B: "static/user_study/Q2/audio/186158.wav",     // correct
      C: "static/user_study/Q2/audio/62750.wav"
    },
    answer: "B"
  },
  // Trial 6 - scene 188052
  sub_6: {
    image:  "static/user_study/Q2/ground_truth/188052.jpg",
    audios: {
      A: "static/user_study/Q2/audio/157.wav",
      B: "static/user_study/Q2/audio/287782.wav",
      C: "static/user_study/Q2/audio/188052.wav"      // correct
    },
    answer: "C"
  },
  // Trial 7 - scene 243449
  sub_7: {
    image:  "static/user_study/Q2/ground_truth/243449.jpg",
    audios: {
      A: "static/user_study/Q2/audio/243449.wav",     // correct
      B: "static/user_study/Q2/audio/172440.wav",
      C: "static/user_study/Q2/audio/181017.wav"
    },
    answer: "A"
  },
  // Trial 8 - scene 283426
  sub_8: {
    image:  "static/user_study/Q2/ground_truth/283426.jpg",
    audios: {
      A: "static/user_study/Q2/audio/158639.wav",
      B: "static/user_study/Q2/audio/283426.wav",     // correct
      C: "static/user_study/Q2/audio/296357.wav"
    },
    answer: "B"
  },
  // Trial 9 - scene 287782
  sub_9: {
    image:  "static/user_study/Q2/ground_truth/287782.jpg",
    audios: {
      A: "static/user_study/Q2/audio/268504.wav",
      B: "static/user_study/Q2/audio/4733.wav",
      C: "static/user_study/Q2/audio/287782.wav"      // correct
    },
    answer: "C"
  },
  // Trial 10 - scene 62750
  sub_10: {
    image:  "static/user_study/Q2/ground_truth/62750.jpg",
    audios: {
      A: "static/user_study/Q2/audio/62750.wav",      // correct
      B: "static/user_study/Q2/audio/188052.wav",
      C: "static/user_study/Q2/audio/2294.wav"
    },
    answer: "A"
  }
};