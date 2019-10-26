import { newE2EPage } from '@stencil/core/testing';

describe('proj-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<proj-slider></proj-slider>');

    const element = await page.find('proj-slider');
    expect(element).toHaveClass('hydrated');
  });
});
