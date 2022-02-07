import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

it("renders title", () => {
    render(<Header />);
    const element = screen.getByText("Emoji Search");
    expect(element.toBeInDocument);
});