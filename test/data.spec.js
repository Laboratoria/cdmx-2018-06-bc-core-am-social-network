// Ejecuta tu test 
describe('data', () => {
  it('debería exponer función printInWall en objeto global', () => {
    assert.isFunction(printInWall);
  });

  it('debería exponer función deletePosts en objeto global', () => {
    assert.isFunction(deletePosts);
  });

  it('debería exponer función postEdit en objeto global', () => {
    assert.isFunction(postEdit);
  });

  //   describe('printInWall(laboratoria)', () => {
  //   });
});
