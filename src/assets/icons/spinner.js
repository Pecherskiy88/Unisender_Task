import React from 'react';
import PropTypes from 'prop-types';

function spinner(props) {
  return (
    <svg
      style={{
        background: 'transparent',
        display: 'block',
        shapeRendering: 'auto',
        color: 'red',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      width={props.width || '200px'}
      height={props.height || '200px'}
      viewBox={props.viewBox || '0 0 100 100'}
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(30 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(60 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(150 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(210 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(300 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(330 50 50)">
        <rect
          x="49.5"
          y="24"
          rx="0.5"
          ry="6"
          width="1"
          height="12"
          fill={props.fill || '#444658'}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
}

spinner.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

export default spinner;
