# AmdTest

Experimental project exploring AMD (Asynchronous Module Definition) using the Dojo Toolkit's module loader.

## Overview

This project demonstrates how to use the Dojo AMD loader to manage JavaScript module dependencies, integrate external libraries (jQuery, Highcharts), and configure custom package paths. It serves as a learning playground for understanding AMD module patterns and asynchronous dependency loading.

## What is AMD?

AMD (Asynchronous Module Definition) is a JavaScript specification for defining modules and their dependencies that can be loaded asynchronously. This improves page load performance and provides better code organization.

## Features Demonstrated

- **Custom Package Configuration**: Remapping module locations using Dojo's package system
- **External Library Integration**: Loading jQuery and Highcharts via AMD
- **Asynchronous Loading**: Non-blocking module loading with `require()`
- **Module Definition**: Creating reusable modules with `define()`
- **Path Configuration**: Custom module paths and CDN integration

## Project Structure

```
├── index.html              # Main demo page with AMD configuration
├── ace/                    # Default module location
│   ├── awesomeness.js
│   └── coolness.js
└── someWhereElse/hmm/      # Alternative module location (demonstrates package mapping)
    ├── awesomeness.js
    └── coolness.js
```

## Dojo AMD Configuration

```javascript
var dojoConfig = {
    baseUrl: '',
    async: 1,
    packages: [
        { name: 'ace', location: 'someWhereElse/hmm' },
        { name: 'jquery', location: '//ajax.googleapis.com/ajax/libs/jquery/1.11.0', main: 'jquery.min' }
    ],
    paths: {
        highChartsImplementation: 'http://code.highcharts.com/highcharts'
    }
};
```

## Key Concepts Explored

### 1. Package Mapping
The `ace` package is remapped from its default location to `someWhereElse/hmm`, demonstrating how to organize modules independently of directory structure.

### 2. Asynchronous Loading
```javascript
require(['ace/awesomeness', 'ace/coolness'], function(awesomeness, coolness) {
    // Modules loaded asynchronously
});
```

### 3. Module Definition
```javascript
define([], function() {
    return 42; // Module returns a value
});
```

### 4. External Library Wrapping
```javascript
define('highcharts', ['jquery', 'highChartsImplementation'], function() {
    return Highcharts;
});
```

## Technologies

- **Dojo Toolkit 1.9.3**: AMD loader and toolkit
- **jQuery 1.11.0**: DOM manipulation (loaded via AMD)
- **Highcharts**: Charting library (loaded via AMD)

## Demo

The demo page displays:
1. Text content loaded from AMD modules
2. Interactive Highcharts temperature chart with data for multiple cities

## Running

Simply open `index.html` in a web browser. The Dojo loader will:
1. Load configured dependencies from CDNs
2. Resolve custom package paths
3. Execute the main require block with all dependencies

## Learning Outcomes

- Understanding AMD vs global script loading
- Configuring module paths and packages
- Integrating third-party libraries with AMD
- Creating modular JavaScript applications
- Managing asynchronous dependencies

## Comparison: Synchronous vs Asynchronous

The code includes commented-out synchronous loading attempts, demonstrating why asynchronous patterns are necessary:

```javascript
// ❌ Doesn't work - synchronous require
var awesomeness = require('ace/awesomeness');

// ✅ Works - asynchronous require
require(['ace/awesomeness'], function(awesomeness) {
    // Use module here
});
```

## Use Cases

This pattern is useful for:
- Single-page applications
- Complex JavaScript projects with many dependencies
- CDN-based library loading
- Lazy loading of modules
- Code splitting and optimization

## Historical Context

This project explores Dojo's AMD implementation, which was influential in the development of AMD as a standard. Modern projects typically use ES6 modules or CommonJS, but AMD remains important for:
- Legacy codebases
- Understanding module system evolution
- Certain build tool configurations
- Educational purposes
