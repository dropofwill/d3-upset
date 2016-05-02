import { binder } from './bind-apply';

function upset {
  const opts = {
    width: 800,
    height: 400,
  }

  // Bind getter/setter monads to object for each option
  binder(upset, opts)

  function self(selection) {
    return self;
  }

  return self;
};

export default upset;
