import { writable } from 'svelte/store';

const solicitations = writable([]);

const SolicitationStore = {
	subscribe: solicitations.subscribe,
	setSolicitations: (solicitationsList) => solicitations.set(solicitationsList),
	addSolicitations: (solicitation) => solicitations.update((solicitationsData) => [solicitation, ...solicitationsData])
};

export default SolicitationStore;
