// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
	Expect<Equal<LengthOfString<''>, 0>>,
	Expect<Equal<LengthOfString<'kumiko'>, 6>>,
	Expect<Equal<LengthOfString<'reina'>, 5>>,
	Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
];

// ============= Your Code Here =============
type LengthOfString<
	S extends string,
	ArrOfS extends string[] = []
> = S extends `${infer C}${infer Rest}`
	? LengthOfString<Rest, [...ArrOfS, C]>
	: ArrOfS['length'];

type x = LengthOfString<'a'>;
