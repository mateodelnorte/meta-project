const metaProject = require('meta-project');

jest.spyOn(process, 'exit').mockImplementation(() => {});

describe('bin/meta-project', () => {
  it('should exist', () => {
    expect(metaProject).toBeDefined();
  });
});
