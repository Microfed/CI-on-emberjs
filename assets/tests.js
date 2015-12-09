define('ci-on-emberjs/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/components/builds-list-item-detail.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/builds-list-item-detail.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/builds-list-item-detail.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/components/builds-list-item-short.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/builds-list-item-short.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/builds-list-item-short.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/components/builds-list-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/builds-list-item.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/builds-list-item.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/components/builds-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/builds-list.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/builds-list.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/components/progress-with-steps.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/progress-with-steps.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/progress-with-steps.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ci-on-emberjs/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/helpers/ember-i18n/test-helpers', ['exports', 'ember'], function (exports, _ember) {

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  _ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  _ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();
});
define('ci-on-emberjs/tests/helpers/math-calc.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/math-calc.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/math-calc.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ci-on-emberjs/tests/helpers/start-app', 'ci-on-emberjs/tests/helpers/destroy-app'], function (exports, _qunit, _ciOnEmberjsTestsHelpersStartApp, _ciOnEmberjsTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _ciOnEmberjsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _ciOnEmberjsTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('ci-on-emberjs/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/helpers/resolver', ['exports', 'ember/resolver', 'ci-on-emberjs/config/environment'], function (exports, _emberResolver, _ciOnEmberjsConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _ciOnEmberjsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ciOnEmberjsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ci-on-emberjs/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/helpers/start-app', ['exports', 'ember', 'ci-on-emberjs/app', 'ci-on-emberjs/config/environment'], function (exports, _ember, _ciOnEmberjsApp, _ciOnEmberjsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _ciOnEmberjsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _ciOnEmberjsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ci-on-emberjs/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/helpers/state-system-name.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/state-system-name.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/state-system-name.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/helpers/state-title.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/state-title.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/state-title.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/integration/components/builds-list-item-detail-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('builds-list-item-detail', 'Integration | Component | builds list item detail', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 27
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'builds-list-item-detail', ['loc', [null, [1, 0], [1, 27]]]]],
        locals: [],
        templates: []
      };
    })()));

    //assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'builds-list-item-detail', [], [], 0, null, ['loc', [null, [2, 4], [4, 32]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
  });
});
define('ci-on-emberjs/tests/integration/components/builds-list-item-detail-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/builds-list-item-detail-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/builds-list-item-detail-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/integration/components/builds-list-item-short-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('builds-list-item-short', 'Integration | Component | builds list item short', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 26
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'builds-list-item-short', ['loc', [null, [1, 0], [1, 26]]]]],
        locals: [],
        templates: []
      };
    })()));

    //assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'builds-list-item-short', [], [], 0, null, ['loc', [null, [2, 4], [4, 31]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
  });
});
define('ci-on-emberjs/tests/integration/components/builds-list-item-short-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/builds-list-item-short-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/builds-list-item-short-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/integration/components/builds-list-item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('builds-list-item', 'Integration | Component | builds list item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'builds-list-item', ['loc', [null, [1, 0], [1, 20]]]]],
        locals: [],
        templates: []
      };
    })()));

    //assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'builds-list-item', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
  });
});
define('ci-on-emberjs/tests/integration/components/builds-list-item-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/builds-list-item-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/builds-list-item-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/integration/components/builds-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('builds-list', 'Integration | Component | builds list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'builds-list', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));

    //assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'builds-list', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
  });
});
define('ci-on-emberjs/tests/integration/components/builds-list-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/builds-list-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/builds-list-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/integration/components/progress-with-steps-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('progress-with-steps', 'Integration | Component | progress with steps', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'progress-with-steps', ['loc', [null, [1, 0], [1, 23]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'progress-with-steps', [], [], 0, null, ['loc', [null, [2, 4], [4, 28]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ci-on-emberjs/tests/integration/components/progress-with-steps-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/progress-with-steps-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/progress-with-steps-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/locales/en/config.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en');
  QUnit.test('locales/en/config.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/config.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/locales/en/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en');
  QUnit.test('locales/en/translations.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/mirage/config.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage');
  QUnit.test('mirage/config.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/mirage/factories/build.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/factories');
  QUnit.test('mirage/factories/build.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/build.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/mirage/factories/commit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/factories');
  QUnit.test('mirage/factories/commit.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/commit.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/mirage/factories/job.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/factories');
  QUnit.test('mirage/factories/job.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/job.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/mirage/factories/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/factories');
  QUnit.test('mirage/factories/project.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/project.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/mirage/scenarios/default.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mirage/scenarios');
  QUnit.test('mirage/scenarios/default.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/mixins/state-with-duration.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins');
  QUnit.test('mixins/state-with-duration.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/state-with-duration.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/models/build.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/build.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/build.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/models/commit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/commit.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/commit.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/models/job.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/job.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/job.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/models/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/project.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/project.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/routes/auth.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/auth.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/auth.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/routes/project/build.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/project');
  QUnit.test('routes/project/build.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/project/build.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/routes/project/builds.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/project');
  QUnit.test('routes/project/builds.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/project/builds.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/routes/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/project.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/project.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/routes/projects.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/projects.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/services/config.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/config.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/config.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/test-helper', ['exports', 'ci-on-emberjs/tests/helpers/resolver', 'ember-qunit'], function (exports, _ciOnEmberjsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_ciOnEmberjsTestsHelpersResolver['default']);
});
define('ci-on-emberjs/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ci-on-emberjs/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/helpers/math-calc-test', ['exports', 'ci-on-emberjs/helpers/math-calc', 'qunit'], function (exports, _ciOnEmberjsHelpersMathCalc, _qunit) {

  (0, _qunit.module)('Unit | Helper | math calc');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ciOnEmberjsHelpersMathCalc.mathCalc)(42);
    assert.ok(result);
  });
});
define('ci-on-emberjs/tests/unit/helpers/math-calc-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/math-calc-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/math-calc-test.js should pass jshint.');
  });
});
define("ci-on-emberjs/tests/unit/helpers/state-system-name-test", ["exports"], function (exports) {});
//import stateSystemName from '../../../helpers/state-system-name';
//import { module, test } from 'qunit';

