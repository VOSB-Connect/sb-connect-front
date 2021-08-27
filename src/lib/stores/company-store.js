import { writable } from 'svelte/store';

const companies = writable([
{ id: 1, name: 'Company A', primaryContact: "John", cageCode: "32451", primaryNaics: "54110", psc: "12"},
{ id: 2, name: 'Company B', primaryContact: "Jacob", cageCode: "32452", primaryNaics: "54111", psc: "13"},
{ id: 3, name: 'Company C', primaryContact: "Jennifer", cageCode: "32453", primaryNaics: "54112", psc: "14"},
{ id: 4, name: 'Company E', primaryContact: "Malorie", cageCode: "32454", primaryNaics: "54113", psc: "15"},
])



const CompanyStore = {
    subscribe: companies.subscribe,
    setCompanies: companiesList => companies.set(companiesList),
    addCompany: companyData => companies.update(companiesData => [companyData, ...companiesData]),
    
};




export default CompanyStore;