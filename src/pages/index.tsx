import React, { useMemo } from 'react';
import Layout from '@app/layouts/MainLayout';
import useTranslation from 'next-translate/useTranslation';
import HelloWorld from '@app/components/HelloWorld';

function Index(): JSX.Element {
  const { t } = useTranslation();
  const title = useMemo(() => t('home:title'), [t]);
  const description = useMemo(() => t('home:description'), [t]);

  return (
    <Layout
      title={title}
      description={description}
    >
      <HelloWorld text={description} />
    </Layout>
  );
}

export default Index;
