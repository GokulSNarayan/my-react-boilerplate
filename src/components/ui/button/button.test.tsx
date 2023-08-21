import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import {Button} from './button';

describe('Button', () => {
    render(<Button variant='primary'>Submit</Button>);
        const button = screen.getByRole('button');
    it("Should render the button", () => {
        expect(button).toBeInTheDocument();
    })
    it("Should have the text rendered inside the button", () => {
        expect(button).toHaveTextContent('Submit');
    })
})