import outPutSvg from '@figma-export/output-components-as-svg';
import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import { ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import outPutStories from './outputters/stories';
import { SvgOutPutConfig } from './svg-configs';
import { LogosSvgReactOutPutConfig } from './svgr-configs/logos';
import { LogoStoriesOptions } from './stories-configs/logos';

dotenv.config();

const fileId: string = 'ZGR1ou2d6WceOfunr2T97G';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutSvgrComponent(LogosSvgReactOutPutConfig),
  outPutStories(LogoStoriesOptions),
];

(module.exports as FigmaExportRC) = {
  commands: [
    [
      'components',
      {
        fileId,
        onlyFromPages: [
          'Brands',
          'Sub-brands',
          'Deriv products',
          "Partner's products",
          'Payment methods',
        ],
        outputters,
      },
    ],
  ],
};
