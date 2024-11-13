import React, { useState, useEffect, useMemo } from 'react';

const prefix = ' ';
const skills = ['як ми', 'на базі', 'анімацію', 'робили'];
const delay = 2;
const step = 1;
const tail = 5;
const timeout = 175;

const colors = ['#8F8DED', '#F0F0F0'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomChar() {
  return String.fromCharCode(Math.random() * (127 - 33) + 33);
}

export default function SkillsAnimation() {
  const [text, setText] = useState('');
  const [state, setState] = useState({
    text: '',
    prefixP: -tail,
    skillI: 0,
    skillP: 0,
    direction: 'forward',
    delay,
    step,
  });

  const randomColoredString = useMemo(() => (n: number) => {
    return Array.from({ length: n }, (_, i) => (
      <span key={i} style={{ color: getRandomColor() }}>{getRandomChar()}</span>
    ));
  }, []);

  useEffect(() => {
    const render = () => {
      setState((prevState) => {
        const { prefixP, skillI, skillP, direction, delay, step } = prevState;
        let newText = prevState.text;
        const skill = skills[skillI];

        if (step > 0) {
          return { ...prevState, step: step - 1 };
        }

        if (prefixP < prefix.length) {
          newText += prefix[prefixP] || '';
          return { ...prevState, text: newText, prefixP: prefixP + 1, step };
        } else if (direction === 'forward') {
          if (skillP < skill.length) {
            newText += skill[skillP];
            return { ...prevState, text: newText, skillP: skillP + 1 };
          } else if (delay > 0) {
            return { ...prevState, delay: delay - 1 };
          } else {
            return { ...prevState, direction: 'backward', delay };
          }
        } else if (skillP > 0) {
          newText = newText.slice(0, -1);
          return { ...prevState, text: newText, skillP: skillP - 1 };
        } else {
          return { ...prevState, skillI: (skillI + 1) % skills.length, direction: 'forward' };
        }
      });

      setText(state.text);
    };

    const interval = setTimeout(render, timeout);
    return () => clearTimeout(interval);
  }, [state]);

  return (
    <p className="text-[40px] uppercase leading-[120%] lg:text-[64px] 2xl:text-[86px]">
      {text}
      {randomColoredString(
        state.prefixP < prefix.length
          ? Math.min(tail, tail + state.prefixP)
          : Math.min(tail, skills[state.skillI].length - state.skillP)
      )}
    </p>
  );
}
