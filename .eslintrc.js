/**
 * These rules enforce Hack Reactor's style guide.
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: 'airbnb',
  "env": {
    "browser": true,
    "node": true
},
  "plugins": [
    "react"
  ],
  "rules": {
    "react/prop-types": 0,
    "react/destructuring-assignment": 0
  }
};