//module('Unit | Helper | state system name');

// Replace this with your real tests.
//test('it works', function(assert) {
//let result = stateSystemName.create();
//assert.ok(result);
//});
define('ci-on-emberjs/tests/unit/helpers/state-system-name-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/state-system-name-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/state-system-name-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/helpers/state-title-test', ['exports', 'ci-on-emberjs/helpers/state-title', 'qunit'], function (exports, _ciOnEmberjsHelpersStateTitle, _qunit) {

  (0, _qunit.module)('Unit | Helper | state title');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = _ciOnEmberjsHelpersStateTitle['default'].create();
    assert.ok(result);
  });
});
define('ci-on-emberjs/tests/unit/helpers/state-title-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/state-title-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/state-title-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/mixins/state-with-duration-test', ['exports', 'ember', 'ci-on-emberjs/mixins/state-with-duration', 'qunit'], function (exports, _ember, _ciOnEmberjsMixinsStateWithDuration, _qunit) {

  (0, _qunit.module)('Unit | Mixin | state with duration');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var StateWithDurationObject = _ember['default'].Object.extend(_ciOnEmberjsMixinsStateWithDuration['default']);
    var subject = StateWithDurationObject.create();
    assert.ok(subject);
  });
});
define('ci-on-emberjs/tests/unit/mixins/state-with-duration-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/state-with-duration-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/state-with-duration-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/models/build-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('build', 'Unit | Model | build', {
    // Specify the other units that are required for this test.
    needs: ['model:project', 'model:commit', 'model:job']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ci-on-emberjs/tests/unit/models/build-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/build-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/build-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/models/commit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('commit', 'Unit | Model | commit', {
    // Specify the other units that are required for this test.
    needs: ['model:build']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ci-on-emberjs/tests/unit/models/commit-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/commit-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/commit-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/models/job-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('job', 'Unit | Model | job', {
    // Specify the other units that are required for this test.
    needs: ['model:project', 'model:commit', 'model:build']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ci-on-emberjs/tests/unit/models/job-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/job-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/job-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/models/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('project', 'Unit | Model | project', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ci-on-emberjs/tests/unit/models/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/project-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/project-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ci-on-emberjs/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/routes/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:auth', 'Unit | Route | auth', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ci-on-emberjs/tests/unit/routes/auth-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/auth-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/auth-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/routes/project/build-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:project/build', 'Unit | Route | project/build', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ci-on-emberjs/tests/unit/routes/project/build-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/project');
  QUnit.test('unit/routes/project/build-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/project/build-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/routes/project/builds-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:project/builds', 'Unit | Route | project/builds', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ci-on-emberjs/tests/unit/routes/project/builds-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/project');
  QUnit.test('unit/routes/project/builds-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/project/builds-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/routes/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:project', 'Unit | Route | project', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ci-on-emberjs/tests/unit/routes/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/project-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/project-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/routes/projects-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:projects', 'Unit | Route | projects', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ci-on-emberjs/tests/unit/routes/projects-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/projects-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/projects-test.js should pass jshint.');
  });
});
define('ci-on-emberjs/tests/unit/services/config-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:config', 'Unit | Service | config', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ci-on-emberjs/tests/unit/services/config-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/config-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/config-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ci-on-emberjs/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map