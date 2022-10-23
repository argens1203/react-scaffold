import { pascalCaseToSnake } from '../../../utils';
import { CenterExample } from '../../containers/center/center.example';
import { WindowSizeSquareExample } from '../../containers/window-size-square/window-size-square.example';
import { AnyComponent } from '../../types/prop-types';

const allExamples = [CenterExample, WindowSizeSquareExample];

export const exampleRecord: Record<string, AnyComponent> = allExamples.reduce(
    (acc, curr) => ({ ...acc, [pascalCaseToSnake(curr.name)]: curr }),
    {}
);
