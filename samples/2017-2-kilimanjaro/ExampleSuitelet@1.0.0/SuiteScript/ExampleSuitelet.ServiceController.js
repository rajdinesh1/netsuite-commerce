// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
// Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.

define('ExampleSuitelet.ServiceController'
, [
    'Application'
  , 'ServiceController'
  , 'ExampleSuitelet.Model'
  ]
, function
  (
    Application
  , ServiceController
  , Model
  )
{
  'use strict';

  return ServiceController.extend({
    name: 'ExampleSuitelet.ServiceController'

  , get: function ()
    {
      return Model.get()
    }
  })
});