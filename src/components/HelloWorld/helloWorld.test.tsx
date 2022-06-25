import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axe from '@app/shared/utils/axe-core';
import HelloWorld, { HelloWorldProps } from './helloWorld';

describe('HelloWorld Unit Tests', () => {
  let props: HelloWorldProps;

  beforeEach(() => {
    props = {
      text: 'Hello World Test',
    };
  });

  it('should be in the page', () => {
    const component = render(<HelloWorld {...props} />);
    expect(component.container).toBeInTheDocument();
  });

  it('Should pass Axe Core A11Y tests', async () => {
    const component = render(<HelloWorld {...props} />);
    const results = await axe.run(component.baseElement);
    expect(results.violations).toHaveLength(0);
  });
});
