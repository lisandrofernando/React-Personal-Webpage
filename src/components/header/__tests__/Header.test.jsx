import React, { act } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../Header';

// Mock the CTA component
jest.mock('../../download/CTA', () => {
  return function DummyCTA() {
    return <div data-testid="cta">CTA Component</div>;
  };
});

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('renders the header with name', () => {
    render(
      <HelmetProvider>
        <Header />
      </HelmetProvider>
    );
    
    expect(screen.getByText('Lisandro Fernando')).toBeInTheDocument();
  });

  it('renders the scroll down link', () => {
    render(
      <HelmetProvider>
        <Header />
      </HelmetProvider>
    );
    
    const scrollLink = screen.getByRole('link', { name: /scroll down/i });
    expect(scrollLink).toBeInTheDocument();
  });

  it('displays typewriter text animation', async () => {
    render(
      <HelmetProvider>
        <Header />
      </HelmetProvider>
    );
    
    // Advance timers to see the typewriter effect
    act(() => {
      jest.advanceTimersByTime(100);
    });
    
    const roleText = screen.getByRole('status');
    expect(roleText).toBeInTheDocument();
  });

  it('renders profile image with alt text', () => {
    render(
      <HelmetProvider>
        <Header />
      </HelmetProvider>
    );
    
    const image = screen.getByAltText(/Lisandro Fernando/i);
    expect(image).toBeInTheDocument();
  });

  it('has correct semantic structure with header role', () => {
    const { container } = render(
      <HelmetProvider>
        <Header />
      </HelmetProvider>
    );
    
    const header = container.querySelector('header[role="banner"]');
    expect(header).toBeInTheDocument();
  });
});
