import { writable } from 'svelte/store';

const companies = writable([])

const CompanyStore = {
    subscribe: companies.subscribe,
    setCompanies: companiesList => companies.set(companiesList),
    addCompany: companyData => companies.update(companiesData => [companyData, ...companiesData]),
    
};

export default CompanyStore;