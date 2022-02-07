import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import userEvent from "@testing-library/user-event";

describe("Emoji functionality", () => {
    let emoji, input, testMsg, testElement;
    beforeEach(() => {
        const {container} = render(<App />);
        emoji = screen.getAllByText("Click to copy emoji");
        input = container.querySelector('input');
        testMsg = "100";
        testElement = screen.getByText(testMsg);
    })

    it("renders emoji accordingly", () => {
        expect(emoji.toBeInDocument);
        expect(emoji.length).toEqual(20);
    })

    it("correctly filters emoji list", () => {
        userEvent.type(input, testMsg);
        expect(testElement.toBeInDocument);
    })

    it("copies emoji", () => {
        userEvent.click(testElement);
        const copyEmoji = window.ClipboardData;
        expect(copyEmoji).toEqual(testElement.value);
    })
})
