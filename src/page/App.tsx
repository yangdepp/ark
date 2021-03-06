import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from '../routes/index.jsx';
import { flatRoutes, redirectDefaultRoute } from '../routes/routes_helper';
import SiderChildren from './Sider';
import HeaderChildren from './Header';
import PreloadExample from '../lib/components/preload/preload.example';
import { Layout, Spin, Icon } from '../lib';
import './App.scss';
const SpinIcon = <Icon icon={['fas', 'spinner']} pulse />;
const { Sider, Content, Header, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <HeaderChildren />
        </Header>
        <Layout>
          <Sider className="sider">
            <SiderChildren />
          </Sider>
          <Content className="content">
            <Layout>
              <Header>
                <div className="content-wrapper">
                  <Suspense
                    fallback={
                      <div className="loading">
                        <Spin indicator={SpinIcon} />
                      </div>
                    }
                  >
                    <Switch>
                      {flatRoutes(Routes).length &&
                        redirectDefaultRoute(flatRoutes(Routes)).map(
                          (item: any) => {
                            if (item.path === '/preload') {
                              return (
                                <Route
                                  path={item.path}
                                  exact
                                  component={(props: any) => (
                                    <PreloadExample testProps={'testprops'} {...props}/>
                                  )}
                                  key={item.path}
                                />
                              );
                            } else {
                              return (
                                <Route
                                  path={item.path}
                                  exact
                                  component={item.component}
                                  key={item.path}
                                />
                              );
                            }
                          },
                        )}
                    </Switch>
                  </Suspense>
                </div>
              </Header>
              <Footer>{/* <FooterChildren /> */}</Footer>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
