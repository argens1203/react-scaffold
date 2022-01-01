import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('type', () => {
    render(<textarea />);

    userEvent.type(screen.getByRole('textbox'), 'Hello,{enter}World!');
    expect(screen.getByRole('textbox')).toHaveValue('Hello,\nWorld!');
});
