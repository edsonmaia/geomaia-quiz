import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg className={className} width="238" height="63" viewBox="0 0 238 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g
        transform="translate(0.000000,63.000000) scale(0.100000,-0.100000)"
        fill="#FFF"
        stroke="none"
      >
        <path d="M119 587 c-60 -32 -89 -84 -89 -160 0 -64 14 -99 57 -139 54 -52 131
        -63 196 -28 l37 20 0 -20 c0 -15 7 -20 25 -20 24 0 25 3 25 60 0 53 2 60 20
        60 15 0 20 7 20 25 0 25 -1 25 -85 25 -84 0 -85 0 -85 -25 0 -22 4 -25 35 -25
        27 0 33 -3 28 -15 -8 -23 -57 -45 -99 -45 -28 0 -44 8 -70 34 -50 50 -50 132
        0 182 24 24 43 34 65 34 41 0 88 -24 96 -50 4 -14 15 -20 36 -20 29 0 29 0 29
        60 0 57 -1 60 -24 60 -13 0 -26 -5 -28 -11 -2 -6 -14 -5 -33 5 -43 23 -105 20
        -156 -7z"
        />
        <path d="M1010 575 c0 -18 5 -25 20 -25 19 0 20 -7 20 -130 0 -123 -1 -130
        -20 -130 -15 0 -20 -7 -20 -25 0 -24 2 -25 70 -25 68 0 70 1 70 25 0 18 -5 25
        -20 25 -19 0 -20 7 -20 117 0 64 3 113 8 109 4 -4 23 -55 43 -114 48 -144 60
        -144 108 0 20 59 39 110 44 114 4 4 7 -45 7 -109 0 -110 -1 -117 -20 -117 -15
        0 -20 -7 -20 -25 0 -24 2 -25 70 -25 68 0 70 1 70 25 0 18 -5 25 -20 25 -19 0
        -20 7 -20 130 0 123 1 130 20 130 15 0 20 7 20 25 0 24 -2 25 -68 25 l-68 0
        -33 -102 -34 -103 -34 103 -35 102 -69 0 c-67 0 -69 -1 -69 -25z"
        />
        <path d="M1780 540 c0 -28 3 -30 35 -30 32 0 35 2 35 30 0 28 -3 30 -35 30
        -32 0 -35 -2 -35 -30z"
        />
        <path d="M503 460 c-41 -24 -53 -48 -53 -102 0 -50 19 -82 60 -103 54 -28 146
        -10 170 34 10 19 8 21 -24 21 -19 0 -38 -4 -41 -10 -12 -19 -74 -11 -97 13
        l-23 22 98 3 c95 3 97 3 97 27 0 92 -105 146 -187 95z m109 -47 c29 -26 21
        -33 -42 -33 -33 0 -60 3 -60 7 0 3 7 15 17 25 20 22 61 23 85 1z"
        />
        <path d="M794 466 c-45 -20 -64 -52 -64 -109 0 -40 5 -54 28 -77 53 -53 158
        -49 201 7 26 32 28 108 5 142 -33 46 -110 63 -170 37z m104 -52 c16 -11 22
        -25 22 -54 0 -29 -6 -43 -22 -54 -51 -36 -108 -7 -108 54 0 42 26 70 65 70 11
        0 31 -7 43 -16z"
        />
        <path d="M1514 470 c-66 -26 -87 -131 -38 -189 30 -36 79 -48 126 -32 22 8 34
        8 36 1 2 -5 21 -10 43 -10 35 0 39 3 39 25 0 16 -6 25 -15 25 -12 0 -15 14
        -15 65 0 51 3 65 15 65 9 0 15 9 15 25 0 23 -4 25 -40 25 -22 0 -40 -5 -40
        -10 0 -6 -13 -4 -30 5 -32 17 -64 18 -96 5z m105 -66 c12 -15 21 -34 21 -44 0
        -10 -9 -29 -21 -44 -40 -51 -109 -24 -109 42 0 70 68 98 109 46z"
        />
        <path d="M1974 470 c-66 -26 -87 -131 -38 -189 30 -36 79 -48 126 -32 22 8 34
        8 36 1 2 -5 21 -10 43 -10 35 0 39 3 39 25 0 16 -6 25 -15 25 -12 0 -15 14
        -15 65 0 51 3 65 15 65 9 0 15 9 15 25 0 23 -4 25 -40 25 -22 0 -40 -5 -40
        -10 0 -6 -13 -4 -30 5 -32 17 -64 18 -96 5z m105 -66 c12 -15 21 -34 21 -44 0
        -10 -9 -29 -21 -44 -40 -51 -109 -24 -109 42 0 70 68 98 109 46z"
        />
        <path d="M1770 445 c0 -16 6 -25 15 -25 12 0 15 -14 15 -65 0 -51 -3 -65 -15
        -65 -9 0 -15 -9 -15 -25 0 -24 3 -25 55 -25 52 0 55 1 55 25 0 16 -6 25 -15
        25 -12 0 -15 17 -15 90 l0 90 -40 0 c-36 0 -40 -2 -40 -25z"
        />
        <path d="M1932 208 c-7 -7 -12 -44 -12 -95 0 -92 11 -107 73 -101 l32 3 3 86
        c3 70 0 89 -13 103 -19 19 -66 21 -83 4z m65 -78 c3 -75 -15 -113 -42 -90 -19
        16 -22 146 -2 153 33 14 42 2 44 -63z"
        />
        <path d="M2350 140 c0 -47 4 -80 10 -80 6 0 10 33 10 80 0 47 -4 80 -10 80 -6
        0 -10 -33 -10 -80z"
        />
        <path d="M2180 185 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
        -10 -7 -10 -15z"
        />
        <path d="M2060 92 c0 -60 11 -82 41 -82 33 0 49 29 49 86 0 30 -4 54 -10 54
        -5 0 -10 -22 -10 -48 0 -50 -13 -74 -36 -65 -10 3 -14 22 -14 59 0 30 -4 54
        -10 54 -6 0 -10 -26 -10 -58z"
        />
        <path d="M2180 80 c0 -40 4 -70 10 -70 6 0 10 30 10 70 0 40 -4 70 -10 70 -6
        0 -10 -30 -10 -70z"
        />
        <path d="M2230 140 c0 -5 14 -10 30 -10 l31 0 -35 -52 c-19 -28 -33 -55 -30
        -60 7 -12 84 -10 84 2 0 6 -14 10 -30 10 l-31 0 36 52 c19 29 35 56 35 60 0 5
        -20 8 -45 8 -25 0 -45 -4 -45 -10z"
        />
        <path d="M2350 25 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
        -10 -7 -10 -15z"
        />
      </g>
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;