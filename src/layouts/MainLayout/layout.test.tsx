import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axe from '@app/shared/utils/axe-core';
import Layout, { LayoutProps } from './layout';

describe('Layout Unit Tests', () => {
  let props: LayoutProps;

  beforeEach(() => {
    props = {
      title: 'Mock Title',
      description: 'Mock Description',
      children: <p>Test Children</p>,
    };
  });

  it('should be in the page', () => {
    const component = render(
      <Layout
        title={props.title}
        description={props.description}
      >
        {props.children}
      </Layout>
    );
    expect(component.container).toBeInTheDocument();
  });

  it('Should pass Axe Core A11Y tests', async () => {
    const component = render(
      <Layout
        title={props.title}
        description={props.description}
      >
        {props.children}
      </Layout>
    );
    const results = await axe.run(component.baseElement);
    expect(results.violations).toHaveLength(0);
  });
});
