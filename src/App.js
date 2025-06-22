import React, { useState, useEffect, useCallback } from "react";
import {
  BookOpen,
  ChevronsRight,
  CheckCircle,
  PlayCircle,
  XCircle,
} from "lucide-react";

// Data for the curriculum (same as before)
const curriculumData = [
  {
    week: 1,
    theme: "The Hundred Acre Wood",
    author: "A.A. Milne",
    description: "Selections from Winnie-the-Pooh",
    days: [
      {
        day: 1,
        selection: "An Anxious Pooh Bear",
        link: "https://www.gutenberg.org/files/67098/67098-h/67098-h.htm#CHAPTER_I",
      },
      {
        day: 2,
        selection: "Pooh Goes Visiting",
        link: "https://www.gutenberg.org/files/67098/67098-h/67098-h.htm#CHAPTER_II",
      },
      {
        day: 3,
        selection: "Eeyore Has a Birthday",
        link: "https://www.gutenberg.org/files/67098/67098-h/67098-h.htm#CHAPTER_VI",
      },
      {
        day: 4,
        selection: "An Expotition to the North Pole",
        link: "https://www.gutenberg.org/files/67098/67098-h/67098-h.htm#CHAPTER_VIII",
      },
      {
        day: 5,
        selection: "Piglet Meets a Heffalump",
        link: "https://www.gutenberg.org/files/67098/67098-h/67098-h.htm#CHAPTER_V",
      },
    ],
  },
  {
    week: 2,
    theme: "A Child's Garden of Verses",
    author: "Robert Louis Stevenson",
    description: "Selections of classic children's poetry",
    days: [
      {
        day: 6,
        selection: '"The Land of Counterpane"',
        link: "https://www.poetryfoundation.org/poems/43161/the-land-of-counterpane",
      },
      {
        day: 7,
        selection: '"My Shadow"',
        link: "https://www.poetryfoundation.org/poems/43163/my-shadow-56d221a815853",
      },
      {
        day: 8,
        selection: '"The Swing"',
        link: "https://www.poetryfoundation.org/poems/46571/the-swing-56d2258829563",
      },
      {
        day: 9,
        selection: '"Bed in Summer"',
        link: "https://www.poetryfoundation.org/poems/43156/bed-in-summer",
      },
      {
        day: 10,
        selection: '"From a Railway Carriage"',
        link: "https://www.poetryfoundation.org/poems/51296/from-a-railway-carriage",
      },
    ],
  },
  {
    week: 3,
    theme: "The World of Narnia",
    author: "C.S. Lewis",
    description: "Selections from The Lion, the Witch and the Wardrobe",
    days: [
      {
        day: 11,
        selection: "Lucy Looks into a Wardrobe",
        link: "http://www.samizdat.qc.ca/arts/lit/LionWitchWardrobe_CSL.pdf#page=6",
      },
      {
        day: 12,
        selection: "What Lucy Found There",
        link: "http://www.samizdat.qc.ca/arts/lit/LionWitchWardrobe_CSL.pdf#page=9",
      },
      {
        day: 13,
        selection: "A Meal with Mr. Tumnus",
        link: "http://www.samizdat.qc.ca/arts/lit/LionWitchWardrobe_CSL.pdf#page=14",
      },
      {
        day: 14,
        selection: "The Spell of the White Witch",
        link: "http://www.samizdat.qc.ca/arts/lit/LionWitchWardrobe_CSL.pdf#page=27",
      },
      {
        day: 15,
        selection: "The First Mention of Aslan",
        link: "http://www.samizdat.qc.ca/arts/lit/LionWitchWardrobe_CSL.pdf#page=48",
      },
    ],
  },
  {
    week: 4,
    theme: "The Road Not Taken",
    author: "Robert Frost",
    description: "Selections of famous American poetry",
    days: [
      {
        day: 16,
        selection: '"The Road Not Taken"',
        link: "https://www.poetryfoundation.org/poems/44272/the-road-not-taken",
      },
      {
        day: 17,
        selection: '"Stopping by Woods on a Snowy Evening"',
        link: "https://www.poetryfoundation.org/poems/42891/stopping-by-woods-on-a-snowy-evening",
      },
      {
        day: 18,
        selection: '"The Pasture"',
        link: "https://www.poetryfoundation.org/poems/53073/the-pasture",
      },
      {
        day: 19,
        selection: '"A Patch of Old Snow"',
        link: "https://www.poetryfoundation.org/poems/52431/a-patch-of-old-snow",
      },
      {
        day: 20,
        selection: '"Fire and Ice"',
        link: "https://www.poetryfoundation.org/poems/44263/fire-and-ice",
      },
    ],
  },
  {
    week: 5,
    theme: "Simple Truths & Fables",
    author: "Aesop",
    description: "Selections of classic moral fables",
    days: [
      {
        day: 21,
        selection: '"The Tortoise and the Hare"',
        link: "https://read.gov/aesop/025.html",
      },
      {
        day: 22,
        selection: '"The Ant and the Grasshopper"',
        link: "https://read.gov/aesop/050.html",
      },
      {
        day: 23,
        selection: '"The Lion and the Mouse"',
        link: "https://read.gov/aesop/007.html",
      },
      {
        day: 24,
        selection: '"The Shepherd Boy and the Wolf"',
        link: "https://read.gov/aesop/003.html",
      },
      {
        day: 25,
        selection: '"The Goose with the Golden Eggs"',
        link: "https://read.gov/aesop/013.html",
      },
    ],
  },
  {
    week: 6,
    theme: "Dreams and Determination",
    author: "Langston Hughes",
    description: "Selections from a leading voice of the Harlem Renaissance",
    days: [
      {
        day: 26,
        selection: '"Dreams"',
        link: "https://www.poetryfoundation.org/poems/47558/dreams-56d229a6e3e83",
      },
      {
        day: 27,
        selection: '"The Dream Keeper"',
        link: "https://www.poetryfoundation.org/poems/47599/the-dream-keeper",
      },
      {
        day: 28,
        selection: '"Mother to Son"',
        link: "https://www.poetryfoundation.org/poems/47559/mother-to-son",
      },
      {
        day: 29,
        selection: '"April Rain Song"',
        link: "https://www.poetryfoundation.org/poems/47543/april-rain-song",
      },
      {
        day: 30,
        selection: '"I, Too"',
        link: "https://www.poetryfoundation.org/poems/47558/dreams-56d229a6e3e83",
      },
    ],
  },
  {
    week: 7,
    theme: "Observations of a Naturalist",
    author: "Henry David Thoreau",
    description: "Selections from Walden",
    days: [
      {
        day: 31,
        selection: "Where I Lived, and What I Lived For",
        link: "https://www.gutenberg.org/files/205/205-h/205-h.htm#link2H_4_0004",
      },
      {
        day: 32,
        selection: "The Sound of the Loon",
        link: "https://www.gutenberg.org/files/205/205-h/205-h.htm#link2H_4_0014",
      },
      {
        day: 33,
        selection: "The Battle of the Ants",
        link: "https://www.gutenberg.org/files/205/205-h/205-h.htm#link2H_4_0014",
      },
      {
        day: 34,
        selection: "The Pond in Winter",
        link: "https://www.gutenberg.org/files/205/205-h/205-h.htm#link2H_4_0018",
      },
      {
        day: 35,
        selection: "Spring",
        link: "https://www.gutenberg.org/files/205/205-h/205-h.htm#link2H_4_0019",
      },
    ],
  },
  {
    week: 8,
    theme: "The Wonder of the Cosmos",
    author: "Carl Sagan",
    description: "Selections of poetic science writing",
    days: [
      {
        day: 36,
        selection: "The Shores of the Cosmic Ocean",
        link: "https://www.planetary.org/worlds/pale-blue-dot",
      },
      {
        day: 37,
        selection: '"The Pale Blue Dot"',
        link: "https://www.planetary.org/worlds/pale-blue-dot",
      },
      {
        day: 38,
        selection: '"We are made of star-stuff"',
        link: "https://carlsagan.com/we-are-made-of-star-stuff/",
      },
      {
        day: 39,
        selection: "The Rules of the Game",
        link: "https://www.goodreads.com/quotes/87249-the-rules-of-the-game-are-what-we-call-the",
      },
      {
        day: 40,
        selection: "On Reading",
        link: "https://www.goodreads.com/quotes/19441-what-an-astonishing-thing-a-book-is-it-s-a-flat",
      },
    ],
  },
  {
    week: 9,
    theme: "Whimsy and Wordplay",
    author: "Lewis Carroll",
    description: "Selections from Alice's Adventures in Wonderland",
    days: [
      {
        day: 41,
        selection: "Down the Rabbit-Hole",
        link: "https://www.gutenberg.org/files/11/11-h/11-h.htm#chap01",
      },
      {
        day: 42,
        selection: "The Mad Tea-Party",
        link: "https://www.gutenberg.org/files/11/11-h/11-h.htm#chap07",
      },
      {
        day: 43,
        selection: '"The Jabberwocky"',
        link: "https://www.poetryfoundation.org/poems/42916/jabberwocky",
      },
      {
        day: 44,
        selection: '"The Walrus and the Carpenter"',
        link: "https://www.poetryfoundation.org/poems/43914/the-walrus-and-the-carpenter-56d2229584a78",
      },
      {
        day: 45,
        selection: "Advice from a Caterpillar",
        link: "https://www.gutenberg.org/files/11/11-h/11-h.htm#chap05",
      },
    ],
  },
  {
    week: 10,
    theme: "Words that Shaped a Nation",
    author: "Famous American Speeches",
    description: "Excerpts from pivotal moments in history",
    days: [
      {
        day: 46,
        selection: '"The Gettysburg Address"',
        author: "Abraham Lincoln",
        link: "https://www.abrahamlincolnonline.org/lincoln/speeches/gettysburg.htm",
      },
      {
        day: 47,
        selection: '"The Only Thing We Have to Fear..."',
        author: "Franklin D. Roosevelt",
        link: "https://www.americanrhetoric.com/speeches/fdrfirstinaugural.html",
      },
      {
        day: 48,
        selection: '"Ask not what your country can do..."',
        author: "John F. Kennedy",
        link: "https://www.americanrhetoric.com/speeches/jfkinaugural.htm",
      },
      {
        day: 49,
        selection: '"I Have a Dream" (excerpt)',
        author: "Martin Luther King, Jr.",
        link: "https://www.americanrhetoric.com/speeches/mlkihaveadream.htm",
      },
      {
        day: 50,
        selection: '"One small step for a man..."',
        author: "Neil Armstrong",
        link: "https://www.nasa.gov/mission_pages/apollo/apollo11_audio.html",
      },
    ],
  },
  {
    week: 11,
    theme: "The Shire and Beyond",
    author: "J.R.R. Tolkien",
    description: "Selections from The Hobbit",
    days: [
      {
        day: 51,
        selection: "In a Hole in the Ground",
        link: "https://freeread.com.au/ebooks/e-book-the-hobbit-j-r-r-tolkien/#CHAPTER_1",
      },
      {
        day: 52,
        selection: "Riddles in the Dark",
        link: "https://freeread.com.au/ebooks/e-book-the-hobbit-j-r-r-tolkien/#CHAPTER_5",
      },
      {
        day: 53,
        selection: "The Road Goes Ever On",
        link: "http://tolkiengateway.net/wiki/The_Road_Goes_Ever_On_(song)",
      },
      {
        day: 54,
        selection: "A Description of Smaug",
        link: "https://freeread.com.au/ebooks/e-book-the-hobbit-j-r-r-tolkien/#CHAPTER_12",
      },
      {
        day: 55,
        selection: "The Last Homely House",
        link: "https://freeread.com.au/ebooks/e-book-the-hobbit-j-r-r-tolkien/#CHAPTER_3",
      },
    ],
  },
  {
    week: 12,
    theme: "A Touch of Shakespeare",
    author: "William Shakespeare",
    description: "Selections of famous sonnets and soliloquies",
    days: [
      {
        day: 56,
        selection: 'Sonnet 18: "Shall I compare thee to..."',
        link: "https://www.poetryfoundation.org/poems/45087/sonnet-18-shall-i-compare-thee-to-a-summers-day",
      },
      {
        day: 57,
        selection: 'Sonnet 116: "Let me not to the marriage..."',
        link: "https://www.poetryfoundation.org/poems/45106/sonnet-116-let-me-not-to-the-marriage-of-true-minds",
      },
      {
        day: 58,
        selection: 'As You Like It: "All the world\'s a stage"',
        link: "https://www.poetryfoundation.org/poems/56966/all-the-worlds-a-stage",
      },
      {
        day: 59,
        selection: 'The Tempest: "Our revels now are ended"',
        link: "https://www.poetryfoundation.org/poems/51761/the-tempest-our-revels-now-are-ended",
      },
      {
        day: 60,
        selection: "A Midsummer Night's Dream: Puck's Speech",
        link: "https://www.opensourceshakespeare.org/views/plays/play_view.php?WorkID=midsummer&Act=5&Scene=1&Scope=scene",
      },
    ],
  },
];

