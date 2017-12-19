/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'src',

      // angular bundles
      '@angular/animations': "npm:@angular/animations/bundles/animations.umd.min.js",
      '@angular/animations/browser': "npm:@angular/animations/bundles/animations-browser.umd.min.js",
      //'@angular/material': "npm:@angular/material/bundles/material.umd.js",
      '@angular/cdk': "npm:@angular/cdk/bundles/cdk.umd.min.js",
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': "npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js",
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': "npm:rxjs",
      'angular-in-memory-web-api': "npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js",
      "systemjs-json-plugin": "npm:systemjs-plugin-json/json.js",
      "cldr-data": "npm:cldr-data",
      //'jszip': 'npm:jszip',//解决引用kendoGrid的时候jsZip404的问题1
      'tslib': "npm:tslib/tslib.js",
      // 'pako': 'npm:pako',
      'echarts-ng2': 'npm:echarts-ng2/bundles/echarts-ng2.umd.min.js',
      //kendo UI for Angular scopes
      //'@progress': "npm:@progress",
      //'@telerik': "npm:@telerik",

      //Js
      // 'jquery': "Scripts/jquery-1.10.2.min.js",
      // 'bootstrap': "Scripts/bootstrap.min.js",
      // 'appmin': "Content/LTE/app.min.js",
      // 'echart': "Content/echarts/echarts.min.js",
      // 'kendo': "Scripts/kendo.messages.zh-CN.min.js",
      // 'kendo.core.min': "Scripts/kendo.core.min.js"
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'//解决引用kendoGrid的时候jsZip404的问题2
      },
      jszip: {
        defaultExtension: 'js'
      },
      pako: {
        defaultExtension: 'js',
        main: './index.js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'npm:@progress/kendo-angular-buttons': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-charts': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-dateinputs': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-pdf-export': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-dropdowns': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-dialog': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-grid': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-inputs': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-intl': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-l10n': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-excel-export': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-layout': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-scrollview': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-sortable': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-popup': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-resize-sensor': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-angular-upload': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-charts': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-data-query': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-date-math': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-drawing': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-file-saver': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-intl': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-ooxml': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@progress/kendo-popup-common': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@telerik/kendo-draggable': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@telerik/kendo-dropdowns-common': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@telerik/kendo-intl': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      },

      'npm:@telerik/kendo-inputs-common': {
        main: './dist/npm/main.js',
        defaultExtension: 'js'
      }
    },
    meta: {
      "typescript": {
        "exports": "ts"
      },
      "*.json": {
        "loader": "systemjs-json-plugin"
      }
      // "Scripts/jquery-1.10.2.min.js": {
      //   format: "global"
      // },
      // "Scripts/bootstrap.min.js": {
      //   deps: ["Scripts/jquery-1.10.2.min.js"]
      // },
      // "Scripts/kendo.all.min.js": {
      //   deps: ["Scripts/jquery-1.10.2.min.js"],
      //   exports: "kendo"
      // },
      // "Scripts/kendo.culture.zh-CN.min.js": {
      //   format: "global",
      //   deps: ["Scripts/kendo.core.min.js"]
      // },
      // "Scripts/kendo.messages.zh-CN.min.js": {
      //   format: "global",
      //   deps: ["Scripts/kendo.culture.zh-CN.min.js"]
      // },
      // "Scripts/kendo.core.min.js": {
      //   deps: ["Scripts/kendo.all.min.js"]
      // },
      // "Content/LTE/app.min.js": {
      //   deps: ["Scripts/bootstrap.min.js"]
      // }
    }
  });
})(this);
