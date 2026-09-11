import assert from 'node:assert/strict'; import {server} from '../src/index.mjs';
const response=await fetch('http://localhost:3001/api/services?query=passport'); const data=await response.json(); assert.equal(response.status,200); assert.equal(data.results[0].id,'passport'); server.close(); console.log('server API test passed');
