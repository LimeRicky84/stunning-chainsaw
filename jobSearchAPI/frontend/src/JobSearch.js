import { getCurrencySymbol, extractFormData } from './utils.js';
import { jobTemplate } from './templates.js';

export class JobSearch {
    constructor(
        searchFormSelector,
        resultsContainerSelector,
    ) {
        //document is not defined error
        this.searchForm = document.querySelector(searchFormSelector);
        this.resultsContainer = document.querySelector(resultsContainerSelector);
    }

    setCountryCode() {
        this.countryCode = 'us';
        this.setCurrencyCode();

        fetch('http://ip-api.com/json')
        //fetch('http://ip-api.com/json/?fields=61439')
            .then(results => results.json())
            .then(results => {
                this.countryCode = results.countryCode.toLowerCase();
                this.setCurrencySymbol();
            });
    }

    setCurrencyCode() {
        this.currencySymbol = getCurrencySymbol(this.countryCode);
    }

    configureFormListener() {
        this.searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.resultsContainer.innerHTML = '';
            const  { search, location } = extractFormData(this.searchForm);

            fetch(`http://localhost:3001/?search=${search}&location=${location}&country=${this.countryCode}`)
                .then(response => response.json())
                .then(({ results }) => {
                    return results
                        .map(job => jobTemplate(job, this.currencySymbol))
                        .join('');
                })
                .then(jobs => this.resultsContainer.innerHTML = jobs);
        });
    }
}

