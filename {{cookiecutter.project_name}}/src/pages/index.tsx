import React from 'react';
import { Col, Row } from 'src/components';
import { Layout, SEO } from 'src/containers';
import { TodoPanel, TodoRecent } from 'src/modules';
import { ADD_TODO, TodoAction } from 'src/redux/actions';
import { initStore, RootState } from 'src/redux/store';
{% raw %}
const Home: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        <Col size={{ md: 6, xs: 12 }}>
          <TodoPanel />
        </Col>
        <Col size={{ md: 6, xs: 12 }}>
          <TodoRecent />
        </Col>
      </Row>
    </Layout>
  );
};
{% endraw %}
export default Home;

// You can also use getStaticProps here instead -- since we aren't
// actually getting any data from the server with each request, that
// would be more suitable
export const getServerSideProps = async (): Promise<{
  props: { initialReduxState: RootState };
}> => {
  // Fetch state from server
  const state = await Promise.resolve({ todos: ['ssr'] } as RootState);

  // Create redux store so you can dispatch actions in this
  // step if needed
  const reduxStore = initStore(state);
  const { dispatch } = reduxStore;
  dispatch({ type: ADD_TODO, todo: 'added with dispatch' } as TodoAction);

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
  };
};
