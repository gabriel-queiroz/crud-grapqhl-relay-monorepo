/**
 * @generated SignedSource<<c2fb02e13e9255363beff0c13133b348>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type testQuery$variables = {};
export type testQuery$data = {
  readonly users: {
    readonly totalPages: number | null;
  } | null;
};
export type testQuery = {
  response: testQuery$data;
  variables: testQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Users",
    "kind": "LinkedField",
    "name": "users",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalPages",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "testQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "testQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b345c764130e2232ec44d155e887e8ea",
    "id": null,
    "metadata": {},
    "name": "testQuery",
    "operationKind": "query",
    "text": "query testQuery {\n  users {\n    totalPages\n  }\n}\n"
  }
};
})();

(node as any).hash = "945c6a92bfccb0781af0a2821f36c0ef";

export default node;
