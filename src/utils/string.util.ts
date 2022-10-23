export const pascalCaseToSnake = (pc: string) =>
    pc
        .split(/\.?(?=[A-Z])/)
        .slice(0, -1)
        .join('-')
        .toLowerCase();
