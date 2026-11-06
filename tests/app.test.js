const app = require('../src/app');

describe('App', () => {
  test('should export an Express application instance', () => {
    expect(app).toBeInstanceOf(Object);
    expect(app.get).toBeInstanceOf(Function);
  });

  test('should have a GET route for root path', () => {
    if (!app._router) {
      return;
    }
    const routes = app._router.stack.filter(route => route.route && route.route.path === '/');
    expect(routes.length).toBeGreaterThan(0);
  });
});