import { makeAutoObservable } from "mobx";
import vinylImg1 from "../assets/img/vinyl-0@2x.jpg";
import vinylImg2 from "../assets/img/vinyl-1@2x.jpg";
import vinylImg3 from "../assets/img/vinyl-2@2x.jpg";
import task2BeautyImg from "../assets/img/task_2_beauty_mobile@2x.png";
import task2GymImg from "../assets/img/task_2_gym_mobile@2x.png";
import task2CafeImg from "../assets/img/task_2_cafe_mobile@2x.png";
import musicLatinaMp3 from "../assets/audio/track1.1._latin.mp3";
import musicCountryMp3 from "../assets/audio/track1.2_country.mp3";
import musicFolkMp3 from "../assets/audio/track1.3_folk.mp3";
import trackAdd1Mp3 from "../assets/audio/track2_add1.mp3";
import trackAdd2Mp3 from "../assets/audio/track2_add2.mp3";
import trackAdd3Mp3 from "../assets/audio/track2_add3.mp3";
import trackBeautyMp3 from "../assets/audio/track2_beauty.mp3";
import trackCaffeMp3 from "../assets/audio/track2_caffe.mp3";
import trackSportMp3 from "../assets/audio/track2_sport.mp3";
import bgMusic from "../assets/audio/bg1.mp3";
import bgthMusic from "../assets/audio/bgth.mp3";
import startMusic from "../assets/audio/start.mp3";
import finalMusic from "../assets/audio/final.mp3";
import thereminMp3 from "../assets/audio/theremin.mp3";
import theremin1Mp3 from "../assets/audio/theremin1.mp3";
import theremin2Mp3 from "../assets/audio/theremin2.mp3";
import theremin3Mp3 from "../assets/audio/theremin3.mp3";

const musicQuestions = [
  {
    question: 0,
    variants: ["латина", "фанк", "регги"],
    answer: "латина",
    img: vinylImg1,
    url: musicLatinaMp3,
  },
  {
    question: 1,
    variants: ["блюз", "фолк", "кантри"],
    answer: "кантри",
    img: vinylImg2,
    url: musicCountryMp3,
  },
  {
    question: 2,
    variants: ["фолк", "инди", "регги"],
    answer: "фолк",
    img: vinylImg3,
    url: musicFolkMp3,
  },
];

const task2 = [
  {
    id: 0,
    title: "Салон красоты",
    img: task2BeautyImg,
    music: [
      {
        id: 0,
        url: trackCaffeMp3,
      },
      {
        id: 1,
        url: trackBeautyMp3,
      },
      {
        id: 2,
        url: trackAdd1Mp3,
      },
    ],
    correctMusic: 1,
  },
  {
    id: 1,
    title: "Спортзал",
    img: task2GymImg,
    music: [
      {
        id: 0,
        url: trackSportMp3,
      },
      {
        id: 1,
        url: trackAdd2Mp3,
      },
      {
        id: 2,
        url: trackBeautyMp3,
      },
    ],
    correctMusic: 0,
  },
  {
    id: 2,
    title: "Кафе",
    img: task2CafeImg,
    music: [
      {
        id: 0,
        url: trackBeautyMp3,
      },
      {
        id: 1,
        url: trackAdd3Mp3,
      },
      {
        id: 2,
        url: trackCaffeMp3,
      },
    ],
    correctMusic: 2,
  },
];

const task3 = [
  {
    id: 0,
    title: "Включу YouTube, Spotify, Apple Music, ВК",
    description:
      "Неверный ответ, эти сервисы не предназначены<br /> для коммерческого использования, <strong>штраф<br /> от 10 тысяч до 5 млн.</strong>",
  },
  {
    id: 1,
    title: "Включу радио",
    description: "Неверный ответ,<br /> это нарушение авторских прав",
  },
  {
    id: 2,
    title: "Скачаю где-то и принесу на флешке",
    description: "Неверный ответ, это тоже<br /> нарушение авторских прав",
  },
  {
    id: 3,
    title: "Куплю права на проигрывание…",
    description:
      "И это тоже неверный ответ, потому что…<br /> невыгодный. Слишком много времени и средств<br /> придется потратить, чтобы договориться<br /> с правообладателями. ",
  },
];

export default class Game {
  level = 0;
  info = 1;
  isStarted = false;
  musicQuestions = [...musicQuestions];
  musicTask = [...task2];
  task3 = [...task3];
  task = 0;
  musicPlaying = false;
  vinylAnimation = false;
  musicIsMuted = false;
  currentBgMusic = startMusic;
  choosenTrack = thereminMp3;
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get currentLevel() {
    return this.level;
  }

  get currentTask() {
    return this.task;
  }

  changeBgMusic(music) {
    if (music === "startMusic") {
      this.currentBgMusic = startMusic;
    }
    if (music === "bgMusic") {
      this.currentBgMusic = bgMusic;
    }
    if (music === "bgthMusic") {
      this.currentBgMusic = bgthMusic;
    }
    if (music === "finalMusic") {
      this.currentBgMusic = finalMusic;
    }
  }

  toggleMusic() {
    this.musicIsMuted = !this.musicIsMuted;
  }

  // get isMusicPlaying() {
  //   return this.musicPlaying;
  // }

  // get isAnimated() {
  //   return this.vinylAnimation;
  // }

  chooseTrack(name) {
    if (name === "theremin1Mp3") {
      this.choosenTrack = theremin1Mp3;
    }
    if (name === "theremin2Mp3") {
      this.choosenTrack = theremin2Mp3;
    }
    if (name === "theremin3Mp3") {
      this.choosenTrack = theremin3Mp3;
    }
  }

  playOrPause(bool) {
    this.musicPlaying = bool;
  }

  setVinylAnimation(bool) {
    this.vinylAnimation = bool;
  }

  goToNextLevel() {
    this.musicPlaying = false;
    this.vinylAnimation = false;
    this.level += 1;
  }

  start() {
    this.isStarted = true;
  }

  goToNextTask() {
    this.task += 1;
  }
}
