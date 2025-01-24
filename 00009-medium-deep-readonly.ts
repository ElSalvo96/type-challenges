// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
	Expect<Equal<DeepReadonly<X1>, Expected1>>,
	Expect<Equal<DeepReadonly<X2>, Expected2>>
];

type X1 = {
	a: () => 22;
	b: string;
	c: {
		d: boolean;
		e: {
			g: {
				h: {
					i: true;
					j: 'string';
				};
				k: 'hello';
			};
			l: [
				'hi',
				{
					m: ['hey'];
				}
			];
		};
	};
};

type X2 = { a: string } | { b: number };

type Expected1 = {
	readonly a: () => 22;
	readonly b: string;
	readonly c: {
		readonly d: boolean;
		readonly e: {
			readonly g: {
				readonly h: {
					readonly i: true;
					readonly j: 'string';
				};
				readonly k: 'hello';
			};
			readonly l: readonly [
				'hi',
				{
					readonly m: readonly ['hey'];
				}
			];
		};
	};
};

type Expected2 = { readonly a: string } | { readonly b: number };

// ============= Your Code Here =============

type BeReadonlyButDeeply<T> = {
	readonly [K in keyof T]: DeepReadonly<T[K]>;
};
type DeepReadonly<T> = T extends Object
	? T extends Function
		? T
		: BeReadonlyButDeeply<T>
	: T;

// Painful... 😭
type t1 = DeepReadonly<{
	a: () => void;
}>;
type t2 = DeepReadonly<
	| {
			a: 'a';
	  }
	| {
			b: 2;
	  }
>;

type t3 = (() => void) extends object ? true : false;
type t4 = (() => void) extends Function ? true : false;
type t5 = Equal<Object, object> | Equal<Function, object>;
type t6 = Equal<Object, Function>;
type t7 = Function extends Object ? true : false; // true
type t8 = keyof (() => void) extends never ? true : false; // true