// TimerDisplay component
const TimerDisplay = ({ activeDay, timeRemaining, onStop }) => {
  if (!activeDay) return null;

  const formatTime = (seconds) => {
    if (seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const isTimeUp = timeRemaining <= 0;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 shadow-lg p-3 transition-colors duration-500 ${
        isTimeUp ? "bg-emerald-500" : "bg-sky-600"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <p className="font-bold text-sm sm:text-base">
            {isTimeUp
              ? "Session Complete!"
              : `Session in Progress: Day ${activeDay.day}`}
          </p>
          <p className="text-xs sm:text-sm italic">{activeDay.selection}</p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl sm:text-3xl font-mono font-bold text-white mr-4">
            {formatTime(timeRemaining)}
          </span>
          <button
            onClick={onStop}
            className="bg-white/20 hover:bg-white/40 text-white font-bold py-2 px-3 rounded-full transition-colors duration-300"
            aria-label="Stop Timer"
          >
            <XCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// AccordionItem component
const AccordionItem = ({
  week,
  theme,
  author,
  description,
  days,
  isOpen,
  onClick,
  onStartTimer,
  isTimerRunning,
  completedDays,
  onToggleComplete,
}) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700">
      <button
        className="flex justify-between items-center w-full p-5 font-medium text-left text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors duration-300"
        onClick={onClick}
      >
        <div className="flex items-center">
          <span className="text-2xl font-bold text-sky-500 mr-4">{`Week ${week}`}</span>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              {theme}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {author}
            </p>
          </div>
        </div>
        <ChevronsRight
          className={`w-6 h-6 text-sky-500 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 bg-slate-50 dark:bg-slate-800/50">
            <p className="mb-4 text-slate-600 dark:text-slate-300 italic">
              {description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {days.map((day) => (
                <DayCard
                  key={day.day}
                  day={day}
                  weekAuthor={author}
                  onStartTimer={onStartTimer}
                  isTimerRunning={isTimerRunning}
                  isCompleted={!!completedDays[day.day]}
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// DayCard component
const DayCard = ({
  day,
  weekAuthor,
  onStartTimer,
  isTimerRunning,
  isCompleted,
  onToggleComplete,
}) => {
  const author = day.author || weekAuthor;

  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 flex flex-col justify-between transition-all duration-300 ${
        isCompleted ? "opacity-60" : ""
      }`}
    >
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg text-slate-700 dark:text-slate-200">
            Day {day.day}
          </span>
          <BookOpen className="w-5 h-5 text-sky-400" />
        </div>
        <p
          className={`text-slate-800 dark:text-slate-100 font-medium text-base mb-1 ${
            isCompleted ? "line-through" : ""
          }`}
        >
          {day.selection}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          {author}
        </p>
      </div>

      <div className="mt-auto space-y-2">
        <button
          onClick={() => onStartTimer(day)}
          disabled={isTimerRunning}
          className="w-full flex items-center justify-center text-sm bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:shadow-inner"
        >
          <PlayCircle className="w-4 h-4 mr-2" />
          Start Session
        </button>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id={`day-${day.day}`}
            checked={isCompleted}
            onChange={() => onToggleComplete(day.day)}
            className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={`day-${day.day}`}
            className="ml-2 text-sm font-medium text-slate-600 dark:text-slate-300 cursor-pointer"
          >
            Mark as Complete
          </label>
        </div>
      </div>
    </div>
  );
};

// Main App component
export default function App() {
  const [openWeek, setOpenWeek] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(1800);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeDay, setActiveDay] = useState(null);
  const [toneLoaded, setToneLoaded] = useState(false);
  const [completedDays, setCompletedDays] = useState({});

  // Load completion data from localStorage on initial render
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("copycatCompletedDays");
      if (savedData) {
        setCompletedDays(JSON.parse(savedData));
      }
    } catch (error) {
      console.error("Failed to load completion data:", error);
    }
  }, []);

  // Save completion data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(
        "copycatCompletedDays",
        JSON.stringify(completedDays)
      );
    } catch (error) {
      console.error("Failed to save completion data:", error);
    }
  }, [completedDays]);

  // Effect to load Tone.js for the timer sound
  useEffect(() => {
    if (document.getElementById("tone-script")) {
      setToneLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "tone-script";
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/tone/14.7.77/Tone.js";
    script.async = true;
    script.onload = () => setToneLoaded(true);
    document.body.appendChild(script);
  }, []);

  // Timer countdown effect
  useEffect(() => {
    if (!isTimerRunning) return;

    if (timeRemaining <= 0) {
      if (toneLoaded && window.Tone) {
        if (window.Tone.context.state !== "running") {
          window.Tone.context.resume();
        }
        const synth = new window.Tone.Synth().toDestination();
        synth.triggerAttackRelease("C5", "8n", window.Tone.now());
        synth.triggerAttackRelease("G5", "8n", window.Tone.now() + 0.2);
      }
      const timeoutId = setTimeout(() => handleStopTimer(), 5000);
      return () => clearTimeout(timeoutId);
    }

    const intervalId = setInterval(
      () => setTimeRemaining((prevTime) => prevTime - 1),
      1000
    );
    return () => clearInterval(intervalId);
  }, [isTimerRunning, timeRemaining, toneLoaded]);

  const handleWeekClick = (weekNumber) => {
    setOpenWeek(openWeek === weekNumber ? null : weekNumber);
  };

  const handleStartTimer = (day) => {
    if (isTimerRunning) return;
    window.open(day.link, "_blank", "noopener,noreferrer");
    setActiveDay(day);
    setTimeRemaining(1800);
    setIsTimerRunning(true);
    if (toneLoaded && window.Tone && window.Tone.context.state !== "running") {
      window.Tone.start();
    }
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
    setActiveDay(null);
    setTimeRemaining(1800);
  };

  const handleToggleComplete = (dayId) => {
    setCompletedDays((prev) => ({
      ...prev,
      [dayId]: !prev[dayId],
    }));
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen font-sans">
      <TimerDisplay
        activeDay={activeDay}
        timeRemaining={timeRemaining}
        onStop={handleStopTimer}
      />
      <div
        className={`container mx-auto p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
          isTimerRunning ? "pt-24" : ""
        }`}
      >
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 dark:text-white mb-2">
            Copycat Curriculum
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A 60-Day Journey into Great Writing
          </p>
        </header>

        <div className="bg-white dark:bg-slate-800/50 rounded-lg shadow-xl overflow-hidden">
          {curriculumData.map((weekData) => (
            <AccordionItem
              key={weekData.week}
              {...weekData}
              isOpen={openWeek === weekData.week}
              onClick={() => handleWeekClick(weekData.week)}
              onStartTimer={handleStartTimer}
              isTimerRunning={isTimerRunning}
              completedDays={completedDays}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        </div>

        <footer className="text-center mt-8 text-slate-500 dark:text-slate-400 text-sm">
          <p>Click "Start Session" to begin your 30-minute copying exercise.</p>
        </footer>
      </div>
    </div>
  );
}
