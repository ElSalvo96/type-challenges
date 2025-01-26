// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
	Expect<Equal<IsAny<any>, true>>,

	Expect<Equal<IsAny<undefined>, false>>,
	Expect<Equal<IsAny<unknown>, false>>,
	Expect<Equal<IsAny<never>, false>>,
	Expect<Equal<IsAny<string>, false>>,
	Expect<Equal<IsAny<'string'>, false>>,
	Expect<Equal<IsAny<false>, false>>,
	Expect<Equal<IsAny<any[]>, false>>,
	Expect<Equal<IsAny<string[]>, false>>
];

// ============= Your Code Here =============

// First try
type IsEqual<V1, V2> = (<G>() => G extends V1 ? 1 : 2) extends <
	G
>() => G extends V2 ? 1 : 2
	? true
	: false;

type IsAny<T> = IsEqual<T, any>;

// Better way
// type IsAny<T> = 0 extends 1 & T ? true : false;
