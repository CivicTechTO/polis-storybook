import React, { useRef, useEffect, useState } from 'react'

const TidCarouselButtonV3 = ({label}) => (
  <div>{label}</div>
)

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const TidCarouselV3 = ({ numbers = [] }) => {
  const prevNumbers = usePrevious(numbers) || []

  useEffect(() => {
    console.log("numbers: ", numbers);
    console.log("prevNumbers: ", prevNumbers);
  }, [numbers, prevNumbers]);

  const allNumbers = [...new Set(numbers.concat(prevNumbers))].sort((a,b) => a - b)
  const enteringNumbers = numbers.filter(n => !prevNumbers.includes(n))
  const exitingNumbers = prevNumbers.filter(n => !numbers.includes(n))

  return(
    <>
      <div>new numbers: {JSON.stringify(numbers)}</div>
      <div>old numbers: {JSON.stringify(prevNumbers)}</div>
      <div>all numbers: {JSON.stringify(allNumbers)}</div>
      <div>entering numbers: {JSON.stringify(enteringNumbers)}</div>
      <div>exiting numbers: {JSON.stringify(exitingNumbers)}</div>
      <div style={{
        display: "flex",
        width: 250,
        justifyContent: "space-between",
        gap: 5,
      }}>
        {allNumbers.map(n => {
          const baseStyle = {
            background: "#03a9f4",
            color: "white",
            fontWeight: 500,
            borderRadius: "30%",
            flex: 1,
            alignContent: "center",
            textAlign: "center",
            height: 30,
          }
          if (enteringNumbers.includes(n)) {
            return <div key={n} style={{
              ...baseStyle,
              maxWidth: 40,
              opacity: "90%",
              fontSize: "90%",
            }}>{n}</div>
          } else if (exitingNumbers.includes(n)) {
            return <div key={n} style={{
              ...baseStyle,
              maxWidth: 10,
              opacity: "10%",
              fontSize: "10%",
            }}>{n}</div>
          } else {
            return <div key={n} style={baseStyle}>{n}</div>
          }
        })}
      </div>
    </>
  )
}

export default {
  component: TidCarouselV3,
  argTypes: {
    group: {
      options: ['A', 'B', 'C'],
      control: { type: 'inline-radio' },
    },
  },
}

const Template = (args) => {
  const NUMBERS_DATA = {
    A: [2,4,5,18,49],
    B: [2,4,5,18,22],
    C: [3,9,17,25,33],
  }
  return <TidCarouselV3 numbers={NUMBERS_DATA[args.group]} />
}

export const Default = Template.bind({})

