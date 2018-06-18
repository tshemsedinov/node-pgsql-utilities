'use strict';

const upgrade = (connection) => {

  if (!connection._mixedUpgrade) {
    connection._mixedUpgrade = true;
    connection.slowTime = 2000;
  }

};

const introspection = (connection) => {

  if (!connection._mixedIntrospection) {
    connection._mixedIntrospection = true;
  }

};

module.exports = {
  upgrade,
  introspection,
};
