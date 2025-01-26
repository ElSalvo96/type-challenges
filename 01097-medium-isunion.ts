// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
	Expect<Equal<IsUnion<string>, false>>,
	Expect<Equal<IsUnion<string | number>, true>>,
	Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
	Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
	Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
	Expect<Equal<IsUnion<{ a: string | number }>, false>>,
	Expect<Equal<IsUnion<[string | number]>, false>>,
	// Cases where T resolves to a non-union type.
	Expect<Equal<IsUnion<string | never>, false>>,
	Expect<Equal<IsUnion<string | unknown>, false>>,
	Expect<Equal<IsUnion<string | any>, false>>,
	Expect<Equal<IsUnion<string | 'a'>, false>>,
	Expect<Equal<IsUnion<never>, false>>
];

// ============= Your Code Here =============

type IsUnion<T> = NonDistributiveArray<T> extends DistributiveArray<T>
	? false
	: true;

// Breakdown the logic
type DistributiveArray<T> = T extends any ? T[] : never;
type NonDistributiveArray<T> = [T] extends [never] ? never : T[];

type t = DistributiveArray<string | number>;
type u = NonDistributiveArray<string | number>;

type res = (string | number)[] extends string[] | number[] ? true : false; // A mixed array of types can not be an array of only one type
type res2 = string[] | number[] extends (string | number)[] ? true : false; // An array of only one type can be an array of mixed types
