import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Portfolio } from './Portfolio';

test('should render Portfolio component with items', async () => {
  const { screen, render } = await createDOM();
  const mockItems = [
    {
      id: 1,
      slug: 'item-1',
      thumbnail: 'x.png',
      thumbnail_width: 300,
      thumbnail_height: 200,
      thumbnail_alt: 'Thumbnail 1',
      title: 'Item 1',
      short_description: 'Description 1',
      category: 'Category 1',
    },
    {
      id: 2,
      slug: 'item-2',
      thumbnail: 'x.png',
      thumbnail_width: 300,
      thumbnail_height: 200,
      thumbnail_alt: 'Thumbnail 2',
      title: 'Item 2',
      short_description: 'Description 2',
      category: 'Category 2',
    },
  ];
  
  await render(<Portfolio items={mockItems} />);
  
  const portfolioItems = screen.querySelectorAll('.portfolio-item');
  expect(portfolioItems.length).toBe(mockItems.length);
  
  mockItems.forEach((item, index) => {
    const portfolioItem = portfolioItems[index];
    expect(portfolioItem.querySelector('h3')?.textContent).toBe(item.category);
    expect(portfolioItem.querySelector('.right-text h3')?.textContent).toBe(item.title);
    expect(portfolioItem.querySelector('.right-text p')?.textContent).toBe(item.short_description);
  });
});

test('should render wide item correctly', async () => {
  const { screen, render } = await createDOM();
  const mockItems = [
    {
      id: 1,
      slug: 'item-1',
      thumbnail: 'thumbnail-1.jpg',
      thumbnail_width: 300,
      thumbnail_height: 200,
      thumbnail_alt: 'Thumbnail 1',
      title: 'Item 1',
      short_description: 'Description 1',
      category: 'Category 1',
    },
    {
      id: 2,
      slug: 'item-2',
      thumbnail: 'thumbnail-2.jpg',
      thumbnail_width: 300,
      thumbnail_height: 200,
      thumbnail_alt: 'Thumbnail 2',
      title: 'Item 2',
      short_description: 'Description 2',
      category: 'Category 2',
    },
  ];
  
  await render(<Portfolio items={mockItems} />);
  
  const wideItem = screen.querySelector('.col-span-5.md\:col-span-3');
  expect(wideItem).not.toBeNull();
  expect(wideItem?.querySelector('h3')?.textContent).toBe(mockItems[0].category);
});

test('should render non-wide items correctly', async () => {
  const { screen, render } = await createDOM();
  const mockItems = [
    {
      id: 1,
      slug: 'item-1',
      thumbnail: 'thumbnail-1.jpg',
      thumbnail_width: 300,
      thumbnail_height: 200,
      thumbnail_alt: 'Thumbnail 1',
      title: 'Item 1',
      short_description: 'Description 1',
      category: 'Category 1',
    },
    {
      id: 2,
      slug: 'item-2',
      thumbnail: 'thumbnail-2.jpg',
      thumbnail_width: 300,
      thumbnail_height: 200,
      thumbnail_alt: 'Thumbnail 2',
      title: 'Item 2',
      short_description: 'Description 2',
      category: 'Category 2',
    },
  ];
  
  await render(<Portfolio items={mockItems} />);
  
  const nonWideItems = screen.querySelectorAll('.col-span-5.md\:col-span-2');
  expect(nonWideItems.length).toBe(mockItems.length - 1);
  
  nonWideItems.forEach((item, index) => {
    expect(item.querySelector('h3')?.textContent).toBe(mockItems[index + 1].category);
  });
});