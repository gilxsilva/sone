import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  dictionary,
  getDictionary,
  normalize,
  makeReading,
  shareReading,
  feelings,
  getMoodNote,
  type DreamSymbol,
  type SymbolId,
  type Feeling,
  type Category,
} from './dictionary';
import { LanguageProvider, useI18n } from './i18n';
import './style.css';

type Page = 'home' | 'interpret' | 'dictionary';
const examples = [
  {
    name: 'I was flying',
    text: 'I was flying over the ocean at sunset. I could see my childhood house below me, but I felt peaceful and did not want to land.',
  },
  {
    name: 'My teeth fell out',
    text: 'I was talking to an old friend when my teeth started falling out. I tried to hide it and felt really embarrassed.',
  },
  {
    name: 'A familiar place',
    text: 'I was in my grandmother’s house, but there were rooms I had never seen. A cat led me to an open door into a garden full of flowers.',
  },
];
function Art({ kind, className = '' }: { kind: SymbolId | 'eye' | 'star'; className?: string }) {
  const ink = '#294632',
    gold = '#da753e';
  const drawings: Record<string, React.ReactNode> = {
    moon: (
      <>
        <path
          d="M135 30c-47 5-65 63-38 96 14 18 35 21 54 13-29 41-91 26-102-18C35 73 77 20 135 30Z"
          fill="#dfbf75"
        />
        <path d="M107 48c-8 23-7 50 10 64l-17 5m4-39 9 1m-7 45c9 2 16-1 20-5" fill="none" />
        <path
          d="m151 52 3 10 10 3-10 3-3 10-3-10-10-3 10-3Zm-94 86 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z"
          fill={gold}
        />
      </>
    ),
    eye: (
      <>
        <path d="M17 99Q100 18 183 99Q100 174 17 99Z" fill="#e8d6b3" />
        <path d="M17 99Q100 42 183 99Q100 150 17 99Z" fill="#f7f0df" />
        <ellipse cx="100" cy="99" rx="30" ry="36" fill="#7f977e" />
        <ellipse cx="100" cy="99" rx="12" ry="26" fill={ink} />
        <circle cx="109" cy="86" r="5" fill="#f9f4e7" />
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={`M${33 + i * 17} ${i < 4 ? 73 - i * 5 : 53 + (i - 4) * 5}l${(i - 4) * 2} -17`}
          />
        ))}
        <path d="m100 24 0-13m-14 16-5-11m32 11 6-11m-20 157 0 12m-15-15-5 11m34-11 5 11" />
      </>
    ),
    snake: (
      <>
        <path
          d="M129 30C63 12 36 49 69 74c29 21 87-4 86 29-1 24-99 10-102 44-3 30 69 28 83 10"
          fill="none"
          stroke="#45654b"
          strokeWidth="22"
        />
        <path
          d="M129 30C63 12 36 49 69 74c29 21 87-4 86 29-1 24-99 10-102 44-3 30 69 28 83 10"
          fill="none"
          stroke="#d2b864"
          strokeWidth="3"
          strokeDasharray="3 9"
        />
        <path d="m124 17 28 9-8 19-28-5Z" fill="#45654b" />
        <circle cx="140" cy="27" r="2" fill="#f4e5b4" />
        <path d="m151 31 13 1 6-5m-6 5 5 6" fill="none" />
      </>
    ),
    water: (
      <>
        <path d="M99 22C88 53 48 84 48 120a52 52 0 0 0 104 0c0-36-41-67-53-98Z" fill="#7faaa4" />
        <path
          d="M65 119q16-17 35 0t35 0M62 137q20-17 39 0t36 0M81 94l14-22"
          fill="none"
          stroke="#f5ead3"
          strokeWidth="4"
        />
      </>
    ),
    teeth: (
      <>
        <path
          d="M48 42c19-19 38 2 52 2s39-20 54 0c20 25-5 46-9 71s-10 55-24 51c-11-3-6-53-21-53s-11 54-23 53c-17-1-17-41-23-60S28 62 48 42Z"
          fill="#fbf4df"
        />
        <path d="M76 48q21 17 43 2M66 69q-12 15-1 29" fill="none" />
      </>
    ),
    flying: (
      <>
        <path
          d="M99 142C77 85 21 125 25 43c25 27 51 13 74 60C122 56 148 70 175 43c4 79-50 42-76 99Z"
          fill="#ded7b5"
        />
        <path
          d="m99 142 0 23M34 62q8 29 42 38m-30-22q8 26 38 38m82-54q-8 29-42 38m30-22q-8 26-38 38"
          fill="none"
        />
      </>
    ),
    house: (
      <>
        <path d="m33 91 67-59 67 59" fill="#bc7862" />
        <path d="M46 87v82h108V87l-54-47Z" fill="#e2c7a2" />
        <path d="M84 169v-51q16-16 32 0v51" fill="#64806b" />
        <path d="M59 100h18v24H59Zm65 0h18v24h-18Z" fill="#f7e8c1" />
        <path d="M127 57V32h17v40" fill="#bc7862" />
        <path d="M27 171h146" />
      </>
    ),
    cat: (
      <>
        <path
          d="M69 72 62 31l30 25q13-4 25 0l26-25-3 45q16 22-6 43c20 25 19 41 12 50H60c-12-34 11-45 18-50Q48 99 69 72Z"
          fill="#536f5b"
        />
        <path d="M139 163c57 1 38-65 15-43" fill="none" stroke="#536f5b" strokeWidth="13" />
        <path
          d="m77 83 14 4m23 0 13-5m-33 17 6 6 6-6m-34 9-24-5m25 12-24 5m77-12 24-5m-24 12 24 5"
          fill="none"
          stroke="#e8d5a2"
        />
        <path d="M90 169v-33m23 33v-33" />
      </>
    ),
    bird: (
      <>
        <path
          d="M53 112q-5-67 51-47l32-17-5 27 30 5-29 14q-3 57-57 41l-39 29 12-43-23-24Z"
          fill="#6c8e77"
        />
        <path d="M65 92q37-9 40 26-31 13-40-26Z" fill="#d7b56e" />
        <circle cx="115" cy="76" r="3" fill={ink} />
        <path d="m88 139-2 23m14-24 3 24m-30 0h41" fill="none" />
      </>
    ),
    flowers: (
      <>
        <path
          d="m100 170 0-90m0 57q-47 4-46-33 36 1 46 33Zm1 15q43-3 44-31-36 0-44 31Z"
          fill="#5e7f5e"
        />
        <g fill="#b96e69">
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse key={a} cx="100" cy="49" rx="17" ry="29" transform={`rotate(${a} 100 78)`} />
          ))}
        </g>
        <circle cx="100" cy="78" r="21" fill="#e2ba65" />
        <circle cx="100" cy="78" r="12" fill="none" strokeDasharray="2 4" />
      </>
    ),
    death: (
      <>
        <path d="M58 105V84a42 42 0 0 1 84 0v21l-17 15v30H76v-30Z" fill="#ede1c5" />
        <circle cx="78" cy="88" r="13" fill="#7a4e50" />
        <circle cx="122" cy="88" r="13" fill="#7a4e50" />
        <path d="m100 100-7 16h14Zm-23 31h48m-35-8v27m13-27v27m12-27v27" fill="none" />
        <path d="m58 164 87 12m-88 0 86-12" strokeWidth="6" />
      </>
    ),
    baby: (
      <>
        <path d="M62 87q-32 36 25 88 53-7 59-49l-28-43" fill="#d5bfa8" />
        <circle cx="97" cy="66" r="31" fill="#eddbb8" />
        <path
          d="M83 65q5 5 9 0m11 0q5 5 9 0m-19 17q6 4 12-1M63 96l67 48m-76-20 50 40"
          fill="none"
        />
        <path d="M96 37q19-22 13-11" fill="none" />
      </>
    ),
    fire: (
      <>
        <path
          d="M109 21c21 48-4 50 16 62l14-32c54 64 20 117-34 120-60 0-78-49-44-92l8 29c30-19 4-50 40-87Z"
          fill="#bb6e4d"
        />
        <path
          d="M100 87c-22 32 5 35-10 50l-9-16c-24 39 7 56 28 47 32-13 15-44-9-81Z"
          fill="#e4bc63"
        />
      </>
    ),
    road: (
      <>
        <path
          d="M87 29h26c-47 49 42 65 14 101s-12 36 22 49H40c-26-40 80-59 43-95S70 51 87 29Z"
          fill="#b9ab7e"
        />
        <path
          d="M101 30C53 75 155 91 98 131s-20 38-9 47"
          fill="none"
          stroke="#f4e6c9"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
        <path d="m43 70-15 35h30Zm109 23-15 35h30Z" fill="#6b805f" />
      </>
    ),
    money: (
      <>
        <circle cx="100" cy="102" r="60" fill="#d5b56e" />
        <circle cx="100" cy="102" r="49" fill="none" />
        <path d="m100 62 10 26 28 2-22 18 7 29-23-16-23 16 7-29-22-18 28-2Z" fill="#edd69b" />
        <path d="m51 49-12-13m104 10 14-13m-57-3V15" />
      </>
    ),
    rain: (
      <>
        <path d="M56 90C15 79 38 36 65 48c13-40 64-31 70 1 38-7 48 40 9 45H56Z" fill="#9aadb0" />
        {[57, 86, 115, 144].map((x, i) => (
          <path
            key={x}
            d={`m${x} ${110 + (i % 2) * 12}-10 24m0 12-7 15`}
            stroke="#6a9496"
            strokeWidth="4"
          />
        ))}
      </>
    ),
    mother: (
      <>
        <path d="M44 166q-7-59 25-68h61q32 15 28 68Z" fill="#8c9a77" />
        <path d="M65 79q-21-63 35-61 55 1 36 66" fill="#c8c0af" />
        <ellipse cx="100" cy="69" rx="30" ry="38" fill="#e4c5a0" />
        <path
          d="M73 47q25-3 28-23 10 22 30 21m-47 20h10m12 0h10m-23 19q8 7 16 0m-8-15-3 9h7"
          fill="none"
        />
        <circle cx="88" cy="67" r="10" fill="none" />
        <circle cx="112" cy="67" r="10" fill="none" />
        <path d="M67 105 100 147l33-42m-33 42v19" fill="none" />
      </>
    ),
    door: (
      <>
        <path d="M52 175V66a48 48 0 0 1 96 0v109Z" fill="#8b9c7b" />
        <path d="M67 175V68a33 33 0 0 1 66 0v107Z" fill="#304e40" />
        <path d="m77 175 0-113 46-14v115Z" fill="#c5ab77" />
        <circle cx="111" cy="113" r="3" fill={ink} />
        <path d="M43 175h113m-56-164v-9m-48 27-8-8m105 8 8-8" />
      </>
    ),
    chase: (
      <>
        <path d="M56 169q11-28 10-63 2-64 36-73 32 23 29 69 0 40 22 67Z" fill="#76707e" />
        <path d="M78 169q10-20 10-48 10-12 23 0 0 28 11 48" fill="#aca0a7" />
        <path d="m83 76 9 0m17 0 9 0" stroke="#ede0bd" strokeWidth="5" />
        <path d="m36 155-10 14m141-14 10 14" />
      </>
    ),
    star: (
      <>
        <path d="m100 20 16 59 59 21-59 17-16 63-17-63-58-17 58-21Z" fill="#b69b5d" />
        <circle cx="100" cy="100" r="12" fill="#f5f0e5" />
      </>
    ),
    falling: (
      <>
        <path d="M38 40q40-30 70-6m35 0 24 8" fill="none" />
        <circle cx="102" cy="89" r="14" fill="#f2b353" />
        <path
          d="m97 105-18 32 29 16 13-26 21 9m-55-14-24-13m25 31-19 30m43-25 12 27M38 66l8 24m112-30-9 24"
          stroke="#294632"
          strokeWidth="7"
        />
        <path d="M51 180q48-15 100 0" fill="none" />
      </>
    ),
    person: (
      <>
        <circle cx="75" cy="66" r="26" fill="#dc9c69" />
        <path d="M28 165v-27a47 47 0 0 1 94 0v27Z" fill="#6e8a5c" />
        <circle cx="130" cy="79" r="24" fill="#e6bc85" />
        <path d="M89 165v-22a41 41 0 0 1 82 0v22Z" fill="#ab87af" />
        <path d="M53 54q22-34 44 0m17 11q15-30 34 2" fill="#294632" />
      </>
    ),
    dog: (
      <>
        <path
          d="M60 84 42 54 67 43l19 16h35l21-14 17 14-17 32v54q0 22-41 22t-40-22Z"
          fill="#bc8b5e"
        />
        <path d="M62 85 49 62m86 19 13-19" stroke="#294632" strokeWidth="13" />
        <ellipse cx="101" cy="113" rx="29" ry="22" fill="#eed8b5" />
        <circle cx="82" cy="85" r="3" fill="#294632" />
        <circle cx="120" cy="85" r="3" fill="#294632" />
        <path d="m94 105 8 7 8-7Z" fill="#294632" />
        <path d="M102 113v12m-14 0q14 12 28 0M73 155h58" />
      </>
    ),
    fish: (
      <>
        <path d="M47 103q43-67 99 0-56 64-99 0Z" fill="#d4a15f" />
        <path d="m49 102-27-29v57Zm41-37 24-17 9 26m-34 58 22 20 12-29" fill="#759e8d" />
        <path d="M126 80q-17 24-1 46m-32-46q-18 22 0 44m-16-35q-10 14-1 27" />
        <circle cx="133" cy="98" r="3" fill="#294632" />
        <circle cx="157" cy="69" r="6" />
        <circle cx="171" cy="47" r="4" />
      </>
    ),
    butterfly: (
      <>
        <path
          d="M97 84C37 3 15 48 44 99c-38 49 11 81 52 22m8-37c60-81 82-36 53 15 38 49-11 81-52 22"
          fill="#a881b1"
        />
        <path d="M97 83v58m9-58v58m-6-66-12-21m16 20 12-20" strokeWidth="4" />
        <path
          d="M87 89 54 61l9 35Zm27 0 33-28-9 35ZM86 116l-22 26 4-30Zm28 0 22 26-4-30Z"
          fill="#e6bf68"
        />
      </>
    ),
    spider: (
      <>
        <path
          d="m70 96-28-24-9-24m37 57-35-5-15 15m53 5-32 17-10 25m54-34-20 30 2 17m63-79 28-24 9-24m-37 57 35-5 15 15m-53 5 32 17 10 25m-54-34 20 30-2 17"
          stroke="#294632"
          strokeWidth="4"
        />
        <ellipse cx="101" cy="105" rx="32" ry="39" fill="#6e6882" />
        <ellipse cx="101" cy="67" rx="20" ry="17" fill="#6e6882" />
        <circle cx="93" cy="63" r="3" fill="#f8edca" />
        <circle cx="109" cy="63" r="3" fill="#f8edca" />
        <path d="M101 47V13" />
      </>
    ),
    bee: (
      <>
        <ellipse cx="82" cy="68" rx="23" ry="35" transform="rotate(-30 82 68)" fill="#f4e9c7" />
        <ellipse cx="122" cy="68" rx="23" ry="35" transform="rotate(30 122 68)" fill="#f4e9c7" />
        <ellipse cx="102" cy="111" rx="45" ry="31" fill="#e9be54" />
        <path d="M82 83q-10 27 0 55m21-58q-9 31 0 62m20-58q-7 27 0 54" strokeWidth="11" />
        <circle cx="146" cy="107" r="19" fill="#486347" />
        <path d="m140 90-7-17m20 17 8-17M59 111l-15 0" strokeWidth="3" />
        <circle cx="151" cy="104" r="3" fill="#f8edca" />
      </>
    ),
    bridge: (
      <>
        <path d="M18 116q82-104 164 0v33H18Z" fill="#bd885e" />
        <path d="M42 149q58-88 116 0" fill="#a8c8c5" />
        <path
          d="M18 104q82-105 164 0M30 86v27m20-44v24m23-38v23m26-30v23m25-16v23m23-10v24m22-8v28"
          strokeWidth="3"
        />
        <path d="M20 167q15-10 30 0t30 0 30 0 30 0 30 0" />
      </>
    ),
    school: (
      <>
        <path d="M42 166V82h116v84Z" fill="#c09d71" />
        <path d="m28 83 72-50 72 50Z" fill="#7c8d6b" />
        <path d="M86 166v-44h28v44" fill="#294632" />
        <path d="M54 100h18v23H54Zm74 0h18v23h-18Z" fill="#f8edca" />
        <circle cx="100" cy="69" r="13" fill="#f8edca" />
        <path d="M100 60v10l7 2m-7-38V14l30 10-30 7" />
      </>
    ),
    mirror: (
      <>
        <ellipse cx="100" cy="84" rx="49" ry="64" fill="#d8b778" />
        <ellipse cx="100" cy="84" rx="37" ry="51" fill="#a6bfc8" />
        <path d="m77 82 37-35m-31 67 36-35" stroke="#f8edca" strokeWidth="4" />
        <path d="M88 147v28h24v-28" fill="#d8b778" />
        <path d="M71 176h58" strokeWidth="4" />
      </>
    ),
    clock: (
      <>
        <circle cx="100" cy="99" r="63" fill="#e0bd73" />
        <circle cx="100" cy="99" r="51" fill="#f8edca" />
        <path d="M100 57v9m0 66v9m-42-42h10m64 0h10M100 75v25l20 13" strokeWidth="3" />
        <circle cx="100" cy="99" r="4" fill="#294632" />
        <path d="m56 48-9-14m96 14 10-14m-83 124-9 16m69-16 9 16" strokeWidth="6" />
      </>
    ),
    tree: (
      <>
        <path d="M89 112v57l-20 9h62l-19-9v-58" fill="#aa825a" />
        <path
          d="M102 28c-27-20-50 3-45 24-40-2-49 45-16 57-13 32 34 48 61 22 28 26 74 10 62-22 32-12 24-59-17-57 5-21-18-44-45-24Z"
          fill="#6f8d58"
        />
        <path d="M102 143V81m0 42-26-24m27 8 25-29" stroke="#e9d5a9" strokeWidth="3" />
      </>
    ),
    mountain: (
      <>
        <path d="m19 166 78-133 84 133Z" fill="#819b9b" />
        <path d="m64 89 33-56 36 57-24-10-13 18-15-18Z" fill="#f8edca" />
        <path d="m114 166 34-68 41 68Z" fill="#c8b88b" />
        <path d="m56 166 30-54 34 54Z" fill="#678264" />
        <path d="M31 44h22m-11-11v22" stroke="#db9d50" strokeWidth="3" />
      </>
    ),
    boat: (
      <>
        <path d="m30 130 25 39h91l25-39Z" fill="#ad7d56" />
        <path d="M101 27v103m-7-88-48 74h48Zm16-6 44 80h-44Z" fill="#e5bf75" />
        <path d="M23 181q15-10 30 0t30 0 30 0 30 0 30 0" stroke="#6a9496" strokeWidth="3" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke={ink}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {drawings[kind]}
    </svg>
  );
}
function Flower({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden="true">
      <g fill="currentColor">
        {Array.from({ length: 10 }, (_, i) => (
          <ellipse key={i} cx="80" cy="34" rx="18" ry="31" transform={`rotate(${i * 36} 80 80)`} />
        ))}
      </g>
      <circle cx="80" cy="80" r="27" fill="#f8edca" />
      <circle cx="80" cy="80" r="14" fill="#294632" />
      <path d="M73 86q7 7 14 0" stroke="#f8edca" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function Portal() {
  const { t } = useI18n();
  const reduced = useReducedMotion();
  return (
    <div className="portal-wrap">
      <svg
        className="dream-portal"
        viewBox="0 0 520 620"
        fill="none"
        role="img"
        aria-label={t(
          'A psychedelic dream landscape: a sun and moon above rolling hills, a floating eye, and stairs to an open doorway',
        )}
      >
        <defs>
          <clipPath id="portal-clip">
            <path d="M35 590V255a225 225 0 0 1 450 0v335Z" />
          </clipPath>
          <pattern id="sky-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r=".7" fill="#f9efcf" opacity=".24" />
          </pattern>
        </defs>
        <path
          d="M35 590V255a225 225 0 0 1 450 0v335Z"
          fill="#e78752"
          stroke="#294632"
          strokeWidth="2"
        />
        <path d="M49 579V255a211 211 0 0 1 422 0v324Z" stroke="#f2bf55" strokeWidth="8" />
        <path d="M63 579V255a197 197 0 0 1 394 0v324Z" stroke="#afadd0" strokeWidth="11" />
        <g clipPath="url(#portal-clip)">
          <path d="M74 590V255a186 186 0 0 1 372 0v335Z" fill="#294632" />
          <path d="M74 590V255a186 186 0 0 1 372 0v335Z" fill="url(#sky-dots)" />
          <g fill="#f5c257">
            <path d="m262 92 4 15 14 4-14 4-4 16-4-16-14-4 14-4Zm104 106 4 13 13 4-13 4-4 13-4-13-13-4 13-4Zm-238 30 4 12 12 4-12 4-4 12-4-12-12-4 12-4Zm184 108 4 12 12 4-12 4-4 12-4-12-12-4 12-4Z" />
            <circle cx="306" cy="182" r="3" />
            <circle cx="170" cy="316" r="3" />
            <circle cx="392" cy="296" r="3" />
            <circle cx="208" cy="152" r="2" />
          </g>
          <g stroke="#f2bc55" strokeWidth="2" strokeLinecap="round">
            {Array.from({ length: 16 }, (_, i) => (
              <path key={i} d="M178 145v-15" transform={`rotate(${i * 22.5} 178 189)`} />
            ))}
          </g>
          <circle cx="178" cy="189" r="33" fill="#f2bc55" />
          <path
            d="m164 187 8 0m12 0h8m-20 13q7 8 15 0m-9-18-4 13h5"
            stroke="#294632"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M363 112c-39 7-50 46-20 67 10 7 18 9 29 6-34 26-68-4-66-32 1-26 28-50 57-41Z"
            fill="#c9bbdc"
          />
          <path
            d="M194 264q66-58 132 0-66 59-132 0Z"
            fill="#efbc75"
            stroke="#f3e4bc"
            strokeWidth="2"
          />
          <path d="M210 264q50-34 100 0-50 35-100 0Z" fill="#f7efcd" />
          <ellipse cx="260" cy="264" rx="20" ry="26" fill="#9da6bd" />
          <ellipse cx="260" cy="264" rx="7" ry="18" fill="#294632" />
          <circle cx="267" cy="256" r="4" fill="#f8edca" />
          <path
            d="m226 235-6-12m24 3-2-13m25 13 1-14m22 19 6-12m17 26 10-10"
            stroke="#efbc75"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M18 432q110-112 235-20t276-32v231H18Z" fill="#c6c98a" />
          <path d="M-20 494q139-119 288-31t267-15v165H-20Z" fill="#e59461" />
          <path d="M-10 558q122-136 270-42t266-4v106H-10Z" fill="#a7b8be" />
          <path d="M74 595q102-82 159-42t170 30" stroke="#f8edca" strokeWidth="3" />
          <path
            d="M320 379V334a35 35 0 0 1 70 0v45Z"
            fill="#f5cd71"
            stroke="#294632"
            strokeWidth="2"
          />
          <path d="M333 379v-44a22 22 0 0 1 44 0v44Z" fill="#294632" />
          <path d="M337 379v-45l30-12v52Z" fill="#d28659" stroke="#294632" strokeWidth="1.5" />
          <circle cx="361" cy="351" r="2" fill="#f8edca" />
          <path
            d="M322 379h68v15h-13v16h-14v17h-14v18h-15v17h-15v18h-15v17h-16v18h-15v18h-16v18h-16v18h-16v18h-18v18h-30v-18h16v-18h16v-18h16v-18h15v-18h16v-18h15v-18h16v-18h14v-18h15v-18h13v-18h14v-17h14Z"
            fill="#f6e8be"
            stroke="#294632"
            strokeWidth="1.5"
          />
          <path
            d="M318 394h59m-72 16h58m-72 17h58m-72 18h57m-71 17h56m-70 18h55m-70 17h54m-68 18h53m-68 18h53m-68 18h52m-66 18h50"
            stroke="#bba985"
            strokeWidth="1.5"
          />
          <g fill="#f8edca" stroke="#294632" strokeWidth="1.5">
            <path d="M80 359c-18-16-8-35 9-34-1-27 37-32 43-7 23-11 40 14 25 27 24-2 27 22 5 22H81q-15 0-1-8Z" />
            <path d="M328 445c-10-19 6-34 22-28 8-24 42-18 42 6 22-1 34 21 14 29h-73Z" />
          </g>
          <path
            d="M97 500q25-20 49-12m-45 9q10-20 17-22m5 15q10-19 18-20"
            stroke="#294632"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <path d="M35 590V255a225 225 0 0 1 450 0v335Z" stroke="#294632" strokeWidth="2" />
        <path d="M24 603h472" stroke="#294632" strokeWidth="2" />
      </svg>
      <motion.div
        className="portal-flower"
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 70, ease: 'linear', repeat: Infinity }}
      >
        <Flower />
      </motion.div>
      <div className="portal-sticker">
        {t('open minds.')}
        <br />
        {t('wild dreams.')}
      </div>
      <span className="portal-caption">{t('TAKE THE SCENIC ROUTE THROUGH YOUR MIND.')}</span>
    </div>
  );
}
function SymbolCard({
  symbol,
  onClick,
  index = 0,
}: {
  symbol: DreamSymbol;
  onClick: () => void;
  index?: number;
}) {
  const { t } = useI18n();
  const reduced = useReducedMotion();
  return (
    <motion.button
      className="symbol-card"
      onClick={onClick}
      whileHover={reduced ? {} : { y: -5, rotate: index % 2 ? 1 : -1 }}
      whileTap={reduced ? {} : { scale: 0.98 }}
      aria-label={`${t('Explore')} ${symbol.name}`}
    >
      <div className="symbol-illustration" style={{ background: symbol.color }}>
        <span className="symbol-number">
          {String(dictionary.findIndex((s) => s.id === symbol.id) + 1).padStart(2, '0')}
        </span>
        <Art kind={symbol.id} />
        <span className="symbol-plus">↗</span>
      </div>
      <div className="symbol-label">
        <h3>{symbol.name}</h3>
        <p>{symbol.subtitle}</p>
      </div>
    </motion.button>
  );
}
function App() {
  const { lang, setLang, t } = useI18n();
  const reduced = useReducedMotion();
  const getPage = (): Page =>
    window.location.hash === '#dictionary'
      ? 'dictionary'
      : window.location.hash === '#interpret'
        ? 'interpret'
        : 'home';
  const [page, setPage] = useState<Page>(getPage);
  const [dream, setDream] = useState('');
  const [result, setResult] = useState('');
  const [feeling, setFeeling] = useState<Feeling>(feelings[0]);
  const [resultFeeling, setResultFeeling] = useState<Feeling>(feelings[0]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'All'>('All');
  const [selected, setSelected] = useState<DreamSymbol | null>(null);
  const [dialogTab, setDialogTab] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);
  const [includeDream, setIncludeDream] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'fallback'>('idle');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const shareRef = useRef<HTMLDialogElement>(null);
  const shareTextRef = useRef<HTMLTextAreaElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const reading = makeReading(result, resultFeeling, lang);
  const shareText = shareReading(reading, result, includeDream, lang);
  const localizedDictionary = getDictionary(lang);
  const visibleSymbols = localizedDictionary.filter(
    (s) =>
      (category === 'All' || s.category === category) &&
      normalize([s.name, s.subtitle, ...s.words].join(' ')).includes(normalize(search)),
  );
  useEffect(() => {
    const change = () => {
      if (window.location.hash === '#main') return;
      setPage(getPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', change);
    if (window.location.hash === '#journal') window.history.replaceState(null, '', '#home');
    return () => window.removeEventListener('hashchange', change);
  }, []);
  useEffect(() => {
    if (page === 'interpret' && result) resultHeading.current?.focus({ preventScroll: true });
  }, [page, result]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected || !dialog) return;
    const focus = document.activeElement as HTMLElement | null;
    dialog.showModal();
    return () => {
      dialog.close();
      focus?.focus({ preventScroll: true });
    };
  }, [selected]);
  useEffect(() => {
    const dialog = shareRef.current;
    if (!shareOpen || !dialog) return;
    const focus = document.activeElement as HTMLElement | null;
    dialog.showModal();
    return () => {
      dialog.close();
      focus?.focus({ preventScroll: true });
    };
  }, [shareOpen]);
  function go(next: Page) {
    setSelected(null);
    if (page !== next) {
      window.location.hash = next;
      setPage(next);
    }
    window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
  }
  function inputFocus() {
    setTimeout(() => document.getElementById('dream-input')?.focus(), 250);
  }
  function start() {
    setResult('');
    setDream('');
    setFeeling(feelings[0]);
    setError('');
    go('home');
    inputFocus();
  }
  function interpret() {
    if (dream.trim().length < 3) {
      setError(t('Give us a few words to work with. Even one clear image is a start.'));
      document.getElementById('dream-input')?.focus();
      return;
    }
    setError('');
    setResult(dream.trim());
    setResultFeeling(feeling);
    setCopyState('idle');
    go('interpret');
  }
  useEffect(() => {
    setSelected((s) => (s ? (getDictionary(lang).find((x) => x.id === s.id) ?? null) : null));
  }, [lang]);
  function openSymbol(symbol: DreamSymbol) {
    setDialogTab(0);
    setSelected(symbol);
  }
  function openShare() {
    setIncludeDream(false);
    setCopyState('idle');
    setShareOpen(true);
  }
  async function copy() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(shareText);
      setCopyState('copied');
    } catch {
      setCopyState('fallback');
      shareTextRef.current?.focus();
      shareTextRef.current?.select();
    }
  }
  function onPageEntered() {
    if (page === 'interpret' && result) resultHeading.current?.focus({ preventScroll: true });
    if (page === 'home' && window.location.hash === '#about')
      document
        .getElementById('the-idea')
        ?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' });
  }
  function jumpToIdea(e: React.MouseEvent) {
    e.preventDefault();
    if (page === 'home') {
      window.history.replaceState(null, '', '#about');
      document
        .getElementById('the-idea')
        ?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' });
    } else {
      go('home');
      window.history.replaceState(null, '', '#about');
    }
  }
  const form = (
    <form
      className="dream-form"
      onSubmit={(e) => {
        e.preventDefault();
        interpret();
      }}
    >
      <div className="form-heading">
        <label htmlFor="dream-input">{t('What did you dream about?')}</label>
        <span aria-hidden="true">↙</span>
      </div>
      <textarea
        id="dream-input"
        value={dream}
        maxLength={5000}
        placeholder={t('I was somewhere familiar, but everything was a little different…')}
        rows={3}
        onChange={(e) => {
          setDream(e.target.value);
          setError('');
        }}
        aria-describedby={error ? 'dream-error' : 'dream-hint'}
      />
      <div className="form-controls">
        <div className="feeling-select">
          <label htmlFor="feeling">
            {t('The feeling')}
            <span>{t('(optional)')}</span>
          </label>
          <select
            id="feeling"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value as Feeling)}
          >
            {feelings.map((f) => (
              <option key={f} value={f}>
                {t(f)}
              </option>
            ))}
          </select>
        </div>
        <button className="button orange" type="submit">
          {t('Explore my dream')}
          <span>↗</span>
        </button>
      </div>
      {error && (
        <p id="dream-error" className="form-error" role="alert">
          {error}
        </p>
      )}
      <p id="dream-hint" className="form-privacy">
        <span aria-hidden="true">◌</span> {t('Just here, just now. Your dream isn’t saved.')}
      </p>
    </form>
  );
  return (
    <div className="site">
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main')?.focus();
          document.getElementById('main')?.scrollIntoView();
        }}
      >
        {t('Skip to content')}
      </a>
      <header className="header">
        <a
          className="logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go('home');
          }}
          aria-label={t('Soñé home')}
        >
          soñé
          <svg viewBox="0 0 40 20" aria-hidden="true">
            <path
              d="M2 10Q20-6 38 10Q20 26 2 10Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="20" cy="10" r="6" fill="currentColor" />
          </svg>
        </a>
        <nav aria-label={t('Main navigation')}>
          <a
            href="#dictionary"
            onClick={(e) => {
              e.preventDefault();
              go('dictionary');
            }}
            aria-current={page === 'dictionary' ? 'page' : undefined}
          >
            {t('Dream symbols')}
          </a>
          <a href="#about" onClick={jumpToIdea}>
            {t('The idea')}
          </a>
        </nav>
        <div
          className="language-switch"
          role="group"
          aria-label={lang === 'es' ? 'Idioma' : 'Language'}
        >
          <button
            aria-label="English"
            lang="en"
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <span aria-hidden="true">/</span>
          <button
            aria-label="Español"
            lang="es"
            aria-pressed={lang === 'es'}
            onClick={() => setLang('es')}
          >
            ES
          </button>
        </div>
        <button className="header-cta" onClick={start}>
          {t('Follow a dream')}
          <span>↗</span>
        </button>
      </header>
      <main id="main" tabIndex={-1}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page + (page === 'interpret' && result ? 'result' : '')}
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            onAnimationComplete={onPageEntered}
          >
            {(page === 'home' || (page === 'interpret' && !result)) && (
              <>
                <section className="hero page-width">
                  <div className="hero-copy">
                    <p className="eyebrow">
                      <span className="tiny-sun" aria-hidden="true">
                        ✳
                      </span>{' '}
                      {t('FOR THE CURIOUS & THE HALF-AWAKE')}
                    </p>
                    <h1>
                      {t('Your dreams')}
                      <br />
                      {t('are a little')}
                      <br />
                      <span>{t('out there.')}</span>
                      <svg className="headline-swoosh" viewBox="0 0 420 25" aria-hidden="true">
                        <path
                          d="M4 14Q188-7 390 12q29 5 17 9"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </h1>
                    <p className="hero-description">
                      {t('Let’s see where they take you.')}
                      <br />
                      {t('A few words, a little folklore, a fresh way to look at it.')}
                    </p>
                    {form}
                    <div className="example-row">
                      <span>{t('Or try a little daydream:')}</span>
                      <div>
                        {examples.map((e) => (
                          <button
                            key={e.name}
                            onClick={() => {
                              setDream(t(e.text));
                              setFeeling(feelings[0]);
                              setError('');
                              inputFocus();
                            }}
                          >
                            {t(e.name)} <span>↗</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Portal />
                </section>
                <div className="dream-ribbon" aria-hidden="true">
                  <div>
                    <span>{t('WEIRD DREAMS WELCOME')}</span>
                    <span>✳</span>
                    <span>{t('FOLLOW THE FEELING')}</span>
                    <span>✳</span>
                    <span>{t('A LITTLE ROOM TO WONDER')}</span>
                    <span>✳</span>
                    <span>{t('WEIRD DREAMS WELCOME')}</span>
                    <span>✳</span>
                  </div>
                </div>
                <section className="symbols-section">
                  <div className="page-width">
                    <div className="section-heading">
                      <div>
                        <p className="eyebrow">{t('FAMILIAR FACES FROM THE OTHER SIDE')}</p>
                        <h2>
                          {t('The usual')} <span>{t('unusual.')}</span>
                        </h2>
                      </div>
                      <a
                        className="text-link"
                        href="#dictionary"
                        onClick={(e) => {
                          e.preventDefault();
                          go('dictionary');
                        }}
                      >
                        {t('Explore all symbols')}
                        <span>↗</span>
                      </a>
                    </div>
                    <div className="featured-grid">
                      {['flying', 'snake', 'water', 'teeth'].map((id, i) => {
                        const s = localizedDictionary.find((s) => s.id === id)!;
                        return (
                          <SymbolCard
                            key={s.id}
                            symbol={s}
                            index={i}
                            onClick={() => openSymbol(s)}
                          />
                        );
                      })}
                    </div>
                  </div>
                </section>
                <section className="idea-section" id="the-idea">
                  <div className="page-width idea-layout">
                    <div className="idea-art">
                      <Flower />
                      <span className="handwritten">
                        {t('a different')}
                        <br />
                        {t('kind of trip.')}
                      </span>
                    </div>
                    <div className="idea-copy">
                      <p className="eyebrow">{t('A LITTLE FOLKLORE. A LOT OF CURIOSITY.')}</p>
                      <h2>
                        {t('Big feelings.')}
                        <br />
                        {t('Strange stories.')}
                        <br />
                        <span>{t('All welcome.')}</span>
                      </h2>
                      <p>
                        {t(
                          'Soñé means “I dreamed.” It started with the way dreams get talked about around a kitchen table: a strange detail, an old family story, a different point of view.',
                        )}
                      </p>
                      <p>
                        {t(
                          'That’s the spirit here. Tell us what you remember. Explore the symbols and see what connects with your own life. You get the last word on what it means.',
                        )}
                      </p>
                      <a
                        className="text-link"
                        href="#home"
                        onClick={(e) => {
                          e.preventDefault();
                          start();
                        }}
                      >
                        {t('Pull up a chair')}
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </section>
                <section className="how-section page-width">
                  <div className="how-intro">
                    <p className="eyebrow">{t('COME AS YOU ARE. LEAVE WITH A QUESTION.')}</p>
                    <h2>
                      {t('Less overthinking.')}
                      <br />
                      <span>{t('More wondering.')}</span>
                    </h2>
                  </div>
                  <div className="how-steps">
                    {[
                      [
                        '01',
                        t('Tell the strange part.'),
                        t(
                          'A whole story or just an image. Start with whatever is still floating around.',
                        ),
                      ],
                      [
                        '02',
                        t('See what connects.'),
                        t(
                          'Explore symbols, everyday associations, and a little old-fashioned folklore.',
                        ),
                      ],
                      [
                        '03',
                        t('Take a thought with you.'),
                        t(
                          'Copy your reading if you want to share it. Or simply move on with your morning.',
                        ),
                      ],
                    ].map(([n, title, copy]) => (
                      <div key={n}>
                        <span>{n}</span>
                        <div>
                          <h3>{title}</h3>
                          <p>{copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                <section className="faq-section page-width">
                  <div>
                    <p className="eyebrow">{t('A FEW THINGS BEFORE YOU WANDER OFF')}</p>
                    <h2>{t('Good questions.')}</h2>
                  </div>
                  <div className="faqs">
                    <details>
                      <summary>
                        {t('Can you really tell me what my dream means?')}
                        <span>+</span>
                      </summary>
                      <p>
                        {t(
                          'We can offer a starting point. Soñé matches words in your dream to a small, hand-written collection of symbols and reflective prompts. It isn’t an AI therapist, a prediction, or a universal decoder. Keep what connects; leave the rest.',
                        )}
                      </p>
                    </details>
                    <details>
                      <summary>
                        {t('Does my dream get saved anywhere?')}
                        <span>+</span>
                      </summary>
                      <p>
                        {t(
                          'No. Your text stays in this page’s temporary memory. We don’t send it to an interpretation service or save it in browser storage. Reloading clears it. If you want to keep a reading, use the copy option.',
                        )}
                      </p>
                    </details>
                    <details>
                      <summary>
                        {t('Where does the folklore come from?')}
                        <span>+</span>
                      </summary>
                      <p>
                        {t(
                          'The old stories are editorial summaries of common folk motifs and family sayings, which vary across families and places. They aren’t a complete account of Mexican tradition or scientific evidence. Each symbol separates the old story from the reflective reading.',
                        )}
                      </p>
                    </details>
                  </div>
                </section>
              </>
            )}
            {page === 'interpret' && result && (
              <section className="reading-page page-width">
                <div className="reading-topline">
                  <button
                    className="back-link"
                    onClick={() => {
                      go('home');
                      inputFocus();
                    }}
                  >
                    {t('← Back to your dream')}
                  </button>
                  <span className="eyebrow">{t('A LITTLE WINDOW INTO YOUR NIGHT')}</span>
                </div>
                <div className="reading-layout">
                  <aside className="dream-aside">
                    <div className="dream-ticket">
                      <div className="ticket-top">
                        <span className="eyebrow">{t('YOU DREAMED')}</span>
                        <Art kind="moon" />
                      </div>
                      <p>“{result}”</p>
                      <button
                        className="text-link"
                        onClick={() => {
                          go('home');
                          inputFocus();
                        }}
                      >
                        {t('Edit the details')}
                        <span>↗</span>
                      </button>
                      <div className="ticket-bottom">
                        <span>SOÑÉ</span>
                        <span>{t('ONE NIGHT. MANY POSSIBILITIES.')}</span>
                      </div>
                    </div>
                    <button className="button green share-trigger" onClick={openShare}>
                      {t('Copy & share your reading')}
                      <span>↗</span>
                    </button>
                    <p className="share-helper">
                      {t('A little something to send to a friend.')}
                      <br />
                      {t('Your original dream stays out unless you add it.')}
                    </p>
                  </aside>
                  <div className="reading-main">
                    <p className="eyebrow">
                      <span className="tiny-sun">✳</span> {t('HERE’S ONE WAY TO LOOK AT IT')}
                    </p>
                    <h1 ref={resultHeading} tabIndex={-1}>
                      {reading.title}
                      <span className="title-dot">.</span>
                    </h1>
                    <div className="feeling-tag">
                      {t('The feeling:')}
                      <strong>{t(reading.mood).toLowerCase()}</strong>
                    </div>
                    <p className="reading-summary">{reading.summary}</p>
                    <div className="feeling-note">
                      <span>{t('FOLLOW THE FEELING')}</span>
                      <p>{getMoodNote(reading.mood, lang)}</p>
                    </div>
                    <div className="result-symbol-heading">
                      <h2>
                        {reading.symbols.length
                          ? t('The cast of your dream.')
                          : t('A little off the map.')}
                      </h2>
                      <span>
                        {reading.symbols.length
                          ? lang === 'es'
                            ? `${reading.symbols.length} símbolos para explorar`
                            : `${reading.symbols.length} ${reading.symbols.length === 1 ? 'symbol' : 'symbols'} to explore`
                          : t('And that’s okay.')}
                      </span>
                    </div>
                    {reading.symbols.length ? (
                      <div className="result-symbols">
                        {reading.symbols.map((s, i) => (
                          <SymbolCard
                            key={s.id}
                            symbol={s}
                            index={i}
                            onClick={() => openSymbol(s)}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="no-match">
                        <Art kind="eye" />
                        <p>
                          {t(
                            'We haven’t got a card for every strange thing the mind can do. You can add a concrete detail—like a person, place, or animal—or work with the question below.',
                          )}
                        </p>
                        <button
                          className="text-link"
                          onClick={() => {
                            go('home');
                            inputFocus();
                          }}
                        >
                          {t('Add a detail ↗')}
                        </button>
                      </div>
                    )}
                    <div className="takeaway">
                      <Flower />
                      <div>
                        <p className="eyebrow">{t('A QUESTION TO TAKE WITH YOU')}</p>
                        <h2>{reading.question}</h2>
                        <p>{t('You don’t have to answer it here. Just see what comes up.')}</p>
                      </div>
                    </div>
                    {reading.symbols.length > 0 && (
                      <details className="folklore-note">
                        <summary>
                          <span>{t('An old story, for the curious.')}</span>
                          <span>+</span>
                        </summary>
                        <div>
                          <p className="eyebrow">{t('FOLKLORE, NOT A FORECAST')}</p>
                          {reading.symbols.slice(0, 3).map((s) => (
                            <section key={s.id}>
                              <h3>{s.name}</h3>
                              <p>{s.folklore}</p>
                            </section>
                          ))}
                        </div>
                      </details>
                    )}
                    <div className="reading-actions">
                      <button className="button orange" onClick={openShare}>
                        {t('Take this reading with you')}
                        <span>↗</span>
                      </button>
                      <button className="text-link" onClick={start}>
                        {t('Explore another dream')}
                        <span>↗</span>
                      </button>
                    </div>
                    <p className="honest-note">
                      {t(
                        'A symbolic reading for reflection. Dreams don’t come with a universal answer key, and this isn’t a prediction or diagnosis. You know your own life best.',
                      )}
                    </p>
                  </div>
                </div>
              </section>
            )}
            {page === 'dictionary' && (
              <section className="dictionary-page page-width">
                <div className="dictionary-intro">
                  <div>
                    <p className="eyebrow">{t('A FIELD GUIDE TO THE NIGHT')}</p>
                    <h1>
                      {t('Strange things.')}
                      <br />
                      <span>{t('Familiar feelings.')}</span>
                    </h1>
                    <p>
                      {t('Thirty-two symbols to wander through. A few stories to try on.')}
                      <br />
                      {t('The meaning is yours to make.')}
                    </p>
                  </div>
                  <Flower />
                </div>
                <div className="dictionary-tools">
                  <label className="search-box">
                    <span aria-hidden="true">⌕</span>
                    <input
                      type="search"
                      placeholder={t('Water, flying, someone you know…')}
                      aria-label={t('Search dream symbols')}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <span>
                      {visibleSymbols.length} {t('found')}
                    </span>
                  </label>
                  <div
                    className="category-filters"
                    role="group"
                    aria-label={t('Filter symbols by category')}
                  >
                    {(
                      ['All', 'Nature', 'Animals', 'People & places', 'Change & feelings'] as const
                    ).map((c) => (
                      <button key={c} aria-pressed={category === c} onClick={() => setCategory(c)}>
                        {t(c)}
                      </button>
                    ))}
                  </div>
                </div>
                {visibleSymbols.length ? (
                  <div className="dictionary-grid">
                    {visibleSymbols.map((s, i) => (
                      <SymbolCard key={s.id} symbol={s} index={i} onClick={() => openSymbol(s)} />
                    ))}
                  </div>
                ) : (
                  <div className="empty-search">
                    <Art kind="eye" />
                    <h2>{t('Not in this corner of the universe.')}</h2>
                    <p>{t('Try another word, or explore a whole dream instead.')}</p>
                    <button
                      className="text-link"
                      onClick={() => {
                        setSearch('');
                        setCategory('All');
                      }}
                    >
                      {t('Show all symbols ↗')}
                    </button>
                  </div>
                )}
                <div className="dictionary-note">
                  <Flower />
                  <div>
                    <h3>{t('A collection of possibilities.')}</h3>
                    <p>
                      {t(
                        'These cards combine editorial reflection with folk motifs. They aren’t scientifically validated meanings, and the old stories vary across communities. For general background on dreams, visit the',
                      )}{' '}
                      <a href="https://dictionary.apa.org/dream" target="_blank" rel="noreferrer">
                        {t('APA Dictionary ↗')}
                      </a>
                      {t('. It doesn’t validate our symbolic readings.')}
                    </p>
                  </div>
                  <button className="text-link" onClick={start}>
                    {t('Explore your own dream ↗')}
                  </button>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="footer">
        <div className="page-width footer-top">
          <a
            className="logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go('home');
            }}
          >
            soñé<span className="footer-spark">✳</span>
          </a>
          <p>{t('A little room for your dreams.')}</p>
          <span lang="es">dulces sueños.</span>
        </div>
        <div className="page-width footer-bottom">
          <span>{t('FREE TO WANDER. NOTHING TO SIGN UP FOR.')}</span>
          <p>{t('For reflection, with an open mind.')}</p>
          <a href="#about" onClick={jumpToIdea}>
            {t('About Soñé ↗')}
          </a>
        </div>
      </footer>
      {selected && (
        <dialog
          ref={dialogRef}
          className="symbol-dialog"
          aria-labelledby="symbol-title"
          onCancel={() => setSelected(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <button
            className="dialog-close"
            aria-label={t('Close symbol')}
            onClick={() => setSelected(null)}
          >
            ×
          </button>
          <div className="dialog-art" style={{ background: selected.color }}>
            <p className="eyebrow">
              {t('A SMALL PIECE OF THE NIGHT ·')}
              {String(dictionary.findIndex((s) => s.id === selected.id) + 1).padStart(2, '0')}
            </p>
            <Art kind={selected.id} />
            <h2 id="symbol-title">{selected.name}</h2>
            <p>{selected.subtitle}</p>
          </div>
          <div className="dialog-copy">
            <div className="dialog-tabs" role="tablist" aria-label={t('Symbol perspectives')}>
              {[t('A fresh look'), t('An old story')].map((t, i) => (
                <button
                  key={t}
                  id={`symbol-tab-${i}`}
                  role="tab"
                  aria-selected={dialogTab === i}
                  aria-controls="symbol-panel"
                  tabIndex={dialogTab === i ? 0 : -1}
                  onClick={() => setDialogTab(i)}
                  onKeyDown={(e) => {
                    if (['ArrowRight', 'ArrowLeft'].includes(e.key)) {
                      e.preventDefault();
                      setDialogTab(1 - i);
                      document.getElementById(`symbol-tab-${1 - i}`)?.focus();
                    }
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <div id="symbol-panel" role="tabpanel" aria-labelledby={`symbol-tab-${dialogTab}`}>
              <p className="eyebrow">
                {dialogTab ? t('FOLKLORE, NOT A FORECAST') : t('AN ASSOCIATION, NOT AN ANSWER')}
              </p>
              <p>{dialogTab ? selected.folklore : selected.reflection}</p>
            </div>
            <div className="dialog-question">
              <span className="eyebrow">{t('SOMETHING TO WONDER ABOUT')}</span>
              <h3>{selected.question}</h3>
            </div>
            <details>
              <summary>{t('Where this reading comes from')}</summary>
              <p>
                {t(
                  'The reflective reading and questions are written for Soñé. The old story summarizes folk motifs that differ between families and regions; it isn’t a verified historical attribution or scientific claim. Your own context matters most.',
                )}
              </p>
              <p className="source-link">
                {selected.source && (
                  <>
                    <a href={selected.source.url} target="_blank" rel="noreferrer">
                      {t('Further reading')}: {selected.source.title} ↗
                    </a>
                    <span>{t('Related symbolic reference; not scientific validation.')}</span>
                  </>
                )}
              </p>
            </details>
            <button
              className="text-link"
              onClick={() => {
                setSelected(null);
                setResult('');
                go('home');
                inputFocus();
              }}
            >
              {t('Explore it in your dream')}
              <span>↗</span>
            </button>
          </div>
        </dialog>
      )}
      {shareOpen && (
        <dialog
          ref={shareRef}
          className="share-dialog"
          aria-labelledby="share-title"
          onCancel={() => setShareOpen(false)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShareOpen(false);
          }}
        >
          <button
            className="dialog-close"
            aria-label={t('Close sharing')}
            onClick={() => setShareOpen(false)}
          >
            ×
          </button>
          <p className="eyebrow">{t('PASS A LITTLE WONDER AROUND')}</p>
          <h2 id="share-title">{t('Take it with you.')}</h2>
          <p className="share-description">
            {t('Copy this reading and send it wherever you like.')}
          </p>
          <label className="include-dream">
            <input
              type="checkbox"
              checked={includeDream}
              onChange={(e) => {
                setIncludeDream(e.target.checked);
                setCopyState('idle');
              }}
            />{' '}
            {t('Include my original dream')}
          </label>
          <textarea
            ref={shareTextRef}
            className="share-preview"
            aria-label={t('Reading to copy')}
            readOnly
            value={shareText}
          />
          <div className="share-dialog-actions">
            <button className="button green" onClick={() => void copy()}>
              {copyState === 'copied' ? t('Copied to clipboard') : t('Copy reading')}{' '}
              <span>{copyState === 'copied' ? '✓' : '↗'}</span>
            </button>
            <button
              className="text-link"
              onClick={() => {
                shareTextRef.current?.focus();
                shareTextRef.current?.select();
              }}
            >
              {t('Select text')}
            </button>
          </div>
          <p className="copy-feedback" role="status">
            {copyState === 'copied'
              ? t('Ready to paste into a message. Nothing has been posted or sent.')
              : copyState === 'fallback'
                ? t(
                    'Clipboard access isn’t available here. The text is selected: use your device’s Copy action.',
                  )
                : t('Your reading is only shared when you choose where to paste it.')}
          </p>
        </dialog>
      )}
    </div>
  );
}
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);
