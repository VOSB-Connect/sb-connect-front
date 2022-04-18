import { writable } from 'svelte/store';

const solicitations = writable([]);
const userSolicitations = writable([]);

const SolicitationStore = {
	subscribe: solicitations.subscribe,
	setSolicitations: (solicitationsList) => solicitations.set(solicitationsList),
	addSolicitations: (solicitation) => solicitations.update((solicitationsData) => [solicitation, ...solicitationsData])
};

const UserSolicitationStore = {
	subscribe: userSolicitations.subscribe,
	setSolicitations: (items) => userSolicitations.set(items)
}

export { SolicitationStore, UserSolicitationStore };
