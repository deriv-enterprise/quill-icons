import outPutSvg from '@figma-export/output-components-as-svg';
import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import { ComponentFilter, ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import outPutStories from './outputters/stories';
import { SvgOutPutConfig } from './svg-configs';
import { IconSvgReactOutPutConfig } from './svgr-configs/icons';
import { IconStoriesOptions } from './stories-configs/icons';

dotenv.config();

const fileId: string = 'c24yCkzAgS5Fv1x0QuEYxq';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutSvgrComponent(IconSvgReactOutPutConfig),
  outPutStories(IconStoriesOptions),
];

const filterComponent: ComponentFilter = (component) => {
  return true;
};

(module.exports as FigmaExportRC) = {
  commands: [
    [
      'components',
      {
        fileId,
        filterComponent,
        onlyFromPages: ['Social', 'Flags', 'System', 'Illustrative'],
        outputters,
      },
    ],
  ],
};
