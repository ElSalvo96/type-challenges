// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
	Expect<Equal<IsNever<never>, true>>,
	Expect<Equal<IsNever<never | string>, false>>,
	Expect<Equal<IsNever<''>, false>>,
	Expect<Equal<IsNever<undefined>, false>>,
	Expect<Equal<IsNever<null>, false>>,
	Expect<Equal<IsNever<[]>, false>>,
	Expect<Equal<IsNever<{}>, false>>
];

// ============= Your Code Here =============

// First try
type isEqual<V1, V2> = (<G>() => G extends V1 ? 1 : 2) extends <
	G
>() => G extends V2 ? 1 : 2
	? true
	: false;
// type IsNever<T> = isEqual<T, never> extends true ? true : false;

type t = IsNever<''>;

// Better way
type IsNever<T> = [T] extends [never] ? true : false;
