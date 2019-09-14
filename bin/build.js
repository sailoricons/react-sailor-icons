/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path');
const fs = require('fs');
const format = require('prettier-eslint');
const upperCamelCase = require('uppercamelcase');
const { JSDOM } = require("jsdom");
const sailorIcons = require('sailor-icons/dist/icons.json');

const rootDir = path.join(__dirname, '..');

const icons = Object.keys(sailorIcons);

const dir = path.join(rootDir, 'src/icons');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const initialTypeDefinitions = `/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;
`;

fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');
fs.writeFileSync(
  path.join(rootDir, 'src', 'index.d.ts'),
  initialTypeDefinitions,
  'utf-8',
);

const attrsToString = (attrs) => {
  return Object.keys(attrs).map((key) => {
    if (key === 'width' || key === 'height' || key === 'stroke') {
      return key + '={' + attrs[key] + '}';
    }
    if (key === 'otherProps') {
      return '{...otherProps}';
    }
    return key + '="' + attrs[key] + '"';
  }).join(' ');
};

const withFill = svg => {
  const dom = new JSDOM(`<!DOCTYPE html>${svg}`);
  const newSvg = dom.window.document.querySelector("svg");
  const svgChildrenElems = newSvg.children
  Array.from(svgChildrenElems).forEach(el => {
    el.setAttribute('fill', '#000')
  })
  // const newSvgString = newSvg.outerHTML
  const newSvgString = newSvg.innerHTML
  return newSvgString
}

icons.forEach((i) => {
  const location = path.join(rootDir, 'src/icons', `${i}.js`);
  const ComponentName = (i === 'github') ? 'GitHub' : upperCamelCase(i);
  const defaultAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 24 24',
    otherProps: '...otherProps',
  };


  const newSvg = `
    <svg ${attrsToString(defaultAttrs)}>
      ${sailorIcons[i]}
    </svg>
  `
  const element = `
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = (props) => {
      const { color, size, ...otherProps } = props;
      return (
        <svg ${attrsToString(defaultAttrs)}>
          ${withFill(newSvg).replace(/fill="#000"/g, 'fill={color}')}
        </svg>
      )
    };

    ${ComponentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    }

    ${ComponentName}.defaultProps = {
      color: '#000',
      size: '24',
    }

    export default ${ComponentName}
  `;

  const component = format({
    text: element,
    eslintConfig: {
      extends: 'airbnb',
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: 'flow',
    },
  });

  fs.writeFileSync(location, component, 'utf-8');

  console.log('Successfully built', ComponentName);

  const exportString = `export { default as ${ComponentName} } from './icons/${i}';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.js'),
    exportString,
    'utf-8',
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.d.ts'),
    exportTypeString,
    'utf-8',
  );
});
