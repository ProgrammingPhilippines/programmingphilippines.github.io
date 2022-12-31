// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

type CardInfo = {
	name: string;
	position: string;
	description: string;
	image: string;
	flip: boolean;
};

type MemberInfo = {
	name: string;
	githubNodeId: string;
	githubUsername?: string;
